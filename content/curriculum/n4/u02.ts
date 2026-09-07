import type { AuthoredUnit } from "../../types"

export const u02: AuthoredUnit = {
  level: "N4",
  order: 2,
  title: "Giving and receiving",
  titleJp: "あげる・くれる・もらう",
  description:
    "The three-way favour system: あげる (I give), くれる (someone gives me), もらう (I receive) — with the te-form for favours: 教えてくれた, 手伝ってもらった.",
  vocab: [
    "友達|ともだち",
    "先生|せんせい",
    "妹|いもうと",
    "弟|おとうと",
    "隣|となり",
    "|プレゼント",
    "花|はな",
    "手紙|てがみ",
    "教える|おしえる",
    "手伝う|てつだう",
    "貸す|かす",
    "借りる|かりる",
    "送る|おくる",
    "紹介|しょうかい",
    "説明|せつめい",
    "連絡|れんらく",
    "案内|あんない",
    "電話|でんわ",
    "お礼|おれい",
    "招待|しょうたい",
  ],
  kanji: ["送", "紹", "介", "説", "明", "連", "絡", "案", "礼"],
  exam: [
    {
      kind: "mcq",
      text: "「田中さんが本を貸してくれました。」 means…",
      options: ["I lent Tanaka a book.", "Tanaka lent ME a book.", "I borrowed a book from Tanaka.", "Tanaka borrowed my book."],
      answer: 1,
      explain: "くれる = someone did a favour FOR ME.",
    },
    {
      kind: "mcq",
      text: "「先生に教えてもらいました。」 means…",
      options: ["I taught the teacher.", "I had the teacher teach me.", "The teacher gave me something.", "I taught instead of the teacher."],
      answer: 1,
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n4-u02-l01",
      title: "I give: 〜てあげる",
      titleJp: "〜てあげる",
      grammarLabel: "〜てあげる",
      summary: "Doing a favour for someone: 手伝ってあげました (I helped him).",
      body: {
        meaning:
          "te-form + あげます says YOU (or someone) does a favour for another person: 友達に本を送ってあげました (I sent my friend a book). The receiver takes に.",
        formation: [
          { pattern: "Receiver に ＋ Verb て ＋ あげる", note: "妹にプレゼントを買ってあげました" },
          { pattern: "Noun を あげる", note: "plain giving: 花をあげました" },
        ],
        usage: [
          "With family/friends. さしあげる is the humble version for superiors.",
          "やる is the rough/casual version (to pets/plants): 犬に餌をやる.",
        ],
        pitfalls: [
          "Using あげる about favours to your BOSS sounds condescending — use さしあげます.",
          "Receiver takes に: ✗ 友達を手伝って → 友達を手伝う is fine as a plain verb but あげる-pattern takes に for the beneficiary.",
        ],
        related: ["〜てくれる", "〜てもらう"],
      },
      examples: [
        { jp: "私は妹に日本語を教えてあげました。", kana: "わたしはいもうとににほんごをおしえてあげました。", en: "I taught my little sister Japanese." },
        { jp: "隣の人に傘を貸してあげました。", kana: "となりのひとにかさをかしてあげました。", en: "I lent my neighbour an umbrella." },
        { jp: "母の日に花をあげます。", kana: "ははのひにはなをあげます。", en: "I give flowers on Mother's Day." },
        { jp: "道を教えてあげましょうか。", kana: "みちをおしえてあげましょうか。", en: "Shall I show you the way?" },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I helped my friend.”",
          tokens: ["友達", "に", "手伝って", "あげました", "。"],
        },
        {
          kind: "blank",
          text: "妹にプレゼントを買って___ました。(did the favour)",
          blanks: ["あげ"],
        },
        {
          kind: "mcq",
          text: "Which particle marks the receiver in 〜てあげる?",
          options: ["を", "が", "に", "で"],
          answer: 2,
        },
        {
          kind: "mcq",
          text: "Humble “I gave (to my boss)” uses…",
          options: ["あげる", "やる", "さしあげる", "くれる"],
          answer: 2,
        },
        {
          kind: "tf",
          text: "やる can be used for giving food to a pet.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n4-u02-l02",
      title: "Someone does for me: 〜てくれる",
      titleJp: "〜てくれる",
      grammarLabel: "〜てくれる",
      summary: "Receiving a favour: 田中さんが教えてくれました (He taught ME).",
      body: {
        meaning:
          "te-form + くれます says someone did a favour for ME (or my in-group): 友達が手伝ってくれました (My friend helped me). The DOER takes が.",
        formation: [
          { pattern: "Doer が ＋ Verb て ＋ くれる", note: "母が作ってくれました Mum made (it) for me." },
          { pattern: "Noun を くれる", note: "彼がプレゼントをくれた" },
        ],
        usage: [
          "shows gratitude implicitly — very common in daily speech.",
          "Honorific for others' favours: くださる (先生が教えてくださいました).",
          "Negative: 行ってくれませんでした (didn't do me the favour).",
        ],
        pitfalls: [
          "くれる direction is fixed: favours toward ME. My giving TO others is あげる.",
          "✗ 田中さんに教えてくれた — doer takes が (田中さんが).",
        ],
        related: ["〜てあげる", "〜てもらう"],
      },
      examples: [
        { jp: "友達が傘を貸してくれました。", kana: "ともだちがかさをかしてくれました。", en: "My friend lent me an umbrella." },
        { jp: "先生が漢字を教えてくださいました。", kana: "せんせいがかんじをおしえてくださいました。", en: "The teacher kindly taught us kanji." },
        { jp: "姉が写真を送ってくれました。", kana: "あねがしゃしんをおくってくれました。", en: "My sister sent me photos." },
        { jp: "誰も手伝ってくれませんでした。", kana: "だれもてつだってくれませんでした。", en: "Nobody helped me." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “My friend lent me an umbrella.”",
          tokens: ["友達", "が", "傘", "を", "貸して", "くれました", "。"],
        },
        {
          kind: "mcq",
          text: "Doer in a 〜てくれる sentence takes…",
          options: ["を", "に", "が", "で"],
          answer: 2,
        },
        {
          kind: "mcq",
          text: "Polite version of くれる (teacher's favour):",
          options: ["さしあげる", "くださる", "やる", "もらう"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "母が晩ご飯を作って___ました。(made it for me)",
          blanks: ["くれ"],
        },
        {
          kind: "tf",
          text: "くれる implies the favour was for me or my side.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n4-u02-l03",
      title: "I receive: 〜てもらう",
      titleJp: "〜てもらう",
      grammarLabel: "〜てもらう",
      summary: "Getting a favour done: 先生に教えてもらいました.",
      body: {
        meaning:
          "te-form + もらいます says I RECEIVED a favour: 友達に本を貸してもらいました (I had my friend lend me a book / I got my friend to lend me a book). The favour-DOER takes に (or から).",
        formation: [
          { pattern: "Doer に ＋ Verb て ＋ もらう", note: "先生に教えてもらいました" },
          { pattern: "Noun を もらう", note: "プレゼントをもらいました received a present" },
        ],
        usage: [
          "From superiors, から sounds better: 先生から教えていただきました (humble).",
          "もらう frames it as MY request/arrangement — I got it done.",
        ],
        pitfalls: [
          "Doer takes に (person) — ✗ 先生が教えてもらいました means the TEACHER received.",
          "あげる/くれる look at the giver; もらう looks at the receiver's perspective.",
        ],
        related: ["〜てあげる", "〜てくれる", "〜ていただく (humble)"],
      },
      examples: [
        { jp: "私は先生に作文を直してもらいました。", kana: "わたしはせんせいにさくぶんをなおしてもらいました。", en: "I had the teacher correct my essay." },
        { jp: "友達にお金を貸してもらいました。", kana: "ともだちにおかねをかしてもらいました。", en: "I got my friend to lend me money." },
        { jp: "誕生日に時計をもらいました。", kana: "たんじょうびにとけいをもらいました。", en: "I received a watch for my birthday." },
        { jp: "隣の人に荷物を持ってもらいました。", kana: "となりのひとににもつをもってもらいました。", en: "I had the neighbour carry my luggage." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I had the teacher teach me.”",
          tokens: ["先生", "に", "教えて", "もらいました", "。"],
        },
        {
          kind: "mcq",
          text: "The favour-doer in 〜てもらう takes…",
          options: ["が", "を", "に", "も"],
          answer: 2,
        },
        {
          kind: "mcq",
          text: "「友達に傘を貸してもらいました。」 means…",
          options: ["I lent my friend an umbrella.", "My friend lent me an umbrella (by my request).", "My friend gave me an umbrella as a gift.", "I bought an umbrella."],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Receiving FROM a superior, prefer…",
          options: ["に", "から", "を", "が"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "もらう frames the event from the receiver's viewpoint.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n4-u02-l04",
      title: "くれます vs もらいます",
      titleJp: "くれる・もらう のちがい",
      grammarLabel: "くれる vs もらう",
      summary: "Same event, two viewpoints: 友達が教えてくれた = 友達に教えてもらった.",
      body: {
        meaning:
          "The SAME favour can be said two ways: 友達が貸してくれました (giver-focus) and 友達に貸してもらいました (receiver-focus). Choose based on who you're highlighting or thanking.",
        formation: [
          { pattern: "Giver が 〜てくれる", note: "giver is the subject" },
          { pattern: "Receiver が Giver に 〜てもらう", note: "receiver is the subject" },
        ],
        usage: [
          "Gratitude flows naturally with くれる: どうも、やってくれてありがとう.",
          "Requesting through もらう: 先生に聞いてもらいます (I'll get the teacher to ask).",
        ],
        pitfalls: [
          "Never mix the two frames: ✗ 友達が貸してもらいました (backwards).",
          "Both exist for あげる too: 私が送ってあげた = 彼に送ってもらった (from HIS view).",
        ],
        related: ["〜てあげる", "〜てくれる", "〜てもらう"],
      },
      examples: [
        { jp: "田中さんが直してくれました。", kana: "たなかさんがなおしてくれました。", en: "Tanaka fixed it for me." },
        { jp: "私は田中さんに直してもらいました。", kana: "わたしはたなかさんになおしてもらいました。", en: "I had Tanaka fix it." },
        { jp: "誰が作ってくれたの？", kana: "だれがつくってくれたの？", en: "Who made this (for me)?" },
        { jp: "母に送ってもらいました。", kana: "ははにおくってもらいました。", en: "I had my mother send it to me." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Same meaning as 「友達が教えてくれました」:",
          options: ["友達に教えてあげました。", "私は友達に教えてもらいました。", "友達を教えてもらいました。", "友達が教えてもらいました。"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Focus on the GIVER uses…",
          options: ["〜てもらう", "〜てくれる", "〜てあげる", "〜られる"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "私は母に迎えに来て___ました。(had her pick me up)",
          blanks: ["もらい"],
        },
        {
          kind: "mcq",
          text: "Which sentence is WRONG?",
          options: ["先生が教えてくださいました。", "先生に教えていただきました。", "先生に教えてくれました。", "先生が教えてくれました。"],
          answer: 2,
          explain: "くれる's doer must take が, not に.",
        },
        {
          kind: "tf",
          text: "くれる and もらう can describe the same event.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n4-u02-l05",
      title: "Thanking for favours",
      titleJp: "おれいの ことば",
      grammarLabel: "〜てくれてありがとう",
      summary: "Gratitude: 手伝ってくれてありがとう — plus asking for favours politely.",
      body: {
        meaning:
          "te-form + くれてありがとう thanks someone for a favour: 来てくれてありがとう (Thank you for coming). Polite: 〜てくださってありがとうございます. To request: 〜てもらえますか (Could you… for me?).",
        formation: [
          { pattern: "Verb てくれて ありがとう", note: "待ってくれてありがとう Thanks for waiting." },
          { pattern: "〜てもらえますか", note: "polite favour request" },
          { pattern: "〜ていただけますか", note: "humble request" },
        ],
        usage: [
          "Weddings/formal: お越しくださりありがとうございます.",
          "もらえますか/いただけますか are THE standard ways to ask favours politely.",
        ],
        pitfalls: [
          "ありがとう alone can sound casual; at work use ありがとうございます.",
          "Requesting: 〜てくれますか sounds demanding; prefer もらえますか.",
        ],
        related: ["〜てくれる", "〜てもらう"],
      },
      examples: [
        { jp: "手伝ってくれてありがとう。", kana: "てつだってくれてありがとう。", en: "Thanks for helping me." },
        { jp: "来てくださって、ありがとうございます。", kana: "きてくださって、ありがとうございます。", en: "Thank you for coming (formal)." },
        { jp: "少し手伝ってもらえますか。", kana: "すこしてつだってもらえますか。", en: "Could you help me a little?" },
        { jp: "もう一度説明していただけますか。", kana: "もういちどせつめいしていただけますか。", en: "Could you explain once more?" },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “Thanks for waiting.”",
          tokens: ["待って", "くれて", "ありがとう", "。"],
        },
        {
          kind: "mcq",
          text: "Most polite way to ask a favour:",
          options: ["手伝ってください。", "手伝ってもらえますか。", "手伝ってくれる？", "手伝いなさい。"],
          answer: 1,
          explain: "〜てもらえますか (or いただけますか) is the polite standard.",
        },
        {
          kind: "blank",
          text: "来て___さって、ありがとうございます。(humble come)",
          blanks: ["くだ"],
        },
        {
          kind: "mcq",
          text: "「説明していただけますか。」 is…",
          options: ["a demand", "a polite request", "a report", "a refusal"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "〜てもらえますか asks if the favour is receivable — a soft request.",
          answer: true,
        },
      ],
    },
  ],
}
