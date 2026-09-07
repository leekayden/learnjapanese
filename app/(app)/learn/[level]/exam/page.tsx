import { notFound } from "next/navigation"

import { LevelExamRunner } from "@/components/exam-runner"
import { composeLevelExam } from "@/lib/exam"
import { prisma } from "@/lib/db"
import type { Level } from "@/content/types"

export const metadata = { title: "Level exam" }

const VALID: Level[] = ["N5", "N4", "N3", "N2", "N1"]

export default async function LevelExamPage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params
  const lvl = level.toUpperCase() as Level
  if (!VALID.includes(lvl)) notFound()

  const unitCount = await prisma.unit.count({ where: { level: lvl } })
  if (unitCount === 0) notFound()

  const questions = await composeLevelExam(lvl)
  return <LevelExamRunner level={lvl} questions={questions} />
}
