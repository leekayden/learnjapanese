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
