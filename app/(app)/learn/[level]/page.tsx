import Link from "next/link"
import { notFound } from "next/navigation"
import { CheckCircle2, Circle, Lock } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EXAM_PASS, getLevelOverview, isUnitUnlocked } from "@/lib/progress"
import { getCurrentUser } from "@/lib/session"
import { prisma } from "@/lib/db"
import type { Level } from "@/content/types"
import { cn } from "@/lib/utils"

export const metadata = { title: "Level" }

const VALID: Level[] = ["N5", "N4", "N3", "N2", "N1"]

export default async function LevelPage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params
  const lvl = level.toUpperCase() as Level
  if (!VALID.includes(lvl)) notFound()

  const user = await getCurrentUser()
  const overview = await getLevelOverview(lvl, user?.id ?? null)

  // previous level exam state for gating
  const order = VALID.indexOf(lvl)
  const prev = order > 0 ? VALID[order - 1] : null
  const prevExamPassed = prev
    ? user
      ? !!(await prisma.examAttempt.findFirst({ where: { userId: user.id, levelExam: prev, passed: true } }))
      : true
    : true

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{lvl} — units</h1>
        <p className="text-muted-foreground">
          Pass each unit exam with {EXAM_PASS}% to unlock the next unit.
        </p>
      </div>

      {overview.units.length === 0 && (
        <p className="text-muted-foreground">Content for {lvl} is being written — check back soon.</p>
      )}

      <div className="grid gap-4">
        {overview.units.map((unit, i) => {
          const unlocked = isUnitUnlocked(i, lvl, overview, prevExamPassed)
          const passed = overview.passedUnits.has(unit.id)
          const doneCount = unit.lessons.filter((ls) => overview.completedLessons.has(ls.id)).length
          return (
            <Card key={unit.id} className={cn(!unlocked && "opacity-60")}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-lg">
                    <span className="mr-2 text-muted-foreground">Unit {unit.order}</span>
                    {unit.title}
                  </CardTitle>
                  {passed ? (
                    <Badge className="bg-green-600 text-white">exam passed</Badge>
                  ) : unlocked ? (
                    <Badge variant="outline">unlocked</Badge>
                  ) : (
                    <Lock className="size-4 text-muted-foreground" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{unit.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  {unit.lessons.map((ls) => {
                    const done = overview.completedLessons.has(ls.id)
                    return (
                      <span key={ls.id} className="inline-flex items-center gap-1">
                        {done ? (
                          <CheckCircle2 className="size-3.5 text-green-600" />
                        ) : (
                          <Circle className="size-3.5" />
                        )}
                        {ls.grammarLabel}
                      </span>
                    )
                  })}
                </div>
                <p className="mb-3 text-xs text-muted-foreground">
                  {doneCount}/{unit.lessons.length} lessons complete · {unit._count.vocab} vocab ·{" "}
                  {unit._count.kanji} kanji
                </p>
                {unlocked ? (
                  <Link
                    href={`/learn/${lvl.toLowerCase()}/${unit.id}`}
                    className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {doneCount === 0 && unit.order === 1 ? "Start unit" : "Open unit"} →
                  </Link>
                ) : (
                  <span className="text-sm text-muted-foreground">Complete the previous unit exam first</span>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
