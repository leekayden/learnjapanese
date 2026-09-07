import type { AuthoredUnit } from "../../types"

export const u03: AuthoredUnit = {
  level: "N4",
  order: 3,
  title: "Do and be done",
  titleJp: "じどうし・たどうし",
  description:
    "Transitive/intransitive verb pairs (開ける/開く, 出す/出る), describing states with 〜ている, and time spans with 間・間に.",
  vocab: [
    "開ける|あける",
    "開く|ひらく",
    "閉める|しめる",
    "閉まる|しまる",
    "入れる|いれる",
    "入る|はいる",
    "出す|だす",
    "出る|でる",
    "点ける|つける",
    "消す|けす",
    "消える|きえる",
    "壊す|こわす",
    "壊れる|こわれる",
    "割る|わる",
    "割れる|われる",
    "窓|まど",
    "|ドア",
    "電気|でんき",
    "|コップ",
    "皿|さら",
  ],
  kanji: ["開", "閉", "壊", "割", "消", "電", "気", "危", "険"],
  exam: [
    {
      kind: "mcq",
      text: "「ドアが閉まっています。」 means…",
      options: ["Someone is closing the door.", "The door is closed (state).", "Please close the door.", "The door will close."],
      answer: 1,
    },
    {
      kind: "mcq",
      text: "Which is TRANSITIVE (I act on something)?",
      options: ["開く", "開ける", "閉まる", "壊れる"],
      answer: 1,
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n4-u03-l01",
      title: "Pairs: open and be open",
      titleJp: "たどうし・じどうし",
      grammarLabel: "他動詞・自動詞",
      summary: "開ける/開く — one side acts, the other side happens.",
      body: {
        meaning:
          " Japanese pairs verbs by TRANSITIVE (他動詞 — someone acts ON something, object takes を) and INTRANSITIVE (自動詞 — it happens BY ITSELF, subject takes が): ドアを開ける (I open the door) vs ドアが開く (the door opens).",
        formation: [
          { pattern: "他動詞: Ｎ を 開ける・閉める・入れる", note: "I do it to something" },
          { pattern: "自動詞: Ｎ が 開く・閉まる・入る", note: "it happens" },
        ],
        usage: [
          "あける/ひらく both = open; あく/ひらく intransitive partners.",
          "These pairs are vocabulary — memorise them as couples.",
        ],
        pitfalls: [
          "✗ ドアを開く — 開く is intransitive; transitive is 開ける.",
          "Similar-looking pairs differ irregularly (出す/出る, 入れる/入る).",
        ],
        related: ["〜ている (states)", "passive (Unit 4)"],
      },
      examples: [
        { jp: "私は窓を開けました。", kana: "わたしはまどをあけました。", en: "I opened the window." },
        { jp: "窓が開いています。", kana: "まどがあいています。", en: "The window is open." },
        { jp: "ドアを閉めてください。", kana: "ドアをしめてください。", en: "Please close the door." },
        { jp: "店は六時に閉まります。", kana: "みせはろくじにしまります。", en: "The shop closes at six." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "“I opened the window.” →",
          options: ["窓が開いた。", "窓を開けた。", "窓を開いた。", "窓が開けた。"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Which completes: ドアが自動的に___。",
          options: ["閉めて", "閉まって", "閉めて", "閉める"],
          answer: 1,
        },
        {
          kind: "match",
          text: "Match transitive with intransitive:",
          pairs: [
            ["出す", "出る"],
            ["入れる", "入る"],
            ["開ける", "開く"],
            ["壊す", "壊れる"],
          ],
        },
        {
          kind: "mcq",
          text: "Transitive verbs take ___ objects.",
          options: ["が", "を", "に", "で"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "自動詞 describes events happening by themselves.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n4-u03-l02",
      title: "Result states: 〜ている (2)",
      titleJp: "〜ている（けっか）",
      grammarLabel: "〜ている（結果）",
      summary: "ドアが閉まっています = the door IS closed — result state.",
      body: {
        meaning:
          "With intransitive verbs, 〜ている describes the RESULT STATE after the change: 電気が消えています (the light is off), 窓が割れています (the window is broken). Compare transitive 電気を消しました (someone turned it off).",
        formation: [
          { pattern: "自動詞 て ＋ います", note: "死んでいる is dead · 行っている is gone" },
          { pattern: "State description, not action", note: "壊れています is broken" },
        ],
        usage: [
          "Describing scenes and situations: ドアが開いていますよ (The door is open, you know).",
          " As background info in stories.",
        ],
        pitfalls: [
          "開けています (someone is opening it NOW) vs 開いています (it IS open) — different verbs!",
          "行っています can mean “is gone/has gone (and is there)”.",
        ],
        related: ["〜ている (progressive)", "transitive/intransitive"],
      },
      examples: [
        { jp: "電気が消えています。", kana: "でんきがきえています。", en: "The light is off." },
        { jp: "このコップは割れています。", kana: "このコップはわれています。", en: "This glass is broken." },
        { jp: "田中さんはもう帰っています。", kana: "たなかさんはもうかえっています。", en: "Mr. Tanaka has already gone home." },
        { jp: "冷蔵庫に入れてあります。", kana: "れいぞうこにいれてあります。", en: "It's been put in the fridge.", note: "〜てある = result of a deliberate act." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "“The light is OFF (state)” →",
          options: ["電気を消しています。", "電気が消えています。", "電気が消しています。", "電気を消えています。"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Someone is opening the door right now:",
          options: ["ドアが開いています。", "ドアを開けています。", "ドアが開けています。", "ドアを開いています。"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "〜ている with INTRANSITIVE verbs expresses…",
          options: ["progressive action", "result state", "habit", "request"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "コップが割れて___ます。(is broken)",
          blanks: ["い"],
        },
        {
          kind: "tf",
          text: "〜てある shows the result of someone's deliberate action.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n4-u03-l03",
      title: "〜てあります and 〜ておきます",
      titleJp: "〜てある・〜ておく",
      grammarLabel: "〜てある・〜ておく",
      summary: "Deliberate results: チケットは買ってあります / 明のためにおきます.",
      body: {
        meaning:
          "〜てあります says something was done ON PURPOSE and stays that way: 予約してあります (a reservation is in place). 〜ておきます means doing something IN ADVANCE / for later: 明日までに予約しておきます.",
        formation: [
          { pattern: "他動詞 て ＋ あります", note: "会議室は予約してあります" },
          { pattern: "Verb て ＋ おきます", note: "念のため確認しておきます" },
          { pattern: "〜ておきます → 〜ときます (casual)", note: "やっておく → やっとく" },
        ],
        usage: [
          "てあります focuses on the STATE; ておきます on the PREPARATION act.",
          "Common in business: 資料は送っておきました.",
        ],
        pitfalls: [
          "✗ 行ってあります for “I have gone” — use 行ったことがあります (experience).",
          "ておきます needs a purpose (for later), even if vague.",
        ],
        related: ["transitive verbs", "〜てしまう (Unit 5)"],
      },
      examples: [
        { jp: "ホテルはもう予約してあります。", kana: "ホテルはもうよやくしてあります。", en: "The hotel is already booked." },
        { jp: "会議の資料を準備しておきます。", kana: "かいぎのしりょうをじゅんびしておきます。", en: "I'll prepare the meeting materials in advance." },
        { jp: "明のために買っておきました。", kana: "あしたのためにかっておきました。", en: "I bought it for tomorrow (in advance)." },
        { jp: "電話番号をメモしておきました。", kana: "でんわばんごうをメモしておきました。", en: "I noted down the phone number (for later)." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “The hotel is already booked.”",
          tokens: ["ホテル", "は", "もう", "予約して", "あります", "。"],
        },
        {
          kind: "blank",
          text: "念のため確認して___ます。(confirm in advance)",
          blanks: ["おき"],
        },
        {
          kind: "mcq",
          text: "〜てあります uses which verb type?",
          options: ["自動詞", "他動詞", "potential", "passive"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "“I'll buy it in advance” →",
          options: ["買ってあります。", "買っておきます。", "買ってしまいます。", "買ってみます。"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "Casual 〜ておきます shortens to 〜とく.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n4-u03-l04",
      title: "During: 間 and 間に",
      titleJp: "あいだ・あいだに",
      grammarLabel: "〜間・〜間に",
      summary: "Span vs point: 母がいる間ずっと (the whole time) vs 間に (at some point during).",
      body: {
        meaning:
          "Averb/phrase + 間（あいだ） means “during the whole span”: 夏休みの間ずっと泳いでいた. 間に means at SOME POINT within: 夏休みの間に一度海に行きたい (at some point during summer).",
        formation: [
          { pattern: "Noun の ＋ 間（ずっと）", note: "span, continuous" },
          { pattern: "Noun の ＋ 間に", note: "one-time point within" },
          { pattern: "Verb plain ＋ 間に", note: "寝ている間に雨が降った" },
        ],
        usage: [
          "ずっと emphasises the entire duration.",
          "Verbs of duration (いる・ある・勉強する) before 間; instant verbs before 間に.",
        ],
        pitfalls: [
          "✗ 日本にいる間にずっと — ずっと needs 間, not 間に.",
          "間 also reads ま in compounds (人間、時間).",
        ],
        related: ["〜ながら (same subject)", "〜とき"],
      },
      examples: [
        { jp: "夏休みの間、ずっと日本にいました。", kana: "なつやすみのあいだ、ずっとにほんにいました。", en: "I was in Japan the whole summer break." },
        { jp: "夏休みの間に一度海に行きたいです。", kana: "なつやすみのあいだにいちどうみにいきたいです。", en: "I want to go to the sea at some point during summer." },
        { jp: "私が料理をしている間、テレビを見ていました。", kana: "わたしがりょうりをしているあいだ、テレビをみていました。", en: "While I was cooking, he was watching TV." },
        { jp: "寝ている間に雨が降りました。", kana: "ねているあいだにあめがふりました。", en: "It rained while I was asleep." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "One event happened at some point during the trip:",
          options: ["旅行の間", "旅行の間に", "旅行に間", "旅行で間"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "母がいる___、ずっと勉強しました。(the whole time)",
          blanks: ["間"],
        },
        {
          kind: "order",
          text: "Build: “It rained while I was sleeping.”",
          tokens: ["寝て", "いる", "間に", "雨", "が", "降りました"],
        },
        {
          kind: "mcq",
          text: "間に implies the event…",
          options: ["lasted the whole span", "happened at a point within", "happened after", "never happened"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "ずっと pairs naturally with 間.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n4-u03-l05",
      title: "Simultaneous actions review & や",
      titleJp: "どうじの ひょうげん",
      grammarLabel: "ながら・間・ついでに",
      summary: "Choosing between ながら, 間, and listing with や〜など.",
      body: {
        meaning:
          "ながら = SAME subject, simultaneous actions. 間 = DIFFERENT subjects during a span. For listing nouns with examples, や…など means “A, B, and so on”.",
        formation: [
          { pattern: "Same subject → ながら", note: "歩きながら話す" },
          { pattern: "Different subjects → 間", note: "私が料理する間、彼は掃除した" },
          { pattern: "ＡやＢなど", note: "果物や野菜など fruit, vegetables, etc." },
        ],
        usage: [
          "や is softer than と — non-exhaustive lists.",
          "など can end the list: 本や雑誌など.",
        ],
        pitfalls: [
          "✗ 彼が歌うながら — ながら needs ます-stem: 歌いながら.",
          "や never makes complete lists; use と for exact pairs.",
        ],
        related: ["〜ながら (N5)", "と (Unit 4 N5)"],
      },
      examples: [
        { jp: "私は歩きながら音楽を聞きます。", kana: "わたしはあるきながらおんがくをききます。", en: "I listen to music while walking." },
        { jp: "私が勉強している間、妹は遊んでいました。", kana: "わたしがべんきょうしているあいだ、いもうとはあそんでいました。", en: "While I studied, my sister was playing." },
        { jp: "冷蔵庫に果物や野菜などがあります。", kana: "れいぞうこにくだものややさいなどがあります。", en: "There's fruit, vegetables and so on in the fridge." },
        { jp: "京都や大阪などを旅行しました。", kana: "きょうとやおおさかなどをりょこうしました。", en: "I travelled around Kyoto, Osaka and so on." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Different subjects doing things during a span →",
          options: ["ながら", "間", "ても", "たら"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “There's fruit and vegetables, etc.”",
          tokens: ["果物", "や", "野菜", "など", "が", "あります"],
        },
        {
          kind: "mcq",
          text: "や makes ___ lists.",
          options: ["exhaustive", "non-exhaustive", "negative", "ordered"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "歌い___、料理します。(while singing)",
          blanks: ["ながら"],
        },
        {
          kind: "tf",
          text: "Use と for exact complete pairs.",
          answer: true,
        },
      ],
    },
  ],
}
