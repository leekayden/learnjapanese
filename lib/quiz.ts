// Quiz question payloads follow quiz-renderer's lib/quiz-schema.ts shape 1:1,
// so QuizItems can be exported and imported there directly.

export type QuizOption = { id: string; label: string }

export type QuizQuestion = {
  id: string
  type: "single" | "multiple" | "true-false" | "short-answer" | "ordering" | "fill-blank" | "matching"
  text: string
  hint?: string
  points: number
  explanation?: string
  // single / multiple
  options?: QuizOption[]
  answer?: string | boolean
  answers?: string[]
  // true-false
  // (answer: boolean)
  // short-answer
  accept?: string[] // our extension: all accepted answers for grading
  // ordering
  items?: QuizOption[]
  // fill-blank
  caseInsensitive?: boolean
  // matching
  prompts?: QuizOption[]
  responses?: QuizOption[]
  // ordering answer is string[]; fill-blank answers is string[]; matching answer is Record<string,string>
  correctOrder?: string[]
  blankAnswers?: string[]
  pairMap?: Record<string, string>
}

export type QuizJson = {
  id?: string
  title: string
  description?: string
  coverNotes?: string[]
  feedbackMode: "immediate" | "deferred" | "none"
  timeLimit?: number
  shuffleQuestions: boolean
  shuffleOptions: boolean
  questions: QuizQuestion[]
}

/** True when the response to a question is correct (mirrors quiz-renderer semantics). */
export function gradeQuestion(q: QuizQuestion, response: unknown): boolean {
  switch (q.type) {
    case "single":
      return response === q.answer
    case "multiple": {
      const expected = new Set(q.answers ?? [])
      const got = new Set(Array.isArray(response) ? response : [])
      if (expected.size !== got.size) return false
      for (const a of expected) if (!got.has(a)) return false
      return true
    }
    case "true-false":
      return response === q.answer
    case "short-answer": {
      const list = [...(q.accept ?? []), ...(typeof q.answer === "string" ? [q.answer] : [])]
      const norm = (s: string) => s.trim().toLowerCase()
      return typeof response === "string" && list.some((a) => norm(a) === norm(response))
    }
    case "ordering": {
      const expected = q.correctOrder ?? q.answers ?? []
      const got = Array.isArray(response) ? response : []
      return expected.length === got.length && expected.every((v, i) => v === got[i])
    }
    case "fill-blank": {
      const expected = q.blankAnswers ?? q.answers ?? []
      const got = Array.isArray(response) ? response : []
      const norm = (s: string) => (q.caseInsensitive === false ? s.trim() : s.trim().toLowerCase())
      return expected.length === got.length && expected.every((v, i) => norm(v) === norm(got[i] ?? ""))
    }
    case "matching": {
      const expected = q.pairMap ?? {}
      const got = (typeof response === "object" && response !== null ? response : {}) as Record<string, string>
      return Object.keys(expected).every((k) => expected[k] === got[k])
    }
    default:
      return false
  }
}

/** Count achievable points and earned points across responses. */
export function scoreAttempt(
  questions: QuizQuestion[],
  responses: Record<string, unknown>,
): { score: number; correctCount: number; totalPoints: number; earnedPoints: number } {
  let totalPoints = 0
  let earnedPoints = 0
  let correctCount = 0
  for (const q of questions) {
    totalPoints += q.points
    const ok = gradeQuestion(q, responses[q.id])
    if (ok) {
      correctCount++
      earnedPoints += q.points
    }
  }
  return {
    score: totalPoints ? Math.round((earnedPoints / totalPoints) * 100) : 0,
    correctCount,
    totalPoints,
    earnedPoints,
  }
}
