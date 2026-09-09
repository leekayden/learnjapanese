import type { AuthoredUnit } from "../../types"

export const u07: AuthoredUnit = {
  level: "N3",
  order: 7,
  title: "Not only, but also",
  titleJp: "ついかの ひょうげん",
  description:
    "Adding scope: 〜はもちろん (not to mention), 〜ばかりでなく (not only but also), 〜に限らず (not limited to).",
  vocab: [
    "映画|えいが",
    "試験|しけん",
    "社会|しゃかい",
    "技術|ぎじゅつ",
    "環境|かんきょう",
    "問題|もんだい",
    "大人|おとな",
    "子供|こども",
    "有名|ゆうめい",
    "最近|さいきん",
    "増加|ぞうか",
    "減少|げんしょう",
    "影響|えいきょう",
    "世界|せかい",
  ],
  kanji: ["況", "限", "加", "減", "響", "界", "技", "術", "緒"],
  exam: [
    {
      kind: "mcq",
      text: "この町は、食べ物はもちろん、観光も有名です。 とはどういう意味ですか。",
      options: ["食べ物だけが有名です。", "食べ物も観光も有名です。", "観光の方が有名です。", "食べ物も観光も有名ではありません。"],
      answer: 1,
      explain: "はもちろん = A is obvious, B is also true.",
    },
    {
      kind: "mcq",
      text: "〜ばかりでなく … も の意味は何ですか。",
      options: ["だけ", "〜だけでなく 〜も", "〜の代わりに", "〜の前に"],
      answer: 1,
      explain: "ばかりでなく…も = not only A but also B.",
    },
  ],
  lessons: [
    {
      slug: "n3-u07-l01",
      title: "Needless to say",
      titleJp: "〜はもちろん",
      grammarLabel: "〜はもちろん",
      summary: "A はもちろん B = A is obvious, B is also true.",
      body: {
        meaning:
          "A はもちろん B = A goes without saying, and B too. 英語はもちろん、中国語も話せます means he speaks English certainly, and Chinese as well.",
        formation: [
          { pattern: "Noun ＋ はもちろん ＋ B", note: "A is obvious, add B" },
          { pattern: "〜はもとより (formal)", note: "same meaning, written style" },
        ],
        usage: [
          "A must be something obviously true or expected.",
          "B is the new or additional information.",
        ],
        pitfalls: [
          "A should be the more obvious or expected item.",
          "Both A and B must be true — don't use for contrasting pairs.",
        ],
        related: ["〜ばかりでなく", "〜に限らず"],
      },
      examples: [
        { jp: "肉はもちろん、魚も好きです。", kana: "にくはもちろん、さかなもすきです。", en: "Meat, of course, but I also like fish." },
        { jp: "彼は英語はもちろん、中国語も話せます。", kana: "かれはえいごはもちろん、ちゅうごくごもはなせます。", en: "He speaks English, of course, and Chinese too." },
        { jp: "この町は、食べ物はもちろん、観光も有名です。", kana: "このまちは、たべものはもちろん、かんこうもゆうめいです。", en: "In this town, the food is famous — and so is the sightseeing." },
      ],
      practice: [
        {
          kind: "order",
          text: "並べ替え：彼は英語はもちろん、中国語も話せます。",
          tokens: ["彼", "は", "英語", "はもちろん", "中国語", "も", "話せます", "。"],
        },
        {
          kind: "blank",
          text: "この町は、食べ物は___、観光も有名です。",
          blanks: ["もちろん"],
        },
        {
          kind: "mcq",
          text: "A in 〜はもちろん must be…",
          options: ["surprising", "obviously true", "negative", "past"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Formal/written equivalent of はもちろん:",
          options: ["はもとより", "に限らず", "ばかりか", "だけ"],
          answer: 0,
        },
        {
          kind: "tf",
          text: "Both A and B must be true in 〜はもちろん.",
          answer: true,
        },
      ],
    },
    {
      slug: "n3-u07-l02",
      title: "Not only but also",
      titleJp: "〜ばかりでなく",
      grammarLabel: "〜ばかりでなく",
      summary: "A ばかりでなく B も = not limited to A; B also.",
      body: {
        meaning:
          "A ばかりでなく B も = not only A but also B. 彼は英語ばかりでなく、中国語も話せる means he can speak not only English but also Chinese.",
        formation: [
          { pattern: "Verb/い-adj plain ＋ ばかりでなく", note: "not only…" },
          { pattern: "Noun ＋ ばかりでなく", note: "Noun not only" },
          { pattern: "〜ばかりか (stronger)", note: "not merely" },
        ],
        usage: [
          "Always pairs with も or まで in the B clause.",
          "ばかりか is more emphatic than ばかりでなく.",
        ],
        pitfalls: [
          "The B clause must have も or a similar particle.",
          "ばかりでなく alone is incomplete.",
        ],
        related: ["〜はもちろん", "〜に限らず"],
      },
      examples: [
        { jp: "彼は英語ばかりでなく、中国語も話せます。", kana: "かれはえいごばかりでなく、ちゅうごくごもはなせます。", en: "He can speak not only English but also Chinese." },
        { jp: "この本は面白いばかりでなく、役に立ちます。", kana: "このほんはおもしろいばかりでなく、やくにたちます。", en: "This book is not only interesting but also useful." },
        { jp: "彼女は歌ばかりか、ダンスも上手です。", kana: "かのじょはうたばかりか、ダンスもじょうずです。", en: "She's good not merely at singing but also at dancing." },
      ],
      practice: [
        {
          kind: "order",
          text: "並べ替え：彼は英語ばかりでなく、中国語も話せます。",
          tokens: ["彼", "は", "英語", "ばかりでなく", "中国語", "も", "話せます", "。"],
        },
        {
          kind: "blank",
          text: "この本は面白い___、役に立ちます。",
          blanks: ["ばかりでなく"],
        },
        {
          kind: "mcq",
          text: "The B clause after ばかりでなく must contain…",
          options: ["も or まで", "だけ", "しかし", "それで"],
          answer: 0,
        },
        {
          kind: "mcq",
          text: "More emphatic than ばかりでなく:",
          options: ["ばかりか", "に限らず", "はもちろん", "だけ"],
          answer: 0,
        },
        {
          kind: "tf",
          text: "ばかりでなく can attach to verbs, adjectives and nouns.",
          answer: true,
        },
      ],
    },
    {
      slug: "n3-u07-l03",
      title: "Not limited to",
      titleJp: "〜に限らず",
      grammarLabel: "〜に限らず",
      summary: "A に限らず B = not just A; B too.",
      body: {
        meaning:
          "Noun + に限らず = not limited to A. 学生に限らず、社会人も参加できます means not only students but working adults too can join.",
        formation: [
          { pattern: "Noun ＋ に限らず", note: "not only for X" },
          { pattern: "A に限らず B も", note: "both A and B" },
        ],
        usage: [
          "Expands a scope beyond the stated example.",
          "Often pairs with universal statements.",
        ],
        pitfalls: [
          "Must attach to NOUNS, not verbs.",
          "Different from に限って (exception/only in this case).",
        ],
        related: ["〜ばかりでなく", "〜はもちろん"],
      },
      examples: [
        { jp: "この店は週末に限らず、いつも混んでいます。", kana: "このみせはしゅうまつにかぎらず、いつもこんでいます。", en: "This shop is crowded not just on weekends but always." },
        { jp: "学生に限らず、社会人も参加できます。", kana: "がくせいにかぎらず、しゃかいじんもさんかできます。", en: "Not only students but working adults can participate." },
        { jp: "日本に限らず、世界中で地震が起きています。", kana: "にほんにかぎらず、せかいじゅうでじしんがおきています。", en: "Not just in Japan — earthquakes happen all over the world." },
      ],
      practice: [
        {
          kind: "order",
          text: "並べ替え：学生に限らず、社会人も参加できます。",
          tokens: ["学生", "に限らず", "社会人", "も", "参加", "できます", "。"],
        },
        {
          kind: "blank",
          text: "週末に___、いつも混んでいます。",
          blanks: ["限らず"],
        },
        {
          kind: "mcq",
          text: "に限らず attaches to…",
          options: ["verbs", "nouns", "te-form", "た-form"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "〜に限らず vs 〜に限って:",
          options: ["same meaning", "not-limited vs exception", "exception vs not-limited", "completely different grammar"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "に限らず expands scope beyond the stated noun.",
          answer: true,
        },
      ],
    },
    {
      slug: "n3-u07-l04",
      title: "Three also patterns compared",
      titleJp: "はもちろん・ばかりでなく・に限らず",
      grammarLabel: "addition summary",
      summary: "Three ways to say also — pick by nuance and formality.",
      body: {
        meaning:
          "はもちろん (A is obvious, add B), ばかりでなく (not just A but B), に限らず (beyond A's scope). All add information but differ in emphasis and grammar.",
        formation: [
          { pattern: "はもちろん", note: "obvious + add (noun only)" },
          { pattern: "ばかりでなく", note: "not only but also (verb/adj/noun)" },
          { pattern: "に限らず", note: "scope expansion (noun only)" },
        ],
        usage: [
          "はもちろん when A is clearly true or expected.",
          "ばかりでなく for parallel emphasis.",
          "に限らず to expand a category.",
        ],
        pitfalls: [
          "ばかりでなく can attach to verbs; に限らず only to nouns.",
          "はもちろん is the most conversational.",
        ],
        related: ["lessons 1-3"],
      },
      examples: [
        { jp: "日本語はもちろん、英語も話せます。", kana: "にほんごはもちろん、えいごもはなせます。", en: "Japanese, of course — and English too." },
        { jp: "日本語ばかりでなく、英語も話せます。", kana: "にほんごばかりでなく、えいごもはなせます。", en: "Not only Japanese but also English." },
        { jp: "日本に限らず、世界中で学ばれています。", kana: "にほんにかぎらず、せかいじゅうでまなばれています。", en: "Not just in Japan — it's studied worldwide." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "A is obvious, and B too →",
          options: ["ばかりでなく", "はもちろん", "に限らず", "だけ"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Not limited to this category →",
          options: ["はもちろん", "ばかりでなく", "に限らず", "もとより"],
          answer: 2,
        },
        {
          kind: "mcq",
          text: "Which can attach to VERBS?",
          options: ["に限らず", "ばかりでなく", "はもちろん", "はもとより"],
          answer: 1,
        },
        {
          kind: "match",
          text: "Match form to nuance:",
          pairs: [
            ["はもちろん", "obvious + also"],
            ["ばかりでなく", "not only but"],
            ["に限らず", "scope expansion"],
          ],
        },
        {
          kind: "tf",
          text: "All three patterns express addition.",
          answer: true,
        },
      ],
    },
    {
      slug: "n3-u07-l05",
      title: "Real-world usage",
      titleJp: "はもちろん れんしゅう",
      grammarLabel: "addition practice",
      summary: "These patterns appear constantly in news, essays and conversation.",
      body: {
        meaning:
          "The key is recognising which item is the obvious baseline and which is the addition. In news: 大都市はもちろん、地方でも人口が減少している。",
        formation: [
          { pattern: "A はもちろん B も", note: "A is baseline" },
          { pattern: "A ばかりでなく B も", note: "parallel add" },
          { pattern: "A に限らず B", note: "category expansion" },
        ],
        usage: [
          "In news: 大都市はもちろん、地方でも人口が減少している。",
          "In essays: 環境問題は一国に限らず、地球規模で考えるべきだ。",
        ],
        pitfalls: [
          "Don't use はもちろん when A isn't obviously true.",
          "ばかりでなく must pair with も or まで.",
        ],
        related: ["lessons 1-4"],
      },
      examples: [
        { jp: "大都市はもちろん、地方でも人口が減少している。", kana: "だいとしはもちろん、ちほうでもじんこうがげんしょうしている。", en: "Not just big cities — populations are declining in rural areas too." },
        { jp: "環境問題は一国に限らず、地球規模で考えるべきだ。", kana: "かんきょうもんだいはいっこくにかぎらず、ちきゅうきぼでかんがえるべきだ。", en: "Environmental issues should be considered globally, not just by one country." },
        { jp: "彼の演技はもちろん、脚本も賞賛された。", kana: "かれのえんぎはもちろん、きゃくほんもしょうさんされた。", en: "His acting, of course, and the script were also praised." },
        { jp: "スマホは通話ばかりでなく、決済にも使える。", kana: "スマホはつうわばかりでなく、けっさいにもつかえる。", en: "Smartphones aren't just for calls — they work for payments too." },
      ],
      practice: [
        {
          kind: "order",
          text: "並べ替え：大都市はもちろん、地方でも人口が減少している。",
          tokens: ["大都市", "はもちろん", "地方", "でも", "人口が", "減少", "している"],
        },
        {
          kind: "blank",
          text: "環境問題は一国に___、地球規模で考えるべきだ。",
          blanks: ["限らず"],
        },
        {
          kind: "mcq",
          text: "スマホは通話ばかりでなく、決済にも使える。 What comes after ばかりでなく?",
          options: ["も使える", "だけです", "しません", "でした"],
          answer: 0,
        },
        {
          kind: "mcq",
          text: "Which pattern for: obviously he can speak Japanese, but also Chinese?",
          options: ["に限らず", "ばかりでなく", "はもちろん", "だけ"],
          answer: 2,
        },
        {
          kind: "tf",
          text: "These patterns appear frequently in news articles.",
          answer: true,
        },
      ],
    },
  ],
}
