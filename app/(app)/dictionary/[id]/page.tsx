import Link from "next/link"
import { notFound } from "next/navigation"

import { Jp } from "@/components/jp"
import { TtsButton } from "@/components/tts-button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { exampleSentences, hydrate, teachingUnit } from "@/lib/dictionary"
import { posLabel } from "@/lib/jmdict-tags"
import { PageCrumbs } from "@/components/page-crumbs"

export const metadata = { title: "Word" }

export default async function WordPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [word] = await hydrate([id])
  if (!word) notFound()

  const [sentences, unit] = await Promise.all([exampleSentences(word), teachingUnit(word.id)])
  const display = word.kanjiForms[0]?.text ?? word.kanaForms[0]?.text ?? ""

  return (
    <div className="space-y-6">
      <PageCrumbs
        items={[
          { label: "Dictionary", href: "/dictionary" },
          { label: display || word.romaji },
        ]}
      />
      <div className="flex items-center gap-3">
        <Jp jp={display} kana={word.kanaForms[0]?.text ?? ""} romaji={word.romaji} className="text-4xl font-bold" />
        <TtsButton text={word.kanaForms[0]?.text ?? display} className="size-9" />
        {word.common && <Badge variant="secondary">common</Badge>}
        {word.jlptLevel && <Badge variant="outline">JLPT N{word.jlptLevel}</Badge>}
      </div>

      <div className="space-y-1 text-muted-foreground">
        {word.kanjiForms.length > 0 && (
          <p>
            <span className="font-medium text-foreground">Kanji:</span>{" "}
            {word.kanjiForms.map((k) => k.text).join("、")}
          </p>
        )}
        <p>
          <span className="font-medium text-foreground">Readings:</span>{" "}
          {word.kanaForms.map((k) => k.text).join("、")}
        </p>
        <p>
          <span className="font-medium text-foreground">Romaji:</span> {word.romaji}
        </p>
      </div>

      {unit && (
        <p className="text-sm">
          Taught in{" "}
          <Link href={`/learn/${unit.unit.level.toLowerCase()}`} className="underline">
            {unit.unit.level} Unit {unit.unit.order} — {unit.unit.title}
          </Link>
        </p>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Meanings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {word.senses.map((sense, i) => (
            <div key={i} className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-semibold text-muted-foreground">{i + 1}.</span>
                <p>
                  {sense.glosses.map((g, j) => (
                    <span key={j}>
                      {j > 0 && "; "}
                      {g}
                    </span>
                  ))}
                </p>
              </div>
              {sense.pos.length > 0 && (
                <p className="pl-5 text-xs text-muted-foreground">
                  {sense.pos.map(posLabel).join(", ")}
                </p>
              )}
              {sense.info.length > 0 && (
                <p className="pl-5 text-xs italic text-muted-foreground">{sense.info.join(", ")}</p>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {sentences.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Example sentences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {sentences.map((s) => (
              <div key={s.id} className="flex items-start gap-2">
                <Jp jp={s.jp} kana={s.jp} className="min-w-0 flex-1 text-base" />
                <TtsButton text={s.jp} />
              </div>
            ))}
            <p className="text-xs text-muted-foreground">
              Sentences from Tatoeba (CC BY 2.0 FR).
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
