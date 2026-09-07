import { ReviewRunner } from "@/components/review-runner"
import { buildReviewSession } from "@/lib/srs"
import { getCurrentUser } from "@/lib/session"

export const metadata = { title: "Review" }

export default async function ReviewPage() {
  const user = await getCurrentUser()
  if (!user) return null
  const cards = await buildReviewSession(user.id, 20)
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Review</h1>
        <p className="text-muted-foreground">
          Spaced repetition — words, kanji and grammar from units you have passed.
        </p>
      </div>
      <ReviewRunner cards={cards} />
    </div>
  )
}
