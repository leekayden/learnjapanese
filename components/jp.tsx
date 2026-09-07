"use client"

import { toRomaji } from "wanakana"

import { cn } from "@/lib/utils"
import type { JpTextData } from "@/lib/japanese"
import { useScriptSettings } from "@/components/script-settings"

const SCRIPT_LABELS: Record<string, string> = {
  FURIGANA: "漢字",
  HIRAGANA: "かな",
  ROMAJI: "Romaji",
}

/**
 * Renders Japanese text according to the user's script setting:
 * kanji + furigana (ruby), full hiragana, or romaji.
 */
export function Jp({
  jp,
  kana,
  romaji,
  segments,
  className,
}: JpTextData & { className?: string }) {
  const { scriptMode, furiganaMode } = useScriptSettings()

  if (scriptMode === "HIRAGANA") {
    return <span className={cn("font-jp", className)}>{kana || jp}</span>
  }

  if (scriptMode === "ROMAJI") {
    return (
      <span className={cn("font-jp", className)} lang="ja-Latn">
        {romaji || (kana ? toRomaji(kana) : jp)}
      </span>
    )
  }

  if (segments?.length && furiganaMode !== "OFF") {
    return (
      <span
        className={cn("font-jp", className, furiganaMode === "HOVER" && "furigana-hover")}
        lang="ja"
      >
        {segments.map((seg, i) =>
          seg.reading ? (
            <ruby key={i}>
              {seg.base}
              <rt>{seg.reading}</rt>
            </ruby>
          ) : (
            <span key={i}>{seg.base}</span>
          ),
        )}
      </span>
    )
  }

  return (
    <span className={cn("font-jp", className)} lang="ja">
      {jp}
    </span>
  )
}

/** Small navbar button showing the current script and cycling on click. */
export function ScriptModeToggle({ className }: { className?: string }) {
  const { scriptMode, cycleScriptMode } = useScriptSettings()
  return (
    <button
      type="button"
      onClick={cycleScriptMode}
      title={`Script: ${scriptMode.toLowerCase()} (click to change)`}
      className={cn(
        "inline-flex h-8 items-center justify-center rounded-md border px-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
        className,
      )}
    >
      {SCRIPT_LABELS[scriptMode]}
    </button>
  )
}
