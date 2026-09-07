import type { AuthoredUnit } from "../../types"

export const u04: AuthoredUnit = {
  level: "N5",
  order: 4,
  title: "Yesterday, together, how many",
  titleJp: "きのうと いっしょに",
  description:
    "Talk about the past (ました・ませんでした), link nouns with と, mark subjects with が, count things with Japanese counters, and handle money when shopping.",
  vocab: [
    "財布|さいふ",
    "雑誌|ざっし",
    "手紙|てがみ",
    "|プレゼント",
    "鳥|とり",
    "店|みせ",
    "月曜日|げつようび",
    "火曜日|かようび",
    "水曜日|すいようび",
    "木曜日|もくようび",
    "金曜日|きんようび",
    "土曜日|どようび",
    "日曜日|にちようび",
    "半|はん",
    "お金|おかね",
    "|ジュース",
    "|ビール",
    "|ネクタイ",
    "|シャツ",
    "|ノート",
  ],
  kanji: ["男", "子", "山", "川", "元", "気", "天", "雨", "半"],
  exam: [
    {
      kind: "order",
      text: "Build: “I read a magazine yesterday.”",
      tokens: ["昨日", "雑誌", "を", "読みました", "。"],
    },
    {
      kind: "mcq",
      text: "How do you count three flat things like tickets?",
      options: ["三人", "三枚", "三本", "三つ"],
      answer: 1,
      explain: "枚 counts flat objects; 人 people, 本 long things, つ the general counter.",
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n5-u04-l01",
      title: "Talking about the past",
      titleJp: "〜ました・〜ませんでした",
      grammarLabel: "〜ました",
      summary: "Polite past: 食べました (ate), 飲みませんでした (didn't drink).",
      body: {
        meaning:
          "Swap ます for ました to talk about the past: 昨日ケーキを買いました (I bought cake yesterday). The polite past negative is ませんでした: 飲みませんでした (didn't drink).",
        formation: [
          { pattern: "Verb ました", note: "行きました went · 見ました saw · しました did" },
          { pattern: "Verb ませんでした", note: "行きませんでした didn't go" },
          { pattern: "昨日／〜に ＋ 文", note: "Time word first, as always" },
        ],
        usage: [
          "Same politeness as ます — use everywhere in polite company.",
          "Typical time words: 昨日, 昨朝? (later), 去年? (N5: 去年 comes later — for now 今日/昨日/明日/先週 later).",
          "Questions stay unchanged: 昨日、何を食べましたか。",
        ],
        pitfalls: [
          " Don't mix forms: ✗ 食べましたません → past negative is 食べませんでした.",
          "ました is polite past — the plain past (食べた) comes in Unit 7.",
        ],
        related: ["〜ます", "〜ていました (Unit 7)"],
      },
      examples: [
        { jp: "昨日、友達に会いました。", kana: "きのう、ともだちにあいました。", en: "I met a friend yesterday." },
        { jp: "朝ご飯を食べませんでした。", kana: "あさごはんをたべませんでした。", en: "I didn't eat breakfast." },
        { jp: "土曜日に映画を見ました。", kana: "どようにちにえいがをみました。", en: "I watched a movie on Saturday." },
        { jp: "手紙を書きました。", kana: "てがみをかきました。", en: "I wrote a letter." },
      ],
      practice: [
        {
          kind: "blank",
          text: "昨日、水を飲み___。(didn't drink)",
          blanks: ["ませんでした"],
        },
        {
          kind: "order",
          text: "Build: “I bought a wallet on Monday.”",
          tokens: ["月曜日に", "財布", "を", "買いました", "。"],
        },
        {
          kind: "mcq",
          text: "「雑誌を読みましたか。」 is…",
          options: ["Will you read the magazine?", "Did you read the magazine?", "Do you read magazines?", "Don't read the magazine."],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "What is the polite past of 書きます?",
          options: ["書くました", "書きました", "書いてしました", "書きでした"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "「飲みませんでした」 means “didn't drink”.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n5-u04-l02",
      title: "And… with…: と",
      titleJp: "〜と",
      grammarLabel: "〜と",
      summary: "Connect nouns (bread AND coffee) or say “with someone” (friend と).",
      body: {
        meaning:
          "と between nouns means “and”: パンとコーヒー. After a person it means “with”: 友達と行きます (I go WITH my friend). Same particle, two jobs — both about being together.",
        formation: [
          { pattern: "Ａ と Ｂ", note: "A and B (noun list)" },
          { pattern: "Person と Verb", note: "友達と遊びます play with a friend" },
        ],
        usage: [
          "と lists are for complete pairs/groups; for open lists (“and so on”) use とか/や later.",
          "Questions use だれと: 誰と行きますか (Who are you going with?).",
        ],
        pitfalls: [
          "と connects NOUNS only. Two sentences need それから or 〜て (Unit 6).",
          "Family members you're with still take と: 母と買います (shop with my mum).",
        ],
        related: ["や・とか (Unit 12)", "〜を (object)"],
      },
      examples: [
        { jp: "パンと卵を買いました。", kana: "パンとたまごをかいました。", en: "I bought bread and eggs." },
        { jp: "友達と映画を見ました。", kana: "ともだちとえいがをみました。", en: "I watched a movie with a friend." },
        { jp: "誰と日本へ来ましたか。", kana: "だれとにほんへきましたか。", en: "Who did you come to Japan with?" },
        { jp: "水とお茶をください。", kana: "みずとおちゃをください。", en: "Water and tea, please.", note: "〜をください is Unit 7." },
      ],
      practice: [
        {
          kind: "blank",
          text: "父と母___デパートに行きました。",
          blanks: ["と"],
          explain: "Here と joins two people acting together — 父と母 as a pair.",
        },
        {
          kind: "mcq",
          text: "「兄とテニスをしました。」 means…",
          options: ["I played tennis.", "I played tennis with my older brother.", "My brother played tennis.", "I gave my brother a tennis racket."],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “I bought a shirt and a tie.”",
          tokens: ["シャツ", "と", "ネクタイ", "を", "買いました"],
        },
        {
          kind: "mcq",
          text: "Ask “Who did you go with?”",
          options: ["誰が行きましたか。", "誰と行きましたか。", "誰を行きましたか。", "誰の行きましたか。"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "と can connect two full sentences.",
          answer: false,
          explain: "と connects nouns. Sentences connect with から, が, or the te-form.",
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n5-u04-l03",
      title: "The subject marker が",
      titleJp: "〜が",
      grammarLabel: "〜が",
      summary: "が marks the subject — especially new or focused information. Also “but”.",
      body: {
        meaning:
          "が marks the grammatical SUBJECT. Unlike は (known topic), が presents NEW information or answers “who/what?”: 誰が来ましたか。田中さんが来ました。 At the start of a second sentence, が also means “but”.",
        formation: [
          { pattern: "Ｎ が Verb", note: "雨が降ります rain falls · 猫がいます there is a cat" },
          { pattern: "疑問詞 が …", note: "何がありますか / 誰がいますか — question words take が" },
          { pattern: "Sentence 1。Sentence 2 が。", note: "…, but …: 高いですが、買います" },
        ],
        usage: [
          "First mention → が; after that, the thing becomes は: 猫がいます。猫は白いです。",
          "With emotions/desires the felt thing takes が: 水が飲みたい, 犬が好きです (Unit 5).",
          "が as “but” joins sentences: 高いですが、おいしいです (It's expensive, but tasty).",
        ],
        pitfalls: [
          "Don't swap は/が randomly: 私は学生です (as for me, a student) vs 私が学生です (I'M the student).",
          "Question with が → answer with が; question with は → answer with は.",
        ],
        related: ["〜は (Unit 1)", "〜が好きです (Unit 5)", "があります (Unit 11)"],
      },
      examples: [
        { jp: "誰が来ましたか。", kana: "だれがきましたか。", en: "Who came?" },
        { jp: "田中さんが来ました。", kana: "たなかさんがきました。", en: "Mr. Tanaka came." },
        { jp: "雨が降っています。", kana: "あめがふっています。", en: "It's raining.", note: "〜ています is Unit 6." },
        { jp: "この店は高いですが、おいしいです。", kana: "このみせはたかいですが、おいしいです。", en: "This shop is expensive, but delicious." },
      ],
      practice: [
        {
          kind: "blank",
          text: "誰 ___ 行きますか。",
          blanks: ["が"],
          explain: "Question words (誰・何・どこ) take が, never は.",
        },
        {
          kind: "mcq",
          text: "Introducing a cat for the first time:",
          options: ["猫はいます。", "猫がいます。", "猫をいます。", "猫にいます。"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "「高いですが、買います。」 means…",
          options: ["It's expensive, so I'll buy it.", "It's expensive, but I'll buy it.", "I'll buy the expensive one.", "It was expensive and I bought it."],
          answer: 1,
        },
        {
          kind: "tf",
          text: "After first mentioning 猫がいます, you keep saying 猫が… every time.",
          answer: false,
          explain: "Once known, it becomes the topic: 猫は….",
        },
        {
          kind: "order",
          text: "Build: “Water is over there.” (answering 水がどこにありますか)",
          tokens: ["水", "は", "あそこに", "あります", "。"],
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n5-u04-l04",
      title: "Counting things",
      titleJp: "カウンター",
      grammarLabel: "〜つ・〜人・〜枚・〜本",
      summary: "Japanese counters: みっつ (things), 三人 (people), 三枚 (flat), 三本 (long).",
      body: {
        meaning:
          " Japanese counts objects with COUNTERS after the number: 一つ、二人、三枚 (flat things)、四本 (long things). The general counter 〜つ works for almost anything up to nine.",
        formation: [
          { pattern: "Number ＋ つ (general)", note: "一つ・二つ・三つ・四つ・五つ… いくつ (how many?)" },
          { pattern: "Number ＋ 人 (people)", note: "一人・二人・三人… 何人 (how many people?)" },
          { pattern: "Number ＋ 枚 (flat)", note: "一枚 (one ticket/photo/shirt)" },
          { pattern: "Number ＋ 本 (long)", note: "一本 (one pen/bottle/road)" },
        ],
        usage: [
          "Number + counter usually goes BEFORE the noun: 三冊の本, or after with を: 本を三冊買いました。",
          "り sound changes: 一人(ひとり)、二人(ふたり)、三人(さんにん).",
          "Irregular つ readings: 一つ(ひとつ) 二つ(ふたつ) 三つ(みっつ) 四つ(よっつ) 五つ(いつつ) 六つ(むっつ) 七つ(ななつ) 八つ(やっつ) 九つ(ここのつ) 十(とお).",
        ],
        pitfalls: [
          "本 (ほん) the counter is NOT the word for book (hon by coincidence).",
          "Small animals use 匹 (ひき): 猫が三匹. Birds use 羽 (わ).",
        ],
        related: ["〜が (numbers as subjects)", "いくら (shopping)"],
      },
      examples: [
        { jp: "りんごを三つ買いました。", kana: "りんごをみっつかいました。", en: "I bought three apples." },
        { jp: "教室に学生が五人います。", kana: "きょうしつにがくせいがごにんいます。", en: "There are five students in the classroom." },
        { jp: "切手を二枚ください。", kana: "きってをにまいください。", en: "Two stamps, please." },
        { jp: "ペンを一本貸してください。", kana: "ペンをいっぽんかしてください。", en: "Please lend me one pen.", note: "Sound change: いっぽん." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Count two people:",
          options: ["二つ", "二人", "二枚", "二本"],
          answer: 1,
          explain: "二人 (ふたり) — special reading.",
        },
        {
          kind: "mcq",
          text: "Which counter for three pens?",
          options: ["三枚", "三人", "三本", "三つ"],
          answer: 2,
          explain: "Long thin objects take 本: 三本 (さんぼん).",
        },
        {
          kind: "mcq",
          text: "How do you read 三つ?",
          options: ["さんつ", "みっつ", "さんこ", "みつ"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "教室に学生が六 ___ います。(six people)",
          blanks: ["人"],
        },
        {
          kind: "tf",
          text: "枚 counts long thin objects like pencils.",
          answer: false,
          explain: "枚 = flat things (tickets, paper, shirts). Long things take 本.",
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n5-u04-l05",
      title: "At the shop",
      titleJp: "お店で",
      grammarLabel: "いくら・〜をください",
      summary: "Prices with いくら・円, and the universal shop phrase 〜をください.",
      body: {
        meaning:
          "Ask a price with いくらですか (How much?). Prices use 円: 千円です. To simply ask for something, point and say それをください (That one, please) — works in every shop.",
        formation: [
          { pattern: "いくら ですか", note: "How much is it?" },
          { pattern: "Price + 円 です", note: "五百円です It's 500 yen." },
          { pattern: "それ／あれ を ください", note: "That one, please." },
        ],
        usage: [
          "Numbers with 円 have sound changes: 三百円 (さんびゃくえん), 六百円 (ろっぴゃくえん), 八百円 (はっぴゃくえん), 千円 (せんえん), 一万円 (いちまんえん).",
          "〜をください also orders food/drinks: 水をください.",
        ],
        pitfalls: [
          "いくら already means “how much (money)” — don't add なん: ✗ いくらなんですか.",
          "これ/それ/あれ are your best friends when you don't know the item's name.",
        ],
        related: ["これ・それ・あれ (Unit 1)", "counters"],
      },
      examples: [
        { jp: "この傘はいくらですか。", kana: "このかさはいくらですか。", en: "How much is this umbrella?" },
        { jp: "それは千五百円です。", kana: "それはせんごひゃくえんです。", en: "That is 1,500 yen." },
        { jp: "すみません、水をください。", kana: "すみません、みずをください。", en: "Excuse me, water please." },
        { jp: "全部でいくらですか。", kana: "ぜんぶでいくらですか。", en: "How much in total?" },
      ],
      practice: [
        {
          kind: "blank",
          text: "この靴は ___ ですか。(how much)",
          blanks: ["いくら"],
        },
        {
          kind: "mcq",
          text: "At a shop you don't know the item's name. You point and say:",
          options: ["これをください。", "これがください。", "これにください。", "これはください。"],
          answer: 0,
        },
        {
          kind: "order",
          text: "Build: “Excuse me, how much is this?”",
          tokens: ["すみません", "、", "これは", "いくら", "ですか"],
        },
        {
          kind: "mcq",
          text: "「全部で千円です。」 means…",
          options: ["It's 1,000 yen each.", "It's 1,000 yen in total.", "It was 1,000 yen.", "It's not 1,000 yen."],
          answer: 1,
        },
        {
          kind: "tf",
          text: "Prices are counted with 円 after the number.",
          answer: true,
        },
      ],
    },
  ],
}
