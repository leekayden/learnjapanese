import type { AuthoredUnit } from "../../types"

export const u11: AuthoredUnit = {
  level: "N5",
  order: 11,
  title: "Where things are",
  titleJp: "ばしょと ひかく",
  description:
    "Existence with があります・います, the action particle で, position words (上・下・中・前・後ろ), comparing things with より・のほうが・いちばん, and frequency adverbs.",
  vocab: [
    "上|うえ",
    "下|した",
    "中|なか",
    "外|そと",
    "前|まえ",
    "後ろ|うしろ",
    "隣|となり",
    "近く|ちかく",
    "間|あいだ",
    "冷蔵庫|れいぞうこ",
    "|テーブル",
    "|ベッド",
    "棚|たな",
    "箱|はこ",
    "犬|いぬ",
    "猫|ねこ",
    "鳥|とり",
    "木|き",
    "花|はな",
    "新しい|あたらしい",
    "大きい|おおきい",
    "静か|しずか",
  ],
  kanji: ["外", "間", "隣", "花", "犬", "猫", "鳥", "冷", "庫"],
  exam: [
    {
      kind: "mcq",
      text: "Counting a cat and a dog alive in the room, you say 猫___犬… which existence verb fits both?",
      options: ["あります", "います", "です", "します"],
      answer: 1,
      explain: "Alive things take います.",
    },
    {
      kind: "order",
      text: "Build: “The book is on the desk.”",
      tokens: ["本", "は", "机", "の", "上に", "あります", "。"],
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n5-u11-l01",
      title: "There is / There are",
      titleJp: "があります・います",
      grammarLabel: "があります・います",
      summary: "あります for things, います for living things: 机の上に本があります.",
      body: {
        meaning:
          "あります states that a THING exists: 机の上に本があります (There's a book on the desk). います is for ALIVE things (people, animals): 公園に子供がいます.",
        formation: [
          { pattern: "Place に ＋ Noun が あります", note: "箱の中に何がありますか" },
          { pattern: "Place に ＋ Noun が います", note: "木の上に鳥がいます" },
          { pattern: "Negatives: ありません / いません", note: "誰もいません There's nobody." },
        ],
        usage: [
          "Place FIRST with に, then the thing with が — the reverse order also works for emphasis.",
          "Question: 何がありますか / 誰がいますか.",
        ],
        pitfalls: [
          "Plants take あります (they don't move); robots/pets usually います.",
          "✗ 猫があります → います for the cat.",
        ],
        related: ["〜が (subject)", "position words (next lesson)"],
      },
      examples: [
        { jp: "机の上に本があります。", kana: "つくえのうえにほんがあります。", en: "There is a book on the desk." },
        { jp: "公園に子供がいます。", kana: "こうえんにこどもがいます。", en: "There are children in the park." },
        { jp: "冷蔵庫に何もあります。", kana: "れいぞうこになんにもあります。", en: "There's everything in the fridge." },
        { jp: "この近くにコンビニはありません。", kana: "このちかくにコンビニはありません。", en: "There's no convenience store near here." },
      ],
      practice: [
        {
          kind: "blank",
          text: "木の上に鳥が___。(there is — alive)",
          blanks: ["います"],
        },
        {
          kind: "mcq",
          text: "Which particle marks the PLACE of existence?",
          options: ["が", "を", "に", "で"],
          answer: 2,
        },
        {
          kind: "order",
          text: "Build: “There's a cat under the table.”",
          tokens: ["テーブル", "の", "下に", "猫", "が", "います", "。"],
        },
        {
          kind: "mcq",
          text: "A robot vacuum — mostly…",
          options: ["います", "あります", "です", "しいます"],
          answer: 1,
          explain: "Non-living things (even moving ones) take あります at N5.",
        },
        {
          kind: "tf",
          text: "Flowers in a garden take あります.",
          answer: true,
          explain: "Plants don't self-move, so あります.",
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n5-u11-l02",
      title: "Where things are: position words",
      titleJp: "位置ことば",
      grammarLabel: "〜の上に",
      summary: "上・下・中・前・後ろ・隣・近く + の + に.",
      body: {
        meaning:
          "Position nouns connect to a reference noun with の, then に: 机の上に (on the desk), 家の近くに (near my house), 私の前に (in front of me).",
        formation: [
          { pattern: "Noun の 上／下／中／前に …があります", note: "箱の中にプレゼントがあります" },
          { pattern: "Noun の 後ろ／隣／近く／間に", note: "駅の近くに住んでいます" },
        ],
        usage: [
          "上（うえ）on · 下（した）under · 中（なか）inside · 外（そと）outside · 前（まえ）in front · 後ろ（うしろ）behind · 隣（となり）next to · 近く（ちかく）near · 間（あいだ）between.",
          "Between TWO things: AとBの間に.",
        ],
        pitfalls: [
          "前 is BOTH “before (time)” and “in front (space)” — に or の disambiguates.",
          "These are NOUNS: they need の after the reference noun: ✗ 机上に (that's kanji-compound style, learn later).",
        ],
        related: ["があります・います", "〜の (possession)"],
      },
      examples: [
        { jp: "本棚の隣にテレビがあります。", kana: "ほんだなのとなりにテレビがあります。", en: "There's a TV next to the bookshelf." },
        { jp: "猫は箱の中にいます。", kana: "ねこははこのなかにいます。", en: "The cat is inside the box." },
        { jp: "銀行と郵便局の間にレストランがあります。", kana: "ぎんこうとゆうびんきょくのあいだにレストランがあります。", en: "There's a restaurant between the bank and the post office." },
        { jp: "私の前なら誰ですか。", kana: "わたしのまえならだれですか。", en: "Who is in front of me?" },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “There's a present inside the box.”",
          tokens: ["箱", "の", "中に", "プレゼント", "が", "あります", "。"],
        },
        {
          kind: "mcq",
          text: "“Near the station” →",
          options: ["駅上に", "駅の近くに", "駅に近くの", "駅間に"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Which word means “behind”?",
          options: ["前", "後ろ", "隣", "中"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "銀行と郵便局の ___ に美容院があります。(between)",
          blanks: ["間"],
        },
        {
          kind: "tf",
          text: "隣 can be used for two countries next to each other.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n5-u11-l03",
      title: "Doing at a place: 〜で",
      titleJp: "〜で",
      grammarLabel: "〜で",
      summary: "で marks WHERE an action happens: 図書館で勉強します.",
      body: {
        meaning:
          "で marks the PLACE OF AN ACTION: 図書館で勉強します (I study AT the library). Compare に (existence/destination point). で also marks means/tools: バスで行きます (go BY bus).",
        formation: [
          { pattern: "Place で Verb", note: "スーパーで野菜を買います" },
          { pattern: "Tool／Means で Verb", note: "電車で行きます go by train" },
          { pattern: "Material で 作ります", note: "木で作る made of wood" },
        ],
        usage: [
          "に = arrival/existence point; で = action stage. 学校に行く vs 学校で勉強する.",
          "Language/means: 日本語で話します (speak in Japanese).",
        ],
        pitfalls: [
          "✗ 図書館に勉強します → で for actions.",
          "_existence_ uses に even for places: 図書館に本があります.",
        ],
        related: ["に (destination)", "があります・います"],
      },
      examples: [
        { jp: "私は図書館で勉強します。", kana: "わたしはとしょかんでべんきょうします。", en: "I study at the library." },
        { jp: "スーパーで野菜を買いました。", kana: "スーパーでやさいをかいました。", en: "I bought vegetables at the supermarket." },
        { jp: "電車で京都へ行きます。", kana: "でんしゃできょうとへいきます。", en: "I'll go to Kyoto by train." },
        { jp: "日本語で話してください。", kana: "にほんごではなしてください。", en: "Please speak in Japanese." },
      ],
      practice: [
        {
          kind: "blank",
          text: "レストラン ___ 昼ご飯を食べます。(at the restaurant)",
          blanks: ["で"],
        },
        {
          kind: "mcq",
          text: "“I go to school by bus.” →",
          options: ["バスに行きます。", "バスで学校に行きます。", "バスが学校に行きます。", "学校でバスに行きます。"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Which uses に correctly?",
          options: ["教室で本があります。", "教室に本があります。", "教室本があります。", "教室が本にあります。"],
          answer: 1,
          explain: "Existence takes に.",
        },
        {
          kind: "order",
          text: "Build: “I bought vegetables at the supermarket.”",
          tokens: ["スーパー", "で", "野菜", "を", "買いました", "。"],
        },
        {
          kind: "tf",
          text: "で marks the tool or means of doing something.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n5-u11-l04",
      title: "Which is better?",
      titleJp: "ひかく",
      grammarLabel: "〜より・〜のほうが",
      summary: "Comparison: 電車よりバスのほうが安いです; いちばん for superlatives.",
      body: {
        meaning:
          "ＡよりＢのほうが… compares: 飛行機より電車のほうが安いです (Trains are cheaper than planes). いちばん makes superlatives: 日本でいちばん有名な山 (the most famous mountain in Japan).",
        formation: [
          { pattern: "Ａ より Ｂ のほうが adjective", note: "B more than A" },
          { pattern: "Group で いちばん ～", note: "クラスでいちばん高い" },
          { pattern: "ＡとＢと どちらが ～ですか", note: "Which of the two…?" },
        ],
        usage: [
          "Answer どちらが with Ｂのほうが…: 電車のほうが好きです.",
          "いちばん answers among 3+: 三つの中でいちばん…",
        ],
        pitfalls: [
          "The PREFERRED thing takes のほうが, not the baseline.",
          "より can come after the adjective for emphasis: 安いより高いほうがいい。",
        ],
        related: ["い-adjectives", "な-adjectives"],
      },
      examples: [
        { jp: "電車よりバスのほうが安いです。", kana: "でんしゃよりバスのほうがやすいです。", en: "Buses are cheaper than trains." },
        { jp: "犬と猫とどちらが好きですか。", kana: "いぬとねことどちらがすきですか。", en: "Which do you like, dogs or cats?" },
        { jp: "犬のほうが好きです。", kana: "いぬのほうがすきです。", en: "I like dogs more." },
        { jp: "家族の中でいちばん背が高いです。", kana: "かぞくのなかでいちばんせがたかいです。", en: "I'm the tallest in my family." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “Trains are faster than buses.”",
          tokens: ["バス", "より", "電車", "のほうが", "速い", "です"],
        },
        {
          kind: "mcq",
          text: "Ask “Which of the two do you like?”",
          options: ["何が一番好きですか。", "どちらが好きですか。", "どれが好きですか。", "どうして好きですか。"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "“The most (among three or more)” uses…",
          options: ["のほうが", "より", "いちばん", "とても"],
          answer: 2,
        },
        {
          kind: "blank",
          text: "クラス ___ いちばん静かな人は田中さんです。(in the class)",
          blanks: ["で"],
        },
        {
          kind: "tf",
          text: "In ＡよりＢのほうが～, Ｂ is the preferred one.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n5-u11-l05",
      title: "How often?",
      titleJp: "ひんどの ことば",
      grammarLabel: "frequency adverbs",
      summary: "いつも・よく・ときどき・あまり・全然 with verbs.",
      body: {
        meaning:
          "Frequency adverbs go before the verb: いつも (always), よく (often), ときどき (sometimes), たまに (rarely), あまり＋negative (not often), 全然＋negative (never).",
        formation: [
          { pattern: "いつも／よく／ときどき ＋ Verb", note: "よく映画を見ます" },
          { pattern: "あまり ＋ negative", note: "あまり食べません" },
          { pattern: "全然 ＋ negative", note: "全然行きません never go" },
        ],
        usage: [
          "Scale: いつも → よく → ときどき → たまに → あまり(ない) → 全然(ない).",
          "Weekly counters: 週に三回 (three times a week) — 回 counter comes in Unit 12.",
        ],
        pitfalls: [
          "あまり/全然 keep requiring negatives, even with verbs.",
          "These adverbs usually sit right before the verb, but sentence-start also works.",
        ],
        related: ["〜ません", "とても・あまり (Unit 5)"],
      },
      examples: [
        { jp: "私はいつも七時に起きます。", kana: "わたしはいつもしちじにおきます。", en: "I always get up at seven." },
        { jp: "よく図書館で勉強します。", kana: "よくとしょかんでべんきょうします。", en: "I often study at the library." },
        { jp: "たまに映画を見ます。", kana: "たまにえいがをみます。", en: "I occasionally watch movies." },
        { jp: "肉を全然食べません。", kana: "にくをぜんぜんたべません。", en: "I never eat meat." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I often watch movies.”",
          tokens: ["よく", "映画", "を", "見ます", "。"],
        },
        {
          kind: "blank",
          text: "___ 食べません。(never eat)",
          blanks: ["全然"],
        },
        {
          kind: "mcq",
          text: "Which comes right before a NEGATIVE verb?",
          options: ["いつも", "よく", "あまり", "ときどき"],
          answer: 2,
        },
        {
          kind: "mcq",
          text: "“Sometimes” →",
          options: ["いつも", "よく", "ときどき", "全然"],
          answer: 2,
        },
        {
          kind: "tf",
          text: "Frequency adverbs go after the verb.",
          answer: false,
          explain: "They come before the verb.",
        },
      ],
    },
  ],
}
