import type { AuthoredUnit } from "../../types"

export const u07: AuthoredUnit = {
  level: "N5",
  order: 7,
  title: "Have you ever?",
  titleJp: "けいけんのこと",
  description:
    "te-form for states and habits, the plain past た-form, talking about experiences with たことがあります, sequencing with てから, and asking for things with 〜をください.",
  vocab: [
    "住む|すむ",
    "知る|しる",
    "分かる|わかる",
    "貸す|かす",
    "借りる|かりる",
    "手伝う|てつだう",
    "|テニス",
    "|ゴルフ",
    "相撲|すもう",
    "散歩|さんぽ",
    "買い物|かいもの",
    "料理|りょうり",
    "洗う|あらう",
    "掃除|そうじ",
    "風呂|ふろ",
    "野菜|やさい",
    "果物|くだもの",
    "肉|にく",
    "卵|たまご",
    "牛乳|ぎゅうにゅう",
  ],
  kanji: ["知", "分", "貸", "借", "手", "散", "買", "料", "洗"],
  exam: [
    {
      kind: "mcq",
      text: "「日本に行ったことがありますか。」 asks…",
      options: ["Will you go to Japan?", "Have you ever been to Japan?", "Are you in Japan?", "Did you go to Japan last week?"],
      answer: 1,
      explain: "たことがあります = have the experience of…",
    },
    {
      kind: "order",
      text: "Build: “After I eat lunch, I'll study.”",
      tokens: ["昼ご飯", "を", "食べて", "から", "勉強します", "。"],
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n5-u07-l01",
      title: "States and habits: 〜ています (2)",
      titleJp: "〜ています（状態）",
      grammarLabel: "〜ています（2）",
      summary: "ています also describes where you LIVE, WORK, and ongoing states: 京都に住んでいます.",
      body: {
        meaning:
          "With verbs like 住む (live), 働く (work), 知る (know), and 持つ (hold), 〜ています describes a continuing STATE, not an action in progress: 東京に住んでいます (I live in Tokyo).",
        formation: [
          { pattern: "Place に 住んで います", note: "大阪に住んでいます I live in Osaka." },
          { pattern: "Place で 働いて います", note: "銀行で働いています I work at a bank." },
          { pattern: "〜を 知って います", note: "田中さんを知っています I know Mr. Tanaka." },
        ],
        usage: [
          "住む takes に (residence point); 働く takes で (place of activity).",
          "知っています is the normal way to say “I know” — 知ります alone sounds like “I'll come to know”.",
        ],
        pitfalls: [
          "✗ 東京に住みます for “I live in Tokyo” (sounds like “I'll move in”) — use 住んでいます.",
          "知る negative: 知りません or 全然知りません — never 知っていません.",
        ],
        related: ["〜ています (progressive)", "を (object)"],
      },
      examples: [
        { jp: "私は京都に住んでいます。", kana: "わたしはきょうとにすんでいます。", en: "I live in Kyoto." },
        { jp: "田中さんは病院で働いています。", kana: "たなかさんはびょういんではたらいています。", en: "Mr. Tanaka works at a hospital." },
        { jp: "あの有名な歌手を知っていますか。", kana: "あのゆうめいなかしゅをしっていますか。", en: "Do you know that famous singer?" },
        { jp: "いいえ、知りません。", kana: "いいえ、しりません。", en: "No, I don't know." },
      ],
      practice: [
        {
          kind: "blank",
          text: "私は東京 ___ 住んでいます。",
          blanks: ["に"],
        },
        {
          kind: "mcq",
          text: "“I work at a bank.” →",
          options: ["銀行に働いています。", "銀行で働いています。", "銀行を働いています。", "銀行が働いています。"],
          answer: 1,
          explain: "で marks the place of activity.",
        },
        {
          kind: "mcq",
          text: "How do you say “I know”?",
          options: ["知ります", "知っています", "知いています", "知りますている"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “Do you know Mr. Tanaka?”",
          tokens: ["田中さん", "を", "知って", "います", "か", "。"],
        },
        {
          kind: "tf",
          text: "住んでいます describes a continuing state, not a momentary action.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n5-u07-l02",
      title: "The plain past: 〜た",
      titleJp: "たフォーム",
      grammarLabel: "〜たフォーム",
      summary: "Casual past: 食べた, 飲んだ, 待った — same rules as the te-form.",
      body: {
        meaning:
          "The た-form is the te-form with て→た and で→だ: 食べて→食べた, 飲んで→飲んだ, 待って→待った. It's the plain (casual) past — used with friends, family, and inside grammar patterns.",
        formation: [
          { pattern: "て → た", note: "食べて→食べた · 書いて→書いた · 待って→待った" },
          { pattern: "で → だ", note: "飲んで→飲んだ · 遊んで→遊んだ · 泳いで→泳いだ" },
          { pattern: "Casual sentence: Ｎ は Ｏ を Verb た", note: "昨日ケーキを食べた。" },
        ],
        usage: [
          "With friends/family: 昨日映画を見た！",
          "Inside patterns: たことがある, たり〜たり, た後で — the た-form is everywhere.",
          "Plain negative past: 食べなかった (from ない-form, Unit 8).",
        ],
        pitfalls: [
          "Don't mix politeness mid-sentence: with a boss stick to ました.",
          "行った (いった) again — the irregular 行って→行った.",
        ],
        related: ["て-form", "たことがあります", "plain form (Unit 9)"],
      },
      examples: [
        { jp: "昨日、友達と遊んだ。", kana: "きのう、ともだちとあそんだ。", en: "I hung out with friends yesterday." },
        { jp: "朝ご飯、もう食べた？", kana: "あさごはん、もうたべた？", en: "Have you eaten breakfast yet?" },
        { jp: "この本、もう読んだ。", kana: "このほん、もうよんだ。", en: "I already read this book." },
        { jp: "傘を忘れた。", kana: "かさをわすれた。", en: "I forgot my umbrella." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "た-form of 飲む:",
          options: ["飲んだ", "飲った", "飲いた", "飲んだ"],
          answer: 0,
        },
        {
          kind: "mcq",
          text: "た-form of 書く:",
          options: ["書いた", "書った", "書いた", "書かた"],
          answer: 0,
          explain: "く→いた: 書いた.",
        },
        {
          kind: "order",
          text: "Build (casual): “I ate cake.”",
          tokens: ["ケーキ", "を", "食べた", "。"],
        },
        {
          kind: "mcq",
          text: "The た-form of 待つ is…",
          options: ["待た", "待ちた", "待った", "待いて"],
          answer: 2,
        },
        {
          kind: "tf",
          text: "The た-form follows the same sound rules as the te-form.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n5-u07-l03",
      title: "Have you ever…?",
      titleJp: "〜たことがあります",
      grammarLabel: "〜たことがあります",
      summary: "Life experiences: 日本に行ったことがあります (I've been to Japan).",
      body: {
        meaning:
          "た-form + ことがあります says you HAVE the EXPERIENCE of doing something (at least once in your life): 富士山に登ったことがあります (I've climbed Mt. Fuji). Negative: 〜たことがありません.",
        formation: [
          { pattern: "Verb た ＋ ことが あります", note: "行ったことがあります I've been (there)." },
          { pattern: "Verb た ＋ ことが ありません", note: "never have" },
          { pattern: "〜たこと が ありますか", note: "Have you ever…?" },
        ],
        usage: [
          "About life experiences, not recent events: ✗ 今朝食べたことがあります.",
          " Often with 一度も (not even once): 一度も行ったことがありません.",
        ],
        pitfalls: [
          "Use the た-form, not te-form: ✗ 行ってことがあります.",
          "It's こと (thing) + が + あります — literally “there is the experience of…”.",
        ],
        related: ["た-form", "があります (Unit 11)"],
      },
      examples: [
        { jp: "私は日本料理を作ったことがあります。", kana: "わたしはにほんりょうりをつくったことがあります。", en: "I have made Japanese food before." },
        { jp: "相撲を見たことがありますか。", kana: "すもうをみたことがありますか。", en: "Have you ever seen sumo?" },
        { jp: "いいえ、一度も見たことがありません。", kana: "いいえ、いちどもみたことがありません。", en: "No, I've never seen it." },
        { jp: "ゴルフをしたことがあります。", kana: "ゴルフをしたことがあります。", en: "I have played golf before." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “Have you ever been to Kyoto?”",
          tokens: ["京都", "に", "行った", "こと", "が", "ありますか"],
        },
        {
          kind: "blank",
          text: "寿司を食べた ___ がありません。(never eaten)",
          blanks: ["こと"],
        },
        {
          kind: "mcq",
          text: "Which form goes before ことがあります?",
          options: ["te-form", "た-form", "ます-form", "dictionary form"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "「一度も行ったことがありません。」 means…",
          options: ["I went once.", "I've never been.", "I want to go.", "I go often."],
          answer: 1,
        },
        {
          kind: "tf",
          text: "たことがあります is for life experiences, not this morning's breakfast.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n5-u07-l04",
      title: "After doing: 〜てから",
      titleJp: "〜てから",
      grammarLabel: "〜てから",
      summary: "Sequence events: 宿題をしてから、遊びます (After homework, I'll play).",
      body: {
        meaning:
          "te-form + から means “after doing A, then B” and stresses that A comes FIRST: 手を洗ってから、ご飯を食べます (I eat after washing my hands).",
        formation: [
          { pattern: "Verb て ＋ から、Sentence", note: "仕事が終わってから、映画を見ます。" },
          { pattern: "ＡてからＢ", note: "A first, then B" },
        ],
        usage: [
          "強調 the ORDER — B strictly follows A.",
          "Plain て form alone also links actions (softer order): 朝起きて、シャワーを浴びます.",
        ],
        pitfalls: [
          "から here is “after”, not “because” (Unit 10's から is because). Context tells.",
          "✗ 食べるてから → te-form: 食べてから.",
        ],
        related: ["て-form", "〜前に (Unit 10)"],
      },
      examples: [
        { jp: "手を洗ってから、ご飯を食べます。", kana: "てをあらってから、ごはんをたべます。", en: "After washing my hands, I eat." },
        { jp: "仕事が終わってから、飲みに行きます。", kana: "しごとがおわってから、のみにいきます。", en: "After work, I'll go for drinks." },
        { jp: "日本に来てから、たくさん勉強しました。", kana: "にほんにきてから、たくさんべんきょうしました。", en: "Since coming to Japan, I studied a lot." },
        { jp: "お風呂に入ってから、寝ます。", kana: "おふろにはいってから、ねます。", en: "I sleep after taking a bath." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “After work, I'll go shopping.”",
          tokens: ["仕事", "が", "終わって", "から", "買い物します", "。"],
        },
        {
          kind: "blank",
          text: "手を洗 ___ から、食べてください。",
          blanks: ["って"],
        },
        {
          kind: "mcq",
          text: "「食べてから、出かけます。」 means…",
          options: ["I'll go out before eating.", "After eating, I'll go out.", "I eat and go out together.", "I won't eat or go out."],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Which particle completes: 日本に来___、日本語を勉強しました。",
          options: ["って", "て", "た", "ない"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "〜てから puts B strictly after A.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n5-u07-l05",
      title: "Give me that: 〜をください",
      titleJp: "〜をください",
      grammarLabel: "〜をください",
      summary: "Requesting objects: これをください — plus 貸してください for borrowing.",
      body: {
        meaning:
          "Noun + をください asks someone to GIVE you something: リンゴを三つください. For borrowing, add the verb: ペンを貸してください (please LEND me a pen).",
        formation: [
          { pattern: "Noun を ください", note: "水をください Water, please." },
          { pattern: "Noun を 数量 ＋ ください", note: "切手を五枚ください five stamps please" },
          { pattern: "Noun を 貸して ください", note: "please lend me" },
        ],
        usage: [
          "〜をください works for objects AND menu items: ビールをください.",
          "借りる is “to borrow”, 貸す is “to lend” — direction matters: 貸してください = please lend ME.",
        ],
        pitfalls: [
          "✗ 水がください — keep を.",
          "「これをください」 vs これがほしいです — ください is a request to a person; ほしい is your desire.",
        ],
        related: ["counters (Unit 4)", "〜てください (Unit 6)"],
      },
      examples: [
        { jp: "すみません、これをください。", kana: "すみません、これをください。", en: "Excuse me, I'll take this one." },
        { jp: "リンゴを三つください。", kana: "りんごをみっつください。", en: "Three apples, please." },
        { jp: "その辞書を貸してください。", kana: "そのじしょをかしてください。", en: "Please lend me that dictionary." },
        { jp: "醤油を取ってください。", kana: "しょうゆをとってください。", en: "Please pass me the soy sauce.", note: "取って = fetch — te-request." },
      ],
      practice: [
        {
          kind: "blank",
          text: "牛乳 ___ ください。",
          blanks: ["を"],
        },
        {
          kind: "order",
          text: "Build: “Two stamps, please.”",
          tokens: ["切手", "を", "二枚", "ください", "。"],
        },
        {
          kind: "mcq",
          text: "Ask someone to LEND you a pen:",
          options: ["ペンを借ります。", "ペンを貸してください。", "ペンがほしいですか。", "ペンを買います。"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "「醤油を取ってください。」 means…",
          options: ["Please buy soy sauce.", "Please pass me the soy sauce.", "I took the soy sauce.", "There is no soy sauce."],
          answer: 1,
        },
        {
          kind: "tf",
          text: "「水をください」 works at restaurants and shops.",
          answer: true,
        },
      ],
    },
  ],
}
