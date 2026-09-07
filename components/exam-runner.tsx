"use client"

import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { QuizPlayer } from "@/components/quiz-player"
import { submitLevelExam, submitUnitExam } from "@/app/actions/progress"
import type { Level } from "@/content/types"
import type { QuizQuestion } from "@/lib/quiz"

export function ExamRunner({
  unitId,
  questions,
}: {
  unitId: string
  questions: QuizQuestion[]
}) {
  const router = useRouter()
  return (
    <QuizPlayer
      title="Unit exam — pass at 75%"
      questions={questions}
      backHref={`/learn/${unitId.split("-")[0]}/${unitId}`}
      onFinish={async (score, responses) => {
        const res = await submitUnitExam(unitId, questions, responses)
        if (res.ok && res.passed) {
          toast.success(`Passed with ${res.score}% — review cards unlocked!`)
        }
        router.refresh()
      }}
    />
  )
}

export function LevelExamRunner({ level, questions }: { level: Level; questions: QuizQuestion[] }) {
  const router = useRouter()
  return (
    <QuizPlayer
      title={`${level} level exam — pass at 75%`}
      questions={questions}
      backHref={`/learn/${level.toLowerCase()}`}
      onFinish={async (score, responses) => {
        const res = await submitLevelExam(level, questions, responses)
        if (res.ok && res.passed) {
          toast.success(`${level} cleared! The next level is unlocked.`)
        }
        router.refresh()
      }}
    />
  )
}
