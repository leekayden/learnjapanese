"use client"

import { useTransition } from "react"
import { toast } from "sonner"
import { ExternalLink } from "lucide-react"

import { startExternalQuiz } from "@/app/actions/external"
import type { ExternalQuizKind } from "@/lib/external/quiz-builders"
import { Button } from "@/components/ui/button"

// "Take in Quiz Renderer" — hands the user over to the sibling quiz-renderer
// app via a one-time signed URL; results come back automatically as if the
// native quiz had been taken.
export function ExternalQuizButton({
  kind,
  refId,
  label = "Take in Quiz Renderer",
}: {
  kind: ExternalQuizKind
  refId: string
  label?: string
}) {
  const [pending, startTransition] = useTransition()

  const handleClick = () => {
    startTransition(async () => {
      const res = await startExternalQuiz(kind, refId)
      if (res && res.ok === false) {
        toast.error(res.error)
      }
    })
  }

  return (
    <Button variant="outline" size="sm" onClick={handleClick} disabled={pending}>
      <ExternalLink className="size-4" />
      {pending ? "Opening Quiz Renderer…" : label}
    </Button>
  )
}
