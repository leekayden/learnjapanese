import type { AuthoredUnit } from "../../types"

export const u11: AuthoredUnit = {
  level: "N4",
  order: 11,
  title: "Oops and all done",
  titleJp: "てしまう",
  description:
    "〜てしまう for completion and regret, its casual contraction 〜ちゃう, and distinguishing the two uses.",
  vocab: [
    "財布|さいふ",
    "盗む|ぬすむ",
    "全部|ぜんぶ",
    "忘れる|わすれる",
    "宿題|しゅくだい",
    "直す|なおす",
    "壊れる|こわれる",
    "切れる|きれる",
    "遅刻|ちこく",
    "電車|でんしゃ",
    "売り切れ|うりきれ",
    "売る|うる",
  ],
  kanji: ["盗", "過", "遅", "刻", "売", "切", "完", "了", "悔"],
  exam: [
    {
      kind: "mcq",
      text: "「財布を忘れてしまいました。」 implies…",
      options: ["I deliberately left my wallet.", "I accidentally forgot my wallet.", "I found my wallet.", "I'll bring the wallet."],
      answer: 1,
    },
    {
      kind: "mcq",
      text: "Casual form of 食べてしまう:",
      options: ["食べてちゃう", "食べちゃう", "食べてしまう", "食べすしまう"],
      answer: 1,
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n4-u11-l01",
      title: "〜てしまう: completion",
      titleJp: "〜てしまう（完了）",
      grammarLabel: "〜てしまう（完了）",
      summary: "Fully finished: 本を全部読んでしまいました (I finished reading the whole book).",
      body: {
        meaning:
          "〜てしまう means an action is COMPLETELY done: 宿題をしてしまいました (I've finished my homework). Focus on completeness, not regret.",
        formation: [
          { pattern: "Verb て ＋ しまいます", note: "食べてしまいます finish eating" },
          { pattern: "Quantity + 全部…てしまう", note: "全部飲んでしまいました" },
        ],
        usage: [
          "Emphasises no remainder: 売り切れてしまった (sold out completely).",
          "Time-saving: 早く終わってしまいました.",
        ],
        pitfalls: [
          "Context decides completion vs regret — 財布を忘れてしまった is clearly regret.",
          "✗ します → てしまいます requires te-form.",
        ],
        related: ["〜ちゃう (casual)", "〜ておく"],
      },
      examples: [
        { jp: "宿題を全部してしまいました。", kana: "しゅくだいをぜんぶしてしまいました。", en: "I've done all my homework." },
        { jp: "この本はもう読んでしまいました。", kana: "このほんはもうよんでしまいました。", en: "I've already finished reading this book." },
        { jp: "ケーキは売り切れてしまいました。", kana: "ケーキはうりきれてしまいました。", en: "The cakes sold out." },
        { jp: "ビールは全部飲んでしまいました。", kana: "ビールはぜんぶのんでしまいました。", en: "The beer was all drunk up." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I've finished all my homework.”",
          tokens: ["宿題", "を", "全部", "して", "しまいました", "。"],
        },
        {
          kind: "mcq",
          text: "〜てしまう (completion) emphasises…",
          options: ["starting", "no remainder", "regret", "preparing"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "映画はもう見て___ました。(finished watching)",
          blanks: ["しまい"],
        },
        {
          kind: "mcq",
          text: "売り切れてしまいました means…",
          options: ["They're cutting sales.", "It's sold out.", "They sell well.", "Buy it now."],
          answer: 1,
        },
        {
          kind: "tf",
          text: "〜てしまう needs the te-form.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n4-u11-l02",
      title: "Regret: 〜てしまう (2)",
      titleJp: "〜てしまう（ざんねん）",
      grammarLabel: "〜てしまう（遺憾）",
      summary: "Oops: 電車に乗り過ごしてしまいました (I missed my stop).",
      body: {
        meaning:
          "The same 〜てしまう expresses regret over accidents or unintended results: 鍵をなくしてしまいました (I lost my keys — damn).",
        formation: [
          { pattern: "Verb て ＋ しまいました", note: "忘れてしまいました" },
          { pattern: "〜ないで しまいました? ✗", note: "regret uses the done action" },
        ],
        usage: [
          "Apologies pair well: 遅れてしまって、すみません.",
          "Sympathy: 大変でしたね。もらいました? no — 大変だったんですね。",
        ],
        pitfalls: [
          " Regret reading needs an unintended outcome context.",
          "Formal apology: 〜てしまい、申し訳ありません。",
        ],
        related: ["〜ちゃう", "すみません"],
      },
      examples: [
        { jp: "財布を忘れてしまいました。", kana: "さいふをわすれてしまいました。", en: "I forgot my wallet!" },
        { jp: "電車に乗り過ごしてしまいました。", kana: "でんしゃにのりすごしてしまいました。", en: "I missed my train stop." },
        { jp: "コップを割ってしまいました。ごめんなさい。", kana: "コップをわってしまいました。ごめんなさい。", en: "I broke a glass. Sorry." },
        { jp: "約束を忘れてしまって、すみません。", kana: "やくそくをわすれてしまって、すみません。", en: "Sorry for forgetting our appointment." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I forgot my wallet!”",
          tokens: ["財布", "を", "忘れて", "しまいました", "。"],
        },
        {
          kind: "mcq",
          text: "Regret てしまう signals…",
          options: ["intention", "unintended result", "preparation", "gratitude"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "鍵をなくして___ました。(lost them — regret)",
          blanks: ["しまい"],
        },
        {
          kind: "mcq",
          text: "Pair naturally with apologies: ___、すみません。",
          options: ["てしまって", "てあります", "ておいて", "てみて"],
          answer: 0,
        },
        {
          kind: "tf",
          text: "Context tells completion vs regret apart.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n4-u11-l03",
      title: "Casual: 〜ちゃう・〜じゃう",
      titleJp: "〜ちゃう・じゃう",
      grammarLabel: "〜ちゃう・〜じゃう",
      summary: "Speaking fast: 食べちゃった (ate it up / oops).",
      body: {
        meaning:
          "In casual speech 〜てしまう → 〜ちゃう and 〜でしまう → 〜じゃう: 食べちゃった！(I ate it all / oops!). Very common among friends.",
        formation: [
          { pattern: "〜てしまう → 〜ちゃう", note: "食べて→食べちゃう · 忘れて→忘れちゃう" },
          { pattern: "〜でしまう → 〜じゃう", note: "飲んで→飲んじゃう · 死んで→死んじゃう" },
          { pattern: "Past: ちゃった／じゃった", note: "忘れちゃった！" },
        ],
        usage: [
          "Friends, family, diaries, song lyrics.",
          "Never in formal writing or with superiors.",
        ],
        pitfalls: [
          "Write ちゃう in casual texts; keep てしまう elsewhere.",
          "✗ 食べちゃいました in business → 食べてしまいました。",
        ],
        related: ["〜てしまう", "〜ている→てる"],
      },
      examples: [
        { jp: "ケーキ、全部食べちゃった！", kana: "ケーキ、ぜんぶたべちゃった！", en: "I ate the whole cake!" },
        { jp: "宿題、忘れちゃった。", kana: "しゅくだい、わすれちゃった。", en: "I forgot my homework…" },
        { jp: "愛しちゃった。", kana: "いしちゃった。", en: "I fell in love." },
        { jp: "ちょっと飲んじゃった。", kana: "ちょっとのんじゃった。", en: "I drank a little (oops)." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Casual of 食べてしまう (past):",
          options: ["食べてちゃった", "食べちゃった", "食べてしまっちゃ", "食べしちゃった"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "〜でしまう becomes…",
          options: ["〜でちゃう", "〜じゃう", "〜ぢゃう", "〜でじゃう"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build (casual): “I forgot my homework!”",
          tokens: ["宿題", "忘れちゃった", "！"],
        },
        {
          kind: "mcq",
          text: "Use ちゃう with…",
          options: ["your boss", "business email", "friends", "news anchors"],
          answer: 2,
        },
        {
          kind: "tf",
          text: "ちゃう carries the same meanings as てしまう.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n4-u11-l04",
      title: "つい・ついに・せっかく",
      titleJp: "ふくごう ふくし",
      grammarLabel: "つい・ついに・せっかく",
      summary: "Oops-adverbs: つい忘れた (inadvertently), ついに終わった (finally), せっかく (with effort).",
      body: {
        meaning:
          "つい = inadvertently (regret pair); ついに = finally (achievement or end); せっかく = taking the trouble /难得.",
        formation: [
          { pattern: "つい ＋ Verb (regret)", note: "つい忘れてしまいました" },
          { pattern: "ついに ＋ Result", note: "ついに完成しました！" },
          { pattern: "せっかく ＋ なら／のに", note: "せっかくだから / せっかく来たのに" },
        ],
        usage: [
          "つい — small lapses; ついに — big milestones (both good and bad: ついに別れた).",
          "せっかく pairs: せっかくだから… (since we've gone to the trouble).",
        ],
        pitfalls: [
          "つい vs ついに: one tiny slip vs grand finale.",
          "せっかく…のに expresses wasted effort (disappointment).",
        ],
        related: ["〜てしまう", "〜のに"],
      },
      examples: [
        { jp: "つい忘れてしまいました。", kana: "ついわすれてしまいました。", en: "I inadvertently forgot." },
        { jp: "ついに完成しました！", kana: "ついにかんせいしました！", en: "It's finally finished!" },
        { jp: "せっかくだから、もう一杯どうですか。", kana: "せっかくだから、もういっぱいどうですか。", en: "Since we're at it, how about one more?" },
        { jp: "せっかく来たのに、休みでした。", kana: "せっかくきたのに、やすみでした。", en: "I made the trip, but it was closed." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Small unintended slip:",
          options: ["ついに", "つい", "せっかく", "すぐ"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Grand finale/achievement:",
          options: ["ついに", "つい", "せっかく", "まだ"],
          answer: 0,
        },
        {
          kind: "order",
          text: "Build: “It's finally finished!”",
          tokens: ["ついに", "完成しました", "！"],
        },
        {
          kind: "blank",
          text: "___来たのに、店は閉まっていました。(made the trip but…)",
          blanks: ["せっかく"],
        },
        {
          kind: "tf",
          text: "せっかく…のに expresses disappointment.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n4-u11-l05",
      title: "てform misc: 〜てよかった",
      titleJp: "〜てよかった",
      grammarLabel: "〜てよかった",
      summary: "Relief: 行ってよかった！(I'm glad I went!).",
      body: {
        meaning:
          "te-form + よかった expresses relief or joy about a past action: 来てよかったです (I'm glad I came).",
        formation: [
          { pattern: "Verb て ＋ よかったです", note: "聞いてよかった glad I asked" },
          { pattern: "〜てよかったら? ✗ — keep plain", note: "te + よかった only" },
        ],
        usage: [
          "Reacting to good outcomes: 傘を持ってきてよかった！",
          "Negative relief: 行かなくてよかった (glad I didn't go).",
        ],
        pitfalls: [
          "✗ 行ってよいです — the relief is past tense よかった.",
          "Don't confuse with 〜たらよかった (regret).",
        ],
        related: ["〜たらよかった (regret)", "〜てすみません"],
      },
      examples: [
        { jp: "来てよかったです。", kana: "きてよかったです。", en: "I'm glad I came." },
        { jp: "傘を持ってきてよかった！", kana: "かさをもってきてよかった！", en: "I'm so glad I brought an umbrella!" },
        { jp: "先生に聞いてよかったです。", kana: "せんせいにきいてよかったです。", en: "I'm glad I asked the teacher." },
        { jp: "行かなくてよかったです。", kana: "いかなくてよかったです。", en: "I'm glad I didn't go." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I'm glad I came.”",
          tokens: ["来て", "よかった", "です", "。"],
        },
        {
          kind: "mcq",
          text: "Relief uses which tense of よい?",
          options: ["よいです", "よかった", "よすぎる", "よければ"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "パスポートを持ってきて___！(glad I brought it)",
          blanks: ["よかった"],
        },
        {
          kind: "mcq",
          text: "“Glad I didn't go” →",
          options: ["行かなくてよかった", "行ったらよかった", "行ってよかった", "行きたくなかった"],
          answer: 0,
        },
        {
          kind: "tf",
          text: "〜たらよかった is regret; 〜てよかった is relief.",
          answer: true,
        },
      ],
    },
  ],
}
