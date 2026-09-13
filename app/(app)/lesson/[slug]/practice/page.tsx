import { notFound } from "next/navigation"

import { PracticeRunner } from "@/components/practice-runner"
import { prisma } from "@/lib/db"
import type { QuizQuestion } from "@/lib/quiz"
import { getSidebarData } from "@/lib/learn-sidebar"
import { LearnShell } from "@/components/learn-shell"
import { PageCrumbs } from "@/components/page-crumbs"

export const metadata = { title: "Practice" }

export default async function PracticePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const lesson = await prisma.lesson.findUnique({
    where: { id: slug },
    select: {
      id: true,
      title: true,
      grammarLabel: true,
      order: true,
      unitId: true,
      unit: { select: { id: true, level: true, order: true, title: true } },
    },
  })
  if (!lesson) notFound()

  const items = await prisma.quizItem.findMany({
    where: { lessonId: slug, scope: "LESSON_PRACTICE" },
    orderBy: { order: "asc" },
  })
  const questions = items.map((i) => i.payload as QuizQuestion)

  const nextLesson = await prisma.lesson.findFirst({
    where: { unitId: lesson.unitId, order: lesson.order + 1 },
    select: { id: true },
  })

  const sidebar = await getSidebarData(lesson.unit.level, {
    unitId: lesson.unit.id,
    lessonId: lesson.id,
  })
  if (!sidebar) notFound()

  const levelLc = lesson.unit.level.toLowerCase()

  return (
    <LearnShell sidebar={sidebar}>
      <div className="space-y-4">
        <div>
          <PageCrumbs
            items={[
              { label: "Learn", href: "/learn" },
              { label: lesson.unit.level, href: `/learn/${levelLc}` },
              {
                label: `Unit ${lesson.unit.order}`,
                href: `/learn/${levelLc}/${lesson.unit.id}`,
              },
              { label: lesson.grammarLabel, href: `/lesson/${lesson.id}` },
              { label: "Practice" },
            ]}
          />
          <h1 className="text-2xl font-bold">Practice</h1>
          <p className="text-muted-foreground">
            {questions.length} questions · score 60% to mark this lesson complete.
          </p>
        </div>
        <PracticeRunner
          lessonSlug={lesson.id}
          questions={questions}
          nextLessonId={nextLesson?.id ?? null}
          lessonTitle={lesson.grammarLabel}
          unitHref={`/learn/${levelLc}/${lesson.unit.id}`}
        />
      </div>
    </LearnShell>
  )
}
