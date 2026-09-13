import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getCurrentUser, getUserSettings } from "@/lib/session"
import { prisma } from "@/lib/db"
import { getLevelOverview, isUnitUnlocked, EXAM_PASS, getNextLesson } from "@/lib/progress"
import type { Level } from "@/content/types"
import { cn } from "@/lib/utils"
import { FreeNavToggle } from "@/components/free-nav-toggle"

export const metadata = { title: "Learn" }

const LEVELS: { id: Level; label: string; cefr: string; blurb: string }[] = [
  { id: "N5", label: "N5", cefr: "≈ A1", blurb: "First sentences, verbs, adjectives, te-form" },
  { id: "N4", label: "N4", cefr: "≈ A2", blurb: "Plain form, conditionals, potential, causative" },
  { id: "N3", label: "N3", cefr: "≈ B1", blurb: "Complex modification, transitivity, register" },
  { id: "N2", label: "N2", cefr: "≈ B2", blurb: "Written style, idioms, nuance control" },
  { id: "N1", label: "N1", cefr: "≈ C1", blurb: "Near-native grammar, literary patterns" },
]

export default async function LearnPage() {
  const user = await getCurrentUser()
  const settings = user ? await getUserSettings() : null
  const freeNav = settings?.freeNav ?? false
  const next = user ? await getNextLesson(user.id) : null

  // previous-level exam status per level (guests preview as unlocked)
  const prevPassed = new Map<Level | null, boolean>()
  for (const l of LEVELS) {
    const idx = LEVELS.findIndex((x) => x.id === l.id)
    const prev = idx > 0 ? LEVELS[idx - 1]!.id : null
    if (!prev) {
      prevPassed.set(l.id, true)
      continue
    }
    if (!user) {
      prevPassed.set(l.id, true)
      continue
    }
    const ok = !!(await prisma.examAttempt.findFirst({
      where: { userId: user.id, levelExam: prev, passed: true },
      select: { id: true },
    }))
    prevPassed.set(l.id, ok)
  }

  const levelCards = await Promise.all(
    LEVELS.map(async (l) => {
      const overview = await getLevelOverview(l.id, user?.id ?? null)
      const prevExamPassed = prevPassed.get(l.id) ?? true
      const unlockedCount = overview.units.filter((_, i) =>
        isUnitUnlocked(i, l.id, overview, prevExamPassed),
      ).length
      const doneLessons = overview.units
        .flatMap((u) => u.lessons)
        .filter((ls) => overview.completedLessons.has(ls.id)).length
      const lessonCount = overview.units.reduce((n, u) => n + u.lessons.length, 0)
      const unitCount = overview.units.length
      const pct = lessonCount ? Math.round((doneLessons / lessonCount) * 100) : 0
      const isCurrent = next?.level === l.id
      return {
        ...l,
        unitCount,
        lessonCount,
        pct,
        hasContent: unitCount > 0,
        unlockedCount,
        isCurrent,
        levelExamPassed: overview.levelExamPassed,
        prevExamPassed,
      }
    }),
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Learn Japanese</h1>
        <p className="text-muted-foreground">
          Five levels, one grammar point at a time. Finish each unit&apos;s exam to unlock the
          next (pass mark {EXAM_PASS}%).
        </p>
      </div>

      {user && <FreeNavToggle freeNav={freeNav} />}

      {next && (
        <Card className="border-primary/40">
          <CardContent className="flex flex-wrap items-center justify-between gap-3 py-4">
            <div className="min-w-0">
              <p className="text-sm font-medium text-primary">Continue where you left off</p>
              <p className="truncate text-sm text-muted-foreground">
                {next.level} · Unit {next.unitOrder} · {next.grammarLabel} — {next.title}
              </p>
            </div>
            <Button render={<Link href={`/lesson/${next.id}`} />}>
              Resume lesson <ArrowRight className="ml-1 size-4" />
            </Button>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {levelCards.map((l) => (
          <Card
            key={l.id}
            className={cn(
              l.hasContent ? "" : "opacity-70",
              l.isCurrent && "border-primary/50 ring-1 ring-primary/20",
              !l.prevExamPassed && l.hasContent && "opacity-80",
            )}
          >
            <CardHeader>
              <div className="flex items-center justify-between gap-2">
                <CardTitle className="flex items-center gap-2 text-xl">
                  {l.label}
                  <Badge variant="outline">{l.cefr}</Badge>
                  {l.isCurrent && (
                    <Badge className="gap-1 border-primary/40 bg-primary/10 text-primary" variant="outline">
                      <MapPin className="size-3" /> you are here
                    </Badge>
                  )}
                </CardTitle>
                {!l.hasContent && <Badge variant="secondary">content in progress</Badge>}
                {l.levelExamPassed && (
                  <Badge className="bg-green-600 text-white">cleared</Badge>
                )}
              </div>
              <CardDescription>{l.blurb}</CardDescription>
            </CardHeader>
            <CardContent>
              {l.hasContent ? (
                <>
                  <div className="mb-3 flex items-center gap-3 text-sm text-muted-foreground">
                    <Progress value={l.pct} className="flex-1" />
                    <span>{l.pct}%</span>
                  </div>
                  <p className="mb-3 text-sm text-muted-foreground">
                    {l.unitCount} units · {l.lessonCount} lessons · {l.unlockedCount} unlocked
                    {!l.prevExamPassed && " · pass previous level exam to unlock"}
                  </p>
                </>
              ) : null}
              {l.hasContent && (
                <Link
                  href={`/learn/${l.id.toLowerCase()}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  {l.pct > 0 ? "Continue" : "Start"} {l.label} <ArrowRight className="size-4" />
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
