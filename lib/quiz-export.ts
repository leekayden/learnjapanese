import { prisma } from "@/lib/db"
import type { QuizJson, QuizQuestion } from "@/lib/quiz"

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
    questions: items.map((i) => i.payload as QuizQuestion),
  }
}

export async function buildUnitQuizJson(unitId: string): Promise<QuizJson | null> {
  const unit = await prisma.unit.findUnique({ where: { id: unitId } })
  if (!unit) return null
  const [lessonItems, examItems, vocabItems] = await Promise.all([
    prisma.quizItem.findMany({
      where: { unitId, scope: "LESSON_PRACTICE" },
      orderBy: { order: "asc" },
    }),
    prisma.quizItem.findMany({
      where: { unitId, scope: "UNIT_EXAM" },
      orderBy: { order: "asc" },
    }),
    prisma.quizItem.findMany({
      where: { unitId, scope: "VOCAB_PRACTICE" },
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
    questions: [...examItems, ...vocabItems, ...lessonItems].map((i) => i.payload as QuizQuestion),
  }
}
