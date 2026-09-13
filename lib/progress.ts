import { prisma } from "@/lib/db"
import { localDay } from "@/lib/xp"

export const EXAM_PASS = 75
export const PRACTICE_PASS = 60

export type UnitStatus = "LOCKED" | "UNLOCKED" | "EXAM_READY" | "COMPLETED"

export async function awardXp(userId: string, amount: number, source: string) {
  if (amount <= 0) return
  const day = localDay()
  await prisma.xpEvent.create({ data: { userId, amount, source, day } })

  const streak = await prisma.streak.findUnique({ where: { userId } })
  if (!streak) {
    await prisma.streak.create({ data: { userId, current: 1, longest: 1, lastStudyDate: day } })
    return
  }
  if (streak.lastStudyDate === day) return

  const yesterday = localDay(new Date(Date.now() - 24 * 60 * 60 * 1000))
  const current = streak.lastStudyDate === yesterday ? streak.current + 1 : 1
  await prisma.streak.update({
    where: { userId },
    data: { current, longest: Math.max(current, streak.longest), lastStudyDate: day },
  })
}

/** Ordered units for a level with the user's progress and unlock state. */
export async function getLevelOverview(level: "N5" | "N4" | "N3" | "N2" | "N1", userId: string | null) {
  const units = await prisma.unit.findMany({
    where: { level },
    orderBy: { order: "asc" },
    include: {
      lessons: { orderBy: { order: "asc" }, select: { id: true, title: true, grammarLabel: true, order: true } },
      _count: { select: { vocab: true, kanji: true } },
    },
  })

  if (!userId) return { units, completedLessons: new Set<string>(), passedUnits: new Set<string>(), freeNav: false, levelExamPassed: false }

  const [progress, settings, examAttempts, levelExam] = await Promise.all([
    prisma.lessonProgress.findMany({ where: { userId, lesson: { unit: { level } } }, select: { lessonId: true, status: true } }),
    prisma.userSettings.findUnique({ where: { userId } }),
    prisma.examAttempt.findMany({ where: { userId, unit: { level }, passed: true }, select: { unitId: true } }),
    prisma.examAttempt.findFirst({ where: { userId, levelExam: level, passed: true }, orderBy: { createdAt: "desc" } }),
  ])

  return {
    units,
    completedLessons: new Set(progress.filter((p) => p.status === "COMPLETED").map((p) => p.lessonId)),
    passedUnits: new Set(examAttempts.map((a) => a.unitId).filter((id): id is string => !!id)),
    freeNav: settings?.freeNav ?? false,
    levelExamPassed: !!levelExam,
  }
}

export function isUnitUnlocked(
  index: number,
  level: "N5" | "N4" | "N3" | "N2" | "N1",
  info: { freeNav: boolean; passedUnits: Set<string>; levelExamPassed?: boolean; units: { id: string }[] },
  previousLevelExamPassed = true,
): boolean {
  if (info.freeNav) return true
  if (!previousLevelExamPassed) return false
  if (level === "N5" && index === 0) return true
  const prev = info.units[index - 1]
  return prev ? info.passedUnits.has(prev.id) : false
}

export type NextLesson = {
  id: string
  title: string
  grammarLabel: string
  order: number
  unitId: string
  unitTitle: string
  unitOrder: number
  level: "N5" | "N4" | "N3" | "N2" | "N1"
  practiceDone: boolean
}

const LEVEL_ORDER = ["N5", "N4", "N3", "N2", "N1"] as const

/** Mark a lesson as started the first time the learner opens it (never downgrade). */
export async function ensureLessonStarted(userId: string, lessonId: string) {
  const existing = await prisma.lessonProgress.findUnique({
    where: { userId_lessonId: { userId, lessonId } },
    select: { id: true },
  })
  if (existing) return
  await prisma.lessonProgress.create({
    data: { userId, lessonId, status: "IN_PROGRESS" },
  })
}

/** Practice record for a lesson: completion status, best score and attempt count. */
export async function getLessonPracticeSummary(userId: string, lessonId: string) {
  const row = await prisma.lessonProgress.findUnique({
    where: { userId_lessonId: { userId, lessonId } },
    select: { status: true, bestScore: true, attempts: true },
  })
  return {
    status: row?.status ?? null,
    bestScore: row?.bestScore ?? 0,
    attempts: row?.attempts ?? 0,
  }
}

/**
 * Best "continue" target: most recently touched in-progress lesson,
 * otherwise the first incomplete lesson in the earliest unlocked unit.
 */
export async function getNextLesson(userId: string): Promise<NextLesson | null> {
  const inProgress = await prisma.lessonProgress.findFirst({
    where: { userId, status: "IN_PROGRESS" },
    orderBy: { updatedAt: "desc" },
    include: {
      lesson: {
        select: {
          id: true,
          title: true,
          grammarLabel: true,
          order: true,
          unitId: true,
          unit: { select: { id: true, title: true, order: true, level: true } },
        },
      },
    },
  })
  if (inProgress) {
    const l = inProgress.lesson
    return {
      id: l.id,
      title: l.title,
      grammarLabel: l.grammarLabel,
      order: l.order,
      unitId: l.unitId,
      unitTitle: l.unit.title,
      unitOrder: l.unit.order,
      level: l.unit.level,
      practiceDone: false,
    }
  }

  for (const level of LEVEL_ORDER) {
    const overview = await getLevelOverview(level, userId)
    if (!overview.units.length) continue

    const prevLevel = LEVEL_ORDER[LEVEL_ORDER.indexOf(level) - 1]
    const prevExamPassed = prevLevel
      ? !!(await prisma.examAttempt.findFirst({
          where: { userId, levelExam: prevLevel, passed: true },
          select: { id: true },
        }))
      : true

    for (let i = 0; i < overview.units.length; i++) {
      const unit = overview.units[i]!
      if (!isUnitUnlocked(i, level, overview, prevExamPassed)) continue
      const next = unit.lessons.find((ls) => !overview.completedLessons.has(ls.id))
      if (next) {
        return {
          id: next.id,
          title: next.title,
          grammarLabel: next.grammarLabel,
          order: next.order,
          unitId: unit.id,
          unitTitle: unit.title,
          unitOrder: unit.order,
          level,
          practiceDone: false,
        }
      }
    }
  }

  return null
}

/** Next lesson in the same unit after the given lesson, or null. */
export async function getAdjacentLessons(lessonId: string) {
  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    select: { unitId: true, order: true },
  })
  if (!lesson) return { prev: null, next: null }

  const [prev, next] = await Promise.all([
    prisma.lesson.findFirst({
      where: { unitId: lesson.unitId, order: lesson.order - 1 },
      select: { id: true, title: true, grammarLabel: true },
    }),
    prisma.lesson.findFirst({
      where: { unitId: lesson.unitId, order: lesson.order + 1 },
      select: { id: true, title: true, grammarLabel: true },
    }),
  ])
  return { prev, next }
}
