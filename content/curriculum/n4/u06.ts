import type { AuthoredUnit } from "../../types"

export const u06: AuthoredUnit = {
  level: "N4",
  order: 6,
  title: "If and when: 〜たら",
  titleJp: "たらの じょうけん",
  description:
    "The most versatile conditional: 〜たら for ifs, whens, discoveries (見たら教えて) and counterfactuals (お金があったら…).",
  vocab: [
    "読む|よむ",
    "書く|かく",
    "会う|あう",
    "暇|ひま",
    "天気|てんき",
    "時間|じかん",
    "宝くじ|たからくじ",
    "お金|おかね",
    "当たる|あたる",
    "億|おく",
    "買う|かう",
    "家|いえ",
    "見つかる|みつかる",
    "連絡|れんらく",
    "着く|つく",
    "駅|えき",
    "教える|おしえる",
    "始まる|はじまる",
    "芽|め",
    "春|はる",
  ],
  kanji: ["宝", "金", "当", "億", "茶", "春", "夏", "秋", "冬"],
  exam: [
    {
      kind: "order",
      text: "Build: “If it rains tomorrow, I won't go.”",
      tokens: ["明日", "雨", "が", "降ったら", "行きません", "。"],
    },
    {
      kind: "mcq",
      text: "「家に帰ったら、電話してください。」 means…",
      options: ["If you go home, call me (when you get back).", "Before going home, call me.", "While going home, call me.", "Don't call me when you get home."],
      answer: 0,
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n4-u06-l01",
      title: "The たら form",
      titleJp: "たらフォーム",
      grammarLabel: "〜たら",
      summary: "た-form + ら: 降ったら (if/when it rains), 食べたら (if/when I eat).",
      body: {
        meaning:
          "〜たら is the all-purpose “if/when”. Make the た-form and add ら: 雨が降ったら行きません (If it rains, I won't go). な-adjectives/nouns: 暇だったら・学生だったら.",
        formation: [
          { pattern: "Verb た ＋ ら", note: "食べたら · 飲んだら · 行ったら" },
          { pattern: "い-adj ＋ かったら", note: "安かったら if it's cheap" },
          { pattern: "な-adj/名詞 ＋ だったら", note: "暇だったら · 雨だったら" },
          { pattern: "Negative: 〜なかったら", note: "行かなかったら if (I) don't go" },
        ],
        usage: [
          "Works for one-time future events, general ifs, and counterfactuals.",
          "Also “when/after” for sequences: 家に帰ったら電話します.",
        ],
        pitfalls: [
          "✗ 食べるたら — must be the た-form.",
          "な-adjectives take だったら, not ならった.",
        ],
        related: ["ば conditional (Unit 7)", "〜と (Unit 7)", "〜なら (Unit 7)"],
      },
      examples: [
        { jp: "雨が降ったら、試合は中止です。", kana: "あめがふったら、しあいはちゅうしです。", en: "If it rains, the game is cancelled." },
        { jp: "暇だったら、一緒に映画に行きませんか。", kana: "ひまだったら、いっしょにえいがにいきませんか。", en: "If you're free, shall we see a movie?" },
        { jp: "安かったら、買います。", kana: "やすかったら、かいます。", en: "If it's cheap, I'll buy it." },
        { jp: "日本に行ったら、京都に住みたいです。", kana: "にほんにいったら、きょうとにすみたいです。", en: "If I go to Japan, I want to live in Kyoto." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "たら-form of 飲む:",
          options: ["飲むら", "飲んだら", "飲いたら", "飲めら"],
          answer: 1,
        },
        {
          kind: "match",
          text: "Match verbs with たら-forms:",
          pairs: [
            ["食べる", "食べたら"],
            ["書く", "書いたら"],
            ["する", "したら"],
            ["来る", "来たら"],
          ],
        },
        {
          kind: "order",
          text: "Build: “If it's cheap, I'll buy it.”",
          tokens: ["安かったら", "買います", "。"],
        },
        {
          kind: "blank",
          text: "暇___、遊びに来てください。(if free)",
          blanks: ["だったら"],
        },
        {
          kind: "tf",
          text: "〜たら uses the た-form plus ら.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n4-u06-l02",
      title: "When you get there: たら for sequences",
      titleJp: "たら（順序）",
      grammarLabel: "〜たら（when）",
      summary: "A happens, THEN B: 着いたら電話してください.",
      body: {
        meaning:
          "〜たら often means “when/once A happens (certain), do B”: 着いたら連絡してください (Contact me when you arrive). The A event is a one-time, still-future event.",
        formation: [
          { pattern: "A たら、B", note: "B happens after A completes" },
          { pattern: "Request/advice in B", note: "電話してください・教えてください" },
        ],
        usage: [
          "Common with: 着く, 帰る, 終わる, 見つかる, 分かる.",
          "Discoveries: 家に帰ったら、猫がいました (I came home and — surprise — a cat!).",
        ],
        pitfalls: [
          "〜たら B where B is a request needs certainty of A: general habits use と instead.",
          "Discoveries with たら carry surprise (〜と、〜が!).",
        ],
        related: ["〜と (automatic)", "〜てから (after)"],
      },
      examples: [
        { jp: "駅に着いたら、電話してください。", kana: "えきについたら、でんわしてください。", en: "Call me when you arrive at the station." },
        { jp: "仕事が終わったら、飲みに行きましょう。", kana: "しごとがおわったら、のみにいきましょう。", en: "When work is over, let's go for drinks." },
        { jp: "箱を開けたら、猫が出てきました。", kana: "はこをあけたら、ねこがでてきました。", en: "I opened the box and a cat came out." },
        { jp: "分かったら、手を挙げてください。", kana: "わかったら、てをあげてください。", en: "If/when you understand, raise your hand." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “Call me when you arrive.”",
          tokens: ["着いたら", "電話して", "ください", "。"],
        },
        {
          kind: "mcq",
          text: "「開けたら、猫がいました。」 expresses…",
          options: ["a habit", "a discovery", "an order", "a request"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "仕事が終わった___、連絡します。(when finished)",
          blanks: ["ら"],
        },
        {
          kind: "mcq",
          text: "〜たら for sequences works best when A is…",
          options: ["a general habit", "a one-time future event", "a past event", "impossible"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "B can be a request or suggestion.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n4-u06-l03",
      title: "If I had…: counterfactual たら",
      titleJp: "たら（ばんぎゃく）",
      grammarLabel: "〜たら（反実仮想）",
      summary: "Dreams and regrets: お金があったら… (If I had money…), あの時行ったらよかった.",
      body: {
        meaning:
          "〜たら describes impossible or hypothetical situations: 宝くじが当たったら、家を買います (If I won the lottery, I'd buy a house). With pasts it expresses regrets: もっと勉強していればよかった.",
        formation: [
          { pattern: "〜たら（non-past）", note: "hypothetical future: 当たったら買います" },
          { pattern: "〜たら（past）＋ past result", note: "行ったらよかった should have gone" },
          { pattern: "〜たら ～たでしょう", note: "If A had happened, B would have" },
        ],
        usage: [
          "Dreams: お金があったら、世界中を旅行したい。",
          "Advice looking back: 先生に聞いたらよかったです (I wish I'd asked the teacher).",
        ],
        pitfalls: [
          "よかった after たら means “I wish / should have”, not “it was good”.",
          " Don't use と/ば for counterfactuals — たら (or ば) is right.",
        ],
        related: ["〜ば (Unit 7)", "〜たら for sequence"],
      },
      examples: [
        { jp: "宝くじが当たったら、家を買います。", kana: "たからくじがあたったら、いえをかいます。", en: "If I won the lottery, I'd buy a house." },
        { jp: "お金があったら、世界を旅行したいです。", kana: "おかねがあったら、せかいをりょこうしたいです。", en: "If I had money, I'd travel the world." },
        { jp: "もっと早く来たらよかったです。", kana: "もっとはやくきたらよかったです。", en: "I wish I'd come earlier." },
        { jp: "彼がいたら、助けてくれたでしょう。", kana: "かれがいたら、たすけてくれたでしょう。", en: "If he'd been here, he would have helped." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “If I won the lottery, I'd buy a house.”",
          tokens: ["宝くじ", "が", "当たったら", "家", "を", "買います", "。"],
        },
        {
          kind: "mcq",
          text: "「行ったらよかった。」 means…",
          options: ["It was good to go.", "I wish I had gone.", "Go if it's good.", "Going was bad."],
          answer: 1,
        },
        {
          kind: "blank",
          text: "お金が___たら、会社を作ります。(had money)",
          blanks: ["あっ"],
        },
        {
          kind: "mcq",
          text: "Counterfactual dreams use…",
          options: ["〜と", "〜たら", "〜ながら", "〜ので"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "〜たらよかった expresses regret about the past.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n4-u06-l04",
      title: "〜ても conditional",
      titleJp: "〜ても",
      grammarLabel: "〜ても",
      summary: "“Even if”: 雨が降っても行きます (Even if it rains, I'll go).",
      body: {
        meaning:
          "te-form + も means “even if/even though”: 高くても買います (I'll buy it even if it's expensive). It rejects the condition's influence on the result.",
        formation: [
          { pattern: "Verb て ＋ も", note: "行っても even if (I) go" },
          { pattern: "い-adj ＋ くても", note: "高くても" },
          { pattern: "な-adj/名詞 ＋ でも", note: "静かでも · 雨でも" },
        ],
        usage: [
          "Contrast with たら (condition matters) — ても says it doesn't.",
          "何を食べても (whatever I eat), 誰でも (anyone).",
        ],
        pitfalls: [
          "雨でも = even if rain; 雨だったら = if rain (normal condition).",
          "Question word + でも = any/whatever: どこでも anywhere.",
        ],
        related: ["〜てもいいです (permission)", "たら"],
      },
      examples: [
        { jp: "雨が降っても、試合をします。", kana: "あめがふっても、しあいをします。", en: "Even if it rains, the game will happen." },
        { jp: "高くても、この車を買います。", kana: "たかくても、このくるまをかいます。", en: "Even if it's expensive, I'll buy this car." },
        { jp: "何を食べても太りません。", kana: "なにをたべてもふとりません。", en: "Whatever I eat, I don't gain weight." },
        { jp: "この町は静かでも、便利です。", kana: "このまちはしずかでも、べんりです。", en: "Even though this town is quiet, it's convenient." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “Even if it rains, I'll go.”",
          tokens: ["雨", "が", "降って", "も", "行きます", "。"],
        },
        {
          kind: "mcq",
          text: "い-adjective + ても:",
          options: ["高いでも", "高くても", "高いても", "高かったらも"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "何を___後悔します。(whatever I do)",
          blanks: ["しても"],
        },
        {
          kind: "mcq",
          text: "〜ても tells us the condition…",
          options: ["changes the result", "does NOT change the result", "causes the result", "prevents the result"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "どこでも means “anywhere”.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n4-u06-l05",
      title: "〜てすみません: apologetic te-form",
      titleJp: "〜てすみません",
      grammarLabel: "〜てすみません",
      summary: "Apologising for trouble caused: 待たせてすみません (Sorry for making you wait).",
      body: {
        meaning:
          "te-form + すみません/ごめんなさい apologises for causing trouble: 遅れてすみません (Sorry for being late). More formal: 〜て申し訳ありません.",
        formation: [
          { pattern: "Verb て ＋ すみません", note: "待たせてすみません" },
          { pattern: "〜て ごめんなさい (casual)", note: "遅れてごめん" },
          { pattern: "〜て 申し訳ありません (formal)", note: "business" },
        ],
        usage: [
          "For favours too: 手伝ってもらってすみません (sounds odd — prefer ありがとう).",
          "Best for trouble/inconvenience you caused.",
        ],
        pitfalls: [
          "すみません is both “sorry” and “excuse me” — intonation and context separate them.",
          "Causative + てすみません apologises for making someone do something.",
        ],
        related: ["causative", "〜ています"],
      },
      examples: [
        { jp: "遅れてすみません。", kana: "おくれてすみません。", en: "Sorry for being late." },
        { jp: "お待たせしてすみません。", kana: "おまたせしてすみません。", en: "Sorry to have kept you waiting." },
        { jp: "ご迷惑をおかけしてすみません。", kana: "ごめいわくをおかけしてすみません。", en: "Sorry for the trouble." },
        { jp: "心配させてごめんなさい。", kana: "しんぱいさせてごめんなさい。", en: "Sorry for making you worry." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “Sorry for being late.”",
          tokens: ["遅れて", "すみません", "。"],
        },
        {
          kind: "blank",
          text: "待たせて___ません。(formal apology)",
          blanks: ["申し訳"],
        },
        {
          kind: "mcq",
          text: "Casual apology:",
          options: ["申し訳ありません", "ごめんなさい", "お疲れ様です", "いただきます"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: " causative + てすみません apologises for…",
          options: ["doing something", "making someone do something", "not doing", "finishing"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "すみません can also mean “excuse me”.",
          answer: true,
        },
      ],
    },
  ],
}
