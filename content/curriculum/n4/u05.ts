import type { AuthoredUnit } from "../../types"

export const u05: AuthoredUnit = {
  level: "N4",
  order: 5,
  title: "Making and letting",
  titleJp: "しえき",
  description:
    "The causative させる/させる: making someone do something, letting them do it, and the differences between 〜させる, 〜てくれる and permission forms.",
  vocab: [
    "子供|こども",
    "親|おや",
    "部長|ぶちょう",
    "社員|しゃいん",
    "野菜|やさい",
    "野球|やきゅう",
    "部活|ぶかつ",
    "自由|じゆう",
    "残業|ざんぎょう",
    "休憩|きゅうけい",
    "旅行|りょこう",
    "行く|いく",
    "来る|くる",
    "帰る|かえる",
    "勉強|べんきょう",
  ],
  kanji: ["部", "長", "員", "球", "活", "由", "残", "業", "憩"],
  exam: [
    {
      kind: "mcq",
      text: "「母は私に野菜を食べさせました。」 means…",
      options: ["I made my mother eat vegetables.", "My mother made me eat vegetables.", "My mother ate vegetables for me.", "I ate vegetables with my mother."],
      answer: 1,
    },
    {
      kind: "mcq",
      text: "Causative of 待つ:",
      options: ["待たせる", "待てる", "待たれる", "待たい"],
      answer: 0,
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n4-u05-l01",
      title: "Making someone do: 〜させる",
      titleJp: "しえき",
      grammarLabel: "〜させる",
      summary: "Forcing action: 子供に野菜を食べさせます.",
      body: {
        meaning:
          "The causative means someone is MADE to do something: 母は私に野菜を食べさせました (Mum made me eat vegetables). る-verbs: る→させる. う-verbs: a-row + せる (飲む→飲ませる). する→させる, 来る→来させる.",
        formation: [
          { pattern: "る-verbs: る → させる", note: "食べる→食べさせる" },
          { pattern: "う-verbs: あ-row + せる", note: "飲む→飲ませる · 書く→書かせる · 待つ→待たせる" },
          { pattern: "Doer に ＋ Object を ＋ Causative", note: "person made to do it takes に" },
        ],
        usage: [
          "Force (嫌々) or permission/indulgence (好きにさせます) — context decides.",
          "Boss→employee: 部長は社員を残業させました.",
        ],
        pitfalls: [
          "The person MADE to act takes に (or を for verbs of motion like 行かせる).",
          "Don't confuse with passive られる or potential られる.",
        ],
        related: ["causative-passive (next lesson)", "passive (Unit 4)"],
      },
      examples: [
        { jp: "母は子供に野菜を食べさせました。", kana: "はははこどもにやさいをたべさせました。", en: "Mum made the child eat vegetables." },
        { jp: "部長は社員に残業をさせました。", kana: "ぶちょうはしゃいんにざんぎょうをさせました。", en: "The manager made the staff work overtime." },
        { jp: "医者は患者に薬を飲ませました。", kana: "いしゃはかんじゃにくすりをのませました。", en: "The doctor made the patient take medicine." },
        { jp: "子供を自由に遊ばせます。", kana: "こどもをじゆうにあそばせます。", en: "I let the children play freely." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Causative of 書く:",
          options: ["書ける", "書かれる", "書かせる", "書きたい"],
          answer: 2,
        },
        {
          kind: "match",
          text: "Match verbs with causatives:",
          pairs: [
            ["食べる", "食べさせる"],
            ["待つ", "待たせる"],
            ["する", "させる"],
            ["来る", "来させる"],
          ],
        },
        {
          kind: "order",
          text: "Build: “Mum made me eat vegetables.”",
          tokens: ["母", "は", "私", "に", "野菜", "を", "食べさせました", "。"],
        },
        {
          kind: "mcq",
          text: "The person made to act takes…",
          options: ["が", "を", "に", "から"],
          answer: 2,
        },
        {
          kind: "tf",
          text: "Causative can express both forcing and allowing.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n4-u05-l02",
      title: "Letting do: 〜させてください",
      titleJp: "〜させてください",
      grammarLabel: "〜させてください",
      summary: "Asking permission politely: 一言させてください (Allow me to say a word).",
      body: {
        meaning:
          "Causative + ください/もらえますか asks FOR permission to do something: 確認させてください (Please let me check). Softer than てもいいですか — used in business.",
        formation: [
          { pattern: "Causative て ＋ ください", note: "考えさせてください Let me think." },
          { pattern: "〜させて いただきます", note: "humble: I'll take the liberty of…" },
          { pattern: "〜させて もらえますか", note: "May I…?" },
        ],
        usage: [
          "Business emails/phone: 確認させていただきます.",
          "Demanding: 行かせて！(Let me go!) — casual/emotional.",
        ],
        pitfalls: [
          "させてください = I ask YOU to let ME — the doer is the speaker.",
          "〜させていただく is sometimes overused in business Japanese.",
        ],
        related: ["〜てもいいですか", "causative form"],
      },
      examples: [
        { jp: "ちょっと考えさせてください。", kana: "ちょっとかんがえさせてください。", en: "Please let me think for a moment." },
        { jp: "確認させていただきます。", kana: "かくにんさせていただきます。", en: "Allow me to confirm." },
        { jp: "今日は早く帰らせてください。", kana: "きょうははやくかえらせてください。", en: "Please let me leave early today." },
        { jp: "もう一度言わせてください。", kana: "もういちどいわせてください。", en: "Please let me say it once more." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “Please let me think.”",
          tokens: ["ちょっと", "考えさせて", "ください", "。"],
        },
        {
          kind: "blank",
          text: "確認させて___ます。(humble: allow me to confirm)",
          blanks: ["いただき"],
        },
        {
          kind: "mcq",
          text: "“Please let me leave early” →",
          options: ["早く帰りたいです。", "早く帰らせてください。", "早く帰られます。", "早く帰りましょう。"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "させてください requests…",
          options: ["an object", "permission to act", "a favour to someone", "help"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "〜させていただきます is common in business Japanese.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n4-u05-l03",
      title: "Made to do: causative-passive",
      titleJp: "しえきうけみ",
      grammarLabel: "〜させられる",
      summary: "Forced against your will: 残業させられました (I was made to work overtime).",
      body: {
        meaning:
          "Causative + passive 〜させられる means you were FORCED to do something against your will: 母に野菜を食べさせられました (I was made to eat vegetables).",
        formation: [
          { pattern: "る-verbs: る → させられる", note: "食べさせられる" },
          { pattern: "う-verbs: あ-row + せられる", note: "飲む→飲ませられる · 買う→買わせられる" },
          { pattern: "Forcer に ＋ させられる", note: "部長に残業させられた" },
        ],
        usage: [
          "Always negative/unwilling — complaints about bosses, parents, school.",
          "Shortened: 飲まされる (from 飲ませられる).",
        ],
        pitfalls: [
          "The victim is the SUBJECT: 私は部長に…させられました.",
          "✗ 母が食べさせられた (backwards) unless mum is the victim.",
        ],
        related: ["causative", "passive"],
      },
      examples: [
        { jp: "私は部長に残業させられました。", kana: "わたしはぶちょうにざんぎょうさせられました。", en: "I was made to work overtime by the manager." },
        { jp: "子供の時、ピアノを練習させられました。", kana: "こどものとき、ピアノをれんしゅうさせられました。", en: "As a child I was made to practise piano." },
        { jp: "高いお酒を飲まされました。", kana: "たかいおさけをのまされました。", en: "I was made to drink expensive liquor." },
        { jp: "每日子供に野菜を食べさせられています。", kana: "まいにちこどもにやさいをたべさせられています。", en: "Every day my child makes me cook vegetables." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I was made to work overtime.”",
          tokens: ["残業", "を", "させられました", "。"],
        },
        {
          kind: "mcq",
          text: "Causative-passive implies…",
          options: ["willingness", "unwillingness", "ability", "politeness"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "先生に宿題をたくさん___されました。(made to do)",
          blanks: ["さ"],
        },
        {
          kind: "mcq",
          text: "Short casual form of 飲ませられる:",
          options: ["飲める", "飲まされる", "飲ませる", "飲まれる"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "The forced person is the sentence subject.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n4-u05-l04",
      title: "Causative vs passive vs potential",
      titleJp: "みっつの られる・せる",
      grammarLabel: "れる・せる disambiguation",
      summary: "ら/せ row mastered: 書かれる, 書かせる, 書ける, 書かせられる.",
      body: {
        meaning:
          "The four forms of 読む: 読まれる (is read / passive), 読める (can read / potential), 読ませる (make read / causative), 読ませられる (be made to read). For る-verbs, られる covers passive + potential.",
        formation: [
          { pattern: "読まれる = passive", note: "被读" },
          { pattern: "読める = potential", note: "能读" },
          { pattern: "読ませる = causative", note: "让…读" },
          { pattern: "読ませられる = causative-passive", note: "被迫读" },
        ],
        usage: [
          "Identify by the particles and context: に-agent → passive; に-forced-person → causative.",
          "Practice the sound: ま-れ (passive), ま-せ (causative), め-る (potential).",
        ],
        pitfalls: [
          "食べられる: 3-way ambiguity (potential/passive) — context is king.",
          " causative of 来る is 来させる; passive 来られる covers passive/potential.",
        ],
        related: ["passive (Unit 4)", "causative (L1)"],
      },
      examples: [
        { jp: "この本は多くの人に読まれています。", kana: "このほんはおおくのひとによまれています。", en: "This book is read by many. (passive)" },
        { jp: "漢字が読めるようになりました。", kana: "かんじがよめるようになりました。", en: "I became able to read kanji. (potential)" },
        { jp: "先生は学生に本を読ませます。", kana: "せんせいはがくせいにほんをよませます。", en: "The teacher makes students read. (causative)" },
        { jp: "私は先生に長い本を読ませられました。", kana: "わたしはせんせいにながいほんをよませられました。", en: "I was made to read a long book. (causative-passive)" },
      ],
      practice: [
        {
          kind: "match",
          text: "Match forms of 飲む:",
          pairs: [
            ["飲まれる", "passive"],
            ["飲める", "potential"],
            ["飲ませる", "causative"],
            ["飲ませられる", "causative-passive"],
          ],
        },
        {
          kind: "mcq",
          text: "部長に残業させられた — which grammar?",
          options: ["passive", "potential", "causative-passive", "causative"],
          answer: 2,
        },
        {
          kind: "mcq",
          text: "Causative of 来る:",
          options: ["来られる", "来させる", "来れる", "来たれる"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "食べられる is ambiguous between…",
          options: ["causative and passive", "potential and passive", "causative and potential", "none"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "Particles and context disambiguate the られる forms.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n4-u05-l05",
      title: "〜てくれました vs 〜てもらいました vs 〜させられました",
      titleJp: "じゅじゅつの ひょうげん",
      grammarLabel: "favour expressions review",
      summary: "Choosing gratitude, receipt, complaint, and permission.",
      body: {
        meaning:
          "Review of favour systems: 教えてくれた (kindly taught ME), 教えてもらった (I got taught), 教えさせられた (was forced to teach!). Add permission: 教えさせてください (let me teach).",
        formation: [
          { pattern: "Gratitude → 〜てくれる／くださる", note: "kind act toward me" },
          { pattern: "Receipt → 〜てもらう／いただく", note: "I arranged it" },
          { pattern: "Complaint → 〜させられる", note: "forced" },
          { pattern: "Permission → 〜させてください", note: "let me" },
        ],
        usage: [
          "These four cover most social verb interactions in daily Japanese.",
          "Mix with tense: てくれました / てもらいました / させられました.",
        ],
        pitfalls: [
          "The viewpoint matters more than the facts — choose who you're thanking/blaming.",
        ],
        related: ["giving/receiving (Unit 2)", "causative (L1)"],
      },
      examples: [
        { jp: "友達が手伝ってくれました。", kana: "ともだちがてつだってくれました。", en: "My friend kindly helped me." },
        { jp: "友達に手伝ってもらいました。", kana: "ともだちにてつだってもらいました。", en: "I got my friend to help." },
        { jp: "上司に残りの仕事をさせられました。", kana: "じょうしにのこりのしごとをさせられました。", en: "I was made to do the rest of the work." },
        { jp: "私にやらせてください。", kana: "わたしにやらせてください。", en: "Please let me do it." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Gratitude for someone's help uses…",
          options: ["てもらった", "てくれた", "させられた", "させてくれた"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "“I was forced to sing” →",
          options: ["歌ってくれた", "歌いてもらった", "歌わされた", "歌わせて"],
          answer: 2,
        },
        {
          kind: "blank",
          text: "私に言わせて___ますか。(could you let me say)",
          blanks: ["もらい"],
        },
        {
          kind: "mcq",
          text: "Which shows YOUR arrangement of a favour?",
          options: ["てくれる", "てもらう", "させられる", "られる"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "These expressions carry feeling, not just facts.",
          answer: true,
        },
      ],
    },
  ],
}
