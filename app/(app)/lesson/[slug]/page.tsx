import Link from "next/link"
import { notFound } from "next/navigation"

import { Jp } from "@/components/jp"
import { TtsButton } from "@/components/tts-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { prisma } from "@/lib/db"
import type { LessonBody } from "@/content/types"

export const metadata = { title: "Lesson" }

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const lesson = await prisma.lesson.findUnique({
    where: { id: slug },
    include: {
      unit: { select: { id: true, level: true, order: true, title: true } },
      examples: { orderBy: { order: "asc" } },
    },
  })
  if (!lesson) notFound()

  const body = lesson.body as LessonBody
  const idx = lesson.order
  const nextLesson = await prisma.lesson.findFirst({
    where: { unitId: lesson.unitId, order: idx + 1 },
    select: { id: true },
  })

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <p className="text-sm text-muted-foreground">
          <Link href={`/learn/${lesson.unit.level.toLowerCase()}`} className="hover:underline">
            {lesson.unit.level}
          </Link>{" "}
          ·{" "}
          <Link href={`/learn/${lesson.unit.level.toLowerCase()}/${lesson.unit.id}`} className="hover:underline">
            Unit {lesson.unit.order}
          </Link>{" "}
          · Lesson {idx}
        </p>
        <h1 className="text-3xl font-bold">
          <Jp jp={lesson.grammarLabel} kana={lesson.grammarLabel} />
        </h1>
        <p className="text-muted-foreground">{lesson.title}</p>
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
                <Jp jp={ex.jp} kana={ex.kana} romaji={ex.romaji} segments={(ex.segments as { base: string; reading?: string }[]) ?? undefined} className="text-lg" />
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

      <Separator />

      <div className="flex justify-between gap-3">
        <Button variant="outline" render={<Link href={`/learn/${lesson.unit.level.toLowerCase()}/${lesson.unit.id}`} />}>
          ← Back to unit
        </Button>
        <Button render={<Link href={`/lesson/${lesson.id}/practice`} />}>
          Practice this lesson →
        </Button>
        {nextLesson && (
          <Button variant="outline" render={<Link href={`/lesson/${nextLesson.id}`} />}>
            Next lesson
          </Button>
        )}
      </div>
    </div>
  )
}
