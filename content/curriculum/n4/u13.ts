import type { AuthoredUnit } from "../../types"

export const u13: AuthoredUnit = {
  level: "N4",
  order: 13,
  title: "Humble Japanese: 謙譲語",
  titleJp: "けんじょうご",
  description:
    "Lowering yourself: 参る・申す・いただく・拝見する, the お〜する pattern, and humble favours with 〜ていただく・〜てさしあげる.",
  vocab: [
    "会社|かいしゃ",
    "上司|じょうし",
    "資料|しりょう",
    "送る|おくる",
    "乗る|のる",
    "訪ねる|たずねる",
    "伺う|うかがう",
    "拝見|はいけん",
    "存じる|ぞんじる",
    "承知|しょうち",
    "案内|あんない",
  ],
  kanji: ["司", "拝", "存", "承", "自", "宅", "伺", "謙", "譲"],
  exam: [
    {
      kind: "mcq",
      text: "About YOURSELF going to the boss's office:",
      options: ["行きます", "いらっしゃいます", "参ります", "行かれます"],
      answer: 2,
      explain: "行く/来る → 参る (humble, for your own movement).",
    },
    {
      kind: "mcq",
      text: "Humble of 見る (I will look at it):",
      options: ["ご覧になります", "拝見します", "見せます", "お見しします"],
      answer: 1,
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n4-u13-l01",
      title: "Special humble verbs",
      titleJp: "とくべつな けんじょうご",
      grammarLabel: "参る・申す・いただく",
      summary: "参る (go), 申す (say), いただく (eat/receive), 拝見する (look), おる (be).",
      body: {
        meaning:
          "Humble verbs LOWER YOUR OWN actions when speaking to a superior: 行く/来る → 参る, 言う → 申す, 食べる/飲む/もらう → いただく, 見る → 拝見する, いる → おる.",
        formation: [
          { pattern: "行く・来る → 参る", note: "八時に参ります。" },
          { pattern: "言う → 申す", note: "田中と申します。 (I'm called Tanaka)" },
          { pattern: "食べる・飲む・もらう → いただく", note: "お薬をいただきます。" },
          { pattern: "見る → 拝見する", note: "資料を拝見しました。" },
          { pattern: "いる → おる", note: "十時までおります。" },
        ],
        usage: [
          "Self-introductions: 〜と申します is the standard.",
          "Used toward customers and superiors — even about your in-group when talking to outsiders.",
        ],
        pitfalls: [
          "Humble forms are about YOUR side's actions — never about the listener's.",
          "いただく vs くださる: I receive (humble) vs they kindly give (honorific).",
        ],
        related: ["honorific verbs (Unit 12)", "お〜する (next lesson)"],
      },
      examples: [
        { jp: "私は田中と申します。", kana: "わたしはたなかともうします。", en: "My name is Tanaka." },
        { jp: "明日十時に参ります。", kana: "あしたじゅうじにまいります。", en: "I'll come at ten tomorrow." },
        { jp: "お話を伺いたいのですが。", kana: "おはなしをうかがいたいのですが。", en: "I'd like to hear what you have to say.", note: "伺う = humble 聞く/訪ねる" },
        { jp: "社長の鞄をお持ちしました。", kana: "しゃちょうのかばんをおもちしました。", en: "I carried the president's bag." },
      ],
      practice: [
        {
          kind: "match",
          text: "Match plain verbs with humble forms:",
          pairs: [
            ["行く", "参る"],
            ["言う", "申す"],
            ["見る", "拝見する"],
            ["いる", "おる"],
          ],
        },
        {
          kind: "mcq",
          text: "Self-introduction: 田中___。",
          options: ["と言います", "と申します", "とおっしゃいます", "といらっしゃいます"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “I'll come at ten tomorrow.” (to a client)",
          tokens: ["明日", "十時", "に", "参ります", "。"],
        },
        {
          kind: "mcq",
          text: "Humble of 食べる:",
          options: ["召し上がります", "いただきます", "食べられます", "食べさせます"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "Humble forms raise the listener by lowering yourself.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n4-u13-l02",
      title: "お〜する",
      titleJp: "お〜する",
      grammarLabel: "お〜する",
      summary: "Generic humble: お持ちします (I'll carry it for you), ご説明します.",
      body: {
        meaning:
          "お + ます-stem + します lowers your action done FOR the listener: お待ちします (I'll wait for you). Suru-nouns take ご: ご説明します.",
        formation: [
          { pattern: "お ＋ ます-stem ＋ します", note: "お持ちします · お送りします" },
          { pattern: "ご ＋ noun ＋ します", note: "ご案内します · ご紹介します" },
          { pattern: "更高: お〜させていただきます", note: "business level" },
        ],
        usage: [
          "Service industries live on this pattern.",
          "Implies the action benefits the listener.",
        ],
        pitfalls: [
          "Suru-nouns take ご, not お (✗ お案内します → ご案内します).",
          "お〜します about someone ELSE's action is wrong — that's honorific territory.",
        ],
        related: ["お〜になる (Unit 12)", "special humble verbs"],
      },
      examples: [
        { jp: "荷物をお持ちします。", kana: "にもつをおもちします。", en: "I'll carry your luggage." },
        { jp: "後でメールをお送りします。", kana: "あとでメールをおおくりします。", en: "I'll send you an email later." },
        { jp: "工場をご案内します。", kana: "こうじょうをごあんないします。", en: "I'll show you around the factory." },
        { jp: "お席までご案内いたします。", kana: "おせきまでごあんないいたします。", en: "I'll escort you to your seat." },
      ],
      practice: [
        {
          kind: "blank",
          text: "荷物をお___します。(carry)",
          blanks: ["持ち"],
        },
        {
          kind: "mcq",
          text: "“I'll show you around” (humble):",
          options: ["お案内します", "ご案内します", "案内されます", "お案内になります"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "お〜します describes…",
          options: ["the listener's action", "your own action for the listener", "a third party", "past events"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “I'll send you an email later.”",
          tokens: ["後で", "メール", "を", "お送り", "します", "。"],
        },
        {
          kind: "tf",
          text: "Suru-nouns pair with ご in this pattern.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n4-u13-l03",
      title: "Humble favours: 〜ていただく",
      titleJp: "〜ていただく",
      grammarLabel: "〜ていただく",
      summary: "Receiving favours humbly: 確認していただきました (had them confirm).",
      body: {
        meaning:
          "て-form + いただく is the humble てもらう: 先生に見ていただきました (I had the teacher look at it). Its request form 〜ていただけますか is the standard polite ask.",
        formation: [
          { pattern: "Doer に ＋ Verb て ＋ いただく", note: "部長に許していただきました" },
          { pattern: "〜て いただけますか", note: "Could you kindly…?" },
          { pattern: "〜て くださいませんか", note: "equally polite" },
        ],
        usage: [
          "Giving favours humbly: 〜てさしあげる (rare in speech — formal/written).",
          "つ…ていただき、ありがとうございます (thanks in emails).",
        ],
        pitfalls: [
          "Doer takes に: ✗ 先生が見ていただきました.",
          "さしあげる about favours to guests can sound presumptuous — ください forms preferred.",
        ],
        related: ["〜てもらう (Unit 2)", "〜てくださる"],
      },
      examples: [
        { jp: "先生に作文を直していただきました。", kana: "せんせいにさくぶんをなおしていただきました。", en: "I had the teacher correct my essay." },
        { jp: "もう一度ご説明いただけますか。", kana: "もういちどごせつめいいただけますか。", en: "Could you explain it once more?" },
        { jp: "少々お待ちいただけますでしょうか。", kana: "しょうしょうおまちいただけますでしょうか。", en: "Would you mind waiting a moment?" },
        { jp: "お越しいただき、ありがとうございます。", kana: "おこしいただき、ありがとうございます。", en: "Thank you for coming." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “Could you wait a moment?” (very polite)",
          tokens: ["少々", "お待ち", "いただけます", "か", "。"],
        },
        {
          kind: "mcq",
          text: "Humble equivalent of 〜てもらう:",
          options: ["〜てあげる", "〜ていただく", "〜てくれる", "〜てくださる"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "部長に許して___ました。(had him permit — humble)",
          blanks: ["いただき"],
        },
        {
          kind: "mcq",
          text: "The favour-doer takes…",
          options: ["が", "を", "に", "で"],
          answer: 2,
        },
        {
          kind: "tf",
          text: "〜ていただけますか is a very polite request form.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n4-u13-l04",
      title: "〜てくださる",
      titleJp: "〜てくださる",
      grammarLabel: "〜てくださる",
      summary: "Honorific favour: 説明してくださいました (they kindly explained).",
      body: {
        meaning:
          "て-form + くださる is the honorific てくれる: 先生が説明してくださいました (The teacher kindly explained). Request: 〜てくださいませんか.",
        formation: [
          { pattern: "Doer が ＋ Verb て ＋ くださる", note: "送ってくださった" },
          { pattern: "ます: くださいます", note: "irregular" },
          { pattern: "Imperative-ish: 〜てくださいませんか", note: "polite request" },
        ],
        usage: [
          "Gratitude: ご参加くださってありがとうございます.",
          "Announcements: ご協力ください.",
        ],
        pitfalls: [
          "くださいます (not くださります).",
          "Doer takes が — the honourable one is the subject.",
        ],
        related: ["〜てくれる", "〜ていただく"],
      },
      examples: [
        { jp: "部長が資料を送ってくださいました。", kana: "ぶちょうがしりょうをおくってくださいました。", en: "The manager kindly sent me the materials." },
        { jp: "先生が推薦状を書いてくださいました。", kana: "せんせいがすいせんじょうをかいてくださいました。", en: "The teacher kindly wrote a recommendation." },
        { jp: "ご協力くださいませんか。", kana: "ごきょうりょくくださいませんか。", en: "Would you kindly cooperate?" },
        { jp: "お越しくださって、ありがとうございます。", kana: "おこしくださって、ありがとうございます。", en: "Thank you for coming." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Honorific equivalent of 〜てくれる:",
          options: ["〜てあげる", "〜ていただく", "〜てくださる", "〜てさしあげる"],
          answer: 2,
        },
        {
          kind: "mcq",
          text: "ます-form of くださる:",
          options: ["くださるます", "くださいます", "くださります", "くだされます"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “The manager kindly sent the materials.”",
          tokens: ["部長", "が", "資料", "を", "送って", "くださいました", "。"],
        },
        {
          kind: "blank",
          text: "ご参加___さって、ありがとうございます。",
          blanks: ["くだ"],
        },
        {
          kind: "tf",
          text: "くださる takes が for the favour-doer.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n4-u13-l05",
      title: "Keigo triage",
      titleJp: "けいごの つかいわけ",
      grammarLabel: "尊厳 vs 謙譲 triage",
      summary: "Who does the action decides the form — a complete decision table.",
      body: {
        meaning:
          "One action, three presentations: 先生が来た (plain, to family), 先生がいらっしゃった (honorific — elevating the teacher), 私が参りました (humble — lowering me toward the listener).",
        formation: [
          { pattern: "About superior → honorific", note: "社長がおっしゃいました" },
          { pattern: "About yourself to superior → humble", note: "私が申し上げました" },
          { pattern: "Neutral → です/ます", note: "default politeness" },
        ],
        usage: [
          "Uchi/soto (in-group/out-group) decides: to outsiders, your BOSS is humble (うちの部長が申します).",
          "Never双重: no humble + honorific on the same verb.",
        ],
        pitfalls: [
          "Talking to a client ABOUT your boss → humble forms for your boss! (in-group rule)",
          "Honorifics for the OUT-group only.",
        ],
        related: ["honorific verbs (Unit 12)", "humble verbs (L1)"],
      },
      examples: [
        { jp: "社長がいらっしゃいました。", kana: "しゃちょうがいらっしゃいました。", en: "The president arrived. (to colleagues)" },
        { jp: "部長が明日参ります。", kana: "ぶちょうがあしたまいります。", en: "Our manager will come tomorrow. (to a client — humble for in-group!)" },
        { jp: "私がご案内いたします。", kana: "わたしがごあんないいたします。", en: "I'll show you around. (humble)" },
        { jp: "先生がおっしゃいました。", kana: "せんせいがおっしゃいました。", en: "The teacher said. (honorific)" },
      ],
      practice: [
        {
          kind: "mcq",
          text: "To a client, about YOUR manager's visit:",
          options: ["部長がいらっしゃいます", "部長が参ります", "部長が来られます", "部長がおっしゃいます"],
          answer: 1,
          explain: "In-group members are humbled toward outsiders.",
        },
        {
          kind: "mcq",
          text: "To colleagues, about the president:",
          options: ["社長が来ます", "社長がいらっしゃいます", "社長が参ります", "社長が申します"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "The uchi/soto rule means…",
          options: ["always honorize everyone", "honorize out-group, humble in-group", "humble everyone", "no rules"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "私がご説明___ます。(humble: I'll explain)",
          blanks: ["いたし"],
        },
        {
          kind: "tf",
          text: "Honorifics and humble forms never combine on one verb.",
          answer: true,
        },
      ],
    },
  ],
}
