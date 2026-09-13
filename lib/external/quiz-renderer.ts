import { createHmac } from "crypto"

// Machine client for quiz-renderer's external API. All requests are signed
// with HMAC-SHA256 over `${timestamp}.${rawBody}` — the same scheme
// quiz-renderer uses on the results webhooks it sends back to us.

const BASE_URL = (process.env.QUIZ_RENDERER_URL ?? "").replace(/\/$/, "")
const API_KEY = process.env.QUIZ_RENDERER_API_KEY ?? ""
const API_SECRET = process.env.QUIZ_RENDERER_API_SECRET ?? ""

export function isQuizRendererConfigured(): boolean {
  return Boolean(BASE_URL && API_KEY && API_SECRET)
}

function signedHeaders(body: string): Record<string, string> {
  const timestamp = Math.floor(Date.now() / 1000).toString()
  const signature = createHmac("sha256", API_SECRET)
    .update(`${timestamp}.${body}`)
    .digest("hex")
  return {
    "Content-Type": "application/json",
    "X-QR-Key": API_KEY,
    "X-QR-Timestamp": timestamp,
    "X-QR-Signature": signature,
  }
}

type ApiResult<T> = { ok: true; data: T } | { ok: false; error: string }

/** Idempotent upsert of a quiz into quiz-renderer. */
export async function pushQuiz(input: {
  externalId: string
  title: string
  description?: string
  jsonContent: unknown
}): Promise<ApiResult<{ quizId: string }>> {
  if (!isQuizRendererConfigured()) return { ok: false, error: "not configured" }
  try {
    const res = await fetch(`${BASE_URL}/api/external/quizzes`, {
      method: "POST",
      headers: signedHeaders(JSON.stringify(input)),
      body: JSON.stringify(input),
      signal: AbortSignal.timeout(20_000),
    })
    const body = (await res.json().catch(() => ({}))) as { quizId?: string; error?: string }
    if (!res.ok || !body.quizId) {
      return { ok: false, error: body.error ?? `HTTP ${res.status}` }
    }
    return { ok: true, data: { quizId: body.quizId } }
  } catch (err) {
    return { ok: false, error: (err as Error).message }
  }
}

/** Mints a one-time browser handoff URL that signs the user in and starts the quiz. */
export async function createHandoff(input: {
  externalUserId: string
  displayName?: string
  externalQuizId: string
  returnUrl?: string
}): Promise<ApiResult<{ url: string; expiresAt: string }>> {
  if (!isQuizRendererConfigured()) return { ok: false, error: "not configured" }
  try {
    const res = await fetch(`${BASE_URL}/api/external/handoff`, {
      method: "POST",
      headers: signedHeaders(JSON.stringify(input)),
      body: JSON.stringify(input),
      signal: AbortSignal.timeout(20_000),
    })
    const body = (await res.json().catch(() => ({}))) as {
      url?: string
      error?: string
    }
    if (!res.ok || !body.url) {
      return { ok: false, error: body.error ?? `HTTP ${res.status}` }
    }
    return { ok: true, data: { url: body.url, expiresAt: "" } }
  } catch (err) {
    return { ok: false, error: (err as Error).message }
  }
}

/**
 * Verifies a results webhook from quiz-renderer and returns the parsed body.
 * Throws when the signature or timestamp window fails.
 */
export async function verifyResultWebhook(request: Request): Promise<Record<string, unknown>> {
  const timestamp = request.headers.get("x-qr-timestamp")
  const signature = request.headers.get("x-qr-signature")
  if (!timestamp || !signature) {
    throw new Error("Missing signature headers")
  }
  const ts = Number(timestamp)
  if (!Number.isFinite(ts) || Math.abs(Date.now() / 1000 - ts) > 5 * 60) {
    throw new Error("Timestamp outside acceptance window")
  }
  const rawBody = await request.text()
  const expected = createHmac("sha256", API_SECRET)
    .update(`${timestamp}.${rawBody}`)
    .digest("hex")
  if (expected !== signature) {
    throw new Error("Invalid signature")
  }
  return JSON.parse(rawBody) as Record<string, unknown>
}
