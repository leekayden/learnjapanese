import { ReviewRunner } from "@/components/review-runner"
import { ExternalQuizButton } from "@/components/external-quiz-button"
import { ExternalResultBanner } from "@/components/external-result-banner"
import { buildReviewSession } from "@/lib/srs"
import { getCurrentUser } from "@/lib/session"

export const metadata = { title: "Review" }

export default async function ReviewPage({
  searchParams,
}: {
  searchParams: Promise<{ qr?: string }>
}) {
  const user = await getCurrentUser()
  if (!user) return null
  const { qr } = await searchParams
  const cards = await buildReviewSession(user.id, 20)
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Review</h1>
        <p className="text-muted-foreground">
          Spaced repetition — words, kanji and grammar from units you have passed.
        </p>
      </div>
      {qr === "1" && <ExternalResultBanner externalQuizId={`lj:review:${user.id}`} />}
      {cards.length > 0 && (
        <div className="flex justify-end">
          <ExternalQuizButton kind="review" refId={user.id} label="Review in Quiz Renderer" />
        </div>
      )}
      <ReviewRunner cards={cards} />
    </div>
  )
}
