import Link from "next/link"

import { Jp } from "@/components/jp"
import { TtsButton } from "@/components/tts-button"
import { Badge } from "@/components/ui/badge"
import { posShort } from "@/lib/jmdict-tags"
import { cn } from "@/lib/utils"
import { pickGloss, type WordFull } from "@/lib/dictionary"

/** Primary surface form: prefer the common kanji spelling, else common kana, else first. */
export function primaryForms(word: WordFull) {
  const kanji = word.kanjiForms[0]?.text ?? null
  const kana =
    word.kanaForms.find((k) => k.common)?.text ??
    word.kanaForms.find((k) => !word.kanjiForms.length)?.text ??
    word.kanaForms[0]?.text ??
    ""
  return { kanji, kana }
}

export function WordEntry({
  word,
  href,
  className,
}: {
  word: WordFull
  href?: string
  className?: string
}) {
  const { kanji, kana } = primaryForms(word)
  const glosses = word.senses[0]?.glosses ?? []
  const firstSense = glosses.slice(0, 4).join("; ")
  const best = pickGloss(word.senses)
  const glossLine =
    best && !firstSense.startsWith(best) ? `${best}${firstSense ? ` · ${firstSense}` : ""}` : firstSense
  const posTags = [...new Set(word.senses.flatMap((s) => s.pos))].slice(0, 3)
  const display = kanji ?? kana

  const body = (
    <div className={cn("flex items-start gap-3 py-3", className)}>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <Jp jp={display} kana={kana} romaji={word.romaji} className="text-xl font-medium" />
          {kanji && kana !== kanji && (
            <Jp jp={kana} kana={kana} romaji={word.romaji} className="text-sm text-muted-foreground" />
          )}
          <span className="text-xs italic text-muted-foreground">{word.romaji}</span>
        </div>
        <p className="mt-1 line-clamp-2 text-sm">{glossLine}</p>
        {posTags.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1">
            {posTags.map((t) => (
              <span key={t} className="text-xs text-muted-foreground">
                {posShort(t)}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex shrink-0 flex-col items-end gap-1">
        {word.common && <Badge variant="secondary">common</Badge>}
        {word.jlptLevel && <Badge variant="outline">N{word.jlptLevel}</Badge>}
      </div>
      <TtsButton text={kana || display} className="mt-1" />
    </div>
  )

  return href ? (
    <Link href={href} className="block rounded-lg px-3 transition-colors hover:bg-accent/50">
      {body}
    </Link>
  ) : (
    body
  )
}
