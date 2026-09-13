import { prisma } from "@/lib/db"
import { verifyResultWebhook } from "@/lib/external/quiz-renderer"
import {
  parseExternalQuizId,
} from "@/lib/external/quiz-builders"
import {
  applyLessonPractice,
  applyLevelExam,
  applyReviewResult,
  applyUnitExam,
} from "@/lib/quiz-apply"
import { scoreAttempt, type QuizQuestion } from "@/lib/quiz"
import type { Level } from "@/content/types"

// Results webhook from quiz-renderer. The payload is HMAC-signed by
// quiz-renderer; we re-grade the responses locally against our own question
// payloads before applying any credit, so a tampered score grants nothing.

const LEVELS: Level[] = ["N5", "N4", "N3", "N2", "N1"]

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await verifyResultWebhook(request)
  } catch (err) {
    return Response.json({ error: (err as Error).message }, { status: 401 })
  }

  const attemptId = typeof body.attemptId === "string" ? body.attemptId : null
  const externalUserId = typeof body.externalUserId === "string" ? body.externalUserId : null
  const externalQuizId = typeof body.externalQuizId === "string" ? body.externalQuizId : null
  const responses = (body.responses ?? {}) as Record<string, unknown>

  if (!attemptId || !externalUserId || !externalQuizId) {
    return Response.json({ error: "Missing required fields" }, { status: 400 })
  }

  // Idempotency: a redelivered webhook must not apply credit twice.
  const existing = await prisma.externalQuizResult.findUnique({ where: { attemptId } })
  if (existing) {
    return Response.json({ ok: true, duplicate: true, score: existing.score })
  }

  const parsed = parseExternalQuizId(externalQuizId)
  if (!parsed) {
    return Response.json({ error: `Unknown externalQuizId: ${externalQuizId}` }, { status: 400 })
  }
  const { kind, refId } = parsed

  // Review sessions are per-user: only the owner's attempt may schedule cards.
  if (kind === "review") {
    if (externalUserId !== refId) {
      return Response.json({ error: "Attempt does not belong to this review deck" }, { status: 403 })
    }
    const user = await prisma.user.findUnique({ where: { id: externalUserId }, select: { id: true } })
    if (!user) return Response.json({ error: "Unknown user" }, { status: 400 })

    const applied = await applyReviewResult(externalUserId, responses)
    const score = applied.scheduled ? Math.round((applied.correct / applied.scheduled) * 100) : 0
    await prisma.externalQuizResult.create({
      data: {
        userId: externalUserId,
        attemptId,
        externalQuizId,
        score,
        responses: responses as object,
      },
    })
    return Response.json({ ok: true, score, ...applied })
  }

  // Resolve the exact question set this quiz was built from.
  let questions: QuizQuestion[]
  if (kind === "lesson") {
    const items = await prisma.quizItem.findMany({
      where: { lessonId: refId, scope: "LESSON_PRACTICE" },
      orderBy: { order: "asc" },
    })
    questions = items.map((i) => i.payload as QuizQuestion)
  } else if (kind === "unit-exam") {
    const items = await prisma.quizItem.findMany({
      where: { unitId: refId, scope: "UNIT_EXAM" },
      orderBy: { order: "asc" },
    })
    questions = items.map((i) => i.payload as QuizQuestion)
  } else {
    const level = refId.toUpperCase() as Level
    if (!LEVELS.includes(level)) {
      return Response.json({ error: `Unknown level: ${refId}` }, { status: 400 })
    }
    questions = await import("@/lib/exam").then((m) => m.composeLevelExam(level))
  }

  if (!questions.length) {
    return Response.json({ error: "Quiz has no questions anymore" }, { status: 409 })
  }

  // Re-grade locally — the webhook score is advisory only.
  const { score } = scoreAttempt(questions, responses)

  const user = await prisma.user.findUnique({ where: { id: externalUserId }, select: { id: true } })
  if (!user) {
    return Response.json({ error: "Unknown user" }, { status: 400 })
  }

  try {
    if (kind === "lesson") {
      await applyLessonPractice(externalUserId, refId, questions, responses)
    } else if (kind === "unit-exam") {
      await applyUnitExam(externalUserId, refId, questions, responses)
    } else {
      await applyLevelExam(externalUserId, refId.toUpperCase() as Level, questions, responses)
    }
  } catch (err) {
    console.error("Failed to apply external quiz result:", err)
    return Response.json({ error: "Failed to apply result" }, { status: 500 })
  }

  await prisma.externalQuizResult.create({
    data: {
      userId: externalUserId,
      attemptId,
      externalQuizId,
      score,
      responses: responses as object,
    },
  })

  return Response.json({ ok: true, score })
}
