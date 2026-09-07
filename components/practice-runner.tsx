"use client"

import { useRouter } from "next/navigation"

import { QuizPlayer } from "@/components/quiz-player"
import { saveLessonPractice } from "@/app/actions/progress"
import type { QuizQuestion } from "@/lib/quiz"

export function PracticeRunner({ lessonSlug, questions }: { lessonSlug: string; questions: QuizQuestion[] }) {
  const router = useRouter()
  return (
    <QuizPlayer
      title="Lesson practice"
      questions={questions}
      backHref={`/lesson/${lessonSlug}`}
      onFinish={async (score, responses) => {
        await saveLessonPractice(lessonSlug, questions, responses)
        router.refresh()
      }}
    />
  )
}
