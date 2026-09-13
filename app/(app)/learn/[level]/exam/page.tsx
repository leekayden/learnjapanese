import { notFound } from "next/navigation"

import { LevelExamRunner } from "@/components/exam-runner"
import { LearnShell } from "@/components/learn-shell"
import { composeLevelExam } from "@/lib/exam"
import { getSidebarData } from "@/lib/learn-sidebar"
import { prisma } from "@/lib/db"
import type { Level } from "@/content/types"
import { PageCrumbs } from "@/components/page-crumbs"

export const metadata = { title: "Level exam" }

const VALID: Level[] = ["N5", "N4", "N3", "N2", "N1"]

export default async function LevelExamPage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params
  const lvl = level.toUpperCase() as Level
  if (!VALID.includes(lvl)) notFound()

  const unitCount = await prisma.unit.count({ where: { level: lvl } })
  if (unitCount === 0) notFound()

  const questions = await composeLevelExam(lvl)
  const sidebar = await getSidebarData(lvl)
  if (!sidebar) notFound()

  const order = VALID.indexOf(lvl)
  const nextLevel = order < VALID.length - 1 ? VALID[order + 1] : null
  const levelHref = `/learn/${lvl.toLowerCase()}`

  return (
    <LearnShell sidebar={sidebar}>
      <div className="space-y-4">
        <div>
          <PageCrumbs
            items={[
              { label: "Learn", href: "/learn" },
              { label: lvl, href: levelHref },
              { label: "Level exam" },
            ]}
          />
          <h1 className="text-2xl font-bold">{lvl} level exam</h1>
          <p className="text-muted-foreground">
            {questions.length} questions drawn from every unit · pass at 75% to unlock the next level.
          </p>
        </div>
        <LevelExamRunner
          level={lvl}
          questions={questions}
          levelHref={levelHref}
          nextLevelHref={nextLevel ? `/learn/${nextLevel.toLowerCase()}` : levelHref}
        />
      </div>
    </LearnShell>
  )
}
