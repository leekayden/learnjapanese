import Link from "next/link"
import { notFound } from "next/navigation"

import { Jp } from "@/components/jp"
import { StrokeKanji } from "@/components/stroke-kanji"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { prisma } from "@/lib/db"

export const metadata = { title: "Kanji" }

export default async function KanjiDetailPage({ params }: { params: Promise<{ char: string }> }) {
  const { char } = await params
  const decoded = decodeURIComponent(char)
  const kanji = await prisma.kanji.findUnique({ where: { char: decoded }, include: { unit: true } })
  if (!kanji) notFound()

  const strokeData = kanji.strokeData as { strokes: string[] } | null
  const meanings = (kanji.meanings as string[]) ?? []
  const onyomi = (kanji.onyomi as string[]) ?? []
  const kunyomi = (kanji.kunyomi as string[]) ?? []

  // example words containing this kanji (from taught vocab)
  const taughtWords = kanji.unitId
    ? await prisma.unitVocab.findMany({
        where: { unitId: kanji.unitId },
        include: { word: { select: { kanjiForms: true, kanaForms: true, senses: true, romaji: true } } },
        orderBy: { order: "asc" },
        take: 60,
      })
    : []
  const contains = taughtWords.filter((v) => {
    const kanjiForms = (v.word.kanjiForms as { text: string }[]) ?? []
    return kanjiForms.some((f) => f.text.includes(decoded))
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Jp jp={decoded} kana={decoded} className="text-6xl font-bold" />
        <div className="space-y-1">
          <div className="flex flex-wrap gap-1">
            {kanji.level && <Badge variant="outline">{kanji.level}</Badge>}
            <Badge variant="secondary">{kanji.strokeCount} strokes</Badge>
            {kanji.grade && <Badge variant="secondary">grade {kanji.grade}</Badge>}
          </div>
          {kanji.unit && (
            <p className="text-sm text-muted-foreground">
              <Link href={`/learn/${kanji.unit.level.toLowerCase()}/${kanji.unit.id}`} className="hover:underline">
                {kanji.unit.level} Unit {kanji.unit.order}
              </Link>
            </p>
          )}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Stroke order</CardTitle>
        </CardHeader>
        <CardContent>
          {strokeData?.strokes?.length ? (
            <StrokeKanji data={strokeData} />
          ) : (
            <p className="text-sm text-muted-foreground">No stroke data for this character.</p>
          )}
          <p className="mt-3 text-xs text-muted-foreground">Stroke data © KanjiVG (CC BY-SA 3.0)</p>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Meanings</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{meanings.slice(0, 6).join(", ") || "—"}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Readings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 text-sm">
            <p>
              <span className="font-medium">On:</span> <span className="font-jp">{onyomi.join("、") || "—"}</span>
            </p>
            <p>
              <span className="font-medium">Kun:</span> <span className="font-jp">{kunyomi.join("、") || "—"}</span>
            </p>
          </CardContent>
        </Card>
      </div>

      {contains.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Words with {decoded}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2 sm:grid-cols-2">
            {contains.map((v) => {
              const kanjiForms = (v.word.kanjiForms as { text: string }[]) ?? []
              const kanaForms = (v.word.kanaForms as { text: string }[]) ?? []
              const glosses = ((v.word.senses as { glosses: string[] }[]) ?? [])[0]?.glosses ?? []
              return (
                <div key={v.id} className="rounded-lg border p-2 text-sm">
                  <Jp jp={kanjiForms[0]?.text ?? kanaForms[0]?.text ?? ""} kana={kanaForms[0]?.text ?? ""} romaji={v.word.romaji} className="font-medium" />
                  <p className="text-muted-foreground">{glosses[0]}</p>
                </div>
              )
            })}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
