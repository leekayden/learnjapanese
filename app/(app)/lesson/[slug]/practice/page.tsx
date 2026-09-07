import { notFound } from "next/navigation"

import { PracticeRunner } from "@/components/practice-runner"
import { prisma } from "@/lib/db"
import type { QuizQuestion } from "@/lib/quiz"

export const metadata = { title: "Practice" }

export default async function PracticePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const lesson = await prisma.lesson.findUnique({ where: { id: slug }, select: { id: true, title: true } })
  if (!lesson) notFound()

  const items = await prisma.quizItem.findMany({
    where: { lessonId: slug, scope: "LESSON_PRACTICE" },
    orderBy: { order: "asc" },
  })
  const questions = items.map((i) => i.payload as QuizQuestion)

  return <PracticeRunner lessonSlug={lesson.id} questions={questions} />
}
