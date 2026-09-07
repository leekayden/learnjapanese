import { prisma } from "@/lib/db"
import type { QuizQuestion } from "@/lib/quiz"

/** Compose a level exam from the level's unit exam items (deterministic). */
export async function composeLevelExam(level: "N5" | "N4" | "N3" | "N2" | "N1"): Promise<QuizQuestion[]> {
  const units = await prisma.unit.findMany({
    where: { level },
    orderBy: { order: "asc" },
    select: { id: true },
  })
  const items = await prisma.quizItem.findMany({
    where: { unitId: { in: units.map((u) => u.id) }, scope: "UNIT_EXAM" },
    orderBy: [{ unitId: "asc" }, { order: "asc" }],
  })

  const byUnit = new Map<string, QuizQuestion[]>()
  for (const item of items) {
    if (!item.unitId) continue
    const list = byUnit.get(item.unitId) ?? []
    list.push(item.payload as QuizQuestion)
    byUnit.set(item.unitId, list)
  }

  const out: QuizQuestion[] = []
  const maxPerUnit = 4
  for (let round = 0; round < maxPerUnit; round++) {
    for (const unitId of units.map((u) => u.id)) {
      const list = byUnit.get(unitId) ?? []
      const q = list[round]
      if (q && out.length < 40) out.push(q)
    }
  }
  return out.slice(0, 40)
}
