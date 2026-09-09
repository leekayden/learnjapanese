import type { AuthoredUnit } from "../../types"

export const u12: AuthoredUnit = {
  level: "N5",
  order: 12,
  title: "Change and check",
  titleJp: "へんかと ふくしゅう",
  description:
    "The final N5 stretch: becoming and making with 〜くなる・〜にする, “already/yet” with もう・まだ, limiting with だけ, counting times with 〜度, and a full review of the level.",
  vocab: [
    "|なる",
    "天気|てんき",
    "元気|げんき",
    "静か|しずか",
    "便利|べんり",
    "大きい|おおきい",
    "高い|たかい",
    "|もう",
    "|まだ",
    "全部|ぜんぶ",
    "少し|すこし",
    "|たくさん",
    "一度|いちど",
    "何度|なんど",
    "毎朝|まいあさ",
    "毎日|まいにち",
    "毎晩|まいばん",
    "週|しゅう",
    "音|おと",
    "暖かい|あたたかい",
  ],
  kanji: ["変", "部", "少", "度", "週", "晩", "毎", "音", "暖"],
  exam: [
    {
      kind: "mcq",
      text: "「もう食べました。」 means…",
      options: ["I'll eat soon.", "I already ate.", "I haven't eaten yet.", "Let's eat."],
      answer: 1,
    },
    {
      kind: "mcq",
      text: "「部屋を明るくします。」 means…",
      options: ["The room became bright.", "I'll make the room brighter.", "The room is bright.", "Turn off the room light."],
      answer: 1,
      explain: "〜くします = make something become…",
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n5-u12-l01",
      title: "Becoming: 〜くなる・〜になる",
      titleJp: "〜くなる・〜になる",
      grammarLabel: "〜くなる・〜になる",
      summary: "Changes of state: 寒くなりました (it got cold), 元気になりました (became well).",
      body: {
        meaning:
          "なる means “become”. い-adjectives drop い add く: 暖かくなる. な-adjectives and nouns take に: 静かになる, 医者になる (become a doctor).",
        formation: [
          { pattern: "い-adj → 〜く + なる", note: "早くなる become early/fast" },
          { pattern: "な-adj → 〜に + なる", note: "元気になる get well" },
          { pattern: "Noun に なる", note: "先生になる become a teacher" },
        ],
        usage: [
          "Past: 〜くなりました／〜になりました.",
          "Weather small talk is the classic use: 暖かくなりましたね。 (It's gotten warm, hasn't it.)",
        ],
        pitfalls: [
          "✗ 暖かになる / ✗ 元気くなる — the connective differs by adjective type.",
          "なる takes に for nouns: ✗ 医者なる → 医者になります.",
        ],
        related: ["い-adjectives", "な-adjectives"],
      },
      examples: [
        { jp: "天気が良くなりました。", kana: "てんきがよくなりました。", en: "The weather got better." },
        { jp: "最近、寒くなりましたね。", kana: "さいきん、さむくなりましたね。", en: "It's gotten cold lately, hasn't it." },
        { jp: "日本語が上手になりました。", kana: "にほんごがじょうずになりました。", en: "Your Japanese has become good." },
        { jp: "子供が大きくなりました。", kana: "こどもがおおきくなりました。", en: "The child has grown." },
      ],
      practice: [
        {
          kind: "blank",
          text: "天気が暖かく___。(became warm)",
          blanks: ["なり"],
        },
        {
          kind: "mcq",
          text: "“Become quiet (静か)” →",
          options: ["静かくなる", "静かになる", "静かする", "静かいた"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “I want to become a teacher.”",
          tokens: ["先生", "に", "なりたいです", "。"],
        },
        {
          kind: "mcq",
          text: "い-adjective + なる takes…",
          options: ["に", "く", "で", "な"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "なる means “to become / to turn into”.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n5-u12-l02",
      title: "Making it so: 〜くします・〜にします",
      titleJp: "〜くします・〜にします",
      grammarLabel: "〜くします・〜にします",
      summary: "Deliberate change: テレビを小さくします (I'll turn the TV down).",
      body: {
        meaning:
          "Where なる is natural change, します is CHANGE YOU CAUSE: テレビを大きくします (make the TV louder/bigger), 名前を田中にします (make the name Tanaka — choose).",
        formation: [
          { pattern: "Object を い-adj-く します", note: "部屋を暖かくします" },
          { pattern: "Object を な-adj/名詞 に します", note: "部屋を静かにします / コーヒーにします" },
        ],
        usage: [
          "Ordering/choosing: ジュースにします (I'll have the juice) — restaurant gold.",
          "Opposite pair: なる (become) vs する (make).",
        ],
        pitfalls: [
          "Connective rules mirror なる: い→くします, な-adj/noun→にします.",
          "The CHANGED THING takes を.",
        ],
        related: ["〜くなる・〜になる", "を (object)"],
      },
      examples: [
        { jp: "テレビの音を小さくします。", kana: "テレビのおとをちいさくします。", en: "I'll turn down the TV volume." },
        { jp: "部屋をきれいにします。", kana: "へやをきれいにします。", en: "I'll clean up the room." },
        { jp: "私はコーヒーにします。", kana: "わたしはコーヒーにします。", en: "I'll have the coffee." },
        { jp: "息子を医者にしたいです。", kana: "むすこをいしゃにしたいです。", en: "I want to make my son a doctor." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I'll make the room quiet.”",
          tokens: ["部屋", "を", "静かに", "します", "。"],
        },
        {
          kind: "blank",
          text: "音を大き ___ します。(make louder)",
          blanks: ["く"],
        },
        {
          kind: "mcq",
          text: "At a restaurant, choosing juice:",
          options: ["ジュースがあります。", "ジュースにします。", "ジュースになります。", "ジュースがほしい。"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Connective for な-adjectives before します:",
          options: ["く", "に", "で", "な"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "〜します implies you are causing the change.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n5-u12-l03",
      title: "Already / yet: もう・まだ",
      titleJp: "もう・まだ",
      grammarLabel: "もう・まだ",
      summary: "もう食べました (already ate) / まだ食べていません (haven't eaten yet).",
      body: {
        meaning:
          "もう means “already” (with past) or “(not) anymore” (with negatives). まだ means “still/yet”: まだです (not yet), まだ食べています (still eating).",
        formation: [
          { pattern: "もう ＋ past", note: "もう終わりました already finished" },
          { pattern: "まだ ＋ negative", note: "まだ分かりません don't understand yet" },
          { pattern: "まだ ＋ ています", note: "still doing" },
        ],
        usage: [
          "Q: もう食べましたか。 A: はい、もう食べました。／いいえ、まだです。",
          "もう一度 = once more (again).",
        ],
        pitfalls: [
          "もう with negative = anymore: もう食べません = I don't eat (it) anymore.",
          "まだです is the short answer for “not yet”.",
        ],
        related: ["〜ました", "〜ています"],
      },
      examples: [
        { jp: "宿題はもう終わりました。", kana: "しゅくだいはもうおわりました。", en: "I've already finished my homework." },
        { jp: "まだ食べていません。", kana: "まだたべていません。", en: "I haven't eaten yet." },
        { jp: "田中さんはまだ来ていません。", kana: "たなかさんはまだきていません。", en: "Mr. Tanaka hasn't come yet." },
        { jp: "もう一度お願いします。", kana: "もういちどおねがいします。", en: "One more time, please." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "「まだです」 answers which question?",
          options: ["How much?", "Already done?", "Where?", "With whom?"],
          answer: 1,
          explain: "It's the “not yet” answer to もう〜ましたか.",
        },
        {
          kind: "order",
          text: "Build: “I haven't eaten yet.”",
          tokens: ["まだ", "食べて", "いません", "。"],
        },
        {
          kind: "blank",
          text: "宿題は___終わりました。(already)",
          blanks: ["もう"],
        },
        {
          kind: "mcq",
          text: "もう一度 means…",
          options: ["already once", "once more", "not once", "about once"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "まだ can pair with ています to mean “still doing”.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n5-u12-l04",
      title: "Only & amounts: だけ・たくさん",
      titleJp: "だけ・りょう",
      grammarLabel: "だけ・quantity",
      summary: "Limiting and quantifying: 少し・たくさん・全部・だけ.",
      body: {
        meaning:
          "Quantifiers sit before verbs or after particles: たくさん食べます (eat a lot), 少し欲しい (want a little), 全部食べました (ate everything). だけ means “only”: 日本語だけ話します (I speak only Japanese).",
        formation: [
          { pattern: "たくさん／少し ＋ Verb", note: "water amount, effort" },
          { pattern: "Noun だけ", note: "一つだけください just one, please" },
          { pattern: "全部で (in total)", note: "全部で千円です" },
        ],
        usage: [
          "だけ follows nouns/prarticles: 水だけ (only water).",
          "Quantity words can also follow the object: 水をたくさん飲みます.",
        ],
        pitfalls: [
          "だけ usually follows the noun directly (water only → 水だけ), sometimes replaces を.",
          "少し（すこし）= a little; 少々（しょうしょう）= formal “a moment”.",
        ],
        related: ["counters", "frequency adverbs (Unit 11)"],
      },
      examples: [
        { jp: "水をたくさん飲みます。", kana: "みずをたくさんのみます。", en: "I drink a lot of water." },
        { jp: "日本語だけ話します。", kana: "にほんごだけはなします。", en: "I speak only Japanese." },
        { jp: "一つだけください。", kana: "ひとつだけください。", en: "Just one, please." },
        { jp: "お金が少しあります。", kana: "おかねがすこしあります。", en: "I have a little money." },
      ],
      practice: [
        {
          kind: "blank",
          text: "日本語___話します。(only Japanese)",
          blanks: ["だけ"],
        },
        {
          kind: "mcq",
          text: "“a lot” →",
          options: ["少し", "たくさん", "全部", "だけ"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “Just one, please.”",
          tokens: ["一つ", "だけ", "ください", "。"],
        },
        {
          kind: "mcq",
          text: "「全部でいくらですか。」 asks the…",
          options: ["unit price", "total price", "refund", "discount"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "少し means “a lot”.",
          answer: false,
          explain: "少し = a little; たくさん = a lot.",
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n5-u12-l05",
      title: "Counting times: 〜度・〜回",
      titleJp: "〜ど・〜かい",
      grammarLabel: "〜度・〜回",
      summary: "Frequency: 一度 (once), 二回 (twice), 週に三回 (three times a week).",
      body: {
        meaning:
          "回 and 度 count occurrences: 一度会ったことがあります (I've met him once). With periods: 週に三回運動します (I exercise three times a week).",
        formation: [
          { pattern: "Number ＋ 回／度", note: "一回・二回・三回 / 一度・二度" },
          { pattern: "Period に Number 回", note: "一週間に二回 twice a week" },
          { pattern: "何回 (how many times)", note: "何回も many times" },
        ],
        usage: [
          "回 is the everyday counter for times; 度 appears in set phrases (一度だけ) and temperatures.",
          "Pattern with たことがあります: 日本へ二回行ったことがあります.",
        ],
        pitfalls: [
          "Sound changes: 一回（いっかい）, 六回（ろっかい）, 十回（じゅっかい）.",
          "日に vs 週に: 週に三回 = per week.",
        ],
        related: ["たことがあります", "counters (Unit 4)"],
      },
      examples: [
        { jp: "日本へ二回行ったことがあります。", kana: "にほんへにかいいったことがあります。", en: "I've been to Japan twice." },
        { jp: "週に三回運動します。", kana: "しゅうにさんかいうんどうします。", en: "I exercise three times a week." },
        { jp: "何回も聞きました。", kana: "なんかいもききました。", en: "I asked many times." },
        { jp: "一度だけ会ったことがあります。", kana: "いちどだけあったことがあります。", en: "I've met him only once." },
      ],
      practice: [
        {
          kind: "blank",
          text: "週に四___運動します。(four times)",
          blanks: ["回"],
        },
        {
          kind: "order",
          text: "Build: “I've been to Japan twice.”",
          tokens: ["日本", "へ", "二回", "行った", "ことがあります", "。"],
        },
        {
          kind: "mcq",
          text: "“How many times?” →",
          options: ["いくつ", "なんかい", "いくら", "どちら"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "一回 is read…",
          options: ["いちかい", "いっかい", "ひとたび", "いちど"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "週に三回 means “three times a week”.",
          answer: true,
        },
      ],
    },
  ],
}
