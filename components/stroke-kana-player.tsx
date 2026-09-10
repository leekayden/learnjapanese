"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Pause, Play, RotateCcw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { getKanaStrokes } from "@/content/kana-strokes"
import { cn } from "@/lib/utils"

const STROKE_MS = 520
const GAP_MS = 90
const EASE = "cubic-bezier(0.35, 0.05, 0.15, 1)"

function pathStart(d: string): { x: number; y: number } | null {
  const m = /^M\s*([-\d.]+)[,\s]+([-\d.]+)/.exec(d.trim())
  if (!m) return null
  return { x: Number(m[1]), y: Number(m[2]) }
}

type Props = {
  char: string
  size?: number
  className?: string
  autoPlay?: boolean
  showControls?: boolean
  showNumbers?: boolean
  onComplete?: () => void
}

/**
 * Smooth KanjiVG stroke-order player.
 * Draws each stroke with stroke-dashoffset, chained sequentially.
 * Remount via `key={char}` when the character changes.
 */
export function StrokeKanaPlayer({
  char,
  size = 220,
  className,
  autoPlay = true,
  showControls = true,
  showNumbers = true,
  onComplete,
}: Props) {
  const strokes = useMemo(() => getKanaStrokes(char) ?? [], [char])
  const pathsRef = useRef<(SVGPathElement | null)[]>([])
  const animsRef = useRef<Animation[]>([])
  const onCompleteRef = useRef(onComplete)
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [ready, setReady] = useState(false)

  const total = strokes.length

  const cancelAnims = useCallback(() => {
    for (const a of animsRef.current) a.cancel()
    animsRef.current = []
  }, [])

  const freezeCurrent = useCallback(() => {
    let completed = 0
    animsRef.current.forEach((a) => {
      const t = Number(a.currentTime ?? 0)
      const effect = a.effect as KeyframeEffect | null
      if (!effect) return
      const timing = effect.getTiming()
      const dur = Number(timing.duration ?? 0)
      const delay = Number(timing.delay ?? 0)
      const p = effect.target as SVGPathElement
      const len = p.getTotalLength()
      if (t >= delay + dur) {
        p.style.strokeDashoffset = "0"
        completed++
      } else if (t <= delay) {
        p.style.strokeDashoffset = `${len}`
      } else {
        const local = (t - delay) / (dur || 1)
        p.style.strokeDashoffset = `${len * (1 - Math.min(1, Math.max(0, local)))}`
      }
    })
    setProgress((v) => Math.max(v, completed))
    cancelAnims()
    setPlaying(false)
  }, [cancelAnims])

  const playFrom = useCallback(
    (from: number) => {
      if (!total) return
      for (const a of animsRef.current) a.cancel()
      animsRef.current = []
      setPlaying(true)

      let delay = 0

      pathsRef.current.forEach((p, i) => {
        if (!p) return
        const len = p.getTotalLength()
        p.style.strokeDasharray = `${len}`
        p.style.strokeDashoffset = i < from ? "0" : `${len}`
        p.style.opacity = "1"
      })

      for (let i = from; i < total; i++) {
        const p = pathsRef.current[i]
        if (!p) continue
        const len = p.getTotalLength()
        const dur = Math.min(720, Math.max(320, STROKE_MS * (len / 280)))
        const anim = p.animate(
          [{ strokeDashoffset: len }, { strokeDashoffset: 0 }],
          { duration: dur, delay, easing: EASE, fill: "forwards" },
        )
        animsRef.current.push(anim)
        delay += dur + GAP_MS
        anim.onfinish = () => {
          setProgress((v) => Math.max(v, i + 1))
          if (i === total - 1) {
            setPlaying(false)
            onCompleteRef.current?.()
          }
        }
      }

      if (from >= total) {
        setPlaying(false)
        setProgress(total)
        onCompleteRef.current?.()
      }
    },
    [total],
  )

  // Measure paths after mount
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      pathsRef.current.forEach((p) => {
        if (!p) return
        const len = p.getTotalLength()
        p.style.strokeDasharray = `${len}`
        p.style.strokeDashoffset = `${len}`
      })
      setReady(true)
      if (autoPlay && total) {
        playFrom(0)
      } else {
        pathsRef.current.forEach((p) => {
          if (p) p.style.strokeDashoffset = "0"
        })
        setProgress(total)
      }
    })
    return () => {
      cancelAnimationFrame(id)
      cancelAnims()
    }
  }, [autoPlay, playFrom, total, cancelAnims])

  function replay() {
    pathsRef.current.forEach((p) => {
      if (!p) return
      const len = p.getTotalLength()
      p.style.strokeDasharray = `${len}`
      p.style.strokeDashoffset = `${len}`
    })
    setProgress(0)
    playFrom(0)
  }

  function togglePlay() {
    if (playing) {
      freezeCurrent()
      return
    }
    if (progress >= total) {
      replay()
    } else {
      playFrom(progress)
    }
  }

  if (!total) {
    return (
      <div
        className={cn("flex flex-col items-center justify-center", className)}
        style={{ width: size, height: size }}
      >
        <span className="font-jp text-muted-foreground" style={{ fontSize: size * 0.55 }}>
          {char}
        </span>
        <p className="mt-2 text-xs text-muted-foreground">No stroke data</p>
      </div>
    )
  }

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          viewBox="0 0 109 109"
          width={size}
          height={size}
          className="absolute inset-0 text-muted-foreground/30"
          aria-hidden
        >
          <rect x="1" y="1" width="107" height="107" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <line x1="54.5" y1="4" x2="54.5" y2="105" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="4" y1="54.5" x2="105" y2="54.5" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
        </svg>

        <svg
          viewBox="0 0 109 109"
          width={size}
          height={size}
          className={cn("kana-stroke-svg absolute inset-0", !ready && "opacity-0")}
          role="img"
          aria-label={`Stroke order for ${char}`}
        >
          {strokes.map((d, i) => (
            <path key={`ghost-${i}`} d={d} className="kana-stroke-ghost" style={{ opacity: 0.12 }} />
          ))}
          {strokes.map((d, i) => (
            <path
              key={`draw-${i}`}
              ref={(el) => {
                pathsRef.current[i] = el
              }}
              d={d}
              className="kana-stroke-draw"
            />
          ))}
          {showNumbers &&
            ready &&
            strokes.map((d, i) => {
              const s = pathStart(d)
              if (!s) return null
              return (
                <g key={`num-${i}`} className="kana-stroke-num">
                  <circle cx={s.x} cy={s.y} r="5.5" className="kana-stroke-num-bg" />
                  <text x={s.x} y={s.y} className="kana-stroke-num-text">
                    {i + 1}
                  </text>
                </g>
              )
            })}
        </svg>
      </div>

      {showControls && (
        <div className="flex items-center gap-1.5">
          <Button variant="outline" size="sm" onClick={togglePlay} disabled={!total}>
            {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
            {playing ? "Pause" : progress >= total ? "Replay" : progress > 0 ? "Resume" : "Play"}
          </Button>
          <Button variant="outline" size="sm" onClick={replay} disabled={!total}>
            <RotateCcw className="size-3.5" />
            Reset
          </Button>
          <span className="ml-1 w-10 text-center text-xs tabular-nums text-muted-foreground">
            {Math.min(progress, total)}/{total}
          </span>
        </div>
      )}
    </div>
  )
}

export function KanaGlyph({ char, className }: { char: string; className?: string }) {
  return <span className={cn("font-jp", className)}>{char}</span>
}
