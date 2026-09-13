"use server"

import type { Level } from "@/content/types"

import { prisma } from "@/lib/db"
import { awardXp, EXAM_PASS, PRACTICE_PASS } from "@/lib/progress"
import { getSession } from "@/lib/session"
import { scoreAttempt, type QuizQuestion } from "@/lib/quiz"
import type { Prisma } from "@prisma/client"

/** Save practice results for a lesson. */
export async function saveLessonPractice(lessonId: string, questions: QuizQuestion[], responses: Record<string, unknown>) {
  const session = await getSession()
  if (!session) return { ok: false as const, reason: "unauthenticated" }
  const userId = session.user.id

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

  return { ok: true as const, score, completed }
}

/** Submit a unit exam; on pass, unlock review cards. */
export async function submitUnitExam(unitId: string, questions: QuizQuestion[], responses: Record<string, unknown>) {
  const session = await getSession()
  if (!session) return { ok: false as const, reason: "unauthenticated" }
  const userId = session.user.id

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

  return { ok: true as const, score, passed }
}

/** Submit a level exam. */
export async function submitLevelExam(level: Level, questions: QuizQuestion[], responses: Record<string, unknown>) {
  const session = await getSession()
  if (!session) return { ok: false as const, reason: "unauthenticated" }
  const userId = session.user.id

  const { score, correctCount } = scoreAttempt(questions, responses)
  const passed = score >= EXAM_PASS

  await prisma.examAttempt.create({ data: { userId, levelExam: level, score, responses: responses as Prisma.InputJsonValue, passed } })
  if (passed) await awardXp(userId, correctCount * 3, "exam")

  return { ok: true as const, score, passed }
}

/** Create SRS cards for a unit's vocab, kanji and grammar. */
async function createReviewCards(userId: string, unitId: string) {
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

export async function updateSettings(input: {
  scriptMode?: "FURIGANA" | "HIRAGANA" | "ROMAJI"
  furiganaMode?: "ALWAYS" | "HOVER" | "OFF"
  audioOn?: boolean
  dailyGoalXp?: number
  freeNav?: boolean
}) {
  const session = await getSession()
  if (!session) return { ok: false as const, reason: "unauthenticated" }
  await prisma.userSettings.upsert({
    where: { userId: session.user.id },
    update: input,
    create: { userId: session.user.id, ...input },
  })
  return { ok: true as const }
}
