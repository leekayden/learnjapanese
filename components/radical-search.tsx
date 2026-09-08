"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"

import radicalsData from "@/content/radicals.json"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type RadEntry = { r: string; n: number }

const ALL: RadEntry[] = radicalsData

export function RadicalSearch({ selected }: { selected: string[] }) {
  const router = useRouter()
  const [showAll, setShowAll] = useState(false)
  const [picked, setPicked] = useState<string[]>(selected)

  const visible = useMemo(() => {
    const sorted = [...ALL].sort((a, b) => b.n - a.n)
    return showAll ? sorted : sorted.slice(0, 96)
  }, [showAll])

  function toggle(radical: string) {
    setPicked((p) => (p.includes(radical) ? p.filter((r) => r !== radical) : [...p, radical]))
  }

  function search() {
    if (!picked.length) {
      router.push("/kanji")
      return
    }
    router.push(`/kanji?r=${encodeURIComponent(picked.join(","))}`)
  }

  return (
    <div className="space-y-3 rounded-xl border p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">Search kanji by radicals</p>
        <Button variant="ghost" size="xs" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show common" : `Show all ${ALL.length}`}
        </Button>
      </div>
      <div className="flex flex-wrap gap-1">
        {visible.map(({ r, n }) => (
          <button
            key={r}
            type="button"
            onClick={() => toggle(r)}
            title={`${n} kanji`}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-md border text-lg transition-colors hover:bg-accent/60",
              picked.includes(r) && "border-primary bg-primary/10 font-medium",
            )}
          >
            {r}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm" onClick={search} disabled={!picked.length}>
          Find kanji ({picked.length})
        </Button>
        {picked.length > 0 && (
          <Button size="sm" variant="outline" onClick={() => setPicked([])}>
            Clear
          </Button>
        )}
      </div>
    </div>
  )
}
