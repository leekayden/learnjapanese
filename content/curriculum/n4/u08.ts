import type { AuthoredUnit } from "../../types"

export const u08: AuthoredUnit = {
  level: "N4",
  order: 8,
  title: "It seems and I heard",
  titleJp: "そうだ・ようだ",
  description:
    "Reporting what you heard (〜そうです), what something looks like (〜そうです), and conclusions from evidence (〜ようだ・〜みたいだ).",
  vocab: [
    "天気|てんき",
    "予報|よほう",
    "味|あじ",
    "忙しい|いそがしい",
    "元気|げんき",
    "静か|しずか",
    "景色|けしき",
"|きれい",
    "雲|くも",
    "空|そら",
    "今にも|いまにも",
    "落ちる|おちる",
    "感じ|かんじ",
    "双子|ふたご",
    "似る|にる",
    "眠い|ねむい",
  ],
  kanji: ["予", "報", "景", "色", "雲", "眠", "似", "双", "子"],
  exam: [
    {
      kind: "mcq",
      text: "「天気予報によると、明日は雨が降るそうです。」 means…",
      options: ["It looks like rain.", "I heard it will rain (according to the forecast).", "It rained.", "Let's hope for rain."],
      answer: 1,
      explain: "Plain form + そうです = hearsay.",
    },
    {
      kind: "mcq",
      text: "「このケーキはおいしそうです。」 means…",
      options: ["I heard the cake is good.", "The cake looks delicious.", "The cake was delicious.", "Make the cake delicious."],
      answer: 1,
      explain: "Stem + そうです = appearance.",
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n4-u08-l01",
      title: "I heard: 〜そうです (hearsay)",
      titleJp: "〜そうです（伝聞）",
      grammarLabel: "〜そうです（伝聞）",
      summary: "Plain form + そうです: 雨が降るそうです (I hear it will rain).",
      body: {
        meaning:
          "Plain form + そうです reports what you HEARD from somewhere: 天気予報によると、明日は雪だそうです (According to the forecast, it'll snow tomorrow).",
        formation: [
          { pattern: "Verb plain ＋ そうです", note: "行くそうです · 行かないそうです" },
          { pattern: "い-adj ＋ そうです", note: "高いそうです" },
          { pattern: "な-adj/名詞 ＋ だそうです", note: "元気だそうです · 学生だそうです" },
        ],
        usage: [
          "Source with によると: ニュースによると…",
          "No past/negative on そうです itself — the quote carries it.",
        ],
        pitfalls: [
          "✗ 行くそうですか → 行くそうですか is fine actually; but the past report is 行くそうです not 行くそうでした.",
          "Distinct from appearance そう (next lesson): hearsay keeps the plain form intact.",
        ],
        related: ["〜と言っていました", "〜そうです (appearance)"],
      },
      examples: [
        { jp: "天気予報によると、明日は雨だそうです。", kana: "てんきよほうによると、あしたはあめだそうです。", en: "According to the forecast, it'll rain tomorrow." },
        { jp: "田中さんは転勤するそうです。", kana: "たなかさんはてんきんするそうです。", en: "I hear Mr. Tanaka is transferring." },
        { jp: "あの店はおいしいそうです。", kana: "あのみせはおいしいそうです。", en: "I hear that shop is good." },
        { jp: "鈴木さんは元気じゃないそうです。", kana: "すずきさんはげんきじゃないそうです。", en: "I hear Ms. Suzuki isn't well." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I hear it'll rain tomorrow.”",
          tokens: ["明日", "は", "雨", "だ", "そうです", "。"],
        },
        {
          kind: "mcq",
          text: "Hearsay そうです follows which form?",
          options: ["ます-stem", "plain form", "te-form", "た-form only"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "ニュースによ___、事故があったそうです。",
          blanks: ["と"],
        },
        {
          kind: "mcq",
          text: "“I hear he's busy” →",
          options: ["忙しいそうだ", "忙しそうだ", "忙しいそうですか", "忙しそうでした"],
          answer: 0,
        },
        {
          kind: "tf",
          text: "な-adjectives take だ before hearsay そうです.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n4-u08-l02",
      title: "Looks like: 〜そうです (appearance)",
      titleJp: "〜そうです（ようす）",
      grammarLabel: "〜そうです（様態）",
      summary: "Stem + そうです: おいしそう (looks tasty), 降りそう (looks like rain).",
      body: {
        meaning:
          "Adjective/verb STEM + そうです describes how something LOOKS based on appearance: このケーキはおいしそうです (This cake looks delicious), 今にも雨が降りそうです (It looks like rain any minute).",
        formation: [
          { pattern: "い-adj stem ＋ そうです", note: "おいしい→おいしそう · いい→よさそう" },
          { pattern: "な-adj stem ＋ そうです", note: "元気→元気そう · 便利→便利そう" },
          { pattern: "Verb ます-stem ＋ そうです", note: "降ります→降りそう · ありそう" },
        ],
        usage: [
          "You judge from what you see/hear right now.",
          "Negative appearance: おいしくなさそう (looks bad), 降りそうにない (doesn't look like it'll fall).",
        ],
        pitfalls: [
          "✗ おいしいそうです (that's hearsay!) vs ✓ おいしそうです (looks tasty).",
          "いい→よさそう; ない→なさそう (irregular stems).",
        ],
        related: ["〜そうです (hearsay)", "〜ようだ"],
      },
      examples: [
        { jp: "このケーキはおいしそうです。", kana: "このケーキはおいしそうです。", en: "This cake looks delicious." },
        { jp: "今にも雨が降りそうです。", kana: "いまにもあめがふりそうです。", en: "It looks like it could rain any minute." },
        { jp: "田中さんは最近忙しそうですね。", kana: "たなかさんはさいきんいそがしそうですね。", en: "Mr. Tanaka looks busy lately, doesn't he." },
        { jp: "この問題は難しそうです。", kana: "このもんだいはむずかしそうです。", en: "This problem looks difficult." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "“This cake looks delicious” →",
          options: ["おいしいそうです", "おいしそうです", "おいしいだそうです", "おいしいようです"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Appearance form of いい:",
          options: ["いいそう", "よさそう", "いそう", "いいそう"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “It looks like rain (any minute).”",
          tokens: ["今にも", "雨", "が", "降り", "そうです", "。"],
        },
        {
          kind: "blank",
          text: "この問題は難し___です。(looks hard)",
          blanks: ["そう"],
        },
        {
          kind: "tf",
          text: "おいしいそうです means “looks tasty”.",
          answer: false,
          explain: "That's hearsay (I heard it's tasty); appearance is おいしそう.",
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n4-u08-l03",
      title: "Seems from evidence: 〜ようだ",
      titleJp: "〜ようだ",
      grammarLabel: "〜ようだ",
      summary: "Reasoned conclusion: 雨が降ったようです (It seems it rained).",
      body: {
        meaning:
          "Plain form + ようだ draws a conclusion from EVIDENCE: 道が濡れています。雨が降ったようです (The road is wet — it must have rained). Polite: ようです; formal writing: ようだ.",
        formation: [
          { pattern: "Verb plain ＋ ようです", note: "行ったようです seems (he) went" },
          { pattern: "い-adj ＋ ようです", note: "高いようです" },
          { pattern: "な-adj/名詞 ＋ のようです", note: "雨のようです · 元気なようです" },
        ],
        usage: [
          "Simile too: 雪のようだ (like snow).",
          "Softer than direct statements — polite hedging.",
        ],
        pitfalls: [
          "な-adj/nouns take の before よう: ✗ 雨ようです → 雨のようです.",
          "Different from そう (appearance): ようだ reasons from broader evidence.",
        ],
        related: ["〜みたいだ", "〜そうです (appearance)"],
      },
      examples: [
        { jp: "道が濡れています。雨が降ったようです。", kana: "みちがぬれています。あめがふったようです。", en: "The road is wet. It seems it rained." },
        { jp: "田中さんは疲れているようです。", kana: "たなかさんはつかれているようです。", en: "Mr. Tanaka seems tired." },
        { jp: "この汁は味が薄いようです。", kana: "このしるはあじがうすいようです。", en: "This soup seems to be bland." },
        { jp: "彼は英語が話せるようです。", kana: "かれはえいごがはなせるようです。", en: "He seems able to speak English." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “It seems it rained.”",
          tokens: ["雨", "が", "降った", "ようです", "。"],
        },
        {
          kind: "mcq",
          text: "Noun + ようだ takes…",
          options: ["な", "の", "が", "で"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "彼は忙しい___です。(seems busy)",
          blanks: ["よう"],
        },
        {
          kind: "mcq",
          text: "ようだ bases the guess on…",
          options: ["nothing", "evidence", "hearsay", "commands"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "雪のようだ can also mean “like snow” (simile).",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n4-u08-l04",
      title: "〜みたいだ — casual ようだ",
      titleJp: "〜みたいだ",
      grammarLabel: "〜みたいだ",
      summary: "Conversational seems: 雨みたいだ (looks like rain).",
      body: {
        meaning:
          "みたいだ is the casual equivalent of ようだ: 雨みたいです (It seems like rain). Follows nouns and plain forms directly — no の needed.",
        formation: [
          { pattern: "Noun ＋ みたいです", note: "夢みたいです like a dream" },
          { pattern: "Verb plain ＋ みたいです", note: "行ったみたいです" },
          { pattern: "い-adj ＋ みたいです", note: "寒いみたいです" },
        ],
        usage: [
          "Speaking; ようだ for writing/formal.",
          "Similes: 彼は子供みたい (he's like a child).",
        ],
        pitfalls: [
          "✗ 雨のみたい — みたい attaches directly.",
          "Keep ようだ in formal writing; みたい in conversation.",
        ],
        related: ["〜ようだ", "〜そうです"],
      },
      examples: [
        { jp: "外は寒いみたいです。", kana: "そとはさむいみたいです。", en: "It seems cold outside." },
        { jp: "田中さんは今日休みみたいです。", kana: "たなかさんはきょうやすみみたいです。", en: "Looks like Tanaka is off today." },
        { jp: "誰もいないみたいだ。", kana: "だれもいないみたいだ。", en: "Seems nobody's here." },
        { jp: "彼は子供みたいに走ります。", kana: "かれはこどもみたいにはしります。", en: "He runs like a child." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “Seems like rain.”",
          tokens: ["雨", "みたい", "です", "。"],
        },
        {
          kind: "mcq",
          text: "みたい vs ようだ — みたい is…",
          options: ["more formal", "more casual", "only written", "only past"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "彼は嘘をついている___です。(seems to be lying)",
          blanks: ["みたい"],
        },
        {
          kind: "mcq",
          text: "Noun before みたい needs…",
          options: ["の", "な", "が", "nothing"],
          answer: 3,
          explain: "みたい attaches directly: 雨みたい.",
        },
        {
          kind: "tf",
          text: "子供みたい can mean “like a child”.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n4-u08-l05",
      title: "そう vs よう vs みたい",
      titleJp: "そう・よう・みたい",
      grammarLabel: "guessing ladders",
      summary: "Choose your evidence: looks (そう), reasons (よう/みたい), reports (そうです).",
      body: {
        meaning:
          "Three ways to hedge: 降りそうです (looks like rain — visual), 降るようです (it seems — evidence), 降るそうです (I heard — report). Each has a different evidence type.",
        formation: [
          { pattern: "Stem + そう (appearance)", note: "visual/now" },
          { pattern: "Plain + ようだ・みたいだ (conclusion)", note: "evidence-based" },
          { pattern: "Plain + そうです (hearsay)", note: "reported" },
        ],
        usage: [
          "Cue words: looks like → そう; seems/must be → よう; I hear → そうです.",
          "Combine: 聞いたところでは、難しいようです.",
        ],
        pitfalls: [
          "Parallel ambiguity: 忙しいそうだ (hearsay busy) vs 忙しそうだ (looks busy).",
          "ようだ and みたいだ are interchangeable in speech.",
        ],
        related: ["そうです (hearsay)", "そうです (appearance)", "ようだ・みたい"],
      },
      examples: [
        { jp: "おいしそうですね。", kana: "おいしそうですね。", en: "Looks tasty!" },
        { jp: "おいしいらしいですよ。", kana: "おいしいらしいですよ。", en: "I hear it's tasty.", note: "らしい also = hearsay-ish" },
        { jp: "おいしいようです。", kana: "おいしいようです。", en: "It seems tasty (from evidence)." },
        { jp: "おいしいそうです。", kana: "おいしいそうです。", en: "I hear it's tasty." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Visual, right now: 空を見て — 雨が___。",
          options: ["降るそうです", "降りそうです", "降るようです", "降るらしい"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Report from the news: ニュースでは ___。",
          options: ["降りそうです", "降るそうです", "降るようです", "降りようです"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Evidence-based: 雲が多い。___。",
          options: ["降りそうです", "降るようです", "降るそうです", "降ろう"],
          answer: 1,
          explain: "Both 1 and 2 possible; ようです fits reasoned conclusion best.",
        },
        {
          kind: "match",
          text: "Match expression to evidence:",
          pairs: [
            ["そうです", "hearsay"],
            ["そうです (stem+)", "appearance"],
            ["ようです", "conclusion"],
            ["みたいです", "casual conclusion"],
          ],
        },
        {
          kind: "tf",
          text: "らしい also reports hearsay-like information.",
          answer: true,
        },
      ],
    },
  ],
}
