import type { AuthoredUnit } from "../../types"

export const u04: AuthoredUnit = {
  level: "N4",
  order: 4,
  title: "Passive: things done to you",
  titleJp: "うけみ",
  description:
    "The passive れる/られる: direct passives, passives of inconvenience (雨に降られた), and classic constructions like 足を踏まれた.",
  vocab: [
    "踏む|ふむ",
    "殴る|なぐる",
    "盗む|ぬすむ",
    "呼ぶ|よぶ",
    "笑う|わらう",
    "褒める|ほめる",
    "叱る|しかる",
    "先生|せんせい",
    "電車|でんしゃ",
    "人|ひと",
    "子供|こども",
    "親|おや",
    "味噌|みそ",
    "作る|つくる",
    "飲む|のむ",
    "覚える|おぼえる",
    "音楽|おんがく",
    "小説|しょうせつ",
    "読む|よむ",
  ],
  kanji: ["踏", "殴", "盗", "呼", "笑", "褒", "叱", "親", "味"],
  exam: [
    {
      kind: "mcq",
      text: "「私は先生に褒められました。」 means…",
      options: ["I praised the teacher.", "I was praised by the teacher.", "The teacher praised himself.", "We praised each other."],
      answer: 1,
    },
    {
      kind: "blank",
      text: "電車の中で足を踏ま___ました。(was stepped on)",
      blanks: ["れ"],
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n4-u04-l01",
      title: "The passive form",
      titleJp: "うけみ",
      grammarLabel: "〜られる（受身）",
      summary: "“Was done by”: 書かれる, 読まれる, 食べられる.",
      body: {
        meaning:
          "The passive says the SUBJECT HAS something done TO it: この小説は多くの人に読まれています (This novel is read by many). る-verbs: る→られる (食べられる — same as potential!). う-verbs: a-row + れる (読む→読まれる, 書く→書かれる). する→される, 来る→来られる.",
        formation: [
          { pattern: "る-verbs: る → られる", note: "食べる→食べられる (same shape as potential!)" },
          { pattern: "う-verbs: あ-row + れる", note: "読む→読まれる · 書く→書かれる · 言う→言われる" },
          { pattern: "Agent に ＋ Passive", note: "先生に褒められた praised by the teacher" },
        ],
        usage: [
          "Focus on the RECEIVER of the action: 私は先生に呼ばれました.",
          "Common in news/writing: 駅が建てられました (a station was built).",
        ],
        pitfalls: [
          "られる is ambiguous with potential — context (に-agent, event focus) disambiguates.",
          "う-verbs attach -れる to the a-row: 飲む→飲ま+れる, not 飲め+られる.",
        ],
        related: ["potential (Unit 1)", "causative (Unit 5)"],
      },
      examples: [
        { jp: "この寺は三百年前に建てられました。", kana: "このてらはさんびゃくねんまえにたてられました。", en: "This temple was built 300 years ago." },
        { jp: "私は先生に褒められました。", kana: "わたしはせんせいにほめられました。", en: "I was praised by the teacher." },
        { jp: "この歌は若い人に愛されています。", kana: "このうたはわかいひとにあいされています。", en: "This song is loved by young people." },
        { jp: "財布を盗まれました。", kana: "さいふをぬすまれました。", en: "My wallet was stolen." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Passive of 書く:",
          options: ["書ける", "書かれる", "書ける", "書かせる"],
          answer: 1,
        },
        {
          kind: "match",
          text: "Match active with passive:",
          pairs: [
            ["読む", "読まれる"],
            ["食べる", "食べられる"],
            ["する", "される"],
            ["呼ぶ", "呼ばれる"],
          ],
        },
        {
          kind: "order",
          text: "Build: “I was praised by the teacher.”",
          tokens: ["私", "は", "先生", "に", "褒められました", "。"],
        },
        {
          kind: "mcq",
          text: "The agent (doer) in a passive takes…",
          options: ["が", "を", "に", "で"],
          answer: 2,
        },
        {
          kind: "tf",
          text: "食べられる can be either potential or passive.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n4-u04-l02",
      title: "The suffering passive",
      titleJp: "めいわくな うけみ",
      grammarLabel: "迷惑の受身",
      summary: "雨に降られた — something happened TO you and it was inconvenient.",
      body: {
        meaning:
          " Japanese uniquely uses the passive to complain: 電車の中で足を踏まれました (My foot was stepped on — poor me!). Even intransitive verbs: 雨に降られた (it rained on me). The victim is the subject.",
        formation: [
          { pattern: "Victim は Doer に Verb-(ら)れる", note: "私は隣の人に笑われた" },
          { pattern: "Body part を verb-ed", note: "足を踏まれた · 頭をぶたれた" },
        ],
        usage: [
          "Always implies annoyance or damage.",
          "With intransitives (降る・来る・居る): 赤ちゃんに泣かれた (the baby cried on me).",
        ],
        pitfalls: [
          "The body part takes を: ✗ 足が踏まれた for the complaint meaning.",
          "Not every passive complains — news passives are neutral.",
        ],
        related: ["passive form", "〜てしまう (regret)"],
      },
      examples: [
        { jp: "電車の中で足を踏まれました。", kana: "でんしゃのなかであしをふまれました。", en: "My foot was stepped on in the train." },
        { jp: "昨日は雨に降られて、大変でした。", kana: "きのうはあめにふられて、たいへんでした。", en: "Yesterday it rained on me — it was rough." },
        { jp: "夜、隣の人に騒がれて眠れませんでした。", kana: "よる、となりのひとにさわがれてねむれませんでした。", en: "The neighbours were noisy at night and I couldn't sleep." },
        { jp: "子供に泣かれて困りました。", kana: "こどもになかれてこまりました。", en: "The baby cried and I was at a loss." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "「雨に降られました。」 implies…",
          options: ["It rained happily.", "I was caught in the rain (annoying).", "I watched the rain.", "It will rain."],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “My foot was stepped on in the train.”",
          tokens: ["電車", "の", "中で", "足", "を", "踏まれました", "。"],
        },
        {
          kind: "mcq",
          text: "The complainer is the sentence's…",
          options: ["agent", "subject", "object", "place"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Intransitive verbs in the suffering passive: 赤ちゃんに___。",
          options: ["泣く", "泣かれた", "泣けた", "泣きた"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "The suffering passive always uses transitive verbs.",
          answer: false,
          explain: "Intransitives work too (雨に降られる).",
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n4-u04-l03",
      title: "Things made and known",
      titleJp: "つくられる・しられる",
      grammarLabel: "passive in facts",
      summary: "Neutral passives for facts: 貯金されました, 知られています.",
      body: {
        meaning:
          "Passives describe facts without agents: この歌はよく知られています (this song is well known), 万里の長城は石で作られています (built of stone).",
        formation: [
          { pattern: "〜は … に 知られて います", note: "is known by…" },
          { pattern: "〜は Material で 作られて います", note: "is made of/from" },
          { pattern: "〜と 言われて います", note: "is said to be…" },
        ],
        usage: [
          "Material takes で in passives: 木で作られている (made of wood).",
          "〜と言われている = “it is said that…” — for common beliefs.",
        ],
        pitfalls: [
          "作られる vs 作ります — the passive keeps the object as subject.",
          "〜と言われている cites general opinion, not a specific speaker.",
        ],
        related: ["passive form", "〜そうです (hearsay, Unit 8)"],
      },
      examples: [
        { jp: "このお寺は百年前に建てられました。", kana: "このおてらはひゃくねんまえにたてられました。", en: "This temple was built 100 years ago." },
        { jp: "京都は美しい町として知られています。", kana: "きょうとはうつくしいまちとしてしられています。", en: "Kyoto is known as a beautiful city." },
        { jp: "この寺は木で作られています。", kana: "このてらはきでつくられています。", en: "This temple is made of wood." },
        { jp: "この湖は一番深いと言われています。", kana: "このみずうみはいちばんふかいといわれています。", en: "This lake is said to be the deepest." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "“Made of wood” →",
          options: ["木を作られています", "木で作られています", "木を作ります", "木が作られます"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "この歌は世界中 ___ 知られています。(by the whole world)",
          blanks: ["に"],
        },
        {
          kind: "mcq",
          text: "“It is said that…” →",
          options: ["と言いました", "と言われています", "と言わせます", "と言えました"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “This temple was built long ago.”",
          tokens: ["この", "寺", "は", "昔", "建てられました", "。"],
        },
        {
          kind: "tf",
          text: "〜と言われています cites a specific person's words.",
          answer: false,
          explain: "It's general/common belief.",
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n4-u04-l04",
      title: "Passive with no agent",
      titleJp: "うけみの いろいろ",
      grammarLabel: "agent-less passive",
      summary: "When nobody specific did it: 駅が建てられます, ドアが開けられました.",
      body: {
        meaning:
          "Passives often omit WHO did it because it's obvious, unknown, or unimportant: 新しい駅が作られます (A new station will be built). The thing acted on becomes the subject.",
        formation: [
          { pattern: "Object が ＋ Passive", note: "オリンピックは来年開催されます" },
          { pattern: "News-style reporting", note: "許可なく撮影が禁止されています" },
        ],
        usage: [
          "Formal notices: 立ち入り禁止とされています.",
          "Processes and instructions: まず、水が沸かされます.",
        ],
        pitfalls: [
          "Don't double-mark: ✗ 駅がを作られます.",
          "Objects of the active verb become subjects: 作る (它) → 它が作られる.",
        ],
        related: ["passive form", "受身 with agents"],
      },
      examples: [
        { jp: "新しい図書館が建てられます。", kana: "あたらしいとしょかんがたてられます。", en: "A new library will be built." },
        { jp: "この機械は世界中で使われています。", kana: "このきかいはせかいじゅうでつかわれています。", en: "This machine is used all over the world." },
        { jp: "展覧会は来月開催されます。", kana: "てんらんかいはらいげつかいさいされます。", en: "The exhibition will be held next month." },
        { jp: "この地方でお茶が作られています。", kana: "このちほうでおちゃがつくられています。", en: "Tea is produced in this region." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “A new library will be built.”",
          tokens: ["新しい", "図書館", "が", "建てられます", "。"],
        },
        {
          kind: "mcq",
          text: "Passive sentences often omit…",
          options: ["the object", "the agent", "the verb", "the subject"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "“This machine is used worldwide” — 使われています is…",
          options: ["potential", "passive", "causative", "active"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "このお茶は静岡で作られて___ます。",
          blanks: ["い"],
        },
        {
          kind: "tf",
          text: "The object of the active verb becomes the passive subject.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n4-u04-l05",
      title: "Passive or potential?",
      titleJp: "うけみ・かのうの くべつ",
      grammarLabel: "られる disambiguation",
      summary: "Same shape, different meanings — how to tell them apart.",
      body: {
        meaning:
          "る-verbs use られる for BOTH potential and passive: 見られる (can see / is seen). Clues: passives have に-agents or complaint contexts; potentials express ability and often switch を→が.",
        formation: [
          { pattern: "先生に見られた = was seen (passive)", note: "に-agent clue" },
          { pattern: "映画が見られた = could watch (potential)", note: "ability clue" },
          { pattern: "う-verbs have separate forms", note: "読まれる (passive) vs 読める (potential)" },
        ],
        usage: [
          "Only る-verbs (and 来る/する) share the shape.",
          "In ambiguity, Japanese relies on context — so will you.",
        ],
        pitfalls: [
          "先生に見られた is almost always passive (agent + event).",
          "唐揚げが食べられた — context decides “was eaten” vs “could eat”.",
        ],
        related: ["potential (Unit 1)", "passive (L1)"],
      },
      examples: [
        { jp: "今日、映画が見られます。", kana: "きょう、えいががみられます。", en: "I can watch a movie today. (potential)" },
        { jp: "私の日記は妹に見られました。", kana: "わたしのにっきはいもうとにみられました。", en: "My diary was seen by my sister. (passive)" },
        { jp: "先生に名前を呼ばれました。", kana: "せんせいになまえをよばれました。", en: "I was called on by the teacher. (passive)" },
        { jp: "明日は自由に使えます。", kana: "あしたはじゆうにつかえます。", en: "Tomorrow it can be used freely. (potential)" },
      ],
      practice: [
        {
          kind: "mcq",
          text: "先生に見られた。 This is…",
          options: ["potential", "passive", "causative", "imperative"],
          answer: 1,
          explain: "に-agent marks the passive.",
        },
        {
          kind: "mcq",
          text: "Passive of 読む:",
          options: ["読める", "読まれる", "読ませる", "読いた"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Potential of 読む:",
          options: ["読まれる", "読める", "読ませる", "読われる"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "明日は無料で入れ___ます。(can enter — 入る)",
          blanks: ["ら"],
        },
        {
          kind: "tf",
          text: "う-verbs have different passive and potential forms.",
          answer: true,
        },
      ],
    },
  ],
}
