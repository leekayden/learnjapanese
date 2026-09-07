// FSRS-lite scheduler: understandable and forgiving.
// grades: 0 = again, 1 = hard, 2 = good, 3 = easy
import { prisma } from "@/lib/db"

const MINUTES = 60 * 1000
const INTERVALS = [10 * MINUTES, 1 * 24 * 60 * MINUTES, 3 * 24 * 60 * MINUTES, 7 * 24 * 60 * MINUTES, 16 * 24 * 60 * MINUTES, 35 * 24 * 60 * MINUTES, 70 * 24 * 60 * MINUTES, 140 * 24 * 60 * MINUTES]

export function nextDue(reps: number, lapses: number, grade: 0 | 1 | 2 | 3, now = new Date()): { due: Date; reps: number; lapses: number } {
  if (grade === 0) {
    return { due: new Date(now.getTime() + 10 * MINUTES), reps: 0, lapses: lapses + 1 }
  }
  const repsNext = reps + 1
  let interval = INTERVALS[Math.min(repsNext, INTERVALS.length) - 1]!
  if (grade === 1) interval = Math.max(30 * MINUTES, Math.round(interval / 2))
  if (grade === 3) interval = Math.round(interval * 1.3)
  return { due: new Date(now.getTime() + interval), reps: repsNext, lapses }
}

export type ReviewCardData = {
  cardId: string
  cardType: "VOCAB_RECOG" | "VOCAB_RECALL" | "KANJI_MEANING" | "KANJI_READING" | "GRAMMAR_CLOZE"
  question: import("@/lib/quiz").QuizQuestion
}

