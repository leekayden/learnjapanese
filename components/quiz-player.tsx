"use client"

import { useMemo, useReducer, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Check, ChevronRight, RotateCcw, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { gradeQuestion, scoreAttempt, type QuizQuestion } from "@/lib/quiz"

// Render **bold** markdown used in auto-generated questions as bold text.
function Md({ text, jp }: { text: string; jp?: boolean }) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className={cn(jp && /[　-ヿ㐀-龿]/.test(part) && "font-jp")}>
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  )
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j]!, a[i]!]
  }
  return a
}

function labelOf(q: QuizQuestion, id: string): string {
  return q.options?.find((o) => o.id === id)?.label ?? q.items?.find((o) => o.id === id)?.label ?? id
}

type Response = unknown

/** Reported by runners so the finish screen can say whether the result persisted. */
export type SaveOutcome = { saved: boolean; reason?: string }

export function QuizPlayer({
  questions,
  title,
  onFinish,
  submitLabel = "Finish",
  backHref,
  nextHref,
  passMark = 75,
  passLabel = "Great work — you passed!",
  failLabel = "Not quite — review the notes and try again. Unlimited attempts!",
  hideFooter = false,
  onCheckedChange,
}: {
  questions: QuizQuestion[]
  title: string
  onFinish: (score: number, responses: Record<string, Response>) => Promise<SaveOutcome | void>
  submitLabel?: string
  backHref?: string
  nextHref?: string
  passMark?: number
  passLabel?: string
  failLabel?: string
  hideFooter?: boolean
  onCheckedChange?: (checked: boolean, correct: boolean) => void
}) {
  const router = useRouter()
  const [idx, setIdx] = useState(0)
  const [responses, setResponses] = useState<Record<string, Response>>({})
  const [checked, setChecked] = useState(false)
  const [done, setDone] = useState(false)
  const [saving, setSaving] = useState(false)
  const [result, setResult] = useState<{ score: number } | null>(null)
  const [saveOutcome, setSaveOutcome] = useState<SaveOutcome | null>(null)
  const [nonce, bumpNonce] = useReducer((x: number) => x + 1, 0)

  const q = questions[idx]!

  // Per-question shuffled view data, re-shuffled on retry.
  const shuffled = useMemo(() => {
    const view: Record<string, unknown> = {}
    if (q.type === "single" || q.type === "multiple") view.options = shuffle(q.options ?? [])
    if (q.type === "ordering") view.items = shuffle(q.items ?? [])
    if (q.type === "matching") {
      view.prompts = q.prompts ?? []
      view.responses = shuffle(q.responses ?? [])
    }
    return view as {
      options?: { id: string; label: string }[]
      items?: { id: string; label: string }[]
      prompts?: { id: string; label: string }[]
      responses?: { id: string; label: string }[]
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q.id, nonce])

  const current = responses[q.id]
  const correct = checked && gradeQuestion(q, current)

  function setResponse(v: unknown) {
    if (checked) return
    setResponses((r) => ({ ...r, [q.id]: v }))
  }

  function check() {
    setChecked(true)
    onCheckedChange?.(true, gradeQuestion(q, responses[q.id]))
  }

  async function finish() {
    setSaving(true)
    const score = scoreAttempt(questions, responses).score
    try {
      const outcome = await onFinish(score, responses)
      setSaveOutcome(outcome ?? null)
    } catch {
      setSaveOutcome({ saved: false })
    }
    setResult({ score })
    setDone(true)
    setSaving(false)
  }

  function next() {
    if (idx + 1 < questions.length) {
      setIdx(idx + 1)
      setChecked(false)
      onCheckedChange?.(false, false)
    } else {
      void finish()
    }
  }

  function retry() {
    setIdx(0)
    setResponses({})
    setChecked(false)
    setDone(false)
    setResult(null)
    setSaveOutcome(null)
    onCheckedChange?.(false, false)
    bumpNonce()
  }

  if (done && result) {
    const passed = result.score >= passMark
    const continueHref = passed ? (nextHref ?? backHref) : backHref
    const continueLabel = passed
      ? nextHref
        ? "Next up"
        : "Continue"
      : "Back to notes"
    return (
      <Card className="text-center">
        <CardHeader>
          <CardTitle className={cn("text-3xl", passed ? "text-green-600 dark:text-green-400" : "text-destructive")}>
            {result.score}%
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            {passed ? passLabel : failLabel}
          </p>
          <p className="text-xs text-muted-foreground">Pass mark is {passMark}%</p>
          {saveOutcome && (
            <p className="text-xs text-muted-foreground">
              {saveOutcome.saved ? (
                "Progress saved."
              ) : saveOutcome.reason === "unauthenticated" ? (
                <>
                  Not saved — <Link href="/login" className="underline">sign in</Link> to keep this result.
                </>
              ) : (
                <>Couldn&apos;t save this result.</>
              )}
            </p>
          )}
        </CardHeader>
        <CardFooter className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="outline" onClick={retry}>
            <RotateCcw className="mr-2 size-4" /> Try again
          </Button>
          {continueHref && (
            <Button onClick={() => router.push(continueHref)} disabled={saving}>
              {continueLabel} <ChevronRight className="ml-1 size-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="gap-3">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <CardTitle className="text-base">{title}</CardTitle>
          <span>
            {idx + 1} / {questions.length}
          </span>
        </div>
        <Progress value={(idx / questions.length) * 100} />
      </CardHeader>

      <CardContent className="space-y-4">
        <QuestionView q={q} shuffled={shuffled} current={current} setResponse={setResponse} checked={checked} />

        {checked && (
          <div
            className={cn(
              "flex items-start gap-2 rounded-lg border p-3 text-sm",
              correct
                ? "border-green-600/30 bg-green-500/10 text-green-700 dark:text-green-400"
                : "border-destructive/30 bg-destructive/10 text-destructive",
            )}
          >
            {correct ? <Check className="mt-0.5 size-4 shrink-0" /> : <X className="mt-0.5 size-4 shrink-0" />}
            <div>
              <p className="font-medium">{correct ? "Correct!" : "Not quite."}</p>
              {!correct && <AnswerReveal q={q} />}
              {q.explanation && <p className="mt-1 text-muted-foreground">{q.explanation}</p>}
            </div>
          </div>
        )}
      </CardContent>

      {!hideFooter && (
        <CardFooter className="justify-end gap-2">
          {!checked ? (
            <Button
              disabled={current === undefined || current === "" || (Array.isArray(current) && current.length === 0)}
              onClick={check}
            >
              Check
            </Button>
          ) : (
            <Button onClick={next}>
              {idx + 1 < questions.length ? "Next" : submitLabel} <ChevronRight className="ml-1 size-4" />
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  )
}

function AnswerReveal({ q }: { q: QuizQuestion }) {
  let answer = ""
  if (q.type === "single" || q.type === "true-false") answer = q.answer === true ? "True" : q.answer === false ? "False" : (q.options?.find((o) => o.id === q.answer)?.label ?? "")
  else if (q.type === "multiple") answer = (q.answers ?? []).map((id) => labelOf(q, id)).join(", ")
  else if (q.type === "short-answer") answer = (q.accept ?? [q.answer ?? ""]).join(" / ")
  else if (q.type === "ordering") answer = (q.correctOrder ?? []).map((id) => q.items?.find((o) => o.id === id)?.label ?? id).join(" ")
  else if (q.type === "fill-blank") answer = (q.blankAnswers ?? []).join(" / ")
  else if (q.type === "matching") answer = Object.entries(q.pairMap ?? {}).map(([p, r]) => `${q.prompts?.find((x) => x.id === p)?.label} → ${q.responses?.find((x) => x.id === r)?.label}`).join(", ")
  return answer ? <p>Answer: <span className="font-jp">{answer}</span></p> : null
}

function QuestionView({
  q,
  shuffled,
  current,
  setResponse,
  checked,
}: {
  q: QuizQuestion
  shuffled: {
    options?: { id: string; label: string }[]
    items?: { id: string; label: string }[]
    prompts?: { id: string; label: string }[]
    responses?: { id: string; label: string }[]
  }
  current: unknown
  setResponse: (v: unknown) => void
  checked: boolean
}) {
  const isJp = /[\u3000-\u30ff\u3400-\u9fbf]/.test(q.text)

  switch (q.type) {
    case "single":
      return (
        <div className="space-y-3">
          <p className={cn("font-medium", isJp && "font-jp text-lg")}><Md text={q.text} jp /></p>
          <div className="grid gap-2">
            {(shuffled.options ?? []).map((o) => {
              const selected = current === o.id
              const isAnswer = checked && o.id === q.answer
              const isWrongPick = checked && selected && o.id !== q.answer
              return (
                <button
                  key={o.id}
                  type="button"
                  disabled={checked}
                  onClick={() => setResponse(o.id)}
                  className={cn(
                    "rounded-lg border px-4 py-2.5 text-left text-sm transition-colors disabled:cursor-default",
                    selected && !checked && "border-primary bg-primary/5",
                    isAnswer && "border-green-600 bg-green-500/10",
                    isWrongPick && "border-destructive bg-destructive/10",
                    !checked && !selected && "hover:bg-accent/50",
                  )}
                >
                  <span className={cn(isJp && /[\u3000-\u30ff\u3400-\u9fbf]/.test(o.label) && "font-jp")}>{o.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      )

    case "multiple": {
      const selected = (Array.isArray(current) ? current : []) as string[]
      return (
        <div className="space-y-3">
          <p className="font-medium"><Md text={q.text} /></p>
          <div className="grid gap-2">
            {(shuffled.options ?? []).map((o) => {
              const on = selected.includes(o.id)
              const isAnswer = checked && (q.answers ?? []).includes(o.id)
              return (
                <button
                  key={o.id}
                  type="button"
                  disabled={checked}
                  onClick={() => setResponse(on ? selected.filter((s) => s !== o.id) : [...selected, o.id])}
                  className={cn(
                    "rounded-lg border px-4 py-2.5 text-left text-sm transition-colors disabled:cursor-default",
                    on && !checked && "border-primary bg-primary/5",
                    isAnswer && "border-green-600 bg-green-500/10",
                    !checked && !on && "hover:bg-accent/50",
                  )}
                >
                  {o.label}
                </button>
              )
            })}
          </div>
        </div>
      )
    }

    case "true-false":
      return (
        <div className="space-y-4">
          <p className={cn("font-medium", isJp && "font-jp text-lg")}>{q.text}</p>
          <div className="flex gap-2">
            {[true, false].map((v) => (
              <Button
                key={String(v)}
                variant={current === v ? "default" : "outline"}
                disabled={checked}
                onClick={() => setResponse(v)}
                className={cn(checked && v === q.answer && "border-green-600 bg-green-500/10 text-green-700 dark:text-green-400")}
              >
                {v ? "True" : "False"}
              </Button>
            ))}
          </div>
        </div>
      )

    case "short-answer":
      return (
        <div className="space-y-3">
          <p className="font-medium">{q.text}</p>
          <Input
            value={typeof current === "string" ? current : ""}
            disabled={checked}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Type your answer"
            className="font-jp"
          />
        </div>
      )

    case "ordering": {
      const picked = (Array.isArray(current) ? current : []) as string[]
      const remaining = (shuffled.items ?? []).filter((o) => !picked.includes(o.id))
      return (
        <div className="space-y-3">
          <p className="font-medium">{q.text}</p>
          <div className="min-h-10 rounded-lg border border-dashed p-2">
            <div className="flex flex-wrap gap-2">
              {picked.map((id) => (
                <button
                  key={id}
                  type="button"
                  disabled={checked}
                  onClick={() => setResponse(picked.filter((p) => p !== id))}
                  className="rounded-md bg-primary/10 px-3 py-1.5 text-sm font-jp"
                >
                  {labelOf(q, id)} ×
                </button>
              ))}
              {picked.length === 0 && <span className="p-1 text-sm text-muted-foreground">Click the tokens below in the right order</span>}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {remaining.map((o) => (
              <button
                key={o.id}
                type="button"
                disabled={checked}
                onClick={() => setResponse([...picked, o.id])}
                className="rounded-md border px-3 py-1.5 text-sm font-jp transition-colors hover:bg-accent/50"
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )
    }

    case "fill-blank": {
      const parts = q.text.split(/\{\{blank\}\}/)
      const answers = (Array.isArray(current) ? current : [""]) as string[]
      const blanks = (q.blankAnswers ?? []).length
      return (
        <div className="space-y-3">
          <p className="font-medium">
            {parts.map((part, i) => (
              <span key={i}>
                {part}
                {i < blanks && <span className="mx-1 inline-block border-b border-primary font-mono">({i + 1})</span>}
              </span>
            ))}
          </p>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: blanks }).map((_, i) => (
              <Input
                key={i}
                value={answers[i] ?? ""}
                disabled={checked}
                onChange={(e) => {
                  const next = [...answers]
                  next[i] = e.target.value
                  setResponse(next)
                }}
                placeholder={`Blank ${i + 1}`}
                className="w-40 font-jp"
              />
            ))}
          </div>
        </div>
      )
    }

    case "matching": {
      const map = (typeof current === "object" && current !== null ? current : {}) as Record<string, string>
      return (
        <div className="space-y-3">
          <p className="font-medium">{q.text}</p>
          <div className="space-y-2">
            {(shuffled.prompts ?? []).map((p) => (
              <div key={p.id} className="flex items-center justify-between gap-3 rounded-lg border px-3 py-2">
                <span className="font-jp">{p.label}</span>
                <select
                  disabled={checked}
                  value={map[p.id] ?? ""}
                  onChange={(e) => setResponse({ ...map, [p.id]: e.target.value })}
                  className="h-8 rounded-md border border-input bg-background px-2 text-sm"
                >
                  <option value="">Choose…</option>
                  {(shuffled.responses ?? []).map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      )
    }

    default:
      return <p className="text-destructive">Unknown question type</p>
  }
}
