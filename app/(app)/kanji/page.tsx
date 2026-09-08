import Link from "next/link"

import { Jp } from "@/components/jp"
import { RadicalSearch } from "@/components/radical-search"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { prisma } from "@/lib/db"
import type { Level } from "@/content/types"

export const metadata = { title: "My kanji" }

const LEVELS: Level[] = ["N5", "N4", "N3", "N2", "N1"]

export default async function KanjiPage({
  searchParams,
}: {
  searchParams: Promise<{ r?: string }>
}) {
  const { r = "" } = await searchParams
  const selectedRadicals = r.split(",").map((x) => x.trim()).filter(Boolean)

  // Radical search: kanji containing ALL selected radicals (from the full
  // kanjidic2 set), or the course-taught grid when no radicals selected.
  if (selectedRadicals.length) {
    const matches = await prisma.kanji.findMany({
      where: {
        AND: selectedRadicals.map((rad) => ({ radicals: { array_contains: rad } })),
      },
      select: { char: true },
      take: 250,
    })
    const chars = matches.map((m) => m.char)
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Kanji by radical</h1>
          <p className="text-muted-foreground">
            Kanji containing {selectedRadicals.join(" + ")} — {chars.length} matches.
          </p>
        </div>
        <RadicalSearch selected={selectedRadicals} />
        <div className="grid grid-cols-6 gap-2 sm:grid-cols-10 md:grid-cols-14">
          {chars.map((char) => (
            <Link
              key={char}
              href={`/kanji/${encodeURIComponent(char)}`}
              className="rounded-lg border p-2 text-center transition-colors hover:bg-accent/50"
            >
              <Jp jp={char} kana={char} className="text-2xl" />
            </Link>
          ))}
        </div>
        {chars.length === 0 && (
          <p className="text-muted-foreground">No kanji match — remove a radical and try again.</p>
        )}
      </div>
    )
  }

  const kanji = await prisma.kanji.findMany({
    where: { unitId: { not: null } },
    orderBy: { char: "asc" },
  })

  const byLevel = new Map<string, typeof kanji>()
  for (const k of kanji) {
    const key = k.level ?? "N5"
    const list = byLevel.get(key) ?? []
    list.push(k)
    byLevel.set(key, list)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">My kanji</h1>
        <p className="text-muted-foreground">
          Kanji introduced by the course, with stroke order, readings and meanings.
        </p>
      </div>
      <RadicalSearch selected={selectedRadicals} />

      {kanji.length === 0 && (
        <p className="text-muted-foreground">No kanji yet — start a unit to meet your first characters.</p>
      )}

      {LEVELS.map((level) => {
        const list = byLevel.get(level)
        if (!list?.length) return null
        return (
          <Card key={level}>
            <CardHeader>
              <CardTitle>
                {level} <span className="text-sm font-normal text-muted-foreground">({list.length})</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
              {list.map((k) => (
                <Link
                  key={k.char}
                  href={`/kanji/${encodeURIComponent(k.char)}`}
                  className="rounded-lg border p-2 text-center transition-colors hover:bg-accent/50"
                >
                  <Jp jp={k.char} kana={k.char} className="text-2xl" />
                  <p className="mt-0.5 line-clamp-1 text-[10px] text-muted-foreground">
                    {(k.meanings as string[])?.[0]}
                  </p>
                </Link>
              ))}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