/** Build review questions for due cards. */
export async function buildReviewSession(userId: string, limit = 20): Promise<ReviewCardData[]> {
  const dueCards = await prisma.srsCard.findMany({
    where: { userId, due: { lte: new Date() }, suspended: false },
    orderBy: { due: "asc" },
    take: limit,
  })
  if (!dueCards.length) return []

  const wordIds = dueCards.filter((c) => c.cardType === "VOCAB_RECOG" || c.cardType === "VOCAB_RECALL").map((c) => c.refId)
  const chars = dueCards.filter((c) => c.cardType === "KANJI_MEANING" || c.cardType === "KANJI_READING").map((c) => c.refId)
  const quizIds = dueCards.filter((c) => c.cardType === "GRAMMAR_CLOZE").map((c) => c.refId)

  const [words, kanji, quizItems, learnedKanji] = await Promise.all([
    wordIds.length ? prisma.word.findMany({ where: { id: { in: wordIds } } }) : [],
    chars.length ? prisma.kanji.findMany({ where: { char: { in: chars } } }) : [],
    quizIds.length ? prisma.quizItem.findMany({ where: { id: { in: quizIds } } }) : [],
    prisma.kanji.findMany({
      where: { unitId: { not: null } },
      select: { char: true, meanings: true, onyomi: true, kunyomi: true },
      take: 300,
    }),
  ])

  const wordById = new Map(words.map((w) => [w.id, w]))
  const kanjiByChar = new Map(kanji.map((k) => [k.char, k]))
  const quizById = new Map(quizItems.map((q) => [q.id, q.payload as import("@/lib/quiz").QuizQuestion]))

  const meaningPool = learnedKanji.flatMap((k) => (k.meanings as string[]) ?? []).filter(Boolean)
  const readingPool = learnedKanji.flatMap((k) => [...((k.onyomi as string[]) ?? []), ...((k.kunyomi as string[]) ?? [])]).filter(Boolean)
  // gloss pool from the level words the user has seen (approximate: same pool)
  const userVocab = await prisma.unitVocab.findMany({
    select: { wordId: true },
    distinct: ["wordId"],
    take: 1200,
  })
  const glosses = userVocab.length
    ? (
        await prisma.word.findMany({
          where: { id: { in: userVocab.slice(0, 300).map((v) => v.wordId) } },
          select: { senses: true },
        })
      )
        .map((w) => (w.senses as { glosses: string[] }[])?.[0]?.glosses?.[0])
        .filter((g): g is string => !!g)
    : []

  const cards: ReviewCardData[] = []
  for (const card of dueCards) {
    const id = `rev-${card.cardType}-${card.refId}`
    if (card.cardType === "VOCAB_RECOG") {
      const w = wordById.get(card.refId)
      if (!w) continue
      const kanjiForms = (w.kanjiForms as { text: string }[]) ?? []
      const kanaForms = (w.kanaForms as { text: string }[]) ?? []
      const senses = (w.senses as { glosses: string[] }[]) ?? []
      const display = kanjiForms[0]?.text ?? kanaForms[0]?.text ?? ""
      const gloss = senses[0]?.glosses?.[0] ?? ""
      if (!display || !gloss) continue
      const distractors = pick3(glosses, gloss, card.refId)
      cards.push({
        cardId: card.id,
        cardType: card.cardType,
        question: {
          id,
          type: "single",
          text: `What does **${display}${kanaForms[0]?.text && kanaForms[0].text !== display ? ` (${kanaForms[0].text})` : ""}** mean?`,
          points: 1,
          options: [{ id: "opt_0", label: gloss }, ...distractors.map((d, i) => ({ id: `opt_${i + 1}`, label: d }))],
          answer: "opt_0",
        },
      })
    } else if (card.cardType === "VOCAB_RECALL") {
      const w = wordById.get(card.refId)
      if (!w) continue
      const kanjiForms = (w.kanjiForms as { text: string }[]) ?? []
      const kanaForms = (w.kanaForms as { text: string }[]) ?? []
      const senses = (w.senses as { glosses: string[] }[]) ?? []
      const gloss = senses[0]?.glosses?.[0] ?? ""
      if (!gloss) continue
      const accept = [kanjiForms[0]?.text, kanaForms[0]?.text].filter((x): x is string => !!x)
      cards.push({
        cardId: card.id,
        cardType: card.cardType,
        question: {
          id,
          type: "short-answer",
          text: `How do you say **${gloss}** in Japanese? (kana is fine)`,
          points: 1,
          answer: accept[0],
          accept,
        },
      })
    } else if (card.cardType === "KANJI_MEANING") {
      const k = kanjiByChar.get(card.refId)
      if (!k) continue
      const meanings = (k.meanings as string[]) ?? []
      const meaning = meanings.slice(0, 2).join(", ")
      if (!meaning) continue
      const distractors = pick3(meaningPool, meaning, card.refId + "m")
      cards.push({
        cardId: card.id,
        cardType: card.cardType,
        question: {
          id,
          type: "single",
          text: `What does the kanji **${card.refId}** mean?`,
          points: 1,
          options: [{ id: "opt_0", label: meaning }, ...distractors.map((d, i) => ({ id: `opt_${i + 1}`, label: d }))],
          answer: "opt_0",
        },
      })
    } else if (card.cardType === "KANJI_READING") {
      const k = kanjiByChar.get(card.refId)
      if (!k) continue
      const onyomi = (k.onyomi as string[]) ?? []
      const kunyomi = (k.kunyomi as string[]) ?? []
      const reading = onyomi[0] ?? kunyomi[0]
      if (!reading) continue
      const distractors = pick3(readingPool, reading, card.refId + "r")
      cards.push({
        cardId: card.id,
        cardType: card.cardType,
        question: {
          id,
          type: "single",
          text: `Which is a reading of **${card.refId}**?`,
          points: 1,
          options: [{ id: "opt_0", label: reading }, ...distractors.map((d, i) => ({ id: `opt_${i + 1}`, label: d }))],
          answer: "opt_0",
        },
      })
    } else {
      // GRAMMAR_CLOZE
      const payload = quizById.get(card.refId)
      if (!payload) continue
      cards.push({ cardId: card.id, cardType: card.cardType, question: { ...payload, id } })
    }
  }
  return cards
}

function pick3(pool: string[], exclude: string, seed: string): string[] {
  const out: string[] = []
  let h = 5381
  for (let i = 0; i < seed.length; i++) h = ((h << 5) + h + seed.charCodeAt(i)) | 0
  const start = Math.abs(h) % Math.max(1, pool.length)
  for (let i = 0; i < pool.length && out.length < 3; i++) {
    const candidate = pool[(start + i) % pool.length]!
    if (candidate !== exclude && !out.includes(candidate)) out.push(candidate)
  }
  return out
}
