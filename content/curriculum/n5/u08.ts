import type { AuthoredUnit } from "../../types"

export const u08: AuthoredUnit = {
  level: "N5",
  order: 8,
  title: "Don't, must, may not",
  titleJp: "きんしと ぎむ",
  description:
    "The ない-form and its powers: polite refusals of action (ないでください), obligation (なければなりません), permission-not-needed (なくてもいいです), and doing two things at once (ながら).",
  vocab: [
    "入る|はいる",
    "出る|でる",
    "起きる|おきる",
    "寝る|ねる",
    "見る|みる",
    "食べる|たべる",
    "飲む|のむ",
    "話す|はなす",
    "忘れる|わすれる",
    "急ぐ|いそぐ",
    "手伝う|てつだう",
    "運転|うんてん",
    "写真|しゃしん",
    "宿題|しゅくだい",
    "次|つぎ",
    "薬|くすり",
    "心配|しんぱい",
    "信号|しんごう",
    "橋|はし",
    "交差点|こうさてん",
    "止める|とめる",
  ],
  kanji: ["忘", "急", "運", "転", "宿", "題", "次", "角", "信号"],
  exam: [
    {
      kind: "mcq",
      text: "「写真を撮らないでください。」 means…",
      options: ["Please take photos.", "Please don't take photos.", "May I take photos?", "You must take photos."],
      answer: 1,
    },
    {
      kind: "mcq",
      text: "「明日は来なくてもいいです。」 means…",
      options: ["You must come tomorrow.", "You don't have to come tomorrow.", "You can't come tomorrow.", "Come tomorrow, not today."],
      answer: 1,
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n5-u08-l01",
      title: "The ない-form",
      titleJp: "ナイフォーム",
      grammarLabel: "ない-form",
      summary: "Plain negative: 食べない, 飲まない, しない, 来ない — gateway to many patterns.",
      body: {
        meaning:
          "The ない-form is the plain present negative. る-verbs drop る add ない (食べない); う-verbs change the ending to the a-row + ない (飲む→飲まない). Irregulars: する→しない, 来る→来(こ)ない. ある→ない is the only ない-ending exception.",
        formation: [
          { pattern: "る-verbs: る → ない", note: "食べる→食べない · 見る→見ない" },
          { pattern: "う-verbs: う-row → あ-row + ない", note: "飲む→飲まない · 書く→書かない · 話す→話さない · 待つ→待たない" },
          { pattern: "する→しない / 来る→来ない", note: "irregular" },
        ],
        usage: [
          "Casual negatives: 今日は行かない。",
          "The ない-form is the base for ないでください, なければなりません, なくてもいいです.",
          "う-verbs ending in う become わ: 買う→買わない (not 買あない).",
        ],
        pitfalls: [
          "✗ 飲めない confuses with potential (can't drink) — plain negative is 飲まない; potential negative is 飲めない (N4).",
          "ある→ない (special), not あらない.",
        ],
        related: ["〜ます (polite negative)", "〜ないでください"],
      },
      examples: [
        { jp: "今日は学校に行かない。", kana: "きょうはがっこうにいかない。", en: "I'm not going to school today." },
        { jp: "私は肉を食べない。", kana: "わたしはにくをたべない。", en: "I don't eat meat." },
        { jp: "明日は早く起きない。", kana: "あしたははやくおきない。", en: "I won't get up early tomorrow." },
        { jp: "彼の名前を知らない。", kana: "かれのなまえをしらない。", en: "I don't know his name." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "ない-form of 飲む:",
          options: ["飲めない", "飲まない", "飲みない", "飲んない"],
          answer: 1,
          explain: "む → ま + ない.",
        },
        {
          kind: "mcq",
          text: "ない-form of 買う:",
          options: ["買いない", "買わない", "買えない", "買うない"],
          answer: 1,
          explain: "う-verbs become わ: 買わない.",
        },
        {
          kind: "mcq",
          text: "ない-form of する:",
          options: ["すない", "しらない", "しない", "さない"],
          answer: 2,
        },
        {
          kind: "match",
          text: "Match verbs with their ない-form:",
          pairs: [
            ["食べる", "食べない"],
            ["書く", "書かない"],
            ["待つ", "待たない"],
            ["来る", "来ない"],
          ],
        },
        {
          kind: "tf",
          text: "ある becomes あらない.",
          answer: false,
          explain: "ある → ない (special).",
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n5-u08-l02",
      title: "Please don't: 〜ないでください",
      titleJp: "〜ないでください",
      grammarLabel: "〜ないでください",
      summary: "Negative requests: ここでタバコを吸わないでください.",
      body: {
        meaning:
          "ない-form + でください asks someone NOT to do something: 写真を撮らないでください (Please don't take photos). Softer than てはいけません.",
        formation: [
          { pattern: "Verb ない ＋ でください", note: "忘れないでください Please don't forget." },
          { pattern: "〜ないで (casual)", note: "行かないで！ Don't go!" },
        ],
        usage: [
          "Signs, rules, pleas: 開けないでください (Please don't open).",
          "The で here means “with the state of not doing”.",
        ],
        pitfalls: [
          "It's ないで, NOT なくて: ✗ 食べなくてください.",
          "Don't confuse with 〜ないで (without doing) in other patterns — same shape, different use.",
        ],
        related: ["ない-form", "〜てはいけません (Unit 6)"],
      },
      examples: [
        { jp: "ここで写真を撮らないでください。", kana: "ここでしゃしんをとらないでください。", en: "Please don't take photos here." },
        { jp: "忘れないでください。", kana: "わすれないでください。", en: "Please don't forget." },
        { jp: "窓を開けないでください。寒いですから。", kana: "まどをあけないでください。さむいですから。", en: "Please don't open the window, because it's cold." },
        { jp: "心配しないで。", kana: "しんぱいしないで。", en: "Don't worry. (casual)" },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “Please don't take photos here.”",
          tokens: ["ここで", "写真", "を", "撮らないで", "ください", "。"],
        },
        {
          kind: "blank",
          text: "忘れ___ください。(please don't forget)",
          blanks: ["ないで"],
        },
        {
          kind: "mcq",
          text: "Which is a negative request?",
          options: ["開けてください。", "開けてはいけません。", "開けないでください。", "開けましょう。"],
          answer: 2,
        },
        {
          kind: "mcq",
          text: "ない-form + でください of 待つ:",
          options: ["待たないでください", "待ってないでください", "待ちないでください", "待くないでください"],
          answer: 0,
        },
        {
          kind: "tf",
          text: "「心配しないで。」 is a casual “Don't worry.”",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n5-u08-l03",
      title: "You must: 〜なければなりません",
      titleJp: "〜なければなりません",
      grammarLabel: "〜なければなりません",
      summary: "Obligation: 薬を飲まなければなりません (I must take medicine).",
      body: {
        meaning:
          "ない-form minus い + なければなりません expresses must/have to: 明日行かなければなりません (I must go tomorrow). Casual: 〜なきゃ / 〜ないと.",
        formation: [
          { pattern: "Verb ない → なければ なりません", note: "食べる→食べなければなりません" },
          { pattern: "〜なきゃいけない (casual)", note: "行かなきゃ gotta go" },
        ],
        usage: [
          "Literally “it cannot be that (I) don't do it” — double negative = obligation.",
          "Softer variant: 〜ないといけません (same meaning).",
        ],
        pitfalls: [
          "Despite the negative shape, the meaning is POSITIVE obligation.",
          "Past obligation (had to): 〜なければなりませんでした.",
        ],
        related: ["〜なくてもいいです (next lesson)", "ない-form"],
      },
      examples: [
        { jp: "私は毎日薬を飲まなければなりません。", kana: "わたしはまいにちくすりをのまなければなりません。", en: "I must take medicine every day." },
        { jp: "明日早く起きなければなりません。", kana: "あしたはやくおきなければなりません。", en: "I have to get up early tomorrow." },
        { jp: "宿題をしなければなりません。", kana: "しゅくだいをしなければなりません。", en: "I have to do homework." },
        { jp: "もう帰らなければなりません。", kana: "もうかえらなければなりません。", en: "I have to go home now." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I have to do homework.”",
          tokens: ["宿題", "を", "しなければ", "なりません", "。"],
        },
        {
          kind: "blank",
          text: "明日、東京へ行かな ___ なりません。(must go)",
          blanks: ["ければ"],
        },
        {
          kind: "mcq",
          text: "「薬を飲まなければなりません。」 means…",
          options: ["I mustn't take medicine.", "I have to take medicine.", "I can take medicine.", "I took medicine."],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Casual “gotta go”: 行か___。",
          options: ["なきゃ", "ないで", "なくて", "なければ"],
          answer: 0,
        },
        {
          kind: "tf",
          text: "〜なければなりません expresses prohibition.",
          answer: false,
          explain: "It's obligation (must); prohibition is てはいけません.",
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n5-u08-l04",
      title: "No need to: 〜なくてもいいです",
      titleJp: "〜なくてもいいです",
      grammarLabel: "〜なくてもいいです",
      summary: "It's fine not to: 明日は来なくてもいいです (You don't have to come tomorrow).",
      body: {
        meaning:
          "ない-form minus い + くてもいいです means “it's OK even if you don't” — i.e., you don't HAVE to: 書かなくてもいいです (You don't have to write it).",
        formation: [
          { pattern: "Verb ない → なくても いいです", note: "行かなくてもいいです" },
          { pattern: "〜なくても かまいません", note: "same, slightly more formal" },
        ],
        usage: [
          "Relieving someone of obligation — the opposite of なければなりません.",
          "Pair for permission structures: 〜てもいいです (may) vs 〜なくてもいいです (needn't).",
        ],
        pitfalls: [
          "Note the shape change: ない → なくて + も, not ないでも.",
          "Don't mix up with 〜てもいいですか (asking permission TO do).",
        ],
        related: ["〜なければなりません", "〜てもいいですか (Unit 6)"],
      },
      examples: [
        { jp: "明日は来なくてもいいです。", kana: "あしたはこなくてもいいです。", en: "You don't have to come tomorrow." },
        { jp: "お金を払わなくてもいいです。", kana: "おかねをはらわなくてもいいです。", en: "You don't have to pay." },
        { jp: "今日は勉強しなくてもいいですよ。", kana: "きょうはべんきょうしなくてもいいですよ。", en: "You don't have to study today." },
        { jp: "靴を脱がなくてもいいですか。", kana: "くつをぬがなくてもいいですか。", en: "Is it OK not to take off my shoes?" },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “You don't have to come tomorrow.”",
          tokens: ["明日", "は", "来なくて", "も", "いいです", "。"],
        },
        {
          kind: "blank",
          text: "今日は掃除し___もいいです。(don't have to clean)",
          blanks: ["なくて"],
        },
        {
          kind: "mcq",
          text: "「払わなくてもいいです。」 means…",
          options: ["You must pay.", "You mustn't pay.", "You don't have to pay.", "You already paid."],
          answer: 2,
        },
        {
          kind: "mcq",
          text: "Shape of 食べる + don't have to:",
          options: ["食べないてもいい", "食べなくてもいい", "食べてもいい", "食べなければいい"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "〜なくてもいいです is the opposite of 〜なければなりません.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n5-u08-l05",
      title: "While doing: 〜ながら",
      titleJp: "〜ながら",
      grammarLabel: "〜ながら",
      summary: "Two simultaneous actions: 音楽を聞きながら勉強します.",
      body: {
        meaning:
          "ます-stem + ながら means “while doing”: 音楽を聞きながら勉強します (I study while listening to music). The FIRST verb is the background action; the last verb is the main one.",
        formation: [
          { pattern: "Verb-ます stem ＋ ながら、Sentence", note: "食べながら、テレビを見ます。" },
          { pattern: "ＡながらＢ", note: "B is the main action" },
        ],
        usage: [
          "The same subject does both actions at the same time.",
          "Casual contraction: 音楽聞きながら。",
        ],
        pitfalls: [
          "Use the ます-stem (食べます → 食べ), NOT the te-form: ✗ 食べてながら.",
          "Different subjects can't share ながら (use 間に later for that).",
        ],
        related: ["〜ています", "te-form linking"],
      },
      examples: [
        { jp: "音楽を聞きながら勉強します。", kana: "おんがくをききながらべんきょうします。", en: "I study while listening to music." },
        { jp: "テレビを見ながらご飯を食べます。", kana: "テレビをみながらごはんをたべます。", en: "I eat while watching TV." },
        { jp: "歩きながら話しましょう。", kana: "あるきながらはなしましょう。", en: "Let's talk while walking." },
        { jp: "仕事をしながら日本語を勉強しています。", kana: "しごとをしながらにほんごをべんきょうしています。", en: "I'm studying Japanese while working." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I study while listening to music.”",
          tokens: ["音楽", "を", "聞き", "ながら", "勉強します", "。"],
        },
        {
          kind: "blank",
          text: "テレビを見 ___ 、ご飯を食べます。(while watching)",
          blanks: ["ながら"],
        },
        {
          kind: "mcq",
          text: "Which attaches ながら?",
          options: ["te-form", "た-form", "ます-stem", "dictionary form"],
          answer: 2,
        },
        {
          kind: "mcq",
          text: "In 「歌を歌ながら、料理します」-type sentences, the MAIN action is…",
          options: ["the first verb", "the last verb", "both equally", "neither"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "ながら requires the same subject for both actions.",
          answer: true,
        },
      ],
    },
  ],
}
