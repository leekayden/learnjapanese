import type { AuthoredUnit } from "../../types"

export const u09: AuthoredUnit = {
  level: "N5",
  order: 9,
  title: "Thinking and wanting",
  titleJp: "おもうこと・ほしいこと",
  description:
    "The plain (dictionary) form and what it unlocks: opinions with 〜と思います, quotes with 〜と言いました, uncertainty with 〜かもしれません・〜でしょう, and desire with 〜たいです.",
  vocab: [
    "思う|おもう",
    "言う|いう",
    "書く|かく",
    "読む|よむ",
    "食べる|たべる",
    "飲む|のむ",
    "行く|いく",
    "来る|くる",
    "見る|みる",
    "聞く|きく",
    "多分|たぶん",
    "京都|きょうと",
    "東京|とうきょう",
    "大阪|おおさか",
    "天気|てんき",
    "雨|あめ",
    "雪|ゆき",
    "携帯|けいたい",
    "音楽|おんがく",
  ],
  kanji: ["思", "言", "多", "分", "京", "都", "東", "天", "気"],
  exam: [
    {
      kind: "mcq",
      text: "「明日は雨が降るでしょう。」 means…",
      options: ["It will definitely rain.", "It will probably rain.", "It rained.", "Is it raining?"],
      answer: 1,
    },
    {
      kind: "blank",
      text: "日本へ行き___です。(I want to go)",
      blanks: ["たい"],
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n5-u09-l01",
      title: "The plain form",
      titleJp: "ふつうけい",
      grammarLabel: "プレインフォーム",
      summary: "Dictionary form 食べる・飲む・する — the base of all remaining grammar.",
      body: {
        meaning:
          "The plain form (dictionary form) is how verbs appear in dictionaries: 食べる, 飲む, する, 来る. It's used casually with friends and INSIDE grammar patterns like と思います, まえに, のが好き.",
        formation: [
          { pattern: "る-verbs: dictionary form = る-form", note: "食べる · 見る · 教える" },
          { pattern: "う-verbs: dictionary form ends in う-row", note: "飲む · 書く · 話す · 待つ · 買う" },
          { pattern: "Casual sentences use it directly", note: "明日行く。 I'll go tomorrow." },
        ],
        usage: [
          "Casual speech: plain form + casual particles (omit は/を often).",
          "Adjectives and nouns also have plain forms: 高い / 静かだ / 学生だ.",
        ],
        pitfalls: [
          "る-verbs vs う-verbs matter from now on: 食べる (る-verb) vs 飲む (う-verb) conjugate differently.",
          "帰る・走る・入る look like る-verbs but are う-verbs (learn them as vocabulary).",
        ],
        related: ["た-form", "ない-form", "〜と思います"],
      },
      examples: [
        { jp: "毎朝コーヒーを飲む。", kana: "まいあさコーヒーをのむ。", en: "I drink coffee every morning. (casual)" },
        { jp: "明日、東京へ行く。", kana: "あした、とうきょうへいく。", en: "I'm going to Tokyo tomorrow. (casual)" },
        { jp: "この漢字の読み方は難しい。", kana: "このかんじのよみかたはむずかしい。", en: "The reading of this kanji is difficult." },
        { jp: "日本語を勉強する。", kana: "にほんごをべんきょうする。", en: "I study Japanese. (casual)" },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Which is the dictionary form of 食べます?",
          options: ["食べ", "食べる", "食べた", "食べて"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Which is a う-verb (godan)?",
          options: ["食べる", "見る", "飲む", "教える"],
          answer: 2,
        },
        {
          kind: "mcq",
          text: "「明日行く。」 is…",
          options: ["polite", "casual past", "casual future/present", "a question"],
          answer: 2,
        },
        {
          kind: "match",
          text: "Match ます-forms with plain forms:",
          pairs: [
            ["飲みます", "飲む"],
            ["食べます", "食べる"],
            ["します", "する"],
            ["来ます", "来る"],
          ],
        },
        {
          kind: "tf",
          text: "帰る is a る-verb (ichidan).",
          answer: false,
          explain: "帰る conjugates like an う-verb: 帰ります、帰った、帰らない.",
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n5-u09-l02",
      title: "I think that…: 〜と思います",
      titleJp: "〜とおもいます",
      grammarLabel: "〜と思います",
      summary: "Opinions: 明日は雨が降ると思います (I think it'll rain tomorrow).",
      body: {
        meaning:
          "Plain form + と思います quotes your thought: “I think that …”. The quoted part uses the PLAIN form regardless of politeness: 田中さんは来ないと思います (I don't think he'll come).",
        formation: [
          { pattern: "Plain verb ＋ と思います", note: "高いと思います I think it's expensive." },
          { pattern: "Plain い-adj ＋ と思います", note: "面白いと思います" },
          { pattern: "Noun/な-adj ＋ だ ＋ と思います", note: "便利だと思います" },
        ],
        usage: [
          "Soften opinions: 〜んじゃないかと思います is even softer (later).",
          "Negative thoughts: 来ないと思います — ない stays inside the quote.",
        ],
        pitfalls: [
          "✗ 行きますと思います — the quote must be PLAIN: 行くと思います.",
          "Past thoughts: 〜と思いました (I thought).",
        ],
        related: ["plain form", "〜と言いました"],
      },
      examples: [
        { jp: "明日は雨が降ると思います。", kana: "あしたはあめがふるとおもいます。", en: "I think it will rain tomorrow." },
        { jp: "この店は高いと思います。", kana: "このみせはたかいとおもいます。", en: "I think this shop is expensive." },
        { jp: "日本語は便利だと思います。", kana: "にほんごはべんりだとおもいます。", en: "I think Japanese is useful." },
        { jp: "田中さんは来ないと思います。", kana: "たなかさんはこないとおもいます。", en: "I don't think Mr. Tanaka will come." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I think it will rain tomorrow.”",
          tokens: ["明日", "は", "雨", "が", "降る", "と思います"],
        },
        {
          kind: "blank",
          text: "この本は面白い ___ 思います。(I think)",
          blanks: ["と"],
        },
        {
          kind: "mcq",
          text: "Which is correct?",
          options: ["行きますと思います。", "行くと思います。", "行ってと思います。", "行ったと思いますか。"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "“I think it's convenient (便利):”",
          options: ["便利と思います", "便利だと思います", "便利なと思います", "便利がと思います"],
          answer: 1,
          explain: "な-adjectives take だ inside the quote.",
        },
        {
          kind: "tf",
          text: "In 〜と思います, the quoted part keeps its own tense.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n5-u09-l03",
      title: "He said…: 〜と言いました",
      titleJp: "〜といいました",
      grammarLabel: "〜と言いました",
      summary: "Quoting speech: 田中さんは「行く」と言いました.",
      body: {
        meaning:
          "Quote what someone said with plain form + と言いました: 田中さんは明日来ると言いました (Tanaka said he'd come tomorrow). Direct quotes use 「」 brackets.",
        formation: [
          { pattern: "Plain sentence ＋ と言いました", note: "疲れたと言いました He said he's tired." },
          { pattern: "「…」と言いました", note: "direct quote" },
          { pattern: "〜と 言っていました", note: "he said (he's saying)" },
        ],
        usage: [
          "Indirect quotes drop pronouns: Japanese context fills them in.",
          "言う becomes って casually: 行くって！ (He says he's going!)",
        ],
        pitfalls: [
          "Again — plain form inside the quote: ✗ 来ますと言いました.",
          "〜と言いました vs 〜と言っていました: the latter for ongoing/repeated reporting.",
        ],
        related: ["〜と思います", "plain form"],
      },
      examples: [
        { jp: "田中さんは明日来ると言いました。", kana: "たなかさんはあしたくるといいました。", en: "Mr. Tanaka said he would come tomorrow." },
        { jp: "母は「早く寝なさい」と言いました。", kana: "ははは「はやくねなさい」といいました。", en: "Mother said, \"Go to bed early!\"" },
        { jp: "彼は日本語が難しいと言っていました。", kana: "かれはにほんごがむずかしいといっていました。", en: "He was saying Japanese is difficult." },
        { jp: "先生はテストがあると言いました。", kana: "せんせいはテストがあるといいました。", en: "The teacher said there's a test." },
      ],
      practice: [
        {
          kind: "blank",
          text: "田中さんは来る ___ 言いました。",
          blanks: ["と"],
        },
        {
          kind: "order",
          text: "Build: “The teacher said there's a test.”",
          tokens: ["先生", "は", "テスト", "が", "ある", "と言いました"],
        },
        {
          kind: "mcq",
          text: "Quote form before と言いました:",
          options: ["ます-form", "te-form", "plain form", "た-form only"],
          answer: 2,
        },
        {
          kind: "mcq",
          text: "「疲れたと言いました。」 means…",
          options: ["I said I'm tired.", "He said he was tired.", "I'm tired, he said.", "He looks tired."],
          answer: 1,
        },
        {
          kind: "tf",
          text: "Direct quotes use 「」 brackets in Japanese.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n5-u09-l04",
      title: "Maybe, probably",
      titleJp: "〜かもしれません・〜でしょう",
      grammarLabel: "〜かもしれません",
      summary: "Uncertainty: 降るかもしれません (might fall), 降るでしょう (probably).",
      body: {
        meaning:
          "Plain form + かもしれません means “might/maybe” (30–70% sure). でしょう means “probably”, ~80%. Both attach to plain forms; かもしれません also follows nouns and な-adjectives directly.",
        formation: [
          { pattern: "Plain ＋ かもしれません", note: "行くかもしれません I might go." },
          { pattern: "Plain ＋ でしょう", note: "高いでしょう It's probably expensive." },
          { pattern: "Noun ＋ かもしれません", note: "雨かもしれません It might be rain." },
        ],
        usage: [
          "Certainty ladder: でしょう > かもしれません > 分かりません.",
          "でしょう also seeks confirmation with rising tone: いいでしょう？",
        ],
        pitfalls: [
          "✗ 行くますかもしれません — plain form only.",
          "でしょう can sound dismissive in arguments; かもしれません is safer guessing.",
        ],
        related: ["plain form", "〜と思います"],
      },
      examples: [
        { jp: "明日は雨が降るかもしれません。", kana: "あしたはあめがふるかもしれません。", en: "It might rain tomorrow." },
        { jp: "田中さんは来ないかもしれません。", kana: "たなかさんはこないかもしれません。", en: "Mr. Tanaka might not come." },
        { jp: "この本は面白いでしょう。", kana: "このほんはおもしろいでしょう。", en: "This book is probably interesting." },
        { jp: "あの店は高いでしょう。", kana: "あのみせはたかいでしょう。", en: "That shop is probably expensive." },
      ],
      practice: [
        {
          kind: "blank",
          text: "彼は来___かもしれません。(might come)",
          blanks: ["る"],
        },
        {
          kind: "mcq",
          text: "Which expresses more certainty?",
          options: ["かもしれません", "でしょう", "分かりません", "たぶん違います"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “It might rain tomorrow.”",
          tokens: ["明日", "は", "雨", "が", "降る", "かもしれません"],
        },
        {
          kind: "mcq",
          text: "“He might not come” →",
          options: ["来るかもしれません。", "来ないかもしれません。", "来ましょう。", "来たでしょう。"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "かもしれません can follow nouns directly.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n5-u09-l05",
      title: "Wanting to do: 〜たいです",
      titleJp: "〜たいです",
      grammarLabel: "〜たいです",
      summary: " Desire: 日本へ行きたいです (I want to go to Japan).",
      body: {
        meaning:
          "Verb ます-stem + たいです expresses what YOU want to do: 水が飲みたい (I want to drink water). It conjugates like an い-adjective: 飲みたくない, 飲みたかった.",
        formation: [
          { pattern: "ます-stem ＋ たいです", note: "食べたいです I want to eat." },
          { pattern: "〜たくないです", note: "don't want to" },
          { pattern: "〜たかったです", note: "wanted to" },
        ],
        usage: [
          "The object can take を or が: 水を飲みたい / 水が飲みたい (が feels more emotional focus).",
          "Asking others: 何をしたいですか is fine; asserting others' wants directly is avoided.",
        ],
        pitfalls: [
          "たい is for ACTIONS; ほしい is for THINGS (Unit 5).",
          "たい conjugates like い-adjectives: ✗ 食べたないです → 食べたくないです.",
        ],
        related: ["〜がほしいです (Unit 5)", "plain form"],
      },
      examples: [
        { jp: "日本へ行きたいです。", kana: "にほんへいきたいです。", en: "I want to go to Japan." },
        { jp: "水が飲みたいです。", kana: "みずがのみたいです。", en: "I want to drink water." },
        { jp: "今日は何もしたくないです。", kana: "きょうはなにもしたくないです。", en: "I don't want to do anything today." },
        { jp: "前から会いたかったです。", kana: "まえからあいたかったです。", en: "I've wanted to meet you for a long time." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I want to go to Japan.”",
          tokens: ["日本", "へ", "行き", "たいです", "。"],
        },
        {
          kind: "blank",
          text: "ケーキを食べ___です。(want to eat)",
          blanks: ["たい"],
        },
        {
          kind: "mcq",
          text: "“I don't want to drink” →",
          options: ["飲みたくないです。", "飲みたいじゃありません。", "飲みほしくないです。", "飲んだくないです。"],
          answer: 0,
        },
        {
          kind: "mcq",
          text: "たい attaches to…",
          options: ["dictionary form", "ます-stem", "te-form", "た-form"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "Use ほしい for “want to eat”. ",
          answer: false,
          explain: "Actions take たい; ほしい is for objects.",
        },
      ],
    },
  ],
}
