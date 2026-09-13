import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Jp } from "@/components/jp"
import { TtsButton } from "@/components/tts-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { prisma } from "@/lib/db"
import type { LessonBody } from "@/content/types"
import { getSidebarData } from "@/lib/learn-sidebar"
import { LearnShell } from "@/components/learn-shell"
import { getCurrentUser } from "@/lib/session"
import { ensureLessonStarted, getAdjacentLessons, isLessonPracticed } from "@/lib/progress"
import { cn } from "@/lib/utils"
import { PageCrumbs } from "@/components/page-crumbs"

export const metadata = { title: "Lesson" }

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const lesson = await prisma.lesson.findUnique({
    where: { id: slug },
    include: {
      unit: {
        select: {
          id: true,
          level: true,
          order: true,
          title: true,
          lessons: { orderBy: { order: "asc" }, select: { id: true } },
        },
      },
      examples: { orderBy: { order: "asc" } },
    },
  })
  if (!lesson) notFound()

  const user = await getCurrentUser()
  if (user) await ensureLessonStarted(user.id, lesson.id)

  const practiced = user ? await isLessonPracticed(user.id, lesson.id) : false
  const { next } = await getAdjacentLessons(lesson.id)

  const sidebar = await getSidebarData(lesson.unit.level, {
    unitId: lesson.unit.id,
    lessonId: lesson.id,
  })
  if (!sidebar) notFound()

  const body = lesson.body as LessonBody
  const idx = lesson.order
  const totalLessons = lesson.unit.lessons.length
  const levelLc = lesson.unit.level.toLowerCase()

  const stages = [
    { label: "Read", done: true, active: !practiced },
    { label: "Practice", done: practiced, active: !practiced },
    { label: "Next lesson", done: false, active: practiced },
  ] as const

  return (
    <LearnShell sidebar={sidebar}>
      <div className="space-y-6">
        <div className="space-y-3">
          <PageCrumbs
            items={[
              { label: "Learn", href: "/learn" },
              { label: lesson.unit.level, href: `/learn/${levelLc}` },
              {
                label: `Unit ${lesson.unit.order}`,
                href: `/learn/${levelLc}/${lesson.unit.id}`,
              },
              { label: lesson.grammarLabel },
            ]}
          />
          <h1 className="text-3xl font-bold">
            <Jp jp={lesson.grammarLabel} kana={lesson.grammarLabel} />
          </h1>
          <p className="text-muted-foreground">
            {lesson.title} · Lesson {idx} of {totalLessons}
          </p>

          <ol className="flex flex-wrap items-center gap-2 text-sm">
            {stages.map((stage, i) => (
              <li key={stage.label} className="flex items-center gap-2">
                {i > 0 && <span className="text-muted-foreground/50">→</span>}
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1",
                    stage.active && "border-primary bg-primary/10 font-medium text-primary",
                    stage.done && !stage.active && "border-transparent text-muted-foreground",
                    !stage.done && !stage.active && "border-transparent text-muted-foreground/60",
                  )}
                >
                  {stage.done ? (
                    <CheckCircle2 className="size-3.5 text-green-600" />
                  ) : (
                    <span
                      className={cn(
                        "flex size-4 items-center justify-center rounded-full text-[10px]",
                        stage.active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
                      )}
                    >
                      {i + 1}
                    </span>
                  )}
                  {stage.label}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>What it means</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{body.meaning}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to form it</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {body.formation.map((f, i) => (
              <div key={i} className="rounded-lg border bg-muted/30 px-4 py-3">
                <Jp jp={f.pattern} kana={f.pattern} className="text-lg font-medium" />
                {f.note && <p className="mt-1 text-sm text-muted-foreground">{f.note}</p>}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>When to use it</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-1.5 pl-5">
              {body.usage.map((u, i) => (
                <li key={i}>{u}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Examples</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {lesson.examples.map((ex) => (
              <div key={ex.id} className="space-y-1">
                <div className="flex items-start gap-2">
                  <Jp
                    jp={ex.jp}
                    kana={ex.kana}
                    romaji={ex.romaji}
                    segments={(ex.segments as { base: string; reading?: string }[]) ?? undefined}
                    className="text-lg"
                  />
                  <TtsButton text={ex.kana} />
                </div>
                <p className="text-sm text-muted-foreground">{ex.romaji}</p>
                <p>{ex.en}</p>
                {ex.note && <p className="text-sm italic text-muted-foreground">{ex.note}</p>}
              </div>
            ))}
          </CardContent>
        </Card>

        {(body.pitfalls.length > 0 || body.related.length > 0) && (
          <Card>
            <CardHeader>
              <CardTitle>Watch out</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-1.5 pl-5">
                {body.pitfalls.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
                {body.related.map((r, i) => (
                  <li key={`r${i}`}>Related: {r}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <div className="sticky bottom-0 -mx-1 flex flex-wrap items-center justify-between gap-3 rounded-xl border bg-background/95 px-3 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/80">
          <Button variant="ghost" render={<Link href={`/learn/${levelLc}/${lesson.unit.id}`} />}>
            ← Unit overview
          </Button>
          <div className="flex flex-wrap items-center gap-2">
            {practiced && next && (
              <Button variant="outline" render={<Link href={`/lesson/${next.id}`} />}>
                Next lesson
              </Button>
            )}
            <Button size="lg" render={<Link href={`/lesson/${lesson.id}/practice`} />}>
              {practiced ? "Practice again" : "Practice this lesson"}{" "}
              <ArrowRight className="ml-1 size-4" />
            </Button>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Lesson {idx} of {totalLessons} in this unit
        </p>
      </div>
    </LearnShell>
  )
}
