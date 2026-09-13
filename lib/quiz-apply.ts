import type { Level } from "@/content/types"

import { prisma } from "@/lib/db"
import { awardXp, EXAM_PASS, PRACTICE_PASS } from "@/lib/progress"
import { gradeQuestion, scoreAttempt, type QuizQuestion } from "@/lib/quiz"
import { nextDue, buildReviewSession } from "@/lib/srs"
import type { Prisma } from "@prisma/client"

// Persistence core for quiz results. Both the server actions (native quizzes)
// and the quiz-renderer results webhook route call these, so external attempts
// earn exactly the same credit as native ones.

/** Apply lesson practice results for a user (grades and upserts progress). */
export async function applyLessonPractice(
  userId: string,
  lessonId: string,
  questions: QuizQuestion[],
  responses: Record<string, unknown>,
) {
  const { score, correctCount } = scoreAttempt(questions, responses)
  const existing = await prisma.lessonProgress.findUnique({ where: { userId_lessonId: { userId, lessonId } } })

  const bestScore = Math.max(existing?.bestScore ?? 0, score)
  const passed = score >= PRACTICE_PASS
  const wasCompleted = existing?.status === "COMPLETED"
  // A failed retake must not revoke an earlier pass.
  const completed = passed || wasCompleted

  await prisma.lessonProgress.upsert({
    where: { userId_lessonId: { userId, lessonId } },
    create: {
      userId,
      lessonId,
      status: completed ? "COMPLETED" : "IN_PROGRESS",
      bestScore,
      attempts: 1,
      completedAt: completed ? new Date() : null,
    },
    update: {
      status: completed ? "COMPLETED" : "IN_PROGRESS",
      bestScore,
      attempts: (existing?.attempts ?? 0) + 1,
      completedAt: completed ? (existing?.completedAt ?? new Date()) : null,
    },
  })

  if (passed && !wasCompleted) {
    await awardXp(userId, correctCount * 2, "practice")
  }

  return { score, completed }
}

/** Apply a unit exam result; on pass, unlock review cards. */
export async function applyUnitExam(
  userId: string,
  unitId: string,
  questions: QuizQuestion[],
  responses: Record<string, unknown>,
) {
  const { score, correctCount } = scoreAttempt(questions, responses)
  const passed = score >= EXAM_PASS
  const priorPassCount = await prisma.examAttempt.count({ where: { userId, unitId, passed: true } })

  await prisma.examAttempt.create({
    data: { userId, unitId, score, responses: responses as Prisma.InputJsonValue, passed },
  })

  if (passed) {
    await createReviewCards(userId, unitId)
    if (priorPassCount === 0) {
      await awardXp(userId, correctCount * 3, "exam")
    }
  }

  return { score, passed }
}

/** Apply a level exam result. */
export async function applyLevelExam(
  userId: string,
  level: Level,
  questions: QuizQuestion[],
  responses: Record<string, unknown>,
) {
  const { score, correctCount } = scoreAttempt(questions, responses)
  const passed = score >= EXAM_PASS

  await prisma.examAttempt.create({ data: { userId, levelExam: level, score, responses: responses as Prisma.InputJsonValue, passed } })
  if (passed) await awardXp(userId, correctCount * 3, "exam")

  return { score, passed }
}

/**
 * Apply an external auto-graded review: each response is keyed by SRS card id.
 * Correct → Good (grade 2), wrong → Again (grade 0), +1 XP per correct — the
 * same side effects as the native gradeReviewCard action. Cards that are no
 * longer in the due set (graded natively in between, unbuildable) are skipped.
 */
export async function applyReviewResult(
  userId: string,
  responses: Record<string, unknown>,
) {
  const session = await buildReviewSession(userId, 500)
  const payloadByCard = new Map(session.map((c) => [c.cardId, c.question]))

  let scheduled = 0
  let correct = 0
  for (const [cardId, response] of Object.entries(responses)) {
    const question = payloadByCard.get(cardId)
    if (!question) continue
    const card = await prisma.srsCard.findUnique({ where: { id: cardId } })
    if (!card || card.userId !== userId) continue

    const isCorrect = gradeQuestion(question, response)
    const grade = isCorrect ? 2 : 0
    const { due, reps, lapses } = nextDue(card.reps, card.lapses, grade)
    await prisma.srsCard.update({
      where: { id: cardId },
      data: { due, reps, lapses, lastGrade: grade },
    })
    scheduled++
    if (isCorrect) correct++
  }

  if (correct > 0) await awardXp(userId, correct, "review")
  return { scheduled, correct }
}

/** Create SRS cards for a unit's vocab, kanji and grammar. */
export async function createReviewCards(userId: string, unitId: string) {
  const now = new Date()
  const due = new Date(now.getTime() + 10 * 60 * 1000)

  const [vocab, kanji, grammarItems] = await Promise.all([
    prisma.unitVocab.findMany({ where: { unitId }, select: { wordId: true } }),
    prisma.kanji.findMany({ where: { unitId }, select: { char: true } }),
    prisma.quizItem.findMany({
      where: { unitId, scope: "LESSON_PRACTICE", type: { in: ["fill-blank", "single"] } },
      orderBy: { order: "asc" },
      select: { id: true, lessonId: true },
    }),
  ])

  // one grammar card per lesson
  const seenLessons = new Set<string>()
  const grammarCards: { userId: string; cardType: "GRAMMAR_CLOZE"; refId: string; due: Date }[] = []
  for (const item of grammarItems) {
    if (item.lessonId && !seenLessons.has(item.lessonId)) {
      seenLessons.add(item.lessonId)
      grammarCards.push({ userId, cardType: "GRAMMAR_CLOZE", refId: item.id, due })
    }
  }

  const data = [
    ...vocab.flatMap((v) => [
      { userId, cardType: "VOCAB_RECOG" as const, refId: v.wordId, due },
      { userId, cardType: "VOCAB_RECALL" as const, refId: v.wordId, due },
    ]),
    ...kanji.flatMap((k) => [
      { userId, cardType: "KANJI_MEANING" as const, refId: k.char, due },
      { userId, cardType: "KANJI_READING" as const, refId: k.char, due },
    ]),
    ...grammarCards,
  ]

  for (const card of data) {
    await prisma.srsCard.upsert({
      where: { userId_cardType_refId: { userId, cardType: card.cardType, refId: card.refId } },
      create: card,
      update: { due, suspended: false },
    })
  }
}
