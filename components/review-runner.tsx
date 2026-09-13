"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { QuizPlayer } from "@/components/quiz-player"
import { cn } from "@/lib/utils"
import type { ReviewCardData } from "@/lib/srs"
import { gradeReviewCard } from "@/app/actions/review"

/**
 * Flashcard-style review: answer, check, then self-grade for the SRS scheduler.
 */
export function ReviewRunner({ cards }: { cards: ReviewCardData[] }) {
  const router = useRouter()
  const [idx, setIdx] = useState(0)
  const [finished, setFinished] = useState(false)
  const [stats, setStats] = useState({ again: 0, good: 0 })
  const [revealed, setRevealed] = useState(false)

  const card = cards[idx]

  if (!cards.length) {
    return (
      <Card className="text-center">
        <CardHeader>
          <CardTitle>Nothing due — nice!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>Complete more unit exams to add words, kanji and grammar to your review queue.</p>
          <Button variant="outline" render={<Link href="/learn" />}>
            Go to course <ArrowRight className="ml-1 size-4" />
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (finished) {
    return (
      <Card className="text-center">
        <CardHeader>
          <CardTitle>Review complete</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            {stats.good} solid · {stats.again} to see again soon.
          </p>
          <Button onClick={() => router.push("/dashboard")}>
            Back to dashboard <ArrowRight className="ml-1 size-4" />
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <Progress value={(idx / cards.length) * 100} className="flex-1" />
        <span>
          {idx + 1}/{cards.length}
        </span>
      </div>
      <QuizPlayer
        key={card.cardId}
        title={`Review · ${card.cardType.replace(/_/g, " ").toLowerCase()}`}
        questions={[card.question]}
        submitLabel="Done"
        hideFooter={revealed}
        onCheckedChange={(checked) => {
          if (checked) setRevealed(true)
        }}
        onFinish={async () => {
          // grading is handled by the self-grade buttons
        }}
      />
      {revealed && (
        <GradeButtons
          onGrade={async (grade) => {
            await gradeReviewCard(card.cardId, grade)
            if (grade >= 2) setStats((s) => ({ ...s, good: s.good + 1 }))
            else setStats((s) => ({ ...s, again: s.again + 1 }))
            setRevealed(false)
            if (idx + 1 < cards.length) setIdx(idx + 1)
            else {
              setFinished(true)
              router.refresh()
            }
          }}
        />
      )}
      {!revealed && (
        <p className="text-center text-xs text-muted-foreground">
          Answer, then press Check to reveal how you did — after that you&apos;ll grade yourself.
        </p>
      )}
    </div>
  )
}

function GradeButtons({ onGrade }: { onGrade: (g: 0 | 1 | 2 | 3) => void }) {
  return (
    <Card>
      <CardContent className="flex flex-wrap items-center justify-center gap-2 py-4">
        <span className="mr-2 text-sm text-muted-foreground">How well did you know it?</span>
        {(
          [
            [0, "Again", "bg-destructive/10 text-destructive hover:bg-destructive/20"],
            [1, "Hard", ""],
            [2, "Good", ""],
            [3, "Easy", "bg-green-600/10 text-green-700 hover:bg-green-600/20 dark:text-green-400"],
          ] as const
        ).map(([grade, label, cls]) => (
          <Button
            key={grade}
            variant={grade === 2 ? "default" : "outline"}
            className={cn(cls)}
            onClick={() => onGrade(grade)}
          >
            {label}
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
