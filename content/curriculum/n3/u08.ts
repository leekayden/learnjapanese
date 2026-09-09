import type { AuthoredUnit } from "../../types"

export const u08: AuthoredUnit = {
  level: "N3",
  order: 8,
  title: "Two sides of the coin",
  titleJp: "たいひの ひょうげん",
  description:
    "Contrasting two aspects of the same thing: 〜一方(で) (on the other hand), 〜反面 (on the flip side), and formal written contrasts.",
  vocab: [
    "技術|ぎじゅつ",
    "便利|べんり",
    "社会|しゃかい",
    "問題|もんだい",
    "経済|けいざい",
    "成長|せいちょう",
    "環境|かんきょう",
    "影響|えいきょう",
    "利点|りてん",
    "欠点|けってん",
    "最近|さいきん",
    "変化|へんか",
    "生活|せいかつ",
    "忙しい|いそがしい",
    "楽しい|たのしい",
  ],
  kanji: ["便", "利", "長", "点", "欠", "変", "活", "厳", "楽"],
  exam: [
    {
      kind: "mcq",
      text: "「この技術は便利な一方で、問題も生んでいる。」 means…",
      options: ["The technology is convenient and has no problems.", "The technology is convenient, but it also causes problems.", "The technology is more convenient than problematic.", "The technology is inconvenient."],
      answer: 1,
    },
  ],
  lessons: [
    {
      slug: "n3-u08-l01",
      title: "On the other hand: 〜一方(で)",
      titleJp: "〜いっぽう（で）",
      grammarLabel: "〜一方（で）",
      summary: "Two contrasting aspects of the same subject: 一方で = while / on the other hand.",
      body: {
        meaning:
          "A一方(で)B shows that the SAME subject has two contrasting sides. Think of it as drawing a T-chart: positive on the left, negative on the right. This is very common in essays and news articles.",
        formation: [
          { pattern: "Plain form ＋ 一方で", note: "verb/adj plain + 一方で" },
          { pattern: "Noun ＋ である一方で", note: "noun + である一方" },
          { pattern: "〜一方だ (keeps increasing)", note: "different: one-directional change" },
        ],
        usage: [
          "Both clauses describe the SAME subject from different angles.",
          "Very common in formal writing — news, reports, essays.",
        ],
        pitfalls: [
          "Don't use for comparing two DIFFERENT things (that's に対して or と比べて).",
          "〜一方だ (keeps ~ing) is a DIFFERENT grammar point — check for だ at the end.",
        ],
        related: ["〜反面 (next lesson)", "〜に対して"],
      },
      examples: [
        { jp: "この技術は便利な一方で、問題も生んでいる。", kana: "このぎじゅつはべんりないっぽうで、もんだいもさんでいる。", en: "This technology is convenient, but on the other hand it also creates problems." },
        { jp: "彼は仕事には厳しい一方で、家ではとても優しい。", kana: "かれはしごとにはきびしいいっぽうで、いえではとてもやさしい。", en: "He is strict at work, but on the other hand very kind at home." },
        { jp: "都市には仕事が多い一方で、家賃も高い。", kana: "としにはしごとがおおいいっぽうで、やちんもたかい。", en: "Cities have many jobs, but on the other hand rent is high." },
        { jp: "日本の 人口は減る一方だ。", kana: "にほんのじんこうはへるいっぽうだ。", en: "Japan's population keeps on decreasing.", note: "〜一方だ = one-directional change, different usage" },
      ],
      practice: [
        {
          kind: "order",
          text: "並べ替え：この技術は便利な一方で、問題も生んでいる。",
          tokens: ["この技術", "は", "便利な", "一方で", "問題も", "生んでいる", "。"],
        },
        {
          kind: "blank",
          text: "彼は仕事には厳しい___、家ではとても優しい。",
          blanks: ["一方で"],
        },
        {
          kind: "mcq",
          text: "〜一方で contrasts two aspects of…",
          options: ["two different people", "the same subject", "two times", "two places"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "人口は増える一方だ。 What does 一方だ mean here?",
          options: ["on the other hand", "keeps increasing (one-directional)", "in contrast", "partly"],
          answer: 1,
          explain: "〜一方だ = change continues in one direction only.",
        },
        {
          kind: "tf",
          text: "〜一方で is common in essays and news.",
          answer: true,
        },
      ],
    },
    {
      slug: "n3-u08-l02",
      title: "On the flip side: 〜反面",
      titleJp: "〜はんめん",
      grammarLabel: "〜反面",
      summary: "反面 = the flip side of the same coin: 静かな反面、寂しい.",
      body: {
        meaning:
          "A反面B means B is the OPPOSITE side of A. Like a coin with two faces: この薬は効果がある反面、副作用もある (effective, but on the flip side has side effects).",
        formation: [
          { pattern: "Plain form ＋ 反面", note: "verb/adj plain + 反面" },
          { pattern: "な-adj ＋ な反面", note: "静かな反面" },
          { pattern: "Noun ＋ である反面", note: "便利である反面" },
        ],
        usage: [
          "Formal register — essays, reports, reviews.",
          "The two sides must be logically opposite (convenient ↔ complicated).",
        ],
        pitfalls: [
          "The contrast must be logical — not just two random facts.",
          "Similar to 一方で but more formal and stricter about oppositeness.",
        ],
        related: ["〜一方で", "〜に対して"],
      },
      examples: [
        { jp: "この薬は効果がある反面、副作用も強い。", kana: "このくすりはこうかがあるはんめん、ふくさようもつよい。", en: "This medicine is effective, but on the flip side the side effects are strong." },
        { jp: "彼は優しい反面、意外と厳しいところもある。", kana: "かれはやさしいはんめん、いがいときびしいところもある。", en: "He's kind, but on the flip side he can be surprisingly strict." },
        { jp: "テレワークは自由な反面、孤独になりやすい。", kana: "テレワークはじゆうなはんめん、こどくになりやすい。", en: "Remote work is liberating, but on the flip side it can be lonely." },
        { jp: "都市は便利である反面、物価が高い。", kana: "としはべんりであるはんめん、ぶっかがたかい。", en: "Cities are convenient, but on the flip side prices are high." },
      ],
      practice: [
        {
          kind: "order",
          text: "並べ替え：この薬は効果がある反面、副作用も強い。",
          tokens: ["この薬", "は", "効果が", "ある", "反面", "副作用も", "強い"],
        },
        {
          kind: "blank",
          text: "彼は優しい___、意外と厳しいところもある。",
          blanks: ["反面"],
        },
        {
          kind: "mcq",
          text: "反面 is stricter than 一方で because…",
          options: ["it's shorter", "the two sides must be logical opposites", "it's only for people", "it's only past tense"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "な-adj + 反面 uses…",
          options: ["な", "の", "が", "で"],
          answer: 0,
        },
        {
          kind: "tf",
          text: "反面 is more formal than 一方で.",
          answer: true,
        },
      ],
    },
    {
      slug: "n3-u08-l03",
      title: "一方で vs 反面 vs に対して",
      titleJp: "たいひの つかいわけ",
      grammarLabel: "contrast summary",
      summary: "Three contrast tools: 一方で (two aspects), 反面 (logical flip), に対して (toward/against).",
      body: {
        meaning:
          "一方で = two sides of the same thing; 反面 = strict logical opposite; に対して = directed at / in contrast to a DIFFERENT thing.",
        formation: [
          { pattern: "〜一方で", note: "same subject, two aspects" },
          { pattern: "〜反面", note: "same subject, logical opposite" },
          { pattern: "〜に対して", note: "different subject, contrast" },
        ],
        usage: [
          "Ask: is it the SAME subject (一方で/反面) or DIFFERENT subjects (に対して)?",
          "Ask: is the contrast logical/strict (反面) or just two aspects (一方で)?",
        ],
        pitfalls: [
          "に対して compares two different things; 一方で/反面 split one thing.",
          "反面 is strongest — use only when the flip is obvious.",
        ],
        related: ["〜に対して (Unit 3)", "〜と比べて"],
      },
      examples: [
        { jp: "兄は社交的な一方で、弟は内向的だ。", kana: "あにはしゃこうてきないっぽうで、おとうとはないこうてきだ。", en: "My older brother is social, while my younger brother is introverted.", note: "two people → 一方でも OK but に対して is better" },
        { jp: "彼は努力家である反面、融通が利かない。", kana: "かれはどりょくかであるはんめん、ゆうずうがきかない。", en: "He's hardworking, but on the flip side inflexible." },
        { jp: "この製品はコストが安い。それに対して、競合品は高い。", kana: "このせいひんはコストがやすい。それに対して、きょうごうひんはたかい。", en: "This product is cheap. In contrast, competing products are expensive." },
        { jp: "ネット通販は便利だ。それに対して、店頭購入はその場で商品を受け取れる。", kana: "ネットつうはんはべんりだ。それにたいして、てんとうこうにゅうはそのばでしょうひんをうけとれる。", en: "Online shopping is convenient. In contrast, in-store purchase lets you get the product on the spot." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Same subject, two contrasting aspects →",
          options: ["に対して", "一方で", "ように", "たら"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Two DIFFERENT things being contrasted →",
          options: ["一方で", "反面", "に対して", "ながら"],
          answer: 2,
        },
        {
          kind: "blank",
          text: "彼は努力家である___、融通が利かない。(logical flip)",
          blanks: ["反面"],
        },
        {
          kind: "mcq",
          text: "Which is the most formal contrast?",
          options: ["一方で", "反面", "に対して", "けど"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "に対して compares different subjects.",
          answer: true,
        },
      ],
    },
    {
      slug: "n3-u08-l04",
      title: "Contrast in real writing",
      titleJp: "ぶんしょうでの たいひ",
      grammarLabel: "contrast in writing",
      summary: "See how news articles and essays use these patterns together.",
      body: {
        meaning:
          "Real Japanese writing often uses MULTIPLE contrast patterns in the same paragraph. Recognising them helps you read faster.",
        formation: [
          { pattern: "〜一方で + 〜反面", note: "both in the same paragraph" },
          { pattern: "〜に対して + 〜のに対し", note: "contrasting two groups" },
        ],
        usage: [
          "News: リモートワークは自由な一方で、コミュニケーションの課題もある。",
          "Reviews: このカメラは軽い反面、バッテリーの持ちが悪い。",
        ],
        pitfalls: [
          "Don't overuse 反面 — mix with 一方で and に対して.",
          "In casual speech, けど/だけど replaces all of these.",
        ],
        related: ["lessons 1-3"],
      },
      examples: [
        { jp: "リモートワークは自由な一方で、コミュニケーションの課題もある。", kana: "リモートワークはじゆうないっぽうで、コミュニケーションのかだいもある。", en: "Remote work is liberating, but communication challenges remain." },
        { jp: "このカメラは軽い反面、バッテリーの持ちが悪い。", kana: "このカメラはかるいはんめん、バッテリーのもちがわるい。", en: "This camera is light, but on the flip side the battery life is poor." },
        { jp: "都市部では雇用が多い。それに対して、農村部では少ない。", kana: "としぶではこようがおおい。それに対して、のうそんぶではすくない。", en: "Urban areas have many jobs. In contrast, rural areas have few." },
      ],
      practice: [
        {
          kind: "blank",
          text: "リモートワークは自由な___、課題もある。(while)",
          blanks: ["一方で"],
        },
        {
          kind: "mcq",
          text: "Casual spoken equivalent of 一方で:",
          options: ["つまり", "けど", "なので", "ついでに"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Which pattern is LEAST likely in casual speech?",
          options: ["けど", "だけど", "反面", "でも"],
          answer: 2,
        },
        {
          kind: "mcq",
          text: "Identify the pattern: 軽い反面、バッテリーが弱い。 →",
          options: ["一方で", "に対して", "反面", "たら"],
          answer: 2,
        },
        {
          kind: "tf",
          text: "In casual speech, けど replaces most contrast patterns.",
          answer: true,
        },
      ],
    },
  ],
}
