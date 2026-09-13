import { prisma } from "@/lib/db"
import { getSession } from "@/lib/session"

// Green confirmation shown on the page a user returns to after taking a quiz
// in the sibling quiz-renderer app (`?qr=1` return URLs). Renders nothing
// unless an applied Quiz Renderer result actually exists for this user — the
// URL param only toggles the check, it never fakes the result.
export async function ExternalResultBanner({ externalQuizId }: { externalQuizId: string }) {
  const session = await getSession()
  if (!session) return null

  const result = await prisma.externalQuizResult.findFirst({
    where: { userId: session.user.id, externalQuizId },
    orderBy: { appliedAt: "desc" },
    select: { score: true, appliedAt: true },
  })
  if (!result) return null

  const isReview = externalQuizId.includes(":review:")
  return (
    <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-300">
      {isReview
        ? `✓ Review saved from Quiz Renderer — ${Math.round(result.score)}% correct and scheduled.`
        : `✓ Result saved from Quiz Renderer — scored ${Math.round(result.score)}% and applied to your progress.`}
    </div>
  )
}
