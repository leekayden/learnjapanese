import type { AuthoredUnit } from "../../types"

export const u01: AuthoredUnit = {
  level: "N4",
  order: 1,
  title: "Can and be able to",
  titleJp: "できること",
  description:
    "The potential form (食べられる・飲める), talking about ability with 〜ことができます, turning verbs into nouns with の and こと, and saying what you're good at.",
  vocab: [
    "泳ぐ|およぐ",
    "運転|うんてん",
    "経験|けいけん",
    "能力|のうりょく",
    "辛い|からい",
    "注意|ちゅうい",
    "危ない|あぶない",
    "危険|きけん",
    "簡単|かんたん",
    "難しい|むずかしい",
    "上手|じょうず",
    "下手|へた",
    "練習|れんしゅう",
    "会話|かいわ",
    "漢字|かんじ",
    "読む|よむ",
  ],
  kanji: ["泳", "験", "能", "力", "危", "険", "注", "意", "練"],
  exam: [
    {
      kind: "mcq",
      text: "Potential form of 書く:",
      options: ["書ける", "書ける", "書ける", "書いた"],
      answer: 0,
      explain: "く→ける: 書ける (can write).",
    },
    {
      kind: "blank",
      text: "私は泳ぐ ___ ができます。",
      blanks: ["こと"],
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n4-u01-l01",
      title: "The potential form",
      titleJp: "かのうけい",
      grammarLabel: "〜られる・〜える",
      summary: "“Can do”: 食べられる, 飲める, 行ける — ability and possibility.",
      body: {
        meaning:
          "The potential form means “can do” — ability or possibility. る-verbs: drop る add られる (食べる→食べられる). う-verbs: change the u-sound to e-sound + る (飲む→飲める, 書く→書ける). する→できる, 来る→来(こ)られる.",
        formation: [
          { pattern: "る-verbs: る → られる", note: "食べる→食べられる · 見る→見られる" },
          { pattern: "う-verbs: -u → -eる", note: "読む→読める · 買う→買える · 待つ→待てる · 泳ぐ→泳げる" },
          { pattern: "する→できる / 来る→来られる", note: "irregular" },
        ],
        usage: [
          "With potential verbs, the object often takes が instead of を: 日本語が話せます.",
          " Potential is intransitive-ish: “can be done”.",
        ],
        pitfalls: [
          "見られる (can see) vs 見えます (is visible) — different nuance (見える is natural perception).",
          "行く→行ける but the te-form exception stays: 行って.",
        ],
        related: ["〜ことができます", "passive られる (Unit 4)"],
      },
      examples: [
        { jp: "私は日本語が話せます。", kana: "わたしはにほんごがはなせます。", en: "I can speak Japanese." },
        { jp: "ここで泳げます。", kana: "ここでおよげます。", en: "You can swim here." },
        { jp: "漢字が読めますか。", kana: "かんじがよめますか。", en: "Can you read kanji?" },
        { jp: "明日は来られません。", kana: "あしたはこられません。", en: "I can't come tomorrow." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Potential form of 飲む:",
          options: ["飲める", "飲めない", "飲ませる", "飲みたい"],
          answer: 0,
        },
        {
          kind: "match",
          text: "Match verbs to potential forms:",
          pairs: [
            ["書く", "書ける"],
            ["食べる", "食べられる"],
            ["泳ぐ", "泳げる"],
            ["する", "できる"],
          ],
        },
        {
          kind: "order",
          text: "Build: “I can speak Japanese.”",
          tokens: ["私", "は", "日本語", "が", "話せます", "。"],
        },
        {
          kind: "mcq",
          text: "The potential of する is…",
          options: ["しられる", "できる", "すえる", "させる"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "Potential objects often switch を to が.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n4-u01-l02",
      title: "Formal ability: 〜ことができます",
      titleJp: "〜ことができます",
      grammarLabel: "〜ことができます",
      summary: "Dictionary form + ことができます — the formal way to say “can”.",
      body: {
        meaning:
          "Verb dictionary form + ことができます means “can do …” more formally than the potential form: 日本語を話すことができます. It's common in writing, speeches, and formal requests.",
        formation: [
          { pattern: "Verb dictionary form ＋ こと が できます", note: "泳ぐことができます" },
          { pattern: "〜こと が できません", note: "cannot" },
        ],
        usage: [
          "Preferred for verbs of creation (作る) and abstract actions.",
          "〜できます alone follows NOUNS: 料理ができます (I can cook / make dishes).",
        ],
        pitfalls: [
          "Use the dictionary form, not ます: ✗ 泳ぎことができます.",
          "できる itself is the potential of する — 運転ができます = 運転できます.",
        ],
        related: ["potential form", "の/こと nominalizers (next lesson)"],
      },
      examples: [
        { jp: "私は車を運転することができます。", kana: "わたしはくるまをうんてんすることができます。", en: "I can drive a car." },
        { jp: "田中さんは料理を作ることができます。", kana: "たなかさんはりょうりをつくることができます。", en: "Mr. Tanaka can cook." },
        { jp: "ここでタバコを吸うことはできません。", kana: "ここでタバコをすうことはできません。", en: "You cannot smoke here." },
        { jp: "日本語を教えることができますか。", kana: "にほんごをおしえることができますか。", en: "Can you teach Japanese?" },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I can drive a car.”",
          tokens: ["車", "を", "運転する", "こと", "が", "できます", "。"],
        },
        {
          kind: "blank",
          text: "日本語を話す ___ ができますか。",
          blanks: ["こと"],
        },
        {
          kind: "mcq",
          text: "Which form precedes ことができます?",
          options: ["ます-stem", "dictionary form", "te-form", "た-form"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "“You can't smoke here” (formal sign) →",
          options: ["吸えてはいけません", "吸うことができません", "吸わないでください", "吸いましょう"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "ことができます is more formal than the potential conjugation.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n4-u01-l03",
      title: "Verbs as nouns: の and こと",
      titleJp: "の・こと",
      grammarLabel: "の・こと（名詞化）",
      summary: "Turning verbs into nouns: 泳ぐのが好きです / 泳ぐことが好きです.",
      body: {
        meaning:
          "の and こと turn a verb phrase into a noun-phrase: 泳ぐの (swimming). Both mean roughly “the act of …”. の feels concrete/immediate; こと is more abstract and required by certain words (できる, 好き both accept, but 聞こえる・見える take の; 言う・思う take こと).",
        formation: [
          { pattern: "Verb plain ＋ の", note: "走るのは楽しい Running is fun." },
          { pattern: "Verb plain ＋ こと", note: "日本語を教えることは難しい。" },
          { pattern: "〜のが好き／上手／下手", note: "料理を作るのが上手です" },
        ],
        usage: [
          "Perception/senses: 見るの, 聞くの (I saw him cross: 彼が渡るのを見ました).",
          "こと with communication verbs: 言うこと, 思うこと; with できる/決める.",
        ],
        pitfalls: [
          "✗ 泳ぐことが好きです is fine, but ✗ 見えることができません — set phrases take their preferred one.",
          "After の the particle stays: 泳ぐのが上手 (の replaces the noun slot).",
        ],
        related: ["〜ことができます", "〜のが好きです"],
      },
      examples: [
        { jp: "私は泳ぐのが好きです。", kana: "わたしはおよぐのがすきです。", en: "I like swimming." },
        { jp: "毎日運動することは大切です。", kana: "まいにちうんどうすることはたいせつです。", en: "Exercising every day is important." },
        { jp: "田中さんが歌うのを聞きました。", kana: "たなかさんがうたうのをききました。", en: "I heard Tanaka sing." },
        { jp: "漢字を書くのが下手です。", kana: "かんじをかくのがへたです。", en: "I'm bad at writing kanji." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I like swimming.”",
          tokens: ["泳ぐ", "の", "が", "好きです", "。"],
        },
        {
          kind: "blank",
          text: "毎日運動する ___ は大切です。",
          blanks: ["こと"],
        },
        {
          kind: "mcq",
          text: "“I'm good at cooking.” →",
          options: ["料理を作るのが上手です。", "料理を作ることが上手です。", "料理を作りのが上手です。", "料理を作って上手です。"],
          answer: 0,
          explain: "のが上手 is the set pattern.",
        },
        {
          kind: "mcq",
          text: "Perception verbs (見る/聞く) prefer…",
          options: ["こと", "の", "もの", "ため"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "Both の and こと make verb phrases work like nouns.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n4-u01-l04",
      title: "見える・聞こえる and ようになる",
      titleJp: "みえる・きこえる",
      grammarLabel: "〜が見える・聞こえる",
      summary: "Natural perception: 見える (is visible), 聞こえる (can be heard).",
      body: {
        meaning:
          "見える and 聞こえる describe what comes into your senses WITHOUT effort — the thing takes が: 山が見えます (The mountain is visible), 音楽が聞こえます (I can hear music). Compare deliberate 見られる/聞ける.",
        formation: [
          { pattern: "Ｎ が 見えます", note: "富士山が見えます Mt. Fuji is visible." },
          { pattern: "Ｎ が 聞こえます", note: "電話の音が聞こえます" },
          { pattern: "〜が 見られます／聞けます", note: "deliberate can-watch/can-listen" },
        ],
        usage: [
          "見えます = it's visible naturally; 見られます = you have the chance/opportunity.",
          "Negatives: 見えません (can't see it), 聞こえません (can't hear it).",
        ],
        pitfalls: [
          "✗ テレビが見えます is for “the TV set is visible”; “I can watch TV” is テレビが見られます.",
          " These verbs already contain “can” — no potential form needed.",
        ],
        related: ["potential form"],
      },
      examples: [
        { jp: "窓から海が見えます。", kana: "まどからうみがみえます。", en: "You can see the sea from the window." },
        { jp: "外で鳥の声が聞こえます。", kana: "そとでとりのこえがきこえます。", en: "You can hear birds outside." },
        { jp: "今日は富士山が見えました。", kana: "きょうはふじさんがみえました。", en: "Mt. Fuji was visible today." },
        { jp: "遠くてよく見えません。", kana: "とおくてよくみえません。", en: "It's far, so I can't see it well." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Music playing in the distance (not your choice): 音楽が___。",
          options: ["聞けます", "聞こえます", "聞かせます", "聞きます"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "窓から山が___ます。(is visible)",
          blanks: ["見え"],
        },
        {
          kind: "mcq",
          text: "“I can watch a movie tonight (opportunity)” →",
          options: ["映画が見えます。", "映画が見られます。", "映画を見えます。", "映画が見たいです。"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "What particle marks the perceived thing?",
          options: ["を", "が", "に", "で"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "聞こえる already includes the meaning of “can”.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n4-u01-l05",
      title: "Before I die, I want to…",
      titleJp: "〜たい・〜たら dreams",
      grammarLabel: "review & dreams",
      summary: "Combining desire, potential and たら into dream sentences.",
      body: {
        meaning:
          "Let's combine what you know: 〜たい (want to), potential (can), and たら (if/when) to talk about dreams and goals: 日本で働けたらいいですね (It'd be nice if I could work in Japan).",
        formation: [
          { pattern: "〜たいです / 〜たくないです", note: "review from N5" },
          { pattern: "Potential たら ＋ いいですね", note: "話せたらいいですね It'd be nice if I could speak…" },
          { pattern: "〜ようになりたい", note: "I want to become able to…" },
        ],
        usage: [
          "話せるようになりたいです — the N4 way to say “I want to become able to speak”.",
          "〜たら review comes fully in Unit 6.",
        ],
        pitfalls: [
          "ようになる = change of ability/state — with たい it's the standard “want to become able to”.",
        ],
        related: ["potential form", "〜ようになる (Unit 11)", "〜たら (Unit 6)"],
      },
      examples: [
        { jp: "日本で働きたいです。", kana: "にほんではたらきたいです。", en: "I want to work in Japan." },
        { jp: "漢字が読めるようになりたいです。", kana: "かんじがよめるようになりたいです。", en: "I want to become able to read kanji." },
        { jp: "早く話せるようになりたいですね。", kana: "はやくはなせるようになりたいですね。", en: "I want to become able to speak soon." },
        { jp: "海外で泳げたらいいですね。", kana: "かいがいでおよげたらいいですね。", en: "It'd be nice to be able to swim overseas." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I want to become able to read kanji.”",
          tokens: ["漢字", "が", "読める", "ように", "なりたいです", "。"],
        },
        {
          kind: "mcq",
          text: "“It'd be nice if I could swim” →",
          options: ["泳ぎたいですね。", "泳げたらいいですね。", "泳げばいいですね。", "泳ぐことがいいですね。"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "早く日本語が話せる___になりたいです。",
          blanks: ["よう"],
        },
        {
          kind: "mcq",
          text: "〜たい expresses…",
          options: ["ability", "desire", "obligation", "permission"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "〜ようになりたい combines “become able” + “want”.",
          answer: true,
        },
      ],
    },
  ],
}
