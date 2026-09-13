import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle2, Circle, GraduationCap, Lock } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { EXAM_PASS, getLevelOverview, isUnitUnlocked } from "@/lib/progress"
import { getCurrentUser } from "@/lib/session"
import { prisma } from "@/lib/db"
import type { Level } from "@/content/types"
import { cn } from "@/lib/utils"
import { FreeNavToggle } from "@/components/free-nav-toggle"
import { PageCrumbs } from "@/components/page-crumbs"

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

  const unitTotal = overview.units.length
  const passedCount = overview.units.filter((u) => overview.passedUnits.has(u.id)).length
  const allUnitsPassed = unitTotal > 0 && passedCount === unitTotal
  const levelExamPassed = overview.levelExamPassed
  const nextLevel = order < VALID.length - 1 ? VALID[order + 1] : null

  // first unlocked unit that is not fully passed — "you are here"
  let currentUnitId: string | null = null
  for (let i = 0; i < overview.units.length; i++) {
    const u = overview.units[i]!
    if (isUnitUnlocked(i, lvl, overview, prevExamPassed) && !overview.passedUnits.has(u.id)) {
      currentUnitId = u.id
      break
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <PageCrumbs
          items={[
            { label: "Learn", href: "/learn" },
            { label: lvl },
          ]}
        />
        <h1 className="text-2xl font-bold">{lvl} course</h1>
        <p className="text-muted-foreground">
          Pass each unit exam with {EXAM_PASS}% to unlock the next unit.
          {unitTotal > 0 && ` ${passedCount}/${unitTotal} units passed.`}
        </p>
      </div>

      {unitTotal > 0 && (!overview.freeNav || passedCount < unitTotal) && (
        <FreeNavToggle freeNav={overview.freeNav} />
      )}

      {overview.units.length === 0 && (
        <p className="text-muted-foreground">Content for {lvl} is being written — check back soon.</p>
      )}

      {/* Level exam call-to-action */}
      {unitTotal > 0 && (
        <Card
          className={cn(
            allUnitsPassed && !levelExamPassed && "border-primary/50 bg-primary/5",
            levelExamPassed && "border-green-600/40",
          )}
        >
          <CardHeader className="pb-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="size-5" />
                {lvl} level exam
              </CardTitle>
              {levelExamPassed ? (
                <Badge className="bg-green-600 text-white">cleared</Badge>
              ) : allUnitsPassed ? (
                <Badge className="bg-primary text-primary-foreground">ready</Badge>
              ) : (
                <Badge variant="outline">locked until all units pass</Badge>
              )}
            </div>
            <CardDescription>
              {levelExamPassed
                ? nextLevel
                  ? `You cleared ${lvl}. ${nextLevel} is unlocked.`
                  : `You cleared ${lvl} — top of the course.`
                : allUnitsPassed
                  ? "Covers every unit in this level. Pass to unlock the next level."
                  : `Pass all ${unitTotal} unit exams first (${passedCount}/${unitTotal} done).`}
            </CardDescription>
          </CardHeader>
          {levelExamPassed ? (
            nextLevel ? (
              <CardContent>
                <Button render={<Link href={`/learn/${nextLevel.toLowerCase()}`} />}>
                  Go to {nextLevel} <ArrowRight className="ml-1 size-4" />
                </Button>
              </CardContent>
            ) : null
          ) : allUnitsPassed ? (
            <CardContent>
              <Button size="lg" render={<Link href={`/learn/${lvl.toLowerCase()}/exam`} />}>
                Take {lvl} level exam <ArrowRight className="ml-1 size-4" />
              </Button>
            </CardContent>
          ) : (
            <CardContent>
              <Progress value={unitTotal ? (passedCount / unitTotal) * 100 : 0} />
            </CardContent>
          )}
        </Card>
      )}

      <div className="grid gap-4">
        {overview.units.map((unit, i) => {
          const unlocked = isUnitUnlocked(i, lvl, overview, prevExamPassed)
          const passed = overview.passedUnits.has(unit.id)
          const doneCount = unit.lessons.filter((ls) => overview.completedLessons.has(ls.id)).length
          const isCurrent = unit.id === currentUnitId
          const totalLessons = unit.lessons.length
          return (
            <Card
              key={unit.id}
              className={cn(
                !unlocked && "opacity-60",
                isCurrent && "border-primary/50 ring-1 ring-primary/20",
              )}
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-lg">
                    <span className="mr-2 text-muted-foreground">Unit {unit.order}</span>
                    {unit.title}
                    {isCurrent && (
                      <Badge variant="outline" className="ml-2 border-primary/40 text-primary">
                        you are here
                      </Badge>
                    )}
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
                  {doneCount}/{totalLessons} lessons complete · {unit._count.vocab} vocab ·{" "}
                  {unit._count.kanji} kanji
                </p>
                {unlocked ? (
                  <Link
                    href={`/learn/${lvl.toLowerCase()}/${unit.id}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {isCurrent && doneCount === 0
                      ? "Start unit"
                      : isCurrent
                        ? "Continue unit"
                        : "Open unit"}{" "}
                    <ArrowRight className="size-4" />
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
