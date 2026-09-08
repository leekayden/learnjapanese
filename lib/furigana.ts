/**
 * Aligns a kanji sentence with its full kana reading into furigana segments.
 * Uses backtracking so ambiguous okurigana (日本人 + にほんじんじゃ) resolve
 * correctly. Returns null when alignment is impossible (caller renders plain).
 */
export type FuriganaSegment = { base: string; reading?: string }

// Includes the iteration mark 々 (U+3005, reads as part of the repeated
// kanji's reading) and 〆/ヶ-type marks handled by exact kana matching.
const KANJI_RE = /[\u3400-\u9fbf\uf900-\ufaff\u3005\u3007\u{20000}-\u{323af}]/u

function isKanji(ch: string): boolean {
  return KANJI_RE.test(ch)
}

/** Katakana → hiragana, so surface spellings compare loosely. */
function toHiragana(s: string): string {
  return s.replace(/[\u30a1-\u30f6]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0x60))
}

export function alignFurigana(jp: string, kana: string): FuriganaSegment[] | null {
  // Compare on katakana-normalised copies; store the original surface.
  const result = tryAlign(toHiragana(jp), toHiragana(kana), 0, 0, [])
  if (!result) return null
  // Rebuild bases from the ORIGINAL jp by walking lengths.
  let ji = 0
  for (const seg of result) {
    seg.base = jp.slice(ji, ji + seg.base.length)
    ji += seg.base.length
  }
  return result
}

function tryAlign(jp: string, kana: string, ji: number, ki: number, segs: FuriganaSegment[]): FuriganaSegment[] | null {
  if (ji >= jp.length) {
    return ki >= kana.length ? segs : null
  }

  const ch = jp[ji]!

  if (isKanji(ch)) {
    // collect the whole kanji run
    let jEnd = ji
    while (jEnd < jp.length && isKanji(jp[jEnd]!)) jEnd++
    const kanjiRun = jp.slice(ji, jEnd)
    const nextSurface = jp[jEnd] // undefined at end of string

    // try every possible reading length, shortest first, backtracking on
    // failure. When the next surface char is another kanji (毎日薬), the
    // boundary is unknown — try all and let deeper recursion validate.
    const nextIsKanji = nextSurface !== undefined && isKanji(nextSurface)
    for (let kEnd = ki + 1; kEnd <= kana.length; kEnd++) {
      if (nextSurface !== undefined && !nextIsKanji) {
        if (kana[kEnd] !== nextSurface) continue
      } else if (nextSurface === undefined && kEnd !== kana.length) {
        continue
      }
      const reading = kana.slice(ki, kEnd)
      const result = tryAlign(jp, kana, jEnd, kEnd, [...segs, { base: kanjiRun, reading }])
      if (result) return result
    }
    return null
  }

  // plain surface kana/punctuation must match the kana stream exactly
  let jEnd = ji
  let kEnd = ki
  while (jEnd < jp.length && !isKanji(jp[jEnd]!) && kEnd < kana.length && jp[jEnd] === kana[kEnd]) {
    jEnd++
    kEnd++
  }
  if (jEnd === ji) {
    // tolerate chōonpu / space mismatches
    if (ch === "ー" || ch === " " || ch === "　") {
      const consume = kana[ki] === ch ? 1 : 0
      return tryAlign(jp, kana, ji + 1, ki + consume, [...segs, { base: ch }])
    }
    return null
  }
  return tryAlign(jp, kana, jEnd, kEnd, [...segs, { base: jp.slice(ji, jEnd) }])
}

/** Whether the text contains any kanji (and thus may need furigana). */
export function hasKanji(text: string): boolean {
  for (const ch of text) if (isKanji(ch)) return true
  return false
}
