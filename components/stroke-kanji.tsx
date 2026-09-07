"use client"

import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"

type StrokeData = { strokes: string[] }

/** Step-through KanjiVG stroke animation. */
export function StrokeKanji({ data, size = 220 }: { data: StrokeData; size?: number }) {
  const [step, setStep] = useState(1)
  const [playing, setPlaying] = useState(false)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)
  const total = data.strokes.length

  useEffect(() => {
    if (playing) {
      timer.current = setInterval(() => {
        setStep((s) => {
          if (s >= total) {
            setPlaying(false)
            return s
          }
          return s + 1
        })
      }, 450)
      return () => {
        if (timer.current) clearInterval(timer.current)
      }
    }
  }, [playing, total])

  return (
    <div className="flex flex-col items-center gap-3">
      <svg viewBox="0 0 109 109" width={size} height={size} className="kanji-stroke-svg">
        {data.strokes.slice(0, step).map((d, i) => (
          <path key={i} d={d} />
        ))}
      </svg>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={() => setStep(Math.max(1, step - 1))} disabled={playing}>
          ←
        </Button>
        <span className="w-12 text-center text-sm text-muted-foreground">
          {step}/{total}
        </span>
        <Button variant="outline" size="sm" onClick={() => setStep(Math.min(total, step + 1))} disabled={playing}>
          →
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            if (playing) {
              setPlaying(false)
            } else {
              setStep(1)
              setPlaying(true)
            }
          }}
        >
          {playing ? "Stop" : "Play"}
        </Button>
      </div>
    </div>
  )
}
