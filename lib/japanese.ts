export type ScriptMode = "FURIGANA" | "HIRAGANA" | "ROMAJI"
export type FuriganaMode = "ALWAYS" | "HOVER" | "OFF"

export const SCRIPT_MODES: ScriptMode[] = ["FURIGANA", "HIRAGANA", "ROMAJI"]

/** A Japanese string with everything needed to render in any script mode. */
export type JpTextData = {
  /** Sentence/word as written with kanji. */
  jp: string
  /** Full kana reading. */
  kana: string
  /** Pre-computed Hepburn romaji (falls back to wanakana at render time). */
  romaji?: string
  /** Word-level segments for furigana rendering. */
  segments?: JpSegment[]
}

/** One word/chunk: `base` is the surface text (kanji + okurigana), `reading` its kana. */
export type JpSegment = {
  base: string
  reading?: string
}

/** Convenience helper for authored content. */
export function jp(jp: string, kana: string, segments?: JpSegment[], romaji?: string): JpTextData {
  return { jp, kana, romaji, segments }
}
