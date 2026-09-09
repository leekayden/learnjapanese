import type { AuthoredUnit } from "../../types"

export const u06: AuthoredUnit = {
  level: "N3",
  order: 6,
  title: "Flavours of seeming",
  titleJp: "らしい・っぽい・げ・がち",
  description:
    "Four “-ish” suffixes: 〜らしい (typical of), 〜っぽい (somewhat like), 〜げ (visible aura), 〜がち (prone to).",
  vocab: [
    "子供|こども",
    "大人|おとな",
    "真面目|まじめ",
    "嬉しい|うれしい",
    "寂しい|さびしい",
"老人|ろうじん",
    "雰囲気|ふんいき",
    "回る|まわる",
    "夏|なつ",
  ],
  kanji: ["真", "面", "目", "老", "若", "幼", "夏", "淡", "厭"],
  exam: [
    {
      kind: "mcq",
      text: "「彼は非常に男子らしい。」 means…",
      options: ["He looks like a boy.", "He's very manly (typical of a man).", "He acts childish.", "He'll become a man."],
      answer: 1,
    },
    {
      kind: "blank",
      text: "この色は夏___です。",
      blanks: ["っぽい"],
      explain: "夏 + っぽい = looks like summer.",
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n3-u06-l01",
      title: "Typical of: 〜らしい",
      titleJp: "〜らしい",
      grammarLabel: "〜らしい（典型）",
      summary: "Sound/act typical of a role: 男子らしい, 先生らしく教鞭をとる.",
      body: {
        meaning:
          "Noun/な-adj + らしい = fitting the IMAGE of that thing: 春らしい天気 (weather typical of spring). Different from hearsay らしい (は hearsay) — this one follows nouns and adjectives describing essence.",
        formation: [
          { pattern: "Noun ＋ らしい", note: "男子らしい" },
          { pattern: "な-adj ＋ らしい", note: "真面目らしい" },
          { pattern: "〜らしい ＋ Noun", note: "春らしい天気" },
        ],
        usage: [
          "Positive/negative evaluation of typicalness.",
          "Hearsay らしい attaches to verbs: 来るらしい; typical らしい to nouns.",
        ],
        pitfalls: [
          "✗ 猫らしい犬 for hearsay — that's role-typicality, fine actually.",
          "Don't mix with っぽい (somewhat like).",
        ],
        related: ["〜っぽい (next lesson)", "〜らしい (hearsay)"],
      },
      examples: [
        { jp: "今日は春らしい暖かい天気です。", kana: "きょうははるらしいあたたかいてんきです。", en: "Today's weather is warm — typical of spring." },
        { jp: "彼は真面目らしい学生だ。", kana: "かれはまじめらしいがくせいだ。", en: "He's a student who's typically serious." },
        { jp: "この犬は大型犬らしい。", kana: "このいぬはおおがたけんらしい。", en: "This dog is typical of large breeds." },
        { jp: "先生らしく、もっと落ち着いてください。", kana: "せんせいらしく、もっとおちついてください。", en: "Act like a teacher — calm down." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “Spring-like weather.”",
          tokens: ["春", "らしい", "天気", "。"],
        },
        {
          kind: "mcq",
          text: "らしい after a NOUN means…",
          options: ["hearsay", "typical of that role", "past tense", "negation"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "今日は春___天気です。(spring-like)",
          blanks: ["らしい"],
        },
        {
          kind: "mcq",
          text: "Typical らしい attaches to…",
          options: ["verbs", "nouns/na-adj", "te-form", "た-form"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "先生らしい means “befitting a teacher”.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n3-u06-l02",
      title: "Somewhat like: 〜っぽい",
      titleJp: "〜っぽい",
      grammarLabel: "〜っぽい",
      summary: "Loose resemblance: 色っぽい, 子供っぽい, 忘れっぱい.",
      body: {
        meaning:
          "Noun/verb stem + っぽい = HAS THE QUALITY of (often casual/critical): 子供っぽい (childish), 熱っぽい (feverish). Conjugates as い-adj.",
        formation: [
          { pattern: "Noun ＋ っぽい", note: "老人っぽい" },
          { pattern: "ます-stem ＋ っぽい", note: "忘れっぽい forgetful" },
          { pattern: "〜っぽい ＋ Noun", note: "安っぽい服" },
        ],
        usage: [
          "Often negative/critical nuance.",
          "Neutral/positive too: 大人っぽい (mature for age).",
        ],
        pitfalls: [
          "っぽい ≈ っぽらしい but more colloquial and often weaker.",
          "忘れっぱい: stem 忘れ + っぽい.",
        ],
        related: ["〜らしい", "〜げ"],
      },
      examples: [
        { jp: "彼は子供っぽいところがある。", kana: "かれはこどもっぽいところがある。", en: "He has childish sides." },
        { jp: "この服は安っぽい。", kana: "このふくは安っぽい。", en: "These clothes look cheap." },
        { jp: "我々のお父さんは、少し忘れっぽくなりました。", kana: "われわれのおとうとは、すこしわすれっぽくなりました。", en: "Dad has gotten a bit forgetful." },
        { jp: "彼女は大人っぽい。", kana: "かのじょはおとなっぽい。", en: "She's mature for her age." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “He has childish sides.”",
          tokens: ["彼", "は", "子供", "っぱい", "ところ", "が", "あります"],
        },
        {
          kind: "mcq",
          text: "っぽい conjugates like…",
          options: ["verbs", "i-adj", "na-adj", "nouns"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "この服は安___。(looks cheap)",
          blanks: ["っぽい"],
        },
        {
          kind: "mcq",
          text: "忘れっぱい is formed from…",
          options: ["忘る + っぱい", "忘れ (stem) + っぱい", "忘た + っぱい", "忘ない + っぱい"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "大人っぽい can be a compliment.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n3-u06-l03",
      title: "Visible aura: 〜げ",
      titleJp: "〜（さ）げ",
      grammarLabel: "〜（さ）げ",
      summary: "Visible feeling: 危なげ, 悲げ, 幼げ — appear to feel X.",
      body: {
        meaning:
          "Stem + げ describes a VISIBLE appearance of feeling/state: 悲しげ (looking sad), 危なげ (looking dangerous). さげ for i-adj: 悲しさげ? no — the pattern uses adjective stem.",
        formation: [
          { pattern: "な-adj stem ＋ げ", note: "悲しげ sad-looking" },
          { pattern: "Verb ます-stem ＋ げ", note: "危なげ dangerous-looking" },
          { pattern: "〜げ ＋ Noun", note: "悲しげな顔" },
        ],
        usage: [
          "Describes a third party's appearance (not yourself).",
          "Appears in literature/observation.",
        ],
        pitfalls: [
          "i-adj add さ (悲しい → 悲しさげ? actually 悲しげ uses stem 悲し → 悲しげ — no さ).",
          " Don't use for yourself.",
        ],
        related: ["〜がち (prone)", "〜そう (appearance, N4)"],
      },
      examples: [
        { jp: "悲しげな顔をしている。", kana: "かなしげなかおをしている。", en: "He has a sad-looking face." },
        { jp: "危なげな運転をやめました。", kana: "危なげなうんてんをやめました。", en: "He stopped his dangerous-looking driving." },
        { jp: "彼は寂しげに一人座っている。", kana: "かれはさびしげにひとりすわっている。", en: "He sits alone, looking lonely." },
        { jp: "その子は寂しげだった。", kana: "そのこはさびしげだった。", en: "The child looked lonely." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “He has a sad-looking face.”",
          tokens: ["悲しげ", "な", "顔", "を", "しています", "。"],
        },
        {
          kind: "mcq",
          text: "げ describes…",
          options: ["your own feeling", "visible appearance", "hearsay", "obligation"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "危な___運転です。(dangerous-looking)",
          blanks: ["げ"],
        },
        {
          kind: "mcq",
          text: "悲しげな comes from…",
          options: ["悲しい+な", "悲し (stem) + げ", "悲らず+げ", "悲った+げ"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "げ usually describes others, not yourself.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n3-u06-l04",
      title: "Prone to: 〜がち",
      titleJp: "〜がち",
      grammarLabel: "〜がち",
      summary: "がち = tends to happen: 忘れがち, 病気がち, ひとりがち.",
      body: {
        meaning:
          "Noun/ます-stem + がち = often/prone to: 病気がち (often sick), 忘れがち (tend to forget). Also adverbial: 見られがち.",
        formation: [
          { pattern: "Noun ＋ がち", note: "病気がち often ill" },
          { pattern: "Verb ます-stem ＋ がち", note: "忘れがち tend to forget" },
          { pattern: "〜がちな／がちに", note: "modification" },
        ],
        usage: [
          "Frequency-tendency, often negative/medical.",
          "电视|drama + 電話がち (often on phone).",
        ],
        pitfalls: [
          "がち is a tendency, not an absolute.",
          "✗ 副词+がち for positive habits.",
        ],
        related: ["〜っぱなし", "〜げ"],
      },
      examples: [
        { jp: "彼は病気がちなので、よく休む。", kana: "かれはびょうきがちなので、よくやすむ。", en: "He's often sick, so he rests a lot." },
        { jp: "父は年を取ってから、物忘れがちになった。", kana: "ちちはとしをとってから、ものわすれがちになった。", en: "Since getting older, Dad tends to forget things." },
        { jp: "冬は部屋が乾燥しがちです。", kana: "冬は部屋がかんそうしがちです。", en: "In winter, rooms tend to get dry." },
        { jp: "彼は遅刻しがちだ。", kana: "かれはちこくしがちだ。", en: "He tends to be late." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “He's often sick.”",
          tokens: ["病気", "がち", "です", "。"],
        },
        {
          kind: "mcq",
          text: "がち attaches to…",
          options: ["nouns / verb stems", "te-form", "た-form", "potential"],
          answer: 0,
        },
        {
          kind: "blank",
          text: "彼は病気___です。(often sick)",
          blanks: ["がち"],
        },
        {
          kind: "mcq",
          text: "がち is usually…",
          options: ["positive", "negative tendency", "neutral only", "formal only"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "忘れがち means “prone to forgetting”.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n3-u06-l05",
      title: "Appearance suffix summary",
      titleJp: "ようすの まとめ",
      grammarLabel: "appearance summary",
      summary: "らしい (typical), っぽい (somewhat), げ (visible), がち (prone) — pick by evidence.",
      body: {
        meaning:
          "Four -ish tools: essence-typical (らしい), loose resemblance (っぽい), visible feeling (げ), frequency tendency (がち).",
        formation: [
          { pattern: "Noun ＋ らしい", note: "typical" },
          { pattern: "Noun/stem ＋ っぽい", note: "somewhat like" },
          { pattern: "stem ＋ げ", note: "visible" },
          { pattern: "Noun/stem ＋ がち", note: "prone" },
        ],
        usage: [
          "らしい = essence; っぽい = approximation; げ = seen; がち = often.",
          " Combining: 病気がちで、悲しげな彼.",
        ],
        pitfalls: [
          " っぽい vs らしい: loose vs exact.",
          " げ always third-person.",
        ],
        related: ["この unit の lessons 1–4"],
      },
      examples: [
        { jp: "春らしい花", kana: "はるらしいはな", en: "Spring-like flowers", note: "typical" },
        { jp: "子供っぽい笑い", kana: "こどもっぽいわらい", en: "A childish laugh", note: "approx" },
        { jp: "寂しげな瞳", kana: "さびしげなひとみ", en: "Lonely-looking eyes", note: "visible" },
        { jp: "遅刻しがち", kana: "ちこくしがち", en: "Often late", note: "prone" },
      ],
      practice: [
        {
          kind: "mcq",
          text: "“Typical of spring” →",
          options: ["っぽい", "らしい", "げ", "がち"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "“Somewhat childish” →",
          options: ["らしい", "っぽい", "がち", "げ"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "“Visible sadness” →",
          options: ["がち", "げ", "らしい", "っぱい"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "“Prone to forgetting” →",
          options: ["げ", "がち", "らしい", "っぱい"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "Each suffix shows a different kind of evidence.",
          answer: true,
        },
      ],
    },
  ],
}
