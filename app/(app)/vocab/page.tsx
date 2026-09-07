import Link from "next/link"

import { Jp } from "@/components/jp"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WordEntry } from "@/components/word-entry"
import { hydrate } from "@/lib/dictionary"
import { getCurrentUser } from "@/lib/session"
import { prisma } from "@/lib/db"
import type { Level } from "@/content/types"
import { cn } from "@/lib/utils"

export const metadata = { title: "My vocab" }

const LEVELS: Level[] = ["N5", "N4", "N3", "N2", "N1"]

export default async function VocabPage({ searchParams }: { searchParams: Promise<{ level?: string }> }) {
  const { level = "" } = await searchParams
  const lvl = level ? (level.toUpperCase() as Level) : null

  const user = await getCurrentUser()
  const passedUnits = user
    ? await prisma.examAttempt.findMany({
        where: { userId: user.id, passed: true, unitId: { not: null } },
        select: { unitId: true },
      })
    : []
  const passedIds = passedUnits.map((u) => u.unitId).filter((id): id is string => !!id)

  const vocabRows = await prisma.unitVocab.findMany({
    where: {
      unit: {
        ...(lvl ? { level: lvl } : {}),
        ...(user ? { id: { in: passedIds } } : {}),
      },
    },
    orderBy: { order: "asc" },
    include: { unit: { select: { level: true, order: true, title: true } } },
  })
  const words = await hydrate(vocabRows.map((v) => v.wordId))
  const wordById = new Map(words.map((w) => [w.id, w]))

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">My vocabulary</h1>
        <p className="text-muted-foreground">Every word from units you have passed, with its level and unit.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Link href="/vocab" className={cn(!level && "pointer-events-none")}>
          <Badge variant={!level ? "default" : "outline"}>all</Badge>
        </Link>
        {LEVELS.map((l) => (
          <Link key={l} href={`/vocab?level=${l.toLowerCase()}`} className={cn(level && level !== l.toLowerCase() && "pointer-events-none")}>
            <Badge variant={level === l.toLowerCase() ? "default" : "outline"}>{l}</Badge>
          </Link>
        ))}
      </div>

      {vocabRows.length === 0 ? (
        <p className="text-muted-foreground">
          No vocabulary yet — pass a unit exam to collect your words.{" "}
          <Link href="/learn" className="underline">
            Start learning
          </Link>
        </p>
      ) : (
        <div className="divide-y rounded-xl border">
          {vocabRows.map((v) => {
            const w = wordById.get(v.wordId)
            if (!w) return null
            return (
              <div key={v.id} className="flex items-center gap-3">
                <div className="min-w-0 flex-1">
                  <WordEntry word={w} href={`/dictionary/${w.id}`} />
                </div>
                <Badge variant="outline" className="mr-3 shrink-0">
                  {v.unit.level} U{v.unit.order}
                </Badge>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
