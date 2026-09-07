import Link from "next/link"
import { Download } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { prisma } from "@/lib/db"

export const metadata = { title: "Quiz packs" }

export default async function QuizExportsPage() {
  const units = await prisma.unit.findMany({
    orderBy: [{ level: "asc" }, { order: "asc" }],
    include: { lessons: { orderBy: { order: "asc" }, select: { id: true, order: true, grammarLabel: true, title: true } } },
  })

  const byLevel = new Map<string, typeof units>()
  for (const u of units) {
    const list = byLevel.get(u.level) ?? []
    list.push(u)
    byLevel.set(u.level, list)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Quiz packs</h1>
        <p className="max-w-2xl text-muted-foreground">
          Download any lesson or unit as a quiz JSON file and import it into{" "}
          <a href="http://quiz-renderer.vercel.app/quizzes/new" className="underline" target="_blank" rel="noreferrer">
            quiz-renderer
          </a>{" "}
          for extra practice — or use it with any tool that accepts the quiz-renderer format.
          In-app practice already covers the same material.
        </p>
      </div>

      {units.length === 0 && <p className="text-muted-foreground">No content seeded yet.</p>}

      {[...byLevel.entries()].map(([level, levelUnits]) => (
        <Card key={level}>
          <CardHeader>
            <CardTitle>{level}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {levelUnits.map((unit) => (
              <div key={unit.id}>
                <div className="mb-1 flex items-center gap-2">
                  <Link href={`/learn/${unit.level.toLowerCase()}/${unit.id}`} className="font-medium hover:underline">
                    Unit {unit.order} — {unit.title}
                  </Link>
                  <a
                    href={`/api/quiz-exports/${unit.id}`}
                    className="inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs transition-colors hover:bg-accent"
                    download
                  >
                    <Download className="size-3" /> unit pack
                  </a>
                </div>
                <div className="flex flex-wrap gap-1.5 pl-4">
                  {unit.lessons.map((ls) => (
                    <a
                      key={ls.id}
                      href={`/api/quiz-exports/${ls.id}`}
                      className="inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs text-muted-foreground transition-colors hover:bg-accent"
                      download
                    >
                      <Download className="size-3" />
                      {ls.order}. {ls.grammarLabel}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
