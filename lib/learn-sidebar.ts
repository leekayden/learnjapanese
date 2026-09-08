import type { Level } from "@/content/types"

import { prisma } from "@/lib/db"
import { getLevelOverview, isUnitUnlocked } from "@/lib/progress"
import { getCurrentUser } from "@/lib/session"

const VALID: Level[] = ["N5", "N4", "N3", "N2", "N1"]

export type SidebarData = {
  level: string
  units: {
    id: string
    level: string
    order: number
    title: string
    lessons: { id: string; title: string; grammarLabel: string; order: number }[]
    unlocked: boolean
    passed: boolean
  }[]
  completedLessons: string[]
  currentUnitId?: string
  currentLessonId?: string
}

export async function getSidebarData(
  level: string,
  opts?: { unitId?: string; lessonId?: string }
): Promise<SidebarData | null> {
  const lvl = level.toUpperCase() as Level
  if (!VALID.includes(lvl)) return null

  const user = await getCurrentUser()
  const overview = await getLevelOverview(lvl, user?.id ?? null)

  const order = VALID.indexOf(lvl)
  const prev = order > 0 ? VALID[order - 1] : null
  const prevExamPassed = prev
    ? user
      ? !!(await prisma.examAttempt.findFirst({ where: { userId: user.id, levelExam: prev, passed: true } }))
      : true
    : true

  return {
    level: lvl,
    units: overview.units.map((unit, i) => ({
      id: unit.id,
      level: lvl,
      order: unit.order,
      title: unit.title,
      lessons: unit.lessons.map((l) => ({
        id: l.id,
        title: l.title,
        grammarLabel: l.grammarLabel,
        order: l.order,
      })),
      unlocked: isUnitUnlocked(i, lvl, overview, prevExamPassed),
      passed: overview.passedUnits.has(unit.id),
    })),
    completedLessons: [...overview.completedLessons],
    currentUnitId: opts?.unitId,
    currentLessonId: opts?.lessonId,
  }
}
