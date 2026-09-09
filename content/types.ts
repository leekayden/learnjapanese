import { z } from "zod"

// ---------------------------------------------------------------------------
// Authored question format (compact). The seeder converts these into the
// quiz-renderer-compatible question payloads stored on QuizItem.
// ---------------------------------------------------------------------------

export const AuthoredQuestionSchema = z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("mcq"),
    text: z.string(),
    options: z.array(z.string()).min(2).max(6),
    /** index into options */
    answer: z.number().int(),
    explain: z.string().optional(),
    points: z.number().int().positive().default(1),
  }),
  z.object({
    kind: z.literal("multi"),
    text: z.string(),
    options: z.array(z.string()).min(2).max(8),
    answers: z.array(z.number().int()).min(1),
    explain: z.string().optional(),
    points: z.number().int().positive().default(1),
  }),
  z.object({
    kind: z.literal("tf"),
    text: z.string(),
    answer: z.boolean(),
    explain: z.string().optional(),
    points: z.number().int().positive().default(1),
  }),
  z.object({
    kind: z.literal("short"),
    text: z.string(),
    /** accepted answers (compared trimmed/case-insensitive) */
    accept: z.array(z.string()).min(1),
    explain: z.string().optional(),
    points: z.number().int().positive().default(1),
  }),
  z.object({
    kind: z.literal("order"),
    text: z.string(),
    /** tokens in the correct order; shuffled for the player */
    tokens: z.array(z.string()).min(2).max(10),
    explain: z.string().optional(),
    points: z.number().int().positive().default(1),
  }),
  z.object({
    kind: z.literal("blank"),
    text: z.string(),
    /** answers for each {{blank}} in text, in order */
    blanks: z.array(z.string()).min(1),
    explain: z.string().optional(),
    points: z.number().int().positive().default(1),
  }),
  z.object({
    kind: z.literal("match"),
    text: z.string(),
    pairs: z.array(z.tuple([z.string(), z.string()])).min(2).max(8),
    /** distractor responses */
    extra: z.array(z.string()).default([]),
    explain: z.string().optional(),
    points: z.number().int().positive().default(1),
  }),
])

export type AuthoredQuestion = z.input<typeof AuthoredQuestionSchema>

// ---------------------------------------------------------------------------
// Lesson body — the notes the user reads before practicing.
// ---------------------------------------------------------------------------

export const LessonBodySchema = z.object({
  /** What the grammar point means, in 1–3 plain sentences. */
  meaning: z.string(),
  /** Formation rules, e.g. "Verb て-form + います". */
  formation: z.array(z.object({ pattern: z.string(), note: z.string().optional() })).min(1),
  /** When/how to use it, incl. politeness and register. */
  usage: z.array(z.string()).min(1),
  /** Common mistakes and similar-grammar comparisons. */
  pitfalls: z.array(z.string()).default([]),
  /** Labels of related grammar points taught elsewhere in the course. */
  related: z.array(z.string()).default([]),
})

export type LessonBody = z.infer<typeof LessonBodySchema>

export const AuthoredExampleSchema = z.object({
  jp: z.string(),
  kana: z.string(),
  en: z.string(),
  note: z.string().optional(),
})

export type AuthoredExample = z.infer<typeof AuthoredExampleSchema>

export const AuthoredLessonSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/),
  title: z.string(),
  titleJp: z.string(),
  /** The grammar pattern as displayed, e.g. "〜てください". */
  grammarLabel: z.string(),
  summary: z.string(),
  body: LessonBodySchema,
  examples: z.array(AuthoredExampleSchema).min(3).max(6),
  practice: z.array(AuthoredQuestionSchema).min(3).max(14),
})

export type AuthoredLesson = z.infer<typeof AuthoredLessonSchema>

export const LEVELS = ["N5", "N4", "N3", "N2", "N1"] as const
export type Level = (typeof LEVELS)[number]

export const AuthoredUnitSchema = z.object({
  level: z.enum(LEVELS),
  order: z.number().int().positive(),
  title: z.string(),
  titleJp: z.string(),
  description: z.string(),
  /** JMdict entry ids, in teaching order. */
  vocab: z.array(z.string()),
  /** Kanji characters introduced by this unit. */
  kanji: z.array(z.string()),
  /** Extra hand-written exam questions (added to the auto-generated set). */
  exam: z.array(AuthoredQuestionSchema).default([]),
  lessons: z.array(AuthoredLessonSchema).min(1),
})

export type AuthoredUnit = z.input<typeof AuthoredUnitSchema>
