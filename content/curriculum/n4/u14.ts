import type { AuthoredUnit } from "../../types"

export const u14: AuthoredUnit = {
  level: "N4",
  order: 14,
  title: "N4 consolidation",
  titleJp: "N4 のまとめ",
  description:
    "The change-of-state pair ようになる・ようにする, the giving-of-chance pattern 〜てくれない, and a mixed review of the trickiest N4 points.",
  vocab: [
    "理解|りかい",
    "|納豆",
    "漢字|かんじ",
    "冒険|ぼうけん",
    "夢|ゆめ",
    "翻訳|ほんやく",
    "早速|さっそく",
    "毎週|まいしゅう",
    "水泳|すいえい",
    "習う|ならう",
  ],
  kanji: ["理", "解", "納", "豆", "冒", "険", "夢", "訳", "泳"],
  exam: [
    {
      kind: "mcq",
      text: "「納豆が食べられるようになりました。」 means…",
      options: ["I made someone eat natto.", "I've become able to eat natto.", "I stopped eating natto.", "I want to eat natto."],
      answer: 1,
    },
    {
      kind: "mcq",
      text: "「毎日練習するようにしています。」 means…",
      options: ["I make a point of practising daily.", "I became able to practise.", "I was made to practise.", "I'll try practising once."],
      answer: 0,
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n4-u14-l01",
      title: "Become able: 〜ようになる",
      titleJp: "〜ようになる",
      grammarLabel: "〜ようになる",
      summary: "Change of ability/state: 話せるようになりました (I've become able to speak).",
      body: {
        meaning:
          "Potential/plain form + ようになる describes a CHANGE (usually gradual) in ability or habit: 日本語が話せるようになりました (I've become able to speak Japanese).",
        formation: [
          { pattern: "Potential ＋ ようになりました", note: "泳げるようになりました" },
          { pattern: "Plain ＋ ようになりました (habit change)", note: "朝早く起きるようになりました" },
          { pattern: "Negative: 〜ないように なりました", note: "stopped doing" },
        ],
        usage: [
          "Comparison across time: before vs now.",
          "Permanent turnarounds: 納豆が好きになりました (came to like).",
        ],
        pitfalls: [
          "Voluntary one-off change uses 〜ようにする (next lesson).",
          "✗ 行けるように行きました — don't mix with purpose ように.",
        ],
        related: ["potential form", "〜ようにする (next lesson)"],
      },
      examples: [
        { jp: "日本語が話せるようになりました。", kana: "にほんごがはなせるようになりました。", en: "I've become able to speak Japanese." },
        { jp: "納豆が食べられるようになりました。", kana: "なっとうがたべられるようになりました。", en: "I've become able to eat natto." },
        { jp: "最近、朝早く起きるようになりました。", kana: "さいきん、あさはやくおきるようになりました。", en: "Lately I've started waking up early." },
        { jp: "甘い物を食べないようになりました。", kana: "あまいものをたべないようになりました。", en: "I've stopped eating sweets." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I've become able to swim.”",
          tokens: ["泳げる", "ように", "なりました", "。"],
        },
        {
          kind: "blank",
          text: "漢字が読める___になりました。(became able to read)",
          blanks: ["ように"],
        },
        {
          kind: "mcq",
          text: "〜ようになる expresses…",
          options: ["one-off decision", "gradual change", "obligation", "hearsay"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "“I've stopped eating sweets” →",
          options: ["食べるようになりました", "食べないようになりました", "食べたいと思います", "食べさせられました"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "ようになる often pairs with the potential form.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n4-u14-l02",
      title: "Make an effort: 〜ようにする",
      titleJp: "〜ようにする",
      grammarLabel: "〜ようにする",
      summary: "Deliberate habit or effort: 毎日運動するようにしています.",
      body: {
        meaning:
          "〜ようにする means to SEE TO IT that you do (or don't do) something: 毎日運動するようにしています (I make a point of exercising daily). One-off: 明日六時に起きるようにします.",
        formation: [
          { pattern: "Verb plain ＋ ように しています", note: "ongoing effort" },
          { pattern: "Verb plain ＋ ように します", note: "one-off decision" },
          { pattern: "Negative: 〜ないように します", note: "avoid doing" },
        ],
        usage: [
          "Pairs with health/study resolutions.",
          "〜ように言う = tell someone to do (reporting instructions).",
        ],
        pitfalls: [
          "ようにする (effort) vs ようになる (change) — 急に is なり, effort is する.",
          "✗ 潜在形＋ようにします is odd — plain form is standard.",
        ],
        related: ["〜ようになる", "〜ことにする (N3)"],
      },
      examples: [
        { jp: "毎日運動するようにしています。", kana: "まいにちうんどうするようにしています。", en: "I make a point of exercising daily." },
        { jp: "甘い物を食べないようにしています。", kana: "あまいものをたべないようにしています。", en: "I try not to eat sweets." },
        { jp: "明日から早く起きるようにします。", kana: "あしたからはやくおきるようにします。", en: "From tomorrow I'll make sure to get up early." },
        { jp: "忘れないようにメモしました。", kana: "わすれないようにメモしました。", en: "I took notes so as not to forget." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I make a point of exercising daily.”",
          tokens: ["毎日", "運動する", "ように", "しています", "。"],
        },
        {
          kind: "mcq",
          text: "One-off decision →",
          options: ["ようにしている", "ようにする", "ようになった", "ようにしない"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "忘れない___メモします。(so as not to forget)",
          blanks: ["ように"],
        },
        {
          kind: "mcq",
          text: "ようにする vs ようになる:",
          options: ["effort vs change", "change vs effort", "both effort", "both change"],
          answer: 0,
        },
        {
          kind: "tf",
          text: "〜ないようにしています means you avoid something habitually.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n4-u14-l03",
      title: "Mixed review: particles and forms",
      titleJp: "N4 ふくしゅう（1）",
      grammarLabel: "N4 review 1",
      summary: "The trickiest N4 distinctions in one drill set.",
      body: {
        meaning:
          "Rapid-fire review: potential vs passive られる, causative vs causative-passive, conditionals たら・ば・と・なら, and giving/receiving verbs.",
        formation: [
          { pattern: "られる = potential OR passive", note: "context decides" },
          { pattern: "せる = causative", note: "に = forced person" },
          { pattern: "たら general / ば wish / と auto / なら topic", note: "conditionals" },
        ],
        usage: [
          "Read the WHOLE sentence before choosing the form.",
          "Particles are clues: に-agent → passive; に-forced → causative.",
        ],
        pitfalls: [
          "Mixing up くれる/もらう directions.",
          "Applying polite forms to yourself.",
        ],
        related: ["Units 1–13"],
      },
      examples: [
        { jp: "部長に名前を呼ばれました。", kana: "ぶちょうになまえをよばれました。", en: "I was called by name by the manager. (passive)" },
        { jp: "日本人の友達ができて、漢字が読めるようになりました。", kana: "にほんじんのともだちができて、かんじがよめるようになりました。", en: "I made Japanese friends and became able to read kanji." },
        { jp: "先生に作文を見ていただきました。", kana: "せんせいにさくぶんをみていただきました。", en: "I had the teacher look at my essay. (humble)" },
        { jp: "安ければ安いほど売れます。", kana: "やすければやすいほどうれます。", en: "The cheaper, the better it sells." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "「雨に降られて困りました。」 — the grammar is…",
          options: ["potential", "suffering passive", "causative", "honorific"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "「私にやらせてください。」 means…",
          options: ["Let me do it.", "You made me do it.", "I'll do it for you.", "I was made to do it."],
          answer: 0,
        },
        {
          kind: "mcq",
          text: "Automatic result conditional:",
          options: ["たら", "ば", "と", "なら"],
          answer: 2,
        },
        {
          kind: "mcq",
          text: "「先生が教えてくださいました。」 means…",
          options: ["I taught the teacher.", "The teacher taught me.", "I had the teacher teach.", "I'll teach the teacher."],
          answer: 1,
        },
        {
          kind: "tf",
          text: "参る is humble; いらっしゃる is honorific.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n4-u14-l04",
      title: "Mixed review: keigo and expressions",
      titleJp: "N4 ふくしゅう（2）",
      grammarLabel: "N4 review 2",
      summary: "Keigo triage, expressions of change, and common N4 adverbs in context.",
      body: {
        meaning:
          "Second review pass: keigo selection (uchi/soto), 〜ようになる/する, たばかり/ところ, and 〜すぎる/やすい/にくい in real sentences.",
        formation: [
          { pattern: "Uchi/soto triage", note: "in-group humble, out-group honorific" },
          { pattern: "Change: なる / effort: する", note: "ようになる vs ようにする" },
          { pattern: "Degree: すぎる・やすい・にくい", note: "stems" },
        ],
        usage: [
          "Politeness flows from relationships, not vocabulary lists.",
          " When in doubt, です/ます plus plain forms is safe.",
        ],
        pitfalls: [
          "Overusing keigo sounds distant.",
          " Wrong-direction favour verbs are the #1 N4 mistake.",
        ],
        related: ["Units 2, 12, 13"],
      },
      examples: [
        { jp: "弊社の部長が説明いたします。", kana: "へいしゃのぶちょうがせつめいいたします。", en: "Our manager will explain. (to client — humble)" },
        { jp: "宿題をしたばかりのところです。", kana: "しゅくだいをしたばかりのところです。", en: "I've just finished my homework." },
        { jp: "この漢字は書きにくいですね。", kana: "このかんじはかきにくいですね。", en: "This kanji is hard to write, isn't it." },
        { jp: "日本語を勉強し始めて三年になりました。", kana: "にほんごをべんきょうしはじめてさんねんになりました。", en: "It's been three years since I started studying Japanese." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "To a client about your company's president visiting:",
          options: ["社長がいらっしゃいます", "社長が伺います", "社長が参ります", "社長がおっしゃいます"],
          answer: 2,
        },
        {
          kind: "mcq",
          text: "“The soup is too hot to drink” →",
          options: ["熱すぎて飲めません", "熱くて飲みすぎません", "熱いくらい飲みます", "熱ければ飲みます"],
          answer: 0,
        },
        {
          kind: "mcq",
          text: "“I just bought it (subjective)” →",
          options: ["買ったところです", "買ったばかりです", "買ってしまいました", "買ってあります"],
          answer: 1,
        },
        {
          kind: "match",
          text: "Match keigo to direction:",
          pairs: [
            ["いらっしゃる", "honorific"],
            ["参る", "humble"],
            ["くださる", "honorific favour"],
            ["いただく", "humble favour"],
          ],
        },
        {
          kind: "tf",
          text: "〜てあります shows someone's deliberate result remains.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n4-u14-l05",
      title: "Level exam strategy",
      titleJp: "N4 レベル試験の準備",
      grammarLabel: "exam preparation",
      summary: "How the level exam works and what to revise before attempting it.",
      body: {
        meaning:
          "The N4 level exam draws 40 questions from all 14 unit exams — grammar, vocab, kanji. You need 75% to unlock N3. Review any unit below 100% first.",
        formation: [
          { pattern: "Revise: れる・せる family", note: "passive/causative/potential" },
          { pattern: "Revise: conditionals", note: "たら・ば・と・なら" },
          { pattern: "Revise: keigo", note: "special verbs + あげる/くれる/もらう" },
        ],
        usage: [
          "Unlimited attempts — use practice exams to find weak spots.",
          "Review SRS cards daily; they cover vocab and kanji automatically.",
        ],
        pitfalls: [
          "Rushing: read に/が carefully — they decide passive vs causative.",
          "Skipping furigana: use the settings to train without furigana support.",
        ],
        related: ["all N4 units"],
      },
      examples: [
        { jp: "この問題は簡単でしたか。", kana: "このもんだいはかんたんでしたか。", en: "Was this question easy?" },
        { jp: "复习してから、試験を受けます。", kana: "ふくしゅうしてから、しけんをうけます。", en: "I'll take the exam after reviewing.", note: "复习 = 復習" },
        { jp: "合格できるといいですね。", kana: "ごうかくできるといいですね。", en: "I hope you can pass." },
        { jp: "がんばってください！", kana: "がんばってください！", en: "Good luck!" },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Level exam pass mark:",
          options: ["50%", "60%", "75%", "100%"],
          answer: 2,
        },
        {
          kind: "mcq",
          text: "Number of questions:",
          options: ["15", "30", "40", "60"],
          answer: 2,
        },
        {
          kind: "mcq",
          text: "Best first revision target:",
          options: ["Units where practice score < 100%", "Only keigo", "Only kanji", "Nothing"],
          answer: 0,
        },
        {
          kind: "mcq",
          text: "Daily SRS review covers…",
          options: ["grammar only", "vocab and kanji", "exams", "reading"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "You can retake the level exam unlimited times.",
          answer: true,
        },
      ],
    },
  ],
}
