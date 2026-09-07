import type { AuthoredUnit } from "../../types"

export const u01: AuthoredUnit = {
  level: "N5",
  order: 1,
  title: "First sentences",
  titleJp: "はじめの一歩",
  description:
    "Say who things are: the です copula, the topic particle は, asking questions, pointing at things (これ・それ・あれ), possession with の, and 'also' with も.",
  vocab: [
    "私|わたし",
    "|これ",
    "|それ",
    "|あれ",
    "人|ひと",
    "先生|せんせい",
    "学生|がくせい",
    "留学生|りゅうがくせい",
    "学校|がっこう",
    "会社|かいしゃ",
    "家|いえ",
    "本|ほん",
    "辞書|じしょ",
    "新聞|しんぶん",
    "日本|にほん",
    "英語|えいご",
    "車|くるま",
    "猫|ねこ",
    "犬|いぬ",
    "友達|ともだち",
    "名前|なまえ",
    "何|なん",
    "誰|だれ",
  ],
  kanji: ["日", "本", "人", "一", "二", "三", "四", "五"],
  exam: [
    {
      kind: "order",
      text: "Build: “I am a student.”",
      tokens: ["私", "は", "学生", "です", "。"],
    },
    {
      kind: "mcq",
      text: "Which sentence asks “Whose book is this?”",
      options: [
        "これは 本です。",
        "これは 誰の 本ですか。",
        "この 本は いつですか。",
        "誰が 本を ありますか。",
      ],
      answer: 1,
      explain: "誰の = whose; this is これ → この before a noun; questions end in か.",
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n5-u01-l01",
      title: "Saying what something is",
      titleJp: "ＡはＢです",
      grammarLabel: "〜は〜です",
      summary: "The basic sentence pattern “A is B”.",
      body: {
        meaning:
          "「ＡはＢです」 means “A is B”. It identifies or describes A. は (pronounced “wa”) marks A as the topic — the thing you are talking about — and です is the polite “is”.",
        formation: [
          { pattern: "Ａ は Ｂ です", note: "Ａ = topic (noun), Ｂ = what it is, です = polite “to be”" },
          { pattern: "私は 学生です", note: "I am a student." },
        ],
        usage: [
          "です makes the sentence polite — use it with strangers, teachers, at work. Dropping it makes the sentence casual.",
          "は is written with the kana は (ha) but pronounced “wa” when used as a particle.",
          "Ｂ can be a noun (学生) or a na-adjective (元気). We meet adjectives later.",
        ],
        pitfalls: [
          "Do not use は for “and” — one sentence normally has one topic. 「私は学生で、…」 comes much later.",
          "Word order is fixed: topic first, です last. 「学生は私です」 means “The student is me” — a different sentence!",
        ],
        related: ["〜じゃありません (negation)", "〜か (questions)"],
      },
      examples: [
        { jp: "私は学生です。", kana: "わたしはがくせいです。", en: "I am a student." },
        { jp: "田中さんは先生です。", kana: "たなかさんはせんせいです。", en: "Mr. Tanaka is a teacher." },
        { jp: "これは日本語の本です。", kana: "これはにほんごのほんです。", en: "This is a Japanese book." },
        { jp: "あれは私の車です。", kana: "あれはわたしのくるまです。", en: "That is my car." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I am a student.”",
          tokens: ["私", "は", "学生", "です", "。"],
        },
        {
          kind: "blank",
          text: "田中さん ___ 先生です。",
          blanks: ["は"],
          explain: "田中さん is the topic, so it takes は.",
        },
        {
          kind: "mcq",
          text: "How is the particle は pronounced when marking a topic?",
          options: ["ha", "wa", "pa", "ba"],
          answer: 1,
          explain: "As a particle, は is always read “wa”.",
        },
        {
          kind: "mcq",
          text: "「これは私の車です」 means…",
          options: ["That is your car.", "This is my car.", "This car is not mine.", "Is this my car?"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "「私は先生です。」 means “I am a teacher.”",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n5-u01-l02",
      title: "Asking questions",
      titleJp: "〜ですか",
      grammarLabel: "〜ですか",
      summary: "Turn any です sentence into a question with か.",
      body: {
        meaning:
          "Add か to the end of a です sentence to make a yes/no question. Japanese questions keep normal sentence order — no word changes needed.",
        formation: [
          { pattern: "Ａ は Ｂ です か", note: "Is A B?" },
          { pattern: "あなたは 学生ですか", note: "Are you a student?" },
        ],
        usage: [
          "か carries the question mark, so with か you can skip the ? — 「学生ですか。」 is fine.",
          "Answer politely: はい、そうです (Yes, that's right) or いいえ、違います (No, that's wrong).",
          "Question words (何, 誰, どこ) can also sit inside the sentence: 「あの人は誰ですか」.",
        ],
        pitfalls: [
          "Don't add か in casual speech to friends — rising intonation (学生です？) does the job. か is the polite written/spoken form.",
          "「あなたは誰ですか」 is rude when asking a stranger's name. Ask 「お名前は何ですか」 instead.",
        ],
        related: ["〜は〜です"],
      },
      examples: [
        { jp: "あなたは学生ですか。", kana: "あなたはがくせいですか。", en: "Are you a student?" },
        { jp: "これは何ですか。", kana: "これはなんですか。", en: "What is this?" },
        { jp: "田中さんは先生ですか。", kana: "たなかさんはせんせいですか。", en: "Is Mr. Tanaka a teacher?" },
        { jp: "いいえ、違います。学生ではありません。", kana: "いいえ、ちがいます。がくせいではありません。", en: "No, that's wrong. I'm not a student." },
      ],
      practice: [
        {
          kind: "blank",
          text: "これは何です___。",
          blanks: ["か"],
          explain: "か at the end makes the sentence a polite question.",
        },
        {
          kind: "mcq",
          text: "Which one asks “Is this a cat?”",
          options: ["これは猫です。", "これは猫ですか。", "猫はこれです。", "これは猫じゃありません。"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “What is that (over there)?”",
          tokens: ["あれ", "は", "何", "ですか", "。"],
        },
        {
          kind: "mcq",
          text: "Someone asks 「あなたは学生ですか」。 You are. You answer:",
          options: ["いいえ、違います。", "はい、そうです。", "学生じゃない？", "本です。"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "「これは本ですか。」 and 「これは本です。」 mean the same thing.",
          answer: false,
          explain: "The first is a question (Is this a book?), the second is a statement (This is a book). か changes everything.",
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n5-u01-l03",
      title: "This, that, and that over there",
      titleJp: "これ・それ・あれ",
      grammarLabel: "これ・それ・あれ",
      summary: "Pointing at things: これ (near me), それ (near you), あれ (far from both).",
      body: {
        meaning:
          "これ = this (near the speaker), それ = that (near the listener), あれ = that over there (far from both). どれ asks “which one?”. They stand alone — you never put a noun right after them.",
        formation: [
          { pattern: "これ は Ｂ です", note: "This is B." },
          { pattern: "それは なんですか", note: "What is that (near you)?" },
        ],
        usage: [
          "Think of distance from the conversation, not the eyes: それ belongs to the listener's zone.",
          "どれ = which one — used when choosing among things: 「どれですか」 (Which one?).",
        ],
        pitfalls: [
          "これ/それ/あれ stand alone. Before a noun you must switch to この本 (this book) / その本 / あの本 — that's the next lesson's pattern.",
          "あれ is for far things for BOTH speakers. If it's near you, it's never あれ.",
        ],
        related: ["この・その・あの＋名詞 (next unit)", "ここ・そこ・あそこ (places)"],
      },
      examples: [
        { jp: "これは辞書です。", kana: "これはじしょです。", en: "This is a dictionary." },
        { jp: "それは何ですか。", kana: "それはなんですか。", en: "What is that (near you)?" },
        { jp: "あれは私の家です。", kana: "あれはわたしのいえです。", en: "That over there is my house." },
        { jp: "どれが日本語の新聞ですか。", kana: "どれがにほんごのしんぶんですか。", en: "Which one is the Japanese newspaper?" },
      ],
      practice: [
        {
          kind: "mcq",
          text: "You are talking to a friend. The pen is in your friend's hand. You say:",
          options: ["これはペンです。", "それはペンです。", "あれはペンです。", "どれはペンです。"],
          answer: 1,
          explain: "Something in the listener's zone is それ.",
        },
        {
          kind: "blank",
          text: "___ は私の本です。(pointing at something near you)",
          blanks: ["これ"],
        },
        {
          kind: "mcq",
          text: "Which word asks “which one?”",
          options: ["これ", "それ", "あれ", "どれ"],
          answer: 3,
        },
        {
          kind: "order",
          text: "Build: “This is a Japanese newspaper.”",
          tokens: ["これ", "は", "日本語", "の", "新聞", "です"],
        },
        {
          kind: "tf",
          text: "You can say 「これは本」 as a full sentence.",
          answer: false,
          explain: "Statements end in です (polite) — これは本です. Plain 「これは本」 sounds cut off.",
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n5-u01-l04",
      title: "Possession with の",
      titleJp: "〜の〜",
      grammarLabel: "〜の",
      summary: "Connect two nouns: 私の本 = my book.",
      body: {
        meaning:
          "の connects nouns: “AのB” = B of A — possession, belonging, or category. 私の本 = my book; 日本語の本 = a Japanese(-language) book; 学校の先生 = a teacher at a school.",
        formation: [
          { pattern: "Ａ の Ｂ", note: "B of A / A's B" },
          { pattern: "これは 私の 本です", note: "This is my book." },
        ],
        usage: [
          "Possession: 田中さんの車 (Tanaka's car).",
          "Category/material/language: 日本語の本 (a book in Japanese), 木の家? (later).",
          "誰の (whose), 何の (what kind of) work the same way before a noun.",
        ],
        pitfalls: [
          "の chains in order: 私の学校の先生 = the teacher of my school. Each の adds one “of”.",
          "Don't confuse the possessive の with the subject particle が or topic は — の only sits BETWEEN nouns.",
        ],
        related: ["〜は〜です", "これ・それ・あれ"],
      },
      examples: [
        { jp: "これは私の本です。", kana: "これはわたしのほんです。", en: "This is my book." },
        { jp: "あれは田中さんの車です。", kana: "あれはたなかさんのくるまです。", en: "That is Tanaka's car." },
        { jp: "これは日本語の辞書です。", kana: "これはにほんごのじしょです。", en: "This is a Japanese dictionary." },
        { jp: "あの人は私の先生です。", kana: "あのひとはわたしのせんせいです。", en: "That person is my teacher." },
      ],
      practice: [
        {
          kind: "blank",
          text: "これは田中さん___車です。",
          blanks: ["の"],
          explain: "の marks possession between 田中さん and 車.",
        },
        {
          kind: "mcq",
          text: "「日本語の本」 is…",
          options: ["a book about Japan's language policy", "a Japanese-language book", "Japan's book", "a Japanese bookstore"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “That (over there) is my cat.”",
          tokens: ["あれ", "は", "私", "の", "猫", "です"],
        },
        {
          kind: "mcq",
          text: "How do you ask “Whose dictionary is this?”",
          options: ["これは誰ですか。", "これは誰の辞書ですか。", "誰のこれは辞書ですか。", "これは誰に辞書ですか。"],
          answer: 1,
        },
        {
          kind: "short",
          text: "Say “my name” in Japanese (two words).",
          accept: ["私の名前", "わたしのなまえ"],
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n5-u01-l05",
      title: "Also and too: も",
      titleJp: "〜も",
      grammarLabel: "〜も",
      summary: "Replace は with も to mean “also/too”.",
      body: {
        meaning:
          "The particle も replaces は (and が / を) to add something to what was just said. 「私は学生です。田中さんも学生です。」 = I'm a student. Mr. Tanaka is a student too.",
        formation: [
          { pattern: "Ａ も Ｂ です", note: "A is B too." },
          { pattern: "それ も 私の 本です", note: "That is my book too." },
        ],
        usage: [
          "も always replaces the particle before it — you never say はも.",
          "Works with question words for “(n)either”: 「どれも」 (any of them / none of them with negatives).",
        ],
        pitfalls: [
          "も replaces, it doesn't stack: ✗ 私はも学生です → ✓ 私も学生です.",
          "In a negative sentence も means “not … either”: 「私も学生じゃありません」 = I'm not a student either.",
        ],
        related: ["〜は〜です", "〜じゃありません"],
      },
      examples: [
        { jp: "私は学生です。田中さんも学生です。", kana: "わたしはがくせいです。たなかさんもがくせいです。", en: "I am a student. Mr. Tanaka is a student too." },
        { jp: "これも日本語の本です。", kana: "これもにほんごのほんです。", en: "This is a Japanese book too." },
        { jp: "私の名前は花子です。", kana: "わたしのなまえははなこです。", en: "My name is Hanako." },
        { jp: "犬も猫も好きです。", kana: "いぬもねこもすきです。", en: "I like dogs and (also) cats.", note: "…も…も = both…and…" },
      ],
      practice: [
        {
          kind: "blank",
          text: "田中さんは先生です。私___先生です。",
          blanks: ["も"],
          explain: "“I am a teacher too” — も replaces は.",
        },
        {
          kind: "mcq",
          text: "Which is correct for “This is my car too.”?",
          options: ["これも私の車です。", "これも私の車もです。", "これはも私の車です。", "これ私の車もです。"],
          answer: 0,
        },
        {
          kind: "tf",
          text: "「私もも猫が好きです。」 is correct Japanese.",
          answer: false,
          explain: "もも double-particle is wrong here — 「私も猫が好きです」.",
        },
        {
          kind: "order",
          text: "Build: “That is also a Japanese dictionary.”",
          tokens: ["それ", "も", "日本語", "の", "辞書", "です"],
        },
        {
          kind: "mcq",
          text: "「犬も猫も好きです」 means…",
          options: ["I like dogs but not cats", "I like both dogs and cats", "Either dogs or cats", "I don't like dogs or cats"],
          answer: 1,
          explain: "AもBも = both A and B.",
        },
      ],
    },
  ],
}
