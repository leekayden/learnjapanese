import type { AuthoredUnit } from "../../types"

export const u12: AuthoredUnit = {
  level: "N4",
  order: 12,
  title: "Respectful Japanese: 尊敬語",
  titleJp: "そんけいご",
  description:
    "Elevating others: special honorific verbs (いらっしゃる・なさる・おっしゃる・召し上がる), the お〜になる pattern, and polite request お〜ください.",
  vocab: [
    "社長|しゃちょう",
    "先生|せんせい",
    "お客様|おきゃくさま",
    "既に|すでに",
    "手術|しゅじゅつ",
    "看護|かんご",
    "料理|りょうり",
    "作る|つくる",
    "来る|くる",
    "言う|いう",
    "食べる|たべる",
    "見る|みる",
    "聞く|きく",
  ],
  kanji: ["接", "客", "様", "既", "術", "看", "護", "至", "存"],
  exam: [
    {
      kind: "mcq",
      text: "The president arrives. You say…",
      options: ["社長が来ます。", "社長がいらっしゃいます。", "社長が参ります。", "社長がおっしゃいます。"],
      answer: 1,
      explain: "来る/いる → いらっしゃる for respected people.",
    },
    {
      kind: "mcq",
      text: "Honorific of 見る (the teacher watches):",
      options: ["ご覧になります", "拝見します", "見させます", "見られます"],
      answer: 0,
      explain: "見る → ご覧になる (or 見られる).",
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n4-u12-l01",
      title: "Special honorific verbs",
      titleJp: "とくべつな そんけいご",
      grammarLabel: "いらっしゃる・なさる",
      summary: "The five you must memorise: いらっしゃる, おっしゃる, なさる, 召し上がる, ご覧になる.",
      body: {
        meaning:
          "These verbs REPLACE ordinary ones when talking about respected people's actions: 来る/行く/いる → いらっしゃる, 言う → おっしゃる, する → なさる, 食べる/飲む → 召し上がる, 見る → ご覧になる.",
        formation: [
          { pattern: "来る・行く・いる → いらっしゃる", note: "社長はもういらっしゃいました。" },
          { pattern: "言う → おっしゃる", note: "何とおっしゃいましたか。" },
          { pattern: "する → なさる", note: "何をなさいますか。" },
          { pattern: "食べる・飲む → 召し上がる", note: "どうぞ召し上がってください。" },
          { pattern: "見る → ご覧になる", note: "この映画をご覧になりましたか。" },
        ],
        usage: [
          "Used about teachers, customers, bosses — NEVER about yourself.",
          "て-form: いらっしゃって; ます: いらっしゃいます (not いらっしゃるます).",
        ],
        pitfalls: [
          "なさる → なさいます (not なさります); いらっしゃる → いらっしゃいます (irregular ます forms).",
          "Rising your own status with these is a serious mistake.",
        ],
        related: ["お〜になる (next lesson)", "humble forms (Unit 13)"],
      },
      examples: [
        { jp: "先生は何時にお着きになりましたか。", kana: "せんせいはなんじにおつきになりましたか。", en: "What time did the teacher arrive?", note: "お着きになる = arrive (honorific)" },
        { jp: "社長はあちらにいらっしゃいます。", kana: "しゃちょうはあちらにいらっしゃいます。", en: "The president is over there." },
        { jp: "どうぞ召し上がってください。", kana: "どうぞめしあがってください。", en: "Please help yourself." },
        { jp: "部長は何とおっしゃいましたか。", kana: "ぶちょうはなんとおっしゃいましたか。", en: "What did the department head say?" },
      ],
      practice: [
        {
          kind: "match",
          text: "Match plain verbs with honorifics:",
          pairs: [
            ["いる", "いらっしゃる"],
            ["言う", "おっしゃる"],
            ["する", "なさる"],
            ["食べる", "召し上がる"],
          ],
        },
        {
          kind: "mcq",
          text: "The customer eats →",
          options: ["食べます", "召し上がります", "いただきます", "食べさせます"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “The president is over there.” (polite)",
          tokens: ["社長", "は", "あちらに", "いらっしゃいます", "。"],
        },
        {
          kind: "mcq",
          text: "ます-form of なさる:",
          options: ["なさるます", "なさいます", "なさりいます", "なさるいます"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "Honorific verbs elevate the LISTENER or a third party, never yourself.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n4-u12-l02",
      title: "お〜になる",
      titleJp: "お〜になる",
      grammarLabel: "お〜になる",
      summary: "Generic honorific: お書きになる (writes), for verbs without special forms.",
      body: {
        meaning:
          "For verbs without a dedicated honorific, make お + ます-stem + になる: 書く → お書きになる. It's the general-purpose honorific — slightly less formal than special verbs but broadly usable.",
        formation: [
          { pattern: "お ＋ ます-stem ＋ になる", note: "待つ→お待ちになる · 読む→お読みになる" },
          { pattern: "ご ＋ suru-noun ＋ になる", note: "ご確認になる · ご意見になる" },
        ],
        usage: [
          "Negative: お書きにならない.",
          "Some verbs sound odd —special verbs beat this pattern when they exist.",
        ],
        pitfalls: [
          "Suru-verbs use ご (ご確認になる), not お (✗ お確認になる).",
          "Verbs with irregular stems (来る) use special forms.",
        ],
        related: ["special honorific verbs", "お〜ください (next lesson)"],
      },
      examples: [
        { jp: "社長はもう帰りのお時間です。", kana: "しゃちょうはもうかえりのおじかんです。", en: "It's already the president's time to go home." },
        { jp: "先生はこの本をお読みになりました。", kana: "せんせいはこのほんをおよみになりました。", en: "The teacher read this book." },
        { jp: "お客様は何をお探しになりますか。", kana: "おきゃくさまはなにをおさがしになりますか。", en: "What are you (customer) looking for?" },
        { jp: "部長はご出張になります。", kana: "ぶちょうはごしゅっちょうになります。", en: "The manager is going on a business trip." },
      ],
      practice: [
        {
          kind: "blank",
          text: "先生はもう帰___になりました。(honorific: went home)",
          blanks: ["りのお"],
        },
        {
          kind: "mcq",
          text: "Honorific of 読む (お〜になる):",
          options: ["お読みになる", "ご読みになる", "お読みする", "読まれるだけ"],
          answer: 0,
        },
        {
          kind: "mcq",
          text: "Suru-noun 確認 as honorific:",
          options: ["お確認になる", "ご確認になる", "確認なさいます", "確認くださいます"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “What are you looking for?” (to a customer)",
          tokens: ["お客様", "は", "何", "を", "お探しに", "なります", "か"],
        },
        {
          kind: "tf",
          text: "お〜になる attaches to the ます-stem.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n4-u12-l03",
      title: "Polite requests: お〜ください",
      titleJp: "お〜ください",
      grammarLabel: "お〜ください",
      summary: "Very polite requests: お待ちください (Please wait), ご確認ください.",
      body: {
        meaning:
          "お + ます-stem + ください makes respectful requests (signs, staff to customers): お座りください. Suru-nouns take ご: ご利用ください.",
        formation: [
          { pattern: "お ＋ ます-stem ＋ ください", note: "お待ちください · お乗りください" },
          { pattern: "ご ＋ noun ＋ ください", note: "ご注意ください · ご利用ください" },
          { pattern: "Softer: お〜くださいませ (shop staff)", note: "いらっしゃいませ pairing" },
        ],
        usage: [
          "Announcements and signs more than conversation (そこでは おててくださらない...).",
          "In conversation, 〜てください or 〜ていただけますか is more natural.",
        ],
        pitfalls: [
          "It's PLEASE (to listener), not about a third party — don't mix with になる.",
          "ご vs お follows the suru-noun rule.",
        ],
        related: ["お〜になる", "〜てください"],
      },
      examples: [
        { jp: "少々お待ちください。", kana: "しょうしょうおまちください。", en: "Please wait a moment." },
        { jp: "ご利用ください。", kana: "ごりようください。", en: "Please make use of this." },
        { jp: "こちらにお名前をご記入ください。", kana: "こちらにおなまえをごきにゅうください。", en: "Please write your name here." },
        { jp: "お降りの方はお乗り換えください。", kana: "おおりのかたはおのりかえください。", en: "Those getting off, please change trains." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “Please wait a moment.” (announcer)",
          tokens: ["少々", "お待ち", "ください", "。"],
        },
        {
          kind: "mcq",
          text: "Sign: “Please do not enter” politely: ご___ください。",
          options: ["入って", "入り", "入る", "入りお"],
          answer: 1,
          explain: "ご入りください — actually 入る is not suru-noun; standard sign is ご遠慮ください. The train phrase お乗り換えください shows the お+stem pattern.",
        },
        {
          kind: "mcq",
          text: "ご + noun + ください example:",
          options: ["お利用ください", "ご利用ください", "ご使ってください", "お使しください"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "少々お待ち___。(please wait)",
          blanks: ["ください"],
        },
        {
          kind: "tf",
          text: "お〜ください is common in announcements and signs.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n4-u12-l04",
      title: "Polite pronouns and names",
      titleJp: "そんけいの めし",
      grammarLabel: "こちら・どなた・〜様",
      summary: "こちら/あちら for people, どなた for who, 〜様/〜さん on names.",
      body: {
        meaning:
          "Honorifics extend beyond verbs: どなた (who), こちら (this person), どちら (which person), and name suffixes: 田中様 (letters), お客様 (customers), 先生 directly (no さん).",
        formation: [
          { pattern: "だれ → どなた／どちらさま", note: "どなたでしょうか。" },
          { pattern: "これ → こちら (person)", note: "こちらは田中さんです。" },
          { pattern: "Name ＋ 様／さん／先生", note: "田中様 · お客様 · 鈴木先生" },
        ],
        usage: [
          "こちら introduces someone politely (never use 私の友達の田中です first).",
          "In shops: お客様 — in letters: 〜様.",
        ],
        pitfalls: [
          "Never add さん to your own name, and never to 先生's name (先生 alone).",
          "あなた is avoided — use titles: お名前は何ですか。",
        ],
        related: ["honorific verbs", "humble forms (Unit 13)"],
      },
      examples: [
        { jp: "こちらは田中さんです。", kana: "こちらはたなかさんです。", en: "This is Mr. Tanaka. (polite intro)" },
        { jp: "あの方はどなたですか。", kana: "あのかたはどなたですか。", en: "Who is that person?" },
        { jp: "山田様、お手紙が届いています。", kana: "やまださま、おてがみがとどいています。", en: "Mr. Yamada, a letter has arrived for you." },
        { jp: "お客様は神様です。", kana: "おきゃくさまはかみさまです。", en: "The customer is king." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Polite “who?”:",
          options: ["だれ", "どなた", "なに", "どっち"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Introducing someone politely begins with…",
          options: ["この人は…", "こちらは…", "あいつは…", "わたしの友達は…"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Envelope name suffix:",
          options: ["〜さん", "〜様", "〜君", "〜ちゃん"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "あの___はどなたですか。(that person — polite)",
          blanks: ["方"],
        },
        {
          kind: "tf",
          text: "You never call yourself 〜さん.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n4-u12-l05",
      title: "Putting honorifics together",
      titleJp: "そんけいごの まとめ",
      grammarLabel: "honorific review",
      summary: "Choosing the right level: special verbs > お〜になる > ます-form.",
      body: {
        meaning:
          "Honorific choice ladder: dedicated verbs (いらっしゃる etc.) top, お〜になる next, plain です/ます last. Mixing levels in one sentence is fine as long as each verb matches the person it describes.",
        formation: [
          { pattern: "Special verb if exists", note: "来る → いらっしゃる" },
          { pattern: "Else お〜になる", note: "読む → お読みになる" },
          { pattern: "Else ます-form", note: "neutral politeness" },
        ],
        usage: [
          "Over-honorifying sounds sarcastic — keep it level-appropriate.",
          "Honorifics about YOUR actions = wrong. Humble forms (next unit) are for self.",
        ],
        pitfalls: [
          "✗ 私がいらっしゃいます — use 参ります (humble).",
          "Double honorifics (おっしゃられる) sound awkward; special forms already contain respect.",
        ],
        related: ["humble forms (Unit 13)", "お〜になる"],
      },
      examples: [
        { jp: "社長がお見えになりました。", kana: "しゃちょうがおみえになりました。", en: "The president has arrived." },
        { jp: "先生はもうお帰りになりました。", kana: "せんせいはもうおかえりになりました。", en: "The teacher has already gone home." },
        { jp: "お客様がお見になりませんでした。", kana: "おきゃくさまがおみになりませんでした。", en: "The customer didn't see (it)." },
        { jp: "部長が後で説明なさいます。", kana: "ぶちょうがあとでせつめいなさいます。", en: "The manager will explain later." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "About yourself, you must NOT use…",
          options: ["ます-form", "honorific forms", "humble forms", "です"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Choose the best: The teacher writes →",
          options: ["書きます", "お書きになります", "お書きします", "書かせます"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Choose the best: The customer drinks →",
          options: ["飲みます", "お飲みになります", "召し上がります", "飲ませます"],
          answer: 2,
          explain: "召し上がる is the dedicated honorific — top choice.",
        },
        {
          kind: "order",
          text: "Build: “The teacher has already gone home.”",
          tokens: ["先生", "は", "もう", "お帰りに", "なりました", "。"],
        },
        {
          kind: "tf",
          text: "Dedicated honorific verbs outrank the お〜になる pattern.",
          answer: true,
        },
      ],
    },
  ],
}
