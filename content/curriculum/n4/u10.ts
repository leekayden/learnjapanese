import type { AuthoredUnit } from "../../types"

export const u10: AuthoredUnit = {
  level: "N4",
  order: 10,
  title: "Just, about to, too much",
  titleJp: "ばかり・ところ・すぎる",
  description:
    "Precision timing (〜たばかり, 〜ところ) and degree (〜すぎる, 〜やすい・にくい) — plus the 〜てみる试探 pattern.",
  vocab: [
    "着く|つく",
    "帰る|かえる",
    "出発|しゅっぱつ",
    "食べる|たべる",
    "泳ぐ|およぐ",
    "試す|ためす",
    "初めて|はじめて",
    "甘い|あまい",
    "辛い|からい",
    "背|せ",
    "高い|たかい",
    "この間|このあいだ",
    "買う|かう",
    "山|やま",
    "表す|あらわす",
    "昨日|きのう",
  ],
  kanji: ["発", "試", "甘", "登", "間", "甘", "背", "表", "幼"],
  exam: [
    {
      kind: "mcq",
      text: "「昼ご飯を食べたばかりです。」 means…",
      options: ["I'm about to eat lunch.", "I just ate lunch.", "I eat lunch a lot.", "I haven't eaten lunch."],
      answer: 1,
    },
    {
      kind: "mcq",
      text: "「この肉は硬すぎます。」 means…",
      options: ["The meat is perfectly hard.", "The meat is too tough.", "The meat is tender.", "The meat needs salt."],
      answer: 1,
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n4-u10-l01",
      title: "Just did: 〜たばかり",
      titleJp: "〜たばかり",
      grammarLabel: "〜たばかり",
      summary: "Recent completion: 昨日着いたばかりです (I just arrived yesterday).",
      body: {
        meaning:
          "た-form + ばかり means something happened very RECENTLY: 昼ご飯を食べたばかりです (I just ate lunch). Timeframe is subjective — even 昨日 can count.",
        formation: [
          { pattern: "Verb た ＋ ばかりです", note: "着いたばかり just arrived" },
          { pattern: "〜たばかりなのに", note: "even though I just…" },
        ],
        usage: [
          "Subjective freshness — vs 〜たところ (objective moment).",
          "な-adjective before の: 食べたばかりのケーキ (the cake I just made).",
        ],
        pitfalls: [
          "✗ 食べるばかり — must be た-form.",
          "〜ているばかり doesn't exist; keep past.",
        ],
        related: ["〜ところ", "〜だけ (only)"],
      },
      examples: [
        { jp: "日本に着いたばかりです。", kana: "にほんについたばかりです。", en: "I just arrived in Japan." },
        { jp: "昼ご飯を食べたばかりです。", kana: "ひるごはんをたべたばかりです。", en: "I just ate lunch." },
        { jp: "この車は買ったばかりです。", kana: "このくるまはかったばかりです。", en: "I just bought this car." },
        { jp: "起きたばかりなのに、出勤しろと言われた。", kana: "おきたばかりなのに、しゅっきんしろといわれた。", en: "I'd just woken up and was told to come in." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I just arrived in Japan.”",
          tokens: ["日本", "に", "着いた", "ばかり", "です", "。"],
        },
        {
          kind: "mcq",
          text: "たばかり attaches to…",
          options: ["dictionary form", "た-form", "て-form", "ます-stem"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "この車は買った___です。(just bought)",
          blanks: ["ばかり"],
        },
        {
          kind: "mcq",
          text: "たばかり emphasises…",
          options: ["completeness", "recency", "frequency", "regret"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "The timeframe of ばかり is subjective.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n4-u10-l02",
      title: "About to / just now: 〜ところ",
      titleJp: "〜ところ",
      grammarLabel: "〜ところ",
      summary: "Three stages: 行くところ (about to), 行っているところ (in the middle), 行ったところ (just now).",
      body: {
        meaning:
          "ところ marks the EXACT stage of an action: dictionary form = about to, ている = in progress, た = just completed. These are objective moments.",
        formation: [
          { pattern: "Dictionary ＋ ところです", note: "about to do" },
          { pattern: "〜ている ところです", note: "in the middle of" },
          { pattern: "〜た ところです", note: "just did (objective moment)" },
        ],
        usage: [
          "答えるところです (about to answer).",
          "Now: 今、勉強しているところです.",
        ],
        pitfalls: [
          "たところ (objective seconds ago) vs たばかり (subjective recent) — overlap but different feel.",
          "✗ 食べてところ → 食べているところ.",
        ],
        related: ["〜たばかり", "〜ている"],
      },
      examples: [
        { jp: "今、出かけるところです。", kana: "いま、でかけるところです。", en: "I'm just about to leave." },
        { jp: "昼ご飯を食べているところです。", kana: "ひるごはんをたべているところです。", en: "I'm in the middle of eating lunch." },
        { jp: "ちょうど帰ってきたところです。", kana: "ちょうどかえってきたところです。", en: "I've just this moment got back." },
        { jp: "会議が始まるところです。", kana: "かいぎがはじまるところです。", en: "The meeting is about to start." },
      ],
      practice: [
        {
          kind: "match",
          text: "Match stage to form:",
          pairs: [
            ["行くところ", "about to go"],
            ["行っているところ", "in the middle"],
            ["行ったところ", "just went"],
          ],
        },
        {
          kind: "blank",
          text: "今、出かける___です。(about to leave)",
          blanks: ["ところ"],
        },
        {
          kind: "mcq",
          text: "In the middle of studying →",
          options: ["勉強するところ", "勉強しているところ", "勉強したところ", "勉強したばかり"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "たところ describes…",
          options: ["a subjective memory", "an objective just-now moment", "a plan", "a habit"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "たばかり and たところ can both translate as “just did”.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n4-u10-l03",
      title: "Too much: 〜すぎる",
      titleJp: "〜すぎる",
      grammarLabel: "〜すぎる",
      summary: "Excess: 食べすぎました (ate too much), 高すぎる (too expensive).",
      body: {
        meaning:
          "ます-stem + すぎる = do TOO MUCH: 食べすぎました. い-adj drop い: 高すぎる. な-adj + すぎる: 静かすぎる. Always implies excess (usually negative).",
        formation: [
          { pattern: "Verb ます-stem ＋ すぎる", note: "食べすぎる · 飲みすぎる" },
          { pattern: "い-adj (drop い) ＋ すぎる", note: "高い→高すぎる · いい→よすぎる" },
          { pattern: "な-adj ＋ すぎる", note: "静かすぎる · 真面目すぎる" },
        ],
        usage: [
          "Past: 〜すぎました; negative rare: 〜すぎない.",
          "Noun-suffix use: 仕事すぎ? no — keep verb/adj.",
        ],
        pitfalls: [
          "✗ 高いすぎる → 高すぎる (drop い).",
          "いい → よすぎる (irregular).",
        ],
        related: ["〜やすい・にくい", "あまり (not very)"],
      },
      examples: [
        { jp: "昨日は食べすぎました。", kana: "きのうはたべすぎました。", en: "I ate too much yesterday." },
        { jp: "この肉は硬すぎます。", kana: "このにくはかたすぎます。", en: "This meat is too tough." },
        { jp: "彼は真面目すぎるかもしれません。", kana: "かれはまじめすぎるかもしれません。", en: "He might be too serious." },
        { jp: "このスープは塩が多すぎます。", kana: "このスープはしおがおおすぎます。", en: "This soup has too much salt." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I ate too much.”",
          tokens: ["食べ", "すぎました", "。"],
        },
        {
          kind: "mcq",
          text: "すぎる with 高い:",
          options: ["高いすぎる", "高すぎる", "高いくぎる", "高いすきる"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "テレビを見___すぎました。(watched too much)",
          blanks: [""],
        },
        {
          kind: "mcq",
          text: "いい + すぎる →",
          options: ["いいすぎる", "よすぎる", "よくすぎる", "よさすぎる"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "〜すぎる usually implies excess beyond what's good.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n4-u10-l04",
      title: "Easy to / hard to: 〜やすい・にくい",
      titleJp: "〜やすい・〜にくい",
      grammarLabel: "〜やすい・〜にくい",
      summary: "このペンは書きやすい (easy to write with) / 分かりにくい (hard to understand).",
      body: {
        meaning:
          "ます-stem + やすい (easy to…) / にくい (hard to…) describe how suitable something is: このペンは書きやすいです. They conjugate as い-adjectives.",
        formation: [
          { pattern: "ます-stem ＋ やすい", note: "食べやすい easy to eat" },
          { pattern: "ます-stem ＋ にくい", note: "分かりにくい hard to understand" },
          { pattern: "Conjugates like い-adj", note: "書きやすかった · 読みにくくない" },
        ],
        usage: [
          "Design/function: 燃えにくい (fire-resistant), 覚えやすい (easy to remember).",
          "〜がたい (formal) similar to にくい.",
        ],
        pitfalls: [
          "About the OBJECT's quality, not the doer's skill: 説明しにくい人 is tricky as a topic.",
          "✗ 食べるやすい — use ます-stem.",
        ],
        related: ["〜すぎる", "〜はずだ"],
      },
      examples: [
        { jp: "このペンは書きやすいです。", kana: "このペンはかきやすいです。", en: "This pen is easy to write with." },
        { jp: "彼の字は読みにくいです。", kana: "かれのじはよみにくいです。", en: "His handwriting is hard to read." },
        { jp: "この町は住みやすいです。", kana: "このまちはすみやすいです。", en: "This town is easy to live in." },
        { jp: "あの店は入りにくいです。", kana: "あのみせはいりにくいです。", en: "That shop is hard to walk into." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “This pen is easy to write with.”",
          tokens: ["この", "ペン", "は", "書き", "やすい", "です", "。"],
        },
        {
          kind: "mcq",
          text: "やすい/にくい attach to…",
          options: ["dictionary form", "ます-stem", "te-form", "た-form"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "この肉は食べ___です。(hard to eat)",
          blanks: ["にく"],
        },
        {
          kind: "mcq",
          text: "They conjugate like…",
          options: ["verbs", "い-adjectives", "な-adjectives", "nouns"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "分かりやすい means “easy to understand”.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n4-u10-l05",
      title: "Try doing: 〜てみる",
      titleJp: "〜てみる",
      grammarLabel: "〜てみる",
      summary: "試しに: 食べてみます (I'll try eating it).",
      body: {
        meaning:
          "te-form + みます means to TRY doing something to see how it goes: このケーキを食べてみてください (Try eating this cake).",
        formation: [
          { pattern: "Verb て ＋ みます", note: "着てみます try wearing" },
          { pattern: "〜てみたいです", note: "want to try" },
          { pattern: "〜てみましたが…", note: "tried but…" },
        ],
        usage: [
          "Experiment or trial — not attempt-at-difficulty (that's ようとする, N4 late/N3).",
          "Casual: 食べてみて！",
        ],
        pitfalls: [
          "〜てみる ≠ 〜ようにする (make an effort).",
          "Past: 試してみましたが、だめでした.",
        ],
        related: ["〜ておく", "〜てしまう"],
      },
      examples: [
        { jp: "このケーキを食べてみてください。", kana: "このケーキをたべてみてください。", en: "Please try eating this cake." },
        { jp: "新しい店に行ってみました。", kana: "あたらしいみせにいってみました。", en: "I tried going to the new shop." },
        { jp: "一度着てみてもいいですか。", kana: "いちどきてみてもいいですか。", en: "May I try it on once?" },
        { jp: "日本語で書いてみます。", kana: "にほんごでかいてみます。", en: "I'll try writing it in Japanese." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “Please try eating it.”",
          tokens: ["食べて", "みて", "ください", "。"],
        },
        {
          kind: "mcq",
          text: "“I want to try wearing it” →",
          options: ["着てみたいです", "着ようと思います", "着てしまいます", "着させます"],
          answer: 0,
        },
        {
          kind: "blank",
          text: "一度行って___ました。(tried going)",
          blanks: ["み"],
        },
        {
          kind: "mcq",
          text: "てみる expresses…",
          options: ["completion", "trial", "preparation", "regret"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "〜てみたいです = want to try doing.",
          answer: true,
        },
      ],
    },
  ],
}
