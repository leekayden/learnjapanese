import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle2, Circle, PlayCircle } from "lucide-react"

import { Jp } from "@/components/jp"
import { WordEntry } from "@/components/word-entry"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { getLevelOverview } from "@/lib/progress"
import { getCurrentUser } from "@/lib/session"
import { prisma } from "@/lib/db"
import { hydrate } from "@/lib/dictionary"
import { getSidebarData } from "@/lib/learn-sidebar"
import { LearnShell } from "@/components/learn-shell"
import { cn } from "@/lib/utils"
import { PageCrumbs } from "@/components/page-crumbs"

export const metadata = { title: "Unit" }

export default async function UnitPage({ params }: { params: Promise<{ unit: string }> }) {
  const { unit: unitId } = await params
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
  const sidebar = await getSidebarData(unit.level, { unitId: unit.id })
  const passed = overview.passedUnits.has(unit.id)
  const [words] = await Promise.all([hydrate(unit.vocab.map((v) => v.wordId))])
  const wordById = new Map(words.map((w) => [w.id, w]))

  const levelLc = unit.level.toLowerCase()

  if (!sidebar) notFound()

  const doneCount = unit.lessons.filter((ls) => overview.completedLessons.has(ls.id)).length
  const total = unit.lessons.length
  const nextLesson =
    unit.lessons.find((ls) => !overview.completedLessons.has(ls.id)) ?? unit.lessons[0] ?? null
  const allLessonsDone = total > 0 && doneCount === total
  const pct = total ? Math.round((doneCount / total) * 100) : 0

  return (
    <LearnShell sidebar={sidebar}>
      <div className="space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <PageCrumbs
              items={[
                { label: "Learn", href: "/learn" },
                { label: unit.level, href: `/learn/${levelLc}` },
                { label: `Unit ${unit.order}` },
              ]}
            />
            <h1 className="text-2xl font-bold">{unit.title}</h1>
            <Jp jp={unit.titleJp} kana={unit.titleJp} className="text-muted-foreground" />
          </div>
          {passed ? (
            <Badge className="bg-green-600 text-white">exam passed</Badge>
          ) : allLessonsDone ? (
            <Badge className="bg-primary text-primary-foreground">ready for exam</Badge>
          ) : null}
        </div>

        <p className="max-w-3xl text-muted-foreground">{unit.description}</p>

        <Card className={cn(nextLesson && !passed && "border-primary/40")}>
          <CardHeader className="pb-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <CardTitle>Up next</CardTitle>
              <span className="text-sm text-muted-foreground">
                {doneCount}/{total} lessons complete
              </span>
            </div>
            <Progress value={pct} className="mt-1" />
          </CardHeader>
          <CardContent>
            {nextLesson ? (
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-medium">
                    Lesson {nextLesson.order} ·{" "}
                    <Jp jp={nextLesson.grammarLabel} kana={nextLesson.grammarLabel} />
                  </p>
                  <p className="truncate text-sm text-muted-foreground">{nextLesson.title}</p>
                </div>
                <Button size="lg" render={<Link href={`/lesson/${nextLesson.id}`} />}>
                  {doneCount === 0 ? "Start lesson" : overview.completedLessons.has(nextLesson.id) ? "Review lesson" : "Continue"}{" "}
                  <ArrowRight className="ml-1 size-4" />
                </Button>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No lessons in this unit yet.</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lessons</CardTitle>
            <CardDescription>Read the notes, then practice to mark each lesson complete.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            {unit.lessons.map((lesson, i) => {
              const done = overview.completedLessons.has(lesson.id)
              const isNext = nextLesson?.id === lesson.id && !done
              return (
                <Link
                  key={lesson.id}
                  href={`/lesson/${lesson.id}`}
                  className={cn(
                    "flex items-center gap-3 rounded-lg border px-4 py-3 transition-colors hover:bg-accent/50",
                    isNext && "border-primary/50 bg-primary/5",
                  )}
                >
                  {done ? (
                    <CheckCircle2 className="size-5 shrink-0 text-green-600" />
                  ) : isNext ? (
                    <PlayCircle className="size-5 shrink-0 text-primary" />
                  ) : (
                    <Circle className="size-5 shrink-0 text-muted-foreground" />
                  )}
                  <span className="mr-1 text-sm text-muted-foreground">{i + 1}.</span>
                  <Jp jp={lesson.grammarLabel} kana={lesson.grammarLabel} className="font-medium" />
                  <span className="min-w-0 flex-1 truncate text-sm text-muted-foreground">{lesson.title}</span>
                  {isNext && (
                    <Badge variant="outline" className="shrink-0 border-primary/40 text-primary">
                      up next
                    </Badge>
                  )}
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

        <Card>
          <CardHeader>
            <CardTitle>Unit exam</CardTitle>
            <CardDescription>
              {allLessonsDone
                ? "All lessons practiced — take the exam to unlock the next unit and review cards."
                : `Practice the remaining lessons first (${doneCount}/${total} complete). You can still open the exam early.`}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">Pass mark 75% · unlimited attempts</p>
            <div className="flex gap-2">
              {passed && (
                <Badge className="bg-green-600 text-white">passed</Badge>
              )}
              <Button
                variant={allLessonsDone && !passed ? "default" : "outline"}
                render={<Link href={`/learn/${levelLc}/${unit.id}/exam`} />}
              >
                {passed ? "Retake exam" : "Take unit exam"} <ArrowRight className="ml-1 size-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </LearnShell>
  )
}
