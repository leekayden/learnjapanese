import type { AuthoredUnit } from "../../types"

export const u02: AuthoredUnit = {
  level: "N3",
  order: 2,
  title: "Decisions and roles",
  titleJp: "けっていと せきにん",
  description:
    "Personal vs group decisions (ことにする・ことになる), acting as (として), about/regarding (について・に関して), and sources (によると).",
  vocab: [
    "決める|きめる",
    "決定|けってい",
    "就職|しゅうしょく",
    "引っ越し|ひっこし",
    "転勤|てんきん",
    "代表|だいひょう",
    "学生|がくせい",
    "調査|ちょうさ",
    "記事|きじ",
    "通じる|つうじる",
    "関係|かんけい",
    "価値|かち",
    "国際|こくさい",
    "会議|かいぎ",
  ],
  kanji: ["決", "職", "転", "勤", "調査", "誌", "関", "際", "値"],
  exam: [
    {
      kind: "mcq",
      text: "「来月アメリカに転勤することになりました。」 means…",
      options: ["I decided to transfer.", "It has been decided (for me) that I'll transfer.", "I want to transfer.", "I heard about a transfer."],
      answer: 1,
      explain: "ことになる = external/group decision affecting you.",
    },
    {
      kind: "mcq",
      text: "「学生として、勉強が一番大切です。」 — として means…",
      options: ["like a student", "in the role of a student", "because of students", "with students"],
      answer: 1,
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n3-u02-l01",
      title: "I decide: 〜ことにする",
      titleJp: "〜ことにする",
      grammarLabel: "〜ことにする",
      summary: "Personal resolution: 太らないように、甘い物を食べないことにしました.",
      body: {
        meaning:
          "Verb plain + ことにする = the SPEAKER decides: 禁煙することにしました (I've decided to quit smoking). Negative: 〜ないことにする.",
        formation: [
          { pattern: "Verb plain ＋ ことにする", note: "引っ越すことにした" },
          { pattern: "Verb ない ＋ ことにする", note: "食べないことにしました" },
          { pattern: "Past: 〜ことにした", note: "last week's decision" },
        ],
        usage: [
          "Announcements of self-made choices.",
          "〜ことにしている = habitual personal rule: 毎朝走ることにしている.",
        ],
        pitfalls: [
          "ことになる (decided for you) vs ことにする (you decide) — the N3 exam favourite.",
          "✗ 雨が降ることにしました (weather has no agency).",
        ],
        related: ["〜ことになる", "〜ようになる・ようにする"],
      },
      examples: [
        { jp: "健康のため、タバコをやめることにしました。", kana: "けんこうのため、タバコをやめることにしました。", en: "For my health, I've decided to quit smoking." },
        { jp: "来月から一人暮らしをすることになりました。", kana: "らいげつからひとりぐらしをすることになりました。", en: "It's been decided that I'll live alone from next month." },
        { jp: "ダイエット中なので、晩ご飯は食べないことにしています。", kana: "ダイエットちゅうなので、ばんごはんはたべないことにしています。", en: "I'm on a diet, so I make a point of not eating dinner." },
        { jp: "転職することにしました。", kana: "てんしょくすることにしました。", en: "I've decided to change jobs." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I've decided to quit smoking.”",
          tokens: ["タバコ", "を", "やめる", "ことに", "しました", "。"],
        },
        {
          kind: "mcq",
          text: "“It was decided for me” uses…",
          options: ["ことにする", "ことになる", "ようにする", "ことにしている"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "甘い物を食べない___にしています。(personal rule)",
          blanks: ["こと"],
        },
        {
          kind: "mcq",
          text: "ことにしている expresses…",
          options: ["one-off decision", "standing personal rule", "group decision", "hearsay"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "ことにする requires an agent with will.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n3-u02-l02",
      title: "It was decided: 〜ことになる",
      titleJp: "〜ことになる",
      grammarLabel: "〜ことになる",
      summary: "External/group decisions: 来月転勤することになりました.",
      body: {
        meaning:
          "〜ことになる reports a decision made by others (company, family, committee) that affects you: 来月大阪に転勤することになりました (It's been decided I'll transfer to Osaka).",
        formation: [
          { pattern: "Verb plain ＋ ことになる", note: "official outcome" },
          { pattern: "〜ないことになる", note: "decided not to" },
          { pattern: "〜ことになっている", note: "standing rule: 部屋の中でタバコを吸ってはいけないことになっている" },
        ],
        usage: [
          "Soften personal decisions too (Japanese modesty): 会社を辞めることになりました.",
          "ことになっている = rules and customs.",
        ],
        pitfalls: [
          "〜ことになった can hide who decided — that's the point.",
          " Rules: 〜ことになっている, not ことにしている (that's personal).",
        ],
        related: ["〜ことにする", "〜ように言われる"],
      },
      examples: [
        { jp: "来月、大阪に転勤することになりました。", kana: "らいげつ、おおさかにてんきんすることになりました。", en: "It's been decided I'll transfer to Osaka next month." },
        { jp: "この寮では九時に消灯することになっている。", kana: "このりょうではくじにしょうとうすることになっている。", en: "In this dorm, lights-out is at nine (by rule)." },
        { jp: "来週の会議は中止することになりました。", kana: "らいしゅうのかいぎはちゅうしすることになりました。", en: "It's been decided that next week's meeting is cancelled." },
        { jp: "日本の家では靴を脱ぐことになっている。", kana: "にほんのいえではくつをぬぐことになっている。", en: "In Japanese homes, you take off your shoes (custom)." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “It's been decided I'll transfer to Osaka.”",
          tokens: ["大阪", "に", "転勤する", "ことに", "なりました", "。"],
        },
        {
          kind: "mcq",
          text: "Standing rules/customs use…",
          options: ["ことにする", "ことになっている", "ことにしている", "ことになった"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "会議は中止する___になりました。(it was decided)",
          blanks: ["こと"],
        },
        {
          kind: "mcq",
          text: "Why use ことになる for your own transfer?",
          options: ["you forgot", "modesty / company decided", "grammar error", "past tense"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "ことになっている can describe cultural customs.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n3-u02-l03",
      title: "As / in the role of: 〜として",
      titleJp: "〜として",
      grammarLabel: "〜として",
      summary: "Capacity or role: 学生として、勉強が一番大切です.",
      body: {
        meaning:
          "Noun + として = “as / in the capacity of”: 私としても考えさせられました. Also 代表として日本に行く (go to Japan as a representative).",
        formation: [
          { pattern: "Noun ＋ として", note: "医者として as a doctor" },
          { pattern: "Noun ＋ としての ＋ Noun", note: "親としての責任 duty as a parent" },
          { pattern: "〜としても", note: "even as / also as" },
        ],
        usage: [
          "Roles, titles, functions.",
          "〜としても adds another viewpoint: 学生としてもそう思います.",
        ],
        pitfalls: [
          "〜としては = “as for X (in that role)” — a comparison frame.",
          "Don't confuse with としては location には.",
        ],
        related: ["〜にとって (viewpoint, Unit 5)", "〜としても"],
      },
      examples: [
        { jp: "彼は医者として働いています。", kana: "かれはいしゃとしてはたらいています。", en: "He works as a doctor." },
        { jp: "学生として、勉強が一番大切です。", kana: "がくせいとして、べんきょうがいちばんたいせつです。", en: "As a student, studying is the most important." },
        { jp: "代表として国際会議に参加しました。", kana: "だいひょうとしてこくさいかいぎにさんかしました。", en: "I attended the international conference as a representative." },
        { jp: "親としての責任を感じています。", kana: "おやとしてのせきにんをかんじています。", en: "I feel my responsibility as a parent." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “He works as a doctor.”",
          tokens: ["彼", "は", "医者", "として", "働いて", "います", "。"],
        },
        {
          kind: "blank",
          text: "親として___責任を感じます。(responsibility as a parent)",
          blanks: ["の"],
        },
        {
          kind: "mcq",
          text: "〜としての ＋ noun uses which particle?",
          options: ["が", "の", "に", "で"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "〜としても means…",
          options: ["only as", "even as / also as", "because as", "instead of"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "として marks capacity or role.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n3-u02-l04",
      title: "About: 〜について・〜に関して",
      titleJp: "〜について・〜に関して",
      grammarLabel: "〜について",
      summary: "日本の文化について話しました (talked about Japanese culture).",
      body: {
        meaning:
          "について = about/concerning a topic: 日本の歴史について勉強しています. に関して is the formal twin: この件に関して、ご意見はありますか。",
        formation: [
          { pattern: "Noun ＋ について", note: "about" },
          { pattern: "Noun ＋ についての ＋ Noun", note: "日本についての本" },
          { pattern: "Noun ＋ に関して（は）", note: "formal regarding" },
        ],
        usage: [
          "Questions: 日本語についてどう思いますか。",
          "に関して in writing/announcements: 契約に関しては後日ご連絡します。",
        ],
        pitfalls: [
          "を問わず / に関わらず are different (regardless) — N2.",
          "✗ 日本語として話しました (role) vs について (topic).",
        ],
        related: ["〜によると (next lesson)", "〜にとって"],
      },
      examples: [
        { jp: "日本の文化について勉強しています。", kana: "にほんのぶんかについてべんきょうしています。", en: "I'm studying about Japanese culture." },
        { jp: "この件について、どう思いますか。", kana: "このけんについて、どうおもいますか。", en: "What do you think about this matter?" },
        { jp: "環境に関して、質問があります。", kana: "かんきょうにかんして、しつもんがあります。", en: "I have a question regarding the environment." },
        { jp: "日本についての本を探しています。", kana: "にほんについてのほんをさがしています。", en: "I'm looking for a book about Japan." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I'm studying about Japanese culture.”",
          tokens: ["日本", "の", "文化", "について", "勉強して", "います", "。"],
        },
        {
          kind: "blank",
          text: "環境に関___、質問があります。(regarding)",
          blanks: ["して"],
        },
        {
          kind: "mcq",
          text: "More formal: について or に関して?",
          options: ["について", "に関して", "same", "neither"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "〜についての ＋ noun modifies with…",
          options: ["が", "の", "を", "は"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "について marks the topic of discussion or study.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n3-u02-l05",
      title: "According to: 〜によると・〜によれば",
      titleJp: "〜によると",
      grammarLabel: "〜によると",
      summary: "Citing sources: 天気予報によると、明日は雨だそうです.",
      body: {
        meaning:
          "Noun + によると/によれば/によりますと introduces the SOURCE of reported information: ニュースによると、事故があったそうです.",
        formation: [
          { pattern: "Source ＋ によると ＋ hearsay", note: "…だそうです／らしい" },
          { pattern: "〜によれば (written)", note: "reports" },
          { pattern: "〜によりますと (polite broadcast)", note: "TV news" },
        ],
        usage: [
          "Always pairs with a reported-speech ending (そうだ・らしい・とのこと).",
          "ほかに: 私の考えによると (in my view) is less common — としては preferred.",
        ],
        pitfalls: [
          "No direct quote: ✗ によると行きます (needs そうです).",
          "場所に寄って differs (varies by place) — separate によって (N3 Unit 3).",
        ],
        related: ["〜そうです (hearsay)", "〜によって (varies by)"],
      },
      examples: [
        { jp: "天気予報によると、明日は雨だそうです。", kana: "てんきよほうによると、あしたはあめだそうです。", en: "According to the forecast, it will rain tomorrow." },
        { jp: "ニュースによると、昨夜地震があったそうです。", kana: "ニュースによると、ゆうべじしんがあったそうです。", en: "According to the news, there was an earthquake last night." },
        { jp: "調査によれば、若者はテレビを見なくなっている。", kana: "ちょうさによれば、わかものはテレビをみなくなっている。", en: "According to the survey, young people are watching less TV." },
        { jp: "友達の話によると、あの店は閉まったとのことです。", kana: "ともだちのはなしによると、あのみせはしまったとのことです。", en: "According to my friend, that shop has closed." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “According to the forecast, it'll rain.”",
          tokens: ["天気予報", "に", "よると", "雨", "だそうです", "。"],
        },
        {
          kind: "mcq",
          text: "によると pairs with…",
          options: ["direct commands", "hearsay endings", "past tense only", "questions"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "ニュース___よると、事故があったそうです。",
          blanks: ["に"],
        },
        {
          kind: "mcq",
          text: "Written variant of によると:",
          options: ["によれば", "によって", "について", "にとって"],
          answer: 0,
        },
        {
          kind: "tf",
          text: "You can drop the hearsay ending after によると.",
          answer: false,
          explain: "It needs そうだ/らしい/とのこと.",
        },
      ],
    },
  ],
}
