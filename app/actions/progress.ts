"use server"

import type { Level } from "@/content/types"

import { prisma } from "@/lib/db"
import { getSession } from "@/lib/session"
import type { QuizQuestion } from "@/lib/quiz"
import {
  applyLessonPractice,
  applyLevelExam,
  applyUnitExam,
} from "@/lib/quiz-apply"

/** Save practice results for a lesson. */
export async function saveLessonPractice(lessonId: string, questions: QuizQuestion[], responses: Record<string, unknown>) {
  const session = await getSession()
  if (!session) return { ok: false as const, reason: "unauthenticated" }

  const { score, completed } = await applyLessonPractice(session.user.id, lessonId, questions, responses)
  return { ok: true as const, score, completed }
}

/** Submit a unit exam; on pass, unlock review cards. */
export async function submitUnitExam(unitId: string, questions: QuizQuestion[], responses: Record<string, unknown>) {
  const session = await getSession()
  if (!session) return { ok: false as const, reason: "unauthenticated" }

  const { score, passed } = await applyUnitExam(session.user.id, unitId, questions, responses)
  return { ok: true as const, score, passed }
}

/** Submit a level exam. */
export async function submitLevelExam(level: Level, questions: QuizQuestion[], responses: Record<string, unknown>) {
  const session = await getSession()
  if (!session) return { ok: false as const, reason: "unauthenticated" }

  const { score, passed } = await applyLevelExam(session.user.id, level, questions, responses)
  return { ok: true as const, score, passed }
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
