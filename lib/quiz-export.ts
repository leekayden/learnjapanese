import { prisma } from "@/lib/db"
import type { QuizJson, QuizQuestion } from "@/lib/quiz"

/**
 * Converts an internal QuizQuestion payload into the exact format
 * quiz-renderer's QuizJsonSchema expects (lib/quiz-schema.ts).
 * Key differences:
 *   ordering:    correctOrder → answer
 *   fill-blank:  blankAnswers → answers
 *   matching:    pairMap → answer
 *   short-answer: accept is stripped (quiz-renderer uses single `answer`)
 */
export function toQuizRendererFormat(q: QuizQuestion): QuizQuestion {
  const base: QuizQuestion = {
    id: q.id,
    type: q.type,
    text: q.text,
    hint: q.hint,
    points: q.points,
    explanation: q.explanation,
    options: q.options,
    items: q.items,
    prompts: q.prompts,
    responses: q.responses,
    caseInsensitive: q.caseInsensitive,
  }

  switch (q.type) {
    case "single":
      return { ...base, type: "single", answer: q.answer as string }
    case "multiple":
      return { ...base, type: "multiple", answers: q.answers ?? [] }
    case "true-false":
      return { ...base, type: "true-false", answer: q.answer as boolean }
    case "short-answer":
      return { ...base, type: "short-answer", answer: q.answer as string }
    case "ordering":
      return { ...base, type: "ordering", answer: (q.correctOrder ?? []) as unknown as string }
    case "fill-blank":
      return { ...base, type: "fill-blank", answers: q.blankAnswers ?? [] }
    case "matching":
      return { ...base, type: "matching", answer: (q.pairMap ?? {}) as unknown as string }
    default:
      return base
  }
}

export async function buildLessonQuizJson(lessonId: string): Promise<QuizJson | null> {
  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: { unit: { select: { level: true, order: true, title: true } }, examples: true },
  })
  if (!lesson) return null
  const items = await prisma.quizItem.findMany({
    where: { lessonId, scope: "LESSON_PRACTICE" },
    orderBy: { order: "asc" },
  })
  return {
    id: `lj-${lessonId}`,
    title: `${lesson.unit.level} U${lesson.unit.order} L${lesson.order} — ${lesson.grammarLabel}`,
    description: lesson.title,
    coverNotes: [
      lesson.summary,
      ...(lesson.examples.map((e) => `**${e.jp}** — ${e.en}`) ?? []),
    ],
    feedbackMode: "immediate",
    shuffleQuestions: false,
    shuffleOptions: true,
    questions: items.map((i) => toQuizRendererFormat(i.payload as QuizQuestion)),
  }
}

export async function buildUnitQuizJson(unitId: string): Promise<QuizJson | null> {
  const unit = await prisma.unit.findUnique({ where: { id: unitId } })
  if (!unit) return null
  const [examItems, vocabItems, lessonItems] = await Promise.all([
    prisma.quizItem.findMany({
      where: { unitId, scope: "UNIT_EXAM" },
      orderBy: { order: "asc" },
    }),
    prisma.quizItem.findMany({
      where: { unitId, scope: "VOCAB_PRACTICE" },
      orderBy: { order: "asc" },
    }),
    prisma.quizItem.findMany({
      where: { unitId, scope: "LESSON_PRACTICE" },
      orderBy: { order: "asc" },
    }),
  ])
  const vocabCards = await prisma.unitVocab.findMany({
    where: { unitId },
    orderBy: { order: "asc" },
    include: { word: { select: { kanjiForms: true, kanaForms: true, senses: true } } },
  })
  return {
    id: `lj-${unitId}`,
    title: `${unit.level} Unit ${unit.order} — ${unit.title}`,
    description: `${vocabCards.length} vocab words`,
    coverNotes: [
      unit.description,
      "Vocabulary in this pack:",
      ...vocabCards.map((v) => {
        const kanji = (v.word.kanjiForms as { text: string }[])[0]?.text
        const kana = (v.word.kanaForms as { text: string }[])[0]?.text ?? ""
        const gloss = (v.word.senses as { glosses: string[] }[])[0]?.glosses?.[0]
        return `- **${kanji ?? kana} (${kana})** — ${gloss}`
      }),
    ],
    feedbackMode: "immediate",
    shuffleQuestions: true,
    shuffleOptions: true,
    questions: [...examItems, ...vocabItems, ...lessonItems].map((i) =>
      toQuizRendererFormat(i.payload as QuizQuestion)
    ),
  }
}
