import { prisma } from "@/lib/db"

export type WordKanjiForm = { text: string; common: boolean }
export type WordKanaForm = { text: string; common: boolean; appliesToKanji: string[] }
export type WordSense = { pos: string[]; glosses: string[]; info: string[] }

export type WordFull = {
  id: string
  common: boolean
  jlptLevel: number | null
  kanjiForms: WordKanjiForm[]
  kanaForms: WordKanaForm[]
  romaji: string
  senses: WordSense[]
}

export function parseWord(word: {
  id: string
  common: boolean
  jlptLevel: number | null
  kanjiForms: unknown
  kanaForms: unknown
  romaji: string
  senses: unknown
}): WordFull {
  return {
    id: word.id,
    common: word.common,
    jlptLevel: word.jlptLevel,
    kanjiForms: (word.kanjiForms as WordKanjiForm[]) ?? [],
    kanaForms: (word.kanaForms as WordKanaForm[]) ?? [],
    romaji: word.romaji,
    senses: (word.senses as WordSense[]) ?? [],
  }
}

/**
 * Pick the most teaching-friendly gloss: prefer content-word senses
 * (nouns/verbs/adjectives/pronouns) over interjections and expressions.
 */
export function pickGloss(senses: { pos: string[]; glosses: string[] }[]): string {
  const core = senses.filter((s) => s.pos.some((p) => /^(n|v|adj|pron|pn|ctr|num|vs)/.test(p)))
  const sense = core[0] ?? senses[0]
  return sense?.glosses?.[0] ?? ""
}

async function hasFulltextIndex(): Promise<boolean> {
  const rows = await prisma.$queryRawUnsafe<{ c: bigint }[]>(
    "SELECT COUNT(*) c FROM information_schema.STATISTICS WHERE table_schema = DATABASE() AND table_name = 'Word' AND index_type = 'FULLTEXT'",
  )
  return (rows[0]?.c ?? 0n) > 0n
}

export type SearchOptions = {
  level?: number
  commonOnly?: boolean
  page?: number
  perPage?: number
}

export async function searchWords(q: string, opts: SearchOptions = {}) {
  const perPage = opts.perPage ?? 20
  const page = Math.max(1, opts.page ?? 1)
  const offset = (page - 1) * perPage

  const clauses = []
  const params: unknown[] = []

  if (opts.level) {
    clauses.push("jlptLevel = ?")
    params.push(opts.level)
  }
  if (opts.commonOnly) clauses.push("common = 1")

  const where = clauses.length ? `AND ${clauses.join(" AND ")}` : ""
  const useFt = await hasFulltextIndex()

  if (useFt) {
    const rows = await prisma.$queryRawUnsafe<{ id: string }[]>(
      `SELECT id, MATCH(searchText) AGAINST (? IN NATURAL LANGUAGE MODE) score
       FROM Word WHERE MATCH(searchText) AGAINST (? IN NATURAL LANGUAGE MODE) ${where}
       ORDER BY score DESC, common DESC, CHAR_LENGTH(id) ASC
       LIMIT ? OFFSET ?`,
      q, q, perPage, offset,
    )
    return hydrate(rows.map((r) => r.id))
  }

  const like = `%${q}%`
  const rows = await prisma.$queryRawUnsafe<{ id: string }[]>(
    `SELECT id FROM Word WHERE searchText LIKE ? ${where} ORDER BY common DESC LIMIT ? OFFSET ?`,
    like, perPage, offset,
  )
  return hydrate(rows.map((r) => r.id))
}

export async function hydrate(ids: string[]): Promise<WordFull[]> {
  if (!ids.length) return []
  const rows = await prisma.word.findMany({ where: { id: { in: ids } } })
  const byId = new Map(rows.map((r) => [r.id, parseWord(r)]))
  return ids.map((id) => byId.get(id)).filter((w): w is WordFull => !!w)
}

/** Sentences containing the word's main surface forms (used on entry pages). */
export async function exampleSentences(word: WordFull, limit = 8) {
  const candidates = new Set<string>()
  for (const k of word.kanjiForms) candidates.add(k.text)
  for (const k of word.kanaForms) candidates.add(k.text)
  if (!candidates.size) return []
  const texts = [...candidates]
  const found = new Map<string, { id: number; jp: string; en: string | null }>()
  for (const text of texts) {
    const rows = await prisma.$queryRawUnsafe<{ id: number; jp: string; en: string | null }[]>(
      "SELECT id, jp, en FROM Sentence WHERE jp LIKE ? AND en IS NOT NULL LIMIT ?",
      `%${text}%`,
      limit,
    )
    for (const r of rows) if (!found.has(String(r.id))) found.set(String(r.id), r)
    if (found.size >= limit) break
  }
  return [...found.values()].slice(0, limit)
}

/** The unit (if any) whose vocab set teaches this word. */
export async function teachingUnit(wordId: string) {
  return prisma.unitVocab.findFirst({
    where: { wordId },
    orderBy: { order: "asc" },
    include: { unit: { select: { id: true, level: true, order: true, title: true } } },
  })
}
