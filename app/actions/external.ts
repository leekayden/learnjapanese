"use server"

import { redirect } from "next/navigation"

import { getSession } from "@/lib/session"
import {
  createHandoff,
  isQuizRendererConfigured,
  pushQuiz,
} from "@/lib/external/quiz-renderer"
import {
  buildExternalQuiz,
  returnUrlFor,
  type ExternalQuizKind,
} from "@/lib/external/quiz-builders"

// Sends the current user to quiz-renderer to take a quiz there instead of
// natively: pushes the quiz (idempotent), mints a one-time handoff URL, and
// redirects the browser. Results come back via the signed results webhook
// (app/api/external/quiz-results) and earn full native credit.
export async function startExternalQuiz(
  kind: ExternalQuizKind,
  refId: string
): Promise<{ ok: false; error: string }> {
  const session = await getSession()
  if (!session) return { ok: false, error: "Please sign in first." }
  if (!isQuizRendererConfigured()) {
    return { ok: false, error: "Quiz Renderer integration is not configured on this deployment." }
  }

  // Reviews are per-user: the caller can never push someone else's deck.
  const target = kind === "review" ? session.user.id : refId

  const quiz = await buildExternalQuiz(kind, target)
  if (!quiz) return { ok: false, error: "Quiz not found or has no questions." }
  const externalId = quiz.id!
  const returnUrl = await returnUrlFor(kind, target)

  const pushed = await pushQuiz({
    externalId,
    title: quiz.title,
    description: quiz.description,
    jsonContent: quiz,
  })
  if (!pushed.ok) {
    return { ok: false, error: `Could not sync the quiz: ${pushed.error}` }
  }

  const handoff = await createHandoff({
    externalUserId: session.user.id,
    displayName: session.user.name || undefined,
    externalQuizId: externalId,
    returnUrl,
  })
  if (!handoff.ok) {
    return { ok: false, error: `Could not start the handoff: ${handoff.error}` }
  }

  redirect(handoff.data.url)
}
