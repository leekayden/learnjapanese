"use client"

import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { QuizPlayer } from "@/components/quiz-player"
import { submitLevelExam, submitUnitExam } from "@/app/actions/progress"
import { EXAM_PASS } from "@/lib/progress"
import type { Level } from "@/content/types"
import type { QuizQuestion } from "@/lib/quiz"

export function ExamRunner({
  unitId,
  questions,
  unitHref,
  nextHref,
  unitLabel,
}: {
  unitId: string
  questions: QuizQuestion[]
  unitHref?: string
  nextHref?: string
  unitLabel?: string
}) {
  const router = useRouter()
  const fallback = unitHref ?? `/learn/${unitId.split("-")[0]}/${unitId}`
  return (
    <QuizPlayer
      title={unitLabel ? `Unit exam · ${unitLabel}` : "Unit exam"}
      questions={questions}
      passMark={EXAM_PASS}
      passLabel="Passed — next unit unlocked and review cards created!"
      failLabel="Below 75%. Review the lessons, then retake the exam."
      backHref={fallback}
      nextHref={nextHref}
      onFinish={async (score, responses) => {
        const res = await submitUnitExam(unitId, questions, responses)
        if (res.ok && res.passed) {
          toast.success(`Passed with ${res.score}% — review cards unlocked!`)
        }
        if (!res.ok) {
          toast.error(res.reason === "unauthenticated" ? "Sign in to save your exam result" : "Couldn't save your result")
        }
        router.refresh()
        return res.ok ? { saved: true } : { saved: false, reason: res.reason }
      }}
    />
  )
}

export function LevelExamRunner({
  level,
  questions,
  levelHref,
  nextLevelHref,
}: {
  level: Level
  questions: QuizQuestion[]
  levelHref?: string
  nextLevelHref?: string
}) {
  const router = useRouter()
  return (
    <QuizPlayer
      title={`${level} level exam`}
      questions={questions}
      passMark={EXAM_PASS}
      passLabel={`${level} cleared — the next level is unlocked!`}
      failLabel="Below 75%. Review weak units, then retake."
      backHref={levelHref ?? `/learn/${level.toLowerCase()}`}
      nextHref={nextLevelHref}
      onFinish={async (score, responses) => {
        const res = await submitLevelExam(level, questions, responses)
        if (res.ok && res.passed) {
          toast.success(`${level} cleared! The next level is unlocked.`)
        }
        if (!res.ok) {
          toast.error(res.reason === "unauthenticated" ? "Sign in to save your exam result" : "Couldn't save your result")
        }
        router.refresh()
        return res.ok ? { saved: true } : { saved: false, reason: res.reason }
      }}
    />
  )
}
