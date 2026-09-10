"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { Check, ChevronLeft, ChevronRight, RotateCcw, Volume2, X } from "lucide-react"

import { StrokeKanaPlayer } from "@/components/stroke-kana-player"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getKanaStrokes } from "@/content/kana-strokes"
import {
  chartFor,
  poolFor,
  type ChartRow,
  type KanaEntry,
  type Script,
  type SetId,
} from "@/content/kana"
import { cn } from "@/lib/utils"

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j]!, a[i]!]
  }
  return a
}

function speakJa(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = "ja-JP"
  u.rate = 0.85
  const voices = window.speechSynthesis.getVoices()
  const ja = voices.find((v) => v.lang.startsWith("ja"))
  if (ja) u.voice = ja
  window.speechSynthesis.speak(u)
}

/* ─────────────────────────── Chart ─────────────────────────── */

function ChartGrid({
  rows,
  columns,
  selected,
  onSelect,
}: {
  rows: ChartRow[]
  columns: string[]
  selected: string | null
  onSelect: (char: string, romaji: string) => void
}) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[420px]">
        <div
          className="grid gap-1.5"
          style={{ gridTemplateColumns: `2.5rem repeat(${columns.length}, minmax(0, 1fr))` }}
        >
          <div />
          {columns.map((c) => (
            <div
              key={c}
              className="pb-1 text-center text-[11px] font-medium tracking-wide text-muted-foreground uppercase"
            >
              {c}
            </div>
          ))}
          {rows.map((row) => (
            <div key={row.id} className="contents">
              <div className="flex items-center justify-end pr-1 text-[11px] font-medium text-muted-foreground uppercase">
                {row.label}
              </div>
              {row.cells.map((cell, i) =>
                cell.char ? (
                  <button
                    key={`${row.id}-${i}-${cell.char}`}
                    type="button"
                    onClick={() => onSelect(cell.char, cell.romaji)}
                    className={cn(
                      "group flex aspect-square flex-col items-center justify-center rounded-xl border border-border/80 bg-card transition-all",
                      "hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-sm",
                      "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
                      selected === cell.char &&
                        "-translate-y-0.5 border-foreground/40 bg-accent shadow-sm ring-1 ring-foreground/15",
                    )}
                  >
                    <span className="font-jp text-xl leading-none sm:text-2xl">{cell.char}</span>
                    <span className="mt-1 text-[10px] text-muted-foreground">{cell.romaji}</span>
                  </button>
                ) : (
                  <div
                    key={`empty-${row.id}-${i}`}
                    className="aspect-square rounded-xl border border-dashed border-border/50"
                  />
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DetailPanel({
  char,
  romaji,
  script,
  set,
  onClose,
}: {
  char: string
  romaji: string
  script: Script
  set: SetId
  onClose: () => void
}) {
  const strokes = getKanaStrokes(char)
  return (
    <Card className="min-h-[420px] overflow-visible">
      <CardHeader className="relative">
        <CardTitle className="flex min-h-8 items-center gap-2 pr-16">
          <span className="font-jp text-2xl">{char}</span>
          <span className="text-base font-normal text-muted-foreground">{romaji}</span>
        </CardTitle>
        <div className="mt-1 flex min-h-6 flex-wrap gap-1 pr-16">
          <Badge variant="secondary" className="capitalize">
            {script}
          </Badge>
          <Badge variant="outline" className="capitalize">
            {set}
          </Badge>
          <Badge variant="outline">
            {strokes?.length
              ? `${strokes.length} stroke${strokes.length === 1 ? "" : "s"}`
              : "combo"}
          </Badge>
        </div>
        <CardAction className="absolute top-3 right-3 flex gap-0.5">
          <Button variant="ghost" size="icon-sm" onClick={() => speakJa(char)} title="Pronounce">
            <Volume2 className="size-4" />
          </Button>
          <Button variant="ghost" size="icon-sm" onClick={onClose} title="Close">
            <X className="size-4" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2 pb-5">
        <div className="flex h-[240px] w-full items-start justify-center">
          <StrokeKanaPlayer key={char} char={char} size={200} autoPlay />
        </div>
        <p className="text-[11px] text-muted-foreground">Stroke data © KanjiVG (CC BY-SA 3.0)</p>
      </CardContent>
    </Card>
  )
}

/* ───────────────────────── Flashcards ───────────────────────── */

function Flashcards({ pool }: { pool: KanaEntry[] }) {
  const [deck, setDeck] = useState<KanaEntry[]>(() => shuffle(pool))
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState<Set<string>>(() => new Set())

  const card = deck[idx]

  const next = useCallback(() => {
    setFlipped(false)
    setIdx((i) => (i + 1) % Math.max(deck.length, 1))
  }, [deck.length])

  const prev = useCallback(() => {
    setFlipped(false)
    setIdx((i) => (i - 1 + Math.max(deck.length, 1)) % Math.max(deck.length, 1))
  }, [deck.length])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === " ") {
        e.preventDefault()
        setFlipped((f) => !f)
      } else if (e.key === "ArrowRight") next()
      else if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [next, prev])

  if (!card) {
    return <p className="text-sm text-muted-foreground">No cards in this set.</p>
  }

  const isKnown = known.has(card.char)

  function markKnown() {
    setKnown((s) => {
      const n = new Set(s)
      n.add(card.char)
      return n
    })
    next()
  }

  function reshuffle() {
    setDeck(shuffle(pool))
    setIdx(0)
    setFlipped(false)
    setKnown(new Set())
  }

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center gap-4">
      <div className="flex w-full items-center justify-between text-sm text-muted-foreground">
        <span>
          {idx + 1} / {deck.length}
        </span>
        <span>Known {known.size}</span>
        <Button variant="ghost" size="sm" onClick={reshuffle}>
          <RotateCcw className="size-3.5" /> Shuffle
        </Button>
      </div>

      <div className="kana-card-3d w-full" style={{ height: 300 }}>
        <button
          type="button"
          className={cn("kana-card-inner w-full cursor-pointer", flipped && "is-flipped")}
          onClick={() => setFlipped((f) => !f)}
          aria-label={flipped ? "Show kana" : "Show romaji"}
        >
          <div className="kana-card-face">
            <span className="text-xs tracking-wide text-muted-foreground uppercase">
              {card.script} · {card.set}
            </span>
            <span className="font-jp text-7xl leading-none">{card.char}</span>
            <span className="mt-4 text-xs text-muted-foreground">tap or space to flip</span>
          </div>
          <div className="kana-card-face kana-card-face-back gap-1 p-4">
            <span className="text-3xl font-semibold tracking-wide">{card.romaji}</span>
            <span className="font-jp text-xl text-muted-foreground">{card.char}</span>
            {getKanaStrokes(card.char) && (
              <div className="mt-1">
                <StrokeKanaPlayer
                  key={`${card.char}-${flipped}`}
                  char={card.char}
                  size={110}
                  autoPlay={flipped}
                  showControls={false}
                  showNumbers={false}
                />
              </div>
            )}
          </div>
        </button>
      </div>

      <div className="flex w-full items-center justify-center gap-2">
        <Button variant="outline" size="sm" onClick={prev}>
          <ChevronLeft className="size-3.5" /> Prev
        </Button>
        <Button variant="outline" size="sm" onClick={() => setFlipped((f) => !f)}>
          Flip
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={markKnown}
          className={cn(isKnown && "border-green-600/40 text-green-700 dark:text-green-400")}
        >
          <Check className="size-3.5" /> Known
        </Button>
        <Button variant="outline" size="sm" onClick={next}>
          Next <ChevronRight className="size-3.5" />
        </Button>
      </div>
    </div>
  )
}

/* ─────────────────────────── Quiz ─────────────────────────── */

type Q = {
  id: string
  prompt: string
  promptScript: "kana" | "romaji"
  answer: string
  options: string[]
  char: string
  romaji: string
}

function buildQuiz(pool: KanaEntry[], count: number, direction: "kana→romaji" | "romaji→kana"): Q[] {
  if (!pool.length) return []
  const sample = shuffle(pool).slice(0, Math.min(count, pool.length))
  return sample.map((entry, i) => {
    const others = pool.filter((e) => e.char !== entry.char && e.romaji !== entry.romaji)
    const distractors = shuffle(others)
      .map((e) => (direction === "kana→romaji" ? e.romaji : e.char))
      .filter((v, idx, arr) => arr.indexOf(v) === idx)
      .slice(0, 3)
    const answer = direction === "kana→romaji" ? entry.romaji : entry.char
    const options = shuffle([answer, ...distractors])
    return {
      id: `${entry.script}-${entry.char}-${i}`,
      prompt: direction === "kana→romaji" ? entry.char : entry.romaji,
      promptScript: direction === "kana→romaji" ? "kana" : "romaji",
      answer,
      options,
      char: entry.char,
      romaji: entry.romaji,
    }
  })
}

function Quiz({ pool }: { pool: KanaEntry[] }) {
  const [direction, setDirection] = useState<"kana→romaji" | "romaji→kana">("kana→romaji")
  const [count, setCount] = useState(10)
  const [questions, setQuestions] = useState<Q[]>(() => buildQuiz(pool, 10, "kana→romaji"))
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const [score, setScore] = useState({ right: 0, wrong: 0 })
  const [done, setDone] = useState(false)

  function start(dir = direction, n = count) {
    setDirection(dir)
    setCount(n)
    setQuestions(buildQuiz(pool, n, dir))
    setIdx(0)
    setPicked(null)
    setScore({ right: 0, wrong: 0 })
    setDone(false)
  }

  const q = questions[idx]

  function choose(opt: string) {
    if (picked || !q) return
    setPicked(opt)
    const ok = opt === q.answer
    setScore((s) => ({ right: s.right + (ok ? 1 : 0), wrong: s.wrong + (ok ? 0 : 1) }))
  }

  function nextQ() {
    setPicked(null)
    if (idx + 1 >= questions.length) {
      setDone(true)
    } else {
      setIdx((i) => i + 1)
    }
  }

  if (!pool.length) {
    return <p className="text-sm text-muted-foreground">No characters available for quiz.</p>
  }

  if (done) {
    const total = score.right + score.wrong
    const pct = total ? Math.round((score.right / total) * 100) : 0
    return (
      <div className="mx-auto flex max-w-sm flex-col items-center gap-4 text-center">
        <p className="text-5xl font-bold tabular-nums">{pct}%</p>
        <p className="text-muted-foreground">
          {score.right} correct · {score.wrong} wrong
        </p>
        <Button onClick={() => start()}>Try again</Button>
      </div>
    )
  }

  if (!q) return null

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {(["kana→romaji", "romaji→kana"] as const).map((d) => (
            <Button
              key={d}
              variant={direction === d ? "default" : "outline"}
              size="sm"
              onClick={() => start(d, count)}
            >
              {d === "kana→romaji" ? "Kana → Romaji" : "Romaji → Kana"}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {[10, 20, 46].map((n) => (
            <Button
              key={n}
              variant={count === n ? "secondary" : "outline"}
              size="sm"
              onClick={() => start(direction, n)}
            >
              {n}
            </Button>
          ))}
          <Button variant="outline" size="sm" onClick={() => start()} title="Restart">
            <RotateCcw className="size-3.5" />
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          {idx + 1} / {questions.length}
        </span>
        <span className="tabular-nums">
          {score.right}✓ {score.wrong}✗
        </span>
      </div>

      <Card>
        <CardContent className="flex flex-col items-center gap-4 py-8">
          {q.promptScript === "kana" ? (
            <>
              <span className="font-jp text-7xl leading-none">{q.prompt}</span>
              {picked && (
                <StrokeKanaPlayer
                  key={`quiz-stroke-${q.id}`}
                  char={q.char}
                  size={140}
                  autoPlay
                  showControls={false}
                  showNumbers
                />
              )}
            </>
          ) : (
            <span className="text-5xl font-semibold tracking-wide">{q.prompt}</span>
          )}
          {!picked && (
            <p className="text-sm text-muted-foreground">
              {q.promptScript === "kana" ? "What is the reading?" : "Which character is this?"}
            </p>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-2">
        {q.options.map((opt) => {
          const isAnswer = opt === q.answer
          const isPicked = opt === picked
          return (
            <button
              key={opt}
              type="button"
              disabled={!!picked}
              onClick={() => choose(opt)}
              className={cn(
                "rounded-xl border px-4 py-3 text-center transition-all",
                "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
                !picked && "hover:bg-accent hover:text-accent-foreground",
                picked && isAnswer && "border-green-600/50 bg-green-600/10 text-green-800 dark:text-green-300",
                picked && isPicked && !isAnswer && "border-destructive/50 bg-destructive/10 text-destructive",
                picked && !isAnswer && !isPicked && "opacity-50",
              )}
            >
              <span
                className={cn(
                  q.promptScript === "kana" ? "text-xl font-semibold tracking-wide" : "font-jp text-2xl",
                )}
              >
                {opt}
              </span>
            </button>
          )
        })}
      </div>

      {picked && (
        <Button className="self-end" onClick={nextQ}>
          {idx + 1 >= questions.length ? "See results" : "Next"}
          <ChevronRight className="size-4" />
        </Button>
      )}
    </div>
  )
}

/* ────────────────────────── Explorer ────────────────────────── */

export function KanaExplorer() {
  const [script, setScript] = useState<Script>("hiragana")
  const [setId, setSetId] = useState<SetId>("basic")
  const [selected, setSelected] = useState<{ char: string; romaji: string } | null>(null)
  const [tab, setTab] = useState("chart")

  const rows = useMemo(() => chartFor(script, setId), [script, setId])
  const columns = setId === "yoon" ? ["ya", "yu", "yo"] : ["a", "i", "u", "e", "o"]
  const poolKey = `${script}-${setId}`

  const flashPool = useMemo(() => poolFor(script, setId), [script, setId])
  const quizPool = useMemo(() => poolFor(script, setId), [script, setId])

  function changeScript(s: Script) {
    setScript(s)
    setSelected(null)
  }

  function changeSet(s: SetId) {
    setSetId(s)
    setSelected(null)
  }

  useEffect(() => {
    if (!selected) return
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [selected])

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex rounded-lg bg-muted p-0.5">
          {(["hiragana", "katakana"] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => changeScript(s)}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium capitalize transition-colors",
                script === s
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="flex rounded-lg bg-muted p-0.5">
          {(
            [
              ["basic", "Basic"],
              ["voiced", "Voiced"],
              ["yoon", "Yōon"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => changeSet(id)}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                setId === id
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <Tabs value={tab} onValueChange={(v) => setTab(String(v))}>
        <TabsList>
          <TabsTrigger value="chart">Chart</TabsTrigger>
          <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>

        <TabsContent value="chart" className="mt-4">
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
            <ChartGrid
              rows={rows}
              columns={columns}
              selected={selected?.char ?? null}
              onSelect={(char, romaji) => setSelected({ char, romaji })}
            />
            <div className="lg:sticky lg:top-20">
              {selected ? (
                <DetailPanel
                  char={selected.char}
                  romaji={selected.romaji}
                  script={script}
                  set={setId}
                  onClose={() => setSelected(null)}
                />
              ) : (
                <Card className="min-h-[420px]">
                  <CardHeader>
                    <CardTitle className="text-muted-foreground">Stroke order</CardTitle>
                  </CardHeader>
                  <CardContent className="flex h-[280px] flex-col items-center justify-center gap-2 text-center">
                    <p className="text-sm text-muted-foreground">
                      Select a character from the chart
                    </p>
                    <p className="text-xs text-muted-foreground/70">
                      Stroke animation appears here
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="flashcards" className="mt-4">
          <Flashcards key={`flash-${poolKey}`} pool={flashPool} />
        </TabsContent>

        <TabsContent value="quiz" className="mt-4">
          <Quiz key={`quiz-${poolKey}`} pool={quizPool} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
