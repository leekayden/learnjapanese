import Link from "next/link"
import { notFound } from "next/navigation"
import { CheckCircle2, Circle } from "lucide-react"

import { Jp } from "@/components/jp"
import { WordEntry } from "@/components/word-entry"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getLevelOverview } from "@/lib/progress"
import { getCurrentUser } from "@/lib/session"
import { prisma } from "@/lib/db"
import { hydrate } from "@/lib/dictionary"
import type { Level } from "@/content/types"

export const metadata = { title: "Unit" }

export default async function UnitPage({ params }: { params: Promise<{ level: string; unit: string }> }) {
  const { level, unit: unitId } = await params
  const unit = await prisma.unit.findUnique({
    where: { id: unitId },
    include: {
      lessons: { orderBy: { order: "asc" } },
      vocab: { orderBy: { order: "asc" } },
      kanji: true,
    },
  })
  if (!unit) notFound()

  const user = await getCurrentUser()
  const overview = await getLevelOverview(unit.level, user?.id ?? null)
  const passed = overview.passedUnits.has(unit.id)
  const [words] = await Promise.all([hydrate(unit.vocab.map((v) => v.wordId))])
  const wordById = new Map(words.map((w) => [w.id, w]))

  const levelLc = unit.level.toLowerCase()

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm text-muted-foreground">
            <Link href={`/learn/${levelLc}`} className="hover:underline">
              {unit.level}
            </Link>{" "}
            · Unit {unit.order}
          </p>
          <h1 className="text-2xl font-bold">{unit.title}</h1>
          <Jp jp={unit.titleJp} kana={unit.titleJp} className="text-muted-foreground" />
        </div>
        {passed && <Badge className="bg-green-600 text-white">exam passed</Badge>}
      </div>

      <p className="max-w-3xl text-muted-foreground">{unit.description}</p>

      <Card>
        <CardHeader>
          <CardTitle>Lessons</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2">
          {unit.lessons.map((lesson, i) => {
            const done = overview.completedLessons.has(lesson.id)
            return (
              <Link
                key={lesson.id}
                href={`/lesson/${lesson.id}`}
                className="flex items-center gap-3 rounded-lg border px-4 py-3 transition-colors hover:bg-accent/50"
              >
                {done ? <CheckCircle2 className="size-5 text-green-600" /> : <Circle className="size-5 text-muted-foreground" />}
                <span className="mr-1 text-sm text-muted-foreground">{i + 1}.</span>
                <Jp jp={lesson.grammarLabel} kana={lesson.grammarLabel} className="font-medium" />
                <span className="text-sm text-muted-foreground">{lesson.title}</span>
              </Link>
            )
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vocabulary ({unit.vocab.length})</CardTitle>
        </CardHeader>
        <CardContent className="divide-y">
          {unit.vocab.map((v) => {
            const w = wordById.get(v.wordId)
            if (!w) return null
            return <WordEntry key={v.id} word={w} href={`/dictionary/${w.id}`} />
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Kanji ({unit.kanji.length})</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {unit.kanji.map((k) => (
            <Link
              key={k.char}
              href={`/kanji/${encodeURIComponent(k.char)}`}
              className="rounded-lg border p-3 text-center transition-colors hover:bg-accent/50"
            >
              <Jp jp={k.char} kana={k.char} className="text-3xl" />
              <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
                {(k.meanings as string[])?.[0] ?? ""}
              </p>
            </Link>
          ))}
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button size="lg" render={<Link href={`/learn/${levelLc}/${unit.id}/exam`} />}>
          Unit {unit.order} exam →
        </Button>
      </div>
    </div>
  )
}
