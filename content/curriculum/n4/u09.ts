import type { AuthoredUnit } from "../../types"

export const u09: AuthoredUnit = {
  level: "N4",
  order: 9,
  title: "Should and supposed to",
  titleJp: "はず・べき",
  description:
    "Expectation with 〜はずだ, moral duty with 〜べきだ, and how they differ from 〜なければなりません.",
  vocab: [
    "予定|よてい",
    "約束|やくそく",
    "理由|りゆう",
    "正しい|ただしい",
    "間違い|まちがい",
    "確認|かくにん",
    "手紙|てがみ",
"|もう",
    "結婚|けっこん",
    "切手|きって",
    "集める|あつめる",
    "題|だい",
    "打つ|うつ",
    "知らせ|しらせ",
    "思う|おもう",
  ],
  kanji: ["予", "定", "約", "束", "理", "由", "確", "認", "題"],
  exam: [
    {
      kind: "mcq",
      text: "「田中さんはもう着いているはずです。」 means…",
      options: ["Tanaka must come.", "Tanaka should have arrived (I expect).", "Tanaka didn't arrive.", "Tanaka will arrive late."],
      answer: 1,
    },
    {
      kind: "mcq",
      text: "「親を大切にすべきです。」 means…",
      options: ["Parents should treasure me.", "You should treasure your parents.", "I treasure my parents.", "Parents are precious."],
      answer: 1,
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n4-u09-l01",
      title: "Supposed to: 〜はずだ",
      titleJp: "〜はずだ",
      grammarLabel: "〜はずだ",
      summary: "Expectation from reasoning: 彼は知っているはずです (He should know).",
      body: {
        meaning:
          "〜はずだ expresses confident expectation based on evidence or logic: 彼はもう着いているはずです (He should have arrived by now — because he left early).",
        formation: [
          { pattern: "Verb plain ＋ はずです", note: "来るはずです supposed to come" },
          { pattern: "い-adj ＋ はずです", note: "高いはずです" },
          { pattern: "な-adj/名詞 ＋ の＋はずです", note: "元気なはずです · 学生のはずです" },
        ],
        usage: [
          "Past: 〜はずでした (was supposed to — didn't happen).",
          "Negative expectation: 来ないはずです.",
        ],
        pitfalls: [
          "はずだ ≠ must — it's expectation, not obligation.",
          "な-adj/nouns need の: ✗ 元気はず → 元気なはずです.",
        ],
        related: ["〜べきだ", "〜そうです (hearsay)"],
      },
      examples: [
        { jp: "田中さんはもう着いているはずです。", kana: "たなかさんはもうついているはずです。", en: "Tanaka should have arrived already." },
        { jp: "この薬は効くはずです。", kana: "このくすりはきくはずです。", en: "This medicine should work." },
        { jp: "彼はそんなことを言うはずがありません。", kana: "かれはそんなことをいうはずがありません。", en: "There's no way he'd say that." },
        { jp: "昨日は休みのはずでした。", kana: "きのうはやすみのはずでした。", en: "Yesterday was supposed to be a day off." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “He should know.”",
          tokens: ["彼", "は", "知っている", "はず", "です", "。"],
        },
        {
          kind: "blank",
          text: "彼女は元気な___です。(should be well)",
          blanks: ["はず"],
        },
        {
          kind: "mcq",
          text: "“There's no way” emphatic negative →",
          options: ["はずだ", "はずがない", "はずでした", "はずだった"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "はずだ expresses…",
          options: ["obligation", "expectation", "permission", "ability"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "はずでした means the expectation wasn't met.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n4-u09-l02",
      title: "Should (morally): 〜べきだ",
      titleJp: "〜べきだ",
      grammarLabel: "〜べきだ",
      summary: "Duty and principle: 親を大切にすべきです.",
      body: {
        meaning:
          "〜べきだ says what one SHOULD do by moral standard or common sense: 約束は守るべきです (You should keep promises). する→すべき (or するべき).",
        formation: [
          { pattern: "Verb dictionary ＋ べきだ", note: "行くべきです" },
          { pattern: "する → すべき／するべき", note: "special" },
          { pattern: "Negative: べきじゃない", note: "言うべきじゃない shouldn't say" },
        ],
        usage: [
          "General principles, advice with weight — not casual suggestions.",
          "Past regret: 言うべきじゃなかった (shouldn't have said).",
        ],
        pitfalls: [
          "Softer everyday advice uses ほうがいい; べき sounds assertive.",
          "✗ 行くべきだます — plain です.",
        ],
        related: ["〜なければなりません", "〜たほうがいい"],
      },
      examples: [
        { jp: "約束は守るべきです。", kana: "やくそくはまもるべきです。", en: "You should keep promises." },
        { jp: "親を大切にすべきです。", kana: "おやをたいせつにすべきです。", en: "You should treasure your parents." },
        { jp: "そんなことを言うべきじゃない。", kana: "そんなことをいうべきじゃない。", en: "You shouldn't say such things." },
        { jp: "もっと勉強すべきでした。", kana: "もっとべんきょうすべきでした。", en: "I should have studied more." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “You should keep promises.”",
          tokens: ["約束", "は", "守る", "べき", "です", "。"],
        },
        {
          kind: "mcq",
          text: "Causative-passive form used with べき for する:",
          options: ["するべき", "すべき", "したべき", "するべきだ"],
          answer: 1,
          explain: "Both すべき and するべき are accepted.",
        },
        {
          kind: "blank",
          text: "そんなことは言う___じゃない。(shouldn't say)",
          blanks: ["べき"],
        },
        {
          kind: "mcq",
          text: "べきだ differs from なければなりません because it's…",
          options: ["stronger law", "moral principle", "temporary need", "a request"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "〜べきじゃなかった expresses past regret.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n4-u09-l03",
      title: "Plans: 〜予定だ & 〜つもりだ",
      titleJp: "よてい・つもり",
      grammarLabel: "〜予定だ・〜つもりだ",
      summary: "Scheduled (予定) vs intended (つもり): 来月日本へ行く予定です / 行くつもりです.",
      body: {
        meaning:
          "〜予定だ = a fixed plan/schedule (often external): 来月日本へ行く予定です. 〜つもりだ = your own intention: 日本で働くつもりです.",
        formation: [
          { pattern: "Verb plain ＋ 予定です", note: "scheduled" },
          { pattern: "Verb plain ＋ つもりです", note: "intend" },
          { pattern: "Noun の ＋ 予定／つもり", note: "旅行の予定です" },
        ],
        usage: [
          "予定 for timetables, appointments, arrangements.",
          "つもり for personal resolution; negative つもりはない (no intention).",
        ],
        pitfalls: [
          "✗ 雨が降るつもりです (rain has no intention!).",
          "つもりだった = had intended (but didn't).",
        ],
        related: ["〜はずだ", "〜たほうがいい"],
      },
      examples: [
        { jp: "来月、日本へ行く予定です。", kana: "らいげつ、にほんへいくよていです。", en: "I'm scheduled to go to Japan next month." },
        { jp: "私は日本で働くつもりです。", kana: "わたしはにほんではたらくつもりです。", en: "I intend to work in Japan." },
        { jp: "今夜は家にいるつもりです。", kana: "こんやはいえにいるつもりです。", en: "I plan to stay home tonight." },
        { jp: "会議は三時に始まる予定でした。", kana: "かいぎはさんじにはじまるよていでした。", en: "The meeting was scheduled to start at three." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I intend to work in Japan.”",
          tokens: ["日本", "で", "働く", "つもり", "です", "。"],
        },
        {
          kind: "blank",
          text: "来月帰国する___です。(scheduled)",
          blanks: ["予定"],
        },
        {
          kind: "mcq",
          text: "外部の予定 (train timetable) uses…",
          options: ["つもり", "予定", "はず", "べき"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "“I have no intention of going” →",
          options: ["行くつもりです", "行くつもりはありません", "行く予定です", "行くはずです"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "Use つもり only for beings with intention.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n4-u09-l04",
      title: "Before & after reviewing",
      titleJp: "まえ・あとの ふくしゅう",
      grammarLabel: "前に・てから・て以来",
      summary: "Time anchors refresher plus 〜て以来 (ever since).",
      body: {
        meaning:
          "Time relations: 前に (before), てから (after), and て以来 (ever since — continuing): 日本に来て以来、毎日日本語を勉強しています.",
        formation: [
          { pattern: "Dictionary ＋ 前に", note: "review N5" },
          { pattern: "て ＋ から", note: "review N5" },
          { pattern: "て ＋ 以来", note: "ever since (continuous to now)" },
        ],
        usage: [
          "以来 pairs with continuative verbs: 来て以来、住んでいる.",
          "Stronger than てから for lasting change.",
        ],
        pitfalls: [
          "✗ 行って以来、帰ります (one-off) — 以来 needs ongoing result.",
        ],
        related: ["〜てから", "〜間"],
      },
      examples: [
        { jp: "日本に来て以来、毎日日本語を勉強しています。", kana: "にほんにきていらい、まいにちにほんごをべんきょうしています。", en: "Ever since coming to Japan, I've studied Japanese daily." },
        { jp: "卒業して以来、彼に会っていません。", kana: "そつぎょうしていらい、かれにあっていません。", en: "I haven't seen him since graduation." },
        { jp: "十年前に買った家です。", kana: "じゅうねんまえにかったいえです。", en: "A house I bought ten years ago." },
        { jp: "結婚して以来、大阪に住んでいます。", kana: "けっこんしていらい、おおさかにすんでいます。", en: "I've lived in Osaka since getting married." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “Ever since graduation, I haven't seen him.”",
          tokens: ["卒業", "して", "以来", "彼", "に", "会っていません"],
        },
        {
          kind: "mcq",
          text: "以来 implies the state…",
          options: ["ended quickly", "continues to now", "happened once", "will change"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "日本に来て___、毎日勉強しています。(since coming)",
          blanks: ["以来"],
        },
        {
          kind: "mcq",
          text: "前に attaches to…",
          options: ["た-form", "dictionary form", "て-form", "ない-form"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "て以来 works for one-time completed actions.",
          answer: false,
          explain: "It needs ongoing/lasting result.",
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n4-u09-l05",
      title: "元気 delimiters: はず・べき・つもり summary",
      titleJp: "まとめ",
      grammarLabel: "はず・べき・つもり",
      summary: "Three-way decision: expectation, duty, intention.",
      body: {
        meaning:
          "はず = it SHOULD be (reasoned expectation), べき = it SHOULD be done (duty), つもり = I INTEND (personal plan). Same action, three stances.",
        formation: [
          { pattern: "はずだ — evidence", note: "彼は来るはずです (he's expected)" },
          { pattern: "べきだ — principle", note: "彼は来るべきです (he ought to come)" },
          { pattern: "つもりだ — intention", note: "彼は来るつもりです (he intends to)" },
        ],
        usage: [
          "Combine: 来るはずだったのに、来なかった (was supposed to, but didn't).",
          " practice: convert one sentence into all three.",
        ],
        pitfalls: [
          "Don't use べき for your own casual choices (sounds preachy).",
          "はずがありません = strong denial of expectation.",
        ],
        related: ["〜はずだ", "〜べきだ", "〜つもりだ"],
      },
      examples: [
        { jp: "彼は来るはずです。", kana: "かれはくるはずです。", en: "He should be coming (I expect)." },
        { jp: "彼は来るべきです。", kana: "かれはくるべきです。", en: "He ought to come (duty)." },
        { jp: "彼は来るつもりです。", kana: "かれはくるつもりです。", en: "He intends to come." },
        { jp: "来るはずだったのに、来ませんでした。", kana: "くるはずだったのに、きませんでした。", en: "He was supposed to come, but didn't." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Evidence-based assumption →",
          options: ["はず", "べき", "つもり", "たら"],
          answer: 0,
        },
        {
          kind: "mcq",
          text: "Moral duty →",
          options: ["はず", "べき", "つもり", "そう"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Personal plan →",
          options: ["はず", "べき", "つもり", "よう"],
          answer: 2,
        },
        {
          kind: "blank",
          text: "来る___だったのに、来ませんでした。",
          blanks: ["はず"],
        },
        {
          kind: "tf",
          text: "はず must be backed by reasoning or evidence.",
          answer: true,
        },
      ],
    },
  ],
}
