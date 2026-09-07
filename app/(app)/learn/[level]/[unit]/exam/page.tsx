import { notFound } from "next/navigation"

import { ExamRunner } from "@/components/exam-runner"
import { prisma } from "@/lib/db"
import type { QuizQuestion } from "@/lib/quiz"

export const metadata = { title: "Unit exam" }

export default async function UnitExamPage({ params }: { params: Promise<{ level: string; unit: string }> }) {
  const { unit } = await params
  const unitRow = await prisma.unit.findUnique({ where: { id: unit } })
  if (!unitRow) notFound()

  const items = await prisma.quizItem.findMany({
    where: { unitId: unit, scope: "UNIT_EXAM" },
    orderBy: { order: "asc" },
  })
  const questions = items.map((i) => i.payload as QuizQuestion)

  return <ExamRunner unitId={unitRow.id} questions={questions} />
}
