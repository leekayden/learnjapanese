import { notFound } from "next/navigation"

import { ExamRunner } from "@/components/exam-runner"
import { ExternalQuizButton } from "@/components/external-quiz-button"
import { ExternalResultBanner } from "@/components/external-result-banner"
import { LearnShell } from "@/components/learn-shell"
import { getSidebarData } from "@/lib/learn-sidebar"
import { prisma } from "@/lib/db"
import type { QuizQuestion } from "@/lib/quiz"
import { PageCrumbs } from "@/components/page-crumbs"

export const metadata = { title: "Unit exam" }

export default async function UnitExamPage(
  { params, searchParams }: { params: Promise<{ unit: string }>; searchParams: Promise<{ qr?: string }> },
) {
  const { unit } = await params
  const { qr } = await searchParams
  const unitRow = await prisma.unit.findUnique({
    where: { id: unit },
    include: { lessons: { orderBy: { order: "asc" }, select: { id: true } } },
  })
  if (!unitRow) notFound()

  const lvl = unitRow.level
  const items = await prisma.quizItem.findMany({
    where: { unitId: unit, scope: "UNIT_EXAM" },
    orderBy: { order: "asc" },
  })
  const questions = items.map((i) => i.payload as QuizQuestion)

  // next unit in the same level (for "next up" after a pass)
  const nextUnit = await prisma.unit.findFirst({
    where: { level: lvl, order: { gt: unitRow.order } },
    orderBy: { order: "asc" },
    select: { id: true },
  })

  const sidebar = await getSidebarData(lvl, { unitId: unitRow.id })
  if (!sidebar) notFound()

  const levelLc = lvl.toLowerCase()
  const unitHref = `/learn/${levelLc}/${unitRow.id}`

  return (
    <LearnShell sidebar={sidebar}>
      <div className="space-y-4">
        <div>
          <PageCrumbs
            items={[
              { label: "Learn", href: "/learn" },
              { label: String(lvl), href: `/learn/${levelLc}` },
              { label: `Unit ${unitRow.order}`, href: unitHref },
              { label: "Exam" },
            ]}
          />
          <h1 className="text-2xl font-bold">Unit {unitRow.order} exam</h1>
          <p className="text-muted-foreground">
            {questions.length} questions · pass at 75% to unlock the next unit and create review cards.
          </p>
        </div>
        {qr === "1" && <ExternalResultBanner externalQuizId={`lj:unit-exam:${unitRow.id}`} />}
        <div className="flex justify-end">
          <ExternalQuizButton kind="unit-exam" refId={unitRow.id} />
        </div>
        <ExamRunner
          unitId={unitRow.id}
          questions={questions}
          unitHref={unitHref}
          nextHref={nextUnit ? `/learn/${levelLc}/${nextUnit.id}` : unitHref}
          unitLabel={`Unit ${unitRow.order}`}
        />
      </div>
    </LearnShell>
  )
}
