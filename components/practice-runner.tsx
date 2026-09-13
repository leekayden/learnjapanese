"use client"

import { useRouter } from "next/navigation"

import { QuizPlayer } from "@/components/quiz-player"
import { saveLessonPractice } from "@/app/actions/progress"
import { PRACTICE_PASS } from "@/lib/progress"
import type { QuizQuestion } from "@/lib/quiz"

export function PracticeRunner({
  lessonSlug,
  questions,
  nextLessonId,
  lessonTitle,
  unitHref,
}: {
  lessonSlug: string
  questions: QuizQuestion[]
  nextLessonId?: string | null
  lessonTitle?: string
  unitHref?: string
}) {
  const router = useRouter()
  return (
    <QuizPlayer
      title={lessonTitle ? `Practice · ${lessonTitle}` : "Lesson practice"}
      questions={questions}
      passMark={PRACTICE_PASS}
      passLabel="Lesson complete — nice work!"
      failLabel="Below the pass mark. Skim the notes, then try again."
      backHref={`/lesson/${lessonSlug}`}
      nextHref={nextLessonId ? `/lesson/${nextLessonId}` : (unitHref ?? `/lesson/${lessonSlug}`)}
      onFinish={async (score, responses) => {
        await saveLessonPractice(lessonSlug, questions, responses)
        router.refresh()
      }}
    />
  )
}
