import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { getCurrentUser } from "@/lib/session"
import { prisma } from "@/lib/db"
import { getLevelOverview, isUnitUnlocked, EXAM_PASS } from "@/lib/progress"
import type { Level } from "@/content/types"

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

  const levelCards = await Promise.all(
    LEVELS.map(async (l) => {
      const [unitCount, lessonCount] = await Promise.all([
        prisma.unit.count({ where: { level: l.id } }),
        prisma.lesson.count({ where: { unit: { level: l.id } } }),
      ])
      const overview = await getLevelOverview(l.id, user?.id ?? null)
      const prev = LEVELS[LEVELS.findIndex((x) => x.id === l.id) - 1]
      // Guests preview everything as unlocked; users need the previous level exam.
      const prevExamPassed = prev ? (user ? !!overview.levelExamPassed : true) : true
      const unlockedCount = overview.units.filter((_, i) =>
        isUnitUnlocked(i, l.id, overview, prev ? prevExamPassed : true),
      ).length
      const doneLessons = overview.units
        .flatMap((u) => u.lessons)
        .filter((ls) => overview.completedLessons.has(ls.id)).length
      const pct = lessonCount ? Math.round((doneLessons / lessonCount) * 100) : 0
      return { ...l, unitCount, lessonCount, pct, hasContent: unitCount > 0, unlockedCount }
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

      <div className="grid gap-4 md:grid-cols-2">
        {levelCards.map((l) => (
          <Card key={l.id} className={l.hasContent ? "" : "opacity-70"}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-xl">
                  {l.label}
                  <Badge variant="outline">{l.cefr}</Badge>
                </CardTitle>
                {!l.hasContent && <Badge variant="secondary">content in progress</Badge>}
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
