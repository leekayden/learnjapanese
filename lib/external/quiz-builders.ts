import { prisma } from "@/lib/db"
import type { Level } from "@/content/types"
import type { QuizJson, QuizQuestion } from "@/lib/quiz"
import { toQuizRendererFormat } from "@/lib/quiz-export"
import { composeLevelExam } from "@/lib/exam"
import { buildReviewSession } from "@/lib/srs"

// Builders for quizzes pushed to quiz-renderer. External ids are scoped so the
// results webhook can map an attempt back to exactly one persistence target:
//   lj:lesson:{lessonId}   → LessonProgress upsert
//   lj:unit-exam:{unitId}  → ExamAttempt (unitId)
//   lj:level-exam:{level}  → ExamAttempt (levelExam)
//   lj:review:{userId}     → SRS card scheduling (auto-graded review session)

export type ExternalQuizKind = "lesson" | "unit-exam" | "level-exam" | "review"

const LEVELS: Level[] = ["N5", "N4", "N3", "N2", "N1"]

export function externalQuizId(kind: ExternalQuizKind, refId: string): string {
  return `lj:${kind}:${refId}`
}

export function parseExternalQuizId(
  id: string
): { kind: ExternalQuizKind; refId: string } | null {
  const match = /^lj:(lesson|unit-exam|level-exam|review):(.+)$/.exec(id)
  if (!match) return null
  return { kind: match[1] as ExternalQuizKind, refId: match[2]! }
}

function toQuizJson(
  id: string,
  title: string,
  description: string | undefined,
  coverNotes: string[],
  questions: QuizQuestion[],
  shuffleQuestions: boolean
): QuizJson {
  return {
    id,
    title,
    description,
    coverNotes,
    feedbackMode: "immediate",
    shuffleQuestions,
    shuffleOptions: true,
    questions: questions.map(toQuizRendererFormat),
  }
}

/** Where to send the user back to after the external attempt (the page the
 * handoff was launched from); `?qr=1` makes that page show the applied result. */
export async function returnUrlFor(kind: ExternalQuizKind, refId: string): Promise<string | undefined> {
  const origin = (
    process.env.NEXT_PUBLIC_BETTER_AUTH_URL ??
    process.env.BETTER_AUTH_URL ??
    "http://localhost:3000"
  ).replace(/\/$/, "")
  if (kind === "lesson") return `${origin}/lesson/${refId}/practice?qr=1`
  if (kind === "review") return `${origin}/review?qr=1`
  if (kind === "unit-exam") {
    const unit = await prisma.unit.findUnique({ where: { id: refId }, select: { level: true } })
    if (!unit) return undefined
    return `${origin}/learn/${unit.level.toLowerCase()}/${refId}/exam?qr=1`
  }
  return `${origin}/learn/${refId.toLowerCase()}/exam?qr=1`
}

export async function buildExternalQuiz(
  kind: ExternalQuizKind,
  refId: string
): Promise<QuizJson | null> {
  if (kind === "review") return buildExternalReviewQuiz(refId)

  if (kind === "lesson") {
    const lesson = await prisma.lesson.findUnique({
      where: { id: refId },
      include: { unit: { select: { level: true, order: true, title: true } }, examples: true },
    })
    if (!lesson) return null
    const items = await prisma.quizItem.findMany({
      where: { lessonId: refId, scope: "LESSON_PRACTICE" },
      orderBy: { order: "asc" },
    })
    if (!items.length) return null
    return toQuizJson(
      externalQuizId("lesson", refId),
      `${lesson.unit.level} U${lesson.unit.order} L${lesson.order} — ${lesson.grammarLabel}`,
      lesson.title,
      [
        lesson.summary,
        ...(lesson.examples.map((e) => `**${e.jp}** — ${e.en}`) ?? []),
      ].filter((n): n is string => !!n),
      items.map((i) => i.payload as QuizQuestion),
      false
    )
  }

  if (kind === "unit-exam") {
    const unit = await prisma.unit.findUnique({ where: { id: refId } })
    if (!unit) return null
    const items = await prisma.quizItem.findMany({
      where: { unitId: refId, scope: "UNIT_EXAM" },
      orderBy: { order: "asc" },
    })
    if (!items.length) return null
    return toQuizJson(
      externalQuizId("unit-exam", refId),
      `${unit.level} Unit ${unit.order} exam — ${unit.title}`,
      `Pass at 75% to unlock the next unit.`,
      [],
      items.map((i) => i.payload as QuizQuestion),
      true
    )
  }

  // level-exam: composeLevelExam is deterministic, so the results callback can
  // recompose the identical question set for re-grading.
  const level = refId.toUpperCase() as Level
  if (!LEVELS.includes(level)) return null
  const questions = await composeLevelExam(level)
  if (!questions.length) return null
  return toQuizJson(
    externalQuizId("level-exam", level),
    `${level} level exam`,
    `Covers every unit in ${level}. Pass at 75% to unlock the next level.`,
    [],
    questions,
    false
  )
}

const REVIEW_LIMIT = 20

/**
 * The user's due SRS cards as a quiz. Question ids ARE the SRS card row ids,
 * so the results callback can schedule each card directly. Re-grading at
 * callback time rebuilds the same payloads — distractors are seeded by
 * card ref, and cards stay due until graded, so pushed cards are still
 * present (and unanswered) when the webhook arrives.
 */
export async function buildExternalReviewQuiz(userId: string): Promise<QuizJson | null> {
  const cards = await buildReviewSession(userId, REVIEW_LIMIT)
  if (!cards.length) return null
  return toQuizJson(
    externalQuizId("review", userId),
    "SRS Review",
    "Spaced-repetition review, auto-graded: a correct answer schedules the card as Good, a wrong one as Again.",
    [
      "Answer each card — grading is automatic here.",
      "Correct → the card comes back later (Good). Wrong → the card comes back soon (Again).",
    ],
    cards.map((c) => ({ ...c.question, id: c.cardId })),
    false
  )
}
