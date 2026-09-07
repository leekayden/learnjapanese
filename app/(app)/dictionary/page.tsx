import Link from "next/link"

import { WordEntry } from "@/components/word-entry"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { searchWords } from "@/lib/dictionary"

export const metadata = { title: "Dictionary" }

export default async function DictionaryPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; level?: string; page?: string }>
}) {
  const { q = "", level = "", page = "1" } = await searchParams
  const levelNum = level ? Number(level) : undefined
  const pageNum = Math.max(1, Number(page) || 1)

  const results = q.trim()
    ? await searchWords(q.trim(), { level: levelNum, page: pageNum, perPage: 20 })
    : []

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dictionary</h1>
        <p className="text-muted-foreground">
          Search the full JMdict Japanese–English dictionary (~218,000 entries) — by Japanese,
          kana, romaji, or English meaning.
        </p>
      </div>

      <form action="/dictionary" className="flex flex-wrap gap-2">
        <Input
          name="q"
          defaultValue={q}
          placeholder="e.g. 食べる, たべる, taberu, or eat"
          className="min-w-60 flex-1"
        />
        <select
          name="level"
          defaultValue={level}
          className="h-9 rounded-md border border-input bg-background px-3 text-sm"
        >
          <option value="">Any level</option>
          <option value="5">N5</option>
          <option value="4">N4</option>
          <option value="3">N3</option>
          <option value="2">N2</option>
          <option value="1">N1</option>
        </select>
        <Button type="submit">Search</Button>
      </form>

      {q.trim() ? (
        results.length ? (
          <div className="divide-y rounded-xl border">
            {results.map((word) => (
              <WordEntry key={word.id} word={word} href={`/dictionary/${word.id}`} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No results for “{q}”.</p>
        )
      ) : null}

      {results.length === 20 && (
        <div className="flex justify-center">
          <Button variant="outline" render={<Link href={`/dictionary?q=${encodeURIComponent(q)}&level=${level}&page=${pageNum + 1}`} />}>
            Next page
          </Button>
        </div>
      )}
    </div>
  )
}
