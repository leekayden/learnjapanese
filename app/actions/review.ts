"use server"

import { prisma } from "@/lib/db"
import { nextDue } from "@/lib/srs"
import { awardXp } from "@/lib/progress"
import { getSession } from "@/lib/session"

/** Grade a review card. grade: 0 again, 1 hard, 2 good, 3 easy. */
export async function gradeReviewCard(cardId: string, grade: 0 | 1 | 2 | 3) {
  const session = await getSession()
  if (!session) return { ok: false as const, reason: "unauthenticated" }
  const userId = session.user.id

  const card = await prisma.srsCard.findUnique({ where: { id: cardId } })
  if (!card || card.userId !== userId) return { ok: false as const, reason: "not found" }

  const { due, reps, lapses } = nextDue(card.reps, card.lapses, grade)
  await prisma.srsCard.update({
    where: { id: cardId },
    data: { due, reps, lapses, lastGrade: grade },
  })

  if (grade >= 2) await awardXp(userId, 1, "review")
  return { ok: true as const }
}
