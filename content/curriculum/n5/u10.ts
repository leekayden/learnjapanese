import type { AuthoredUnit } from "../../types"

export const u10: AuthoredUnit = {
  level: "N5",
  order: 10,
  title: "When and why",
  titleJp: "とき・わけ",
  description:
    "Sequence and reason: 〜前に (before), 〜とき (when), 〜たり〜たりする (doing things like…), 〜から・〜ので (because), and どうして・だから (why/so).",
  vocab: [
    "寝る|ねる",
    "起きる|おきる",
    "食べる|たべる",
    "飲む|のむ",
    "旅行|りょこう",
    "写真|しゃしん",
    "買い物|かいもの",
    "散歩|さんぽ",
    "料理|りょうり",
    "音楽|おんがく",
    "映画|えいが",
    "運動|うんどう",
    "手伝う|てつだう",
    "疲れる|つかれる",
    "忙しい|いそがしい",
    "元気|げんき",
    "静か|しずか",
    "便利|べんり",
    "雨|あめ",
    "風邪|かぜ",
  ],
  kanji: ["旅", "運", "動", "疲", "風", "邪", "野", "菜", "写"],
  exam: [
    {
      kind: "order",
      text: "Build: “Before eating, I wash my hands.”",
      tokens: ["ご飯", "を", "食べる", "前に", "手", "を", "洗います"],
    },
    {
      kind: "mcq",
      text: "「忙しかったから、行きませんでした。」 means…",
      options: ["I was busy, so I didn't go.", "I wasn't busy, so I went.", "I'll go because I'm free.", "Being busy, I went."],
      answer: 0,
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n5-u10-l01",
      title: "Before doing: 〜前に",
      titleJp: "〜まえに",
      grammarLabel: "〜前に",
      summary: "Dictionary form + 前に: 食べる前に手を洗います.",
      body: {
        meaning:
          "Dictionary form + 前に means “before doing”: 寝る前に本を読みます (I read before sleeping). Nouns take の: 旅行の前に (before the trip).",
        formation: [
          { pattern: "Verb dictionary form ＋ 前に", note: "食べる前に wash before eating" },
          { pattern: "Noun の ＋ 前に", note: "仕事の前に before work" },
        ],
        usage: [
          "前に ALWAYS takes the dictionary form, even for past events: 行く前に (before going).",
          "Pairs with 〜てから (after) — together they handle most sequencing.",
        ],
        pitfalls: [
          "✗ 食べた前に — use the dictionary form before 前に.",
          "前に also means “in front of” as a location noun (Unit 11) — context separates them.",
        ],
        related: ["〜てから (Unit 7)", "〜とき (next lesson)"],
      },
      examples: [
        { jp: "寝る前に、本を読みます。", kana: "ねるまえに、ほんをよみます。", en: "Before sleeping, I read a book." },
        { jp: "ご飯の前に手を洗います。", kana: "ごはんのまえにてをあらいます。", en: "I wash my hands before the meal." },
        { jp: "日本へ行く前に、日本語を勉強しました。", kana: "にほんへいくまえに、にほんごをべんきょうしました。", en: "Before going to Japan, I studied Japanese." },
        { jp: "運動の前に水を飲みます。", kana: "うんどうのまえにみずをのみます。", en: "I drink water before exercising." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “Before sleeping, I read.”",
          tokens: ["寝る", "前に", "本", "を", "読みます", "。"],
        },
        {
          kind: "blank",
          text: "旅行の ___ 、切符を買います。(before the trip)",
          blanks: ["前に"],
        },
        {
          kind: "mcq",
          text: "Which form precedes 前に?",
          options: ["た-form", "dictionary form", "te-form", "ます-stem"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "「食べる前に、手を洗います。」 means…",
          options: ["After eating, wash hands.", "I wash my hands before eating.", "I eat before washing.", "Wash hands and eat together."],
          answer: 1,
        },
        {
          kind: "tf",
          text: "Nouns take の before 前に.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n5-u10-l02",
      title: "When…: 〜とき",
      titleJp: "〜とき",
      grammarLabel: "〜とき",
      summary: "“When/while”: 子供のとき, 日本にいるとき, 食べるとき.",
      body: {
        meaning:
          "とき means “time/when” and follows different forms: dictionary form (when/if it happens), た-form (when it happened), ない (when not), noun+の, な-adj+な. 子供のとき = when I was a child.",
        formation: [
          { pattern: "Verb dictionary form ＋ とき", note: "日本へ行くとき (when I go — before) " },
          { pattern: "Verb た ＋ とき", note: "日本へ行ったとき (when I went — after/upon)" },
          { pattern: "Noun の ＋ とき", note: "子供のとき / 休みのとき" },
          { pattern: "な-adj ＋ な ＋ とき / い-adj ＋ とき", note: "暇なとき / 忙しいとき" },
        ],
        usage: [
          "行くとき = on the way/before; 行ったとき = once (I was) there. Subtle but real.",
          "Questions: いつ (when) asks the time; とき states it.",
        ],
        pitfalls: [
          "Don't put に after とき in standard usage: ✗ 食べるときに may appear in some regions but とき alone is standard.",
          "い-adjectives take とき directly; な-adjectives take な: 暇なとき.",
        ],
        related: ["〜前に", "〜てから"],
      },
      examples: [
        { jp: "日本へ行ったとき、着物を買いました。", kana: "にほんへいったとき、きものをかいました。", en: "When I went to Japan, I bought a kimono." },
        { jp: "暇なとき、音楽を聞きます。", kana: "ひまなとき、おんがくをききます。", en: "When I'm free, I listen to music." },
        { jp: "子供のとき、大阪に住んでいました。", kana: "こどものとき、おおさかにすんでいました。", en: "When I was a child, I lived in Osaka." },
        { jp: "食べないときは、冷蔵庫に入れます。", kana: "たべないときは、れいぞうこにいれます。", en: "When I don't eat it, I put it in the fridge." },
      ],
      practice: [
        {
          kind: "blank",
          text: "子供 ___ とき、東京に住んでいました。",
          blanks: ["の"],
        },
        {
          kind: "mcq",
          text: "“When I'm free” →",
          options: ["暇とき", "暇なとき", "暇のとき", "暇たとき"],
          answer: 1,
          explain: "な-adjectives take な before とき.",
        },
        {
          kind: "order",
          text: "Build: “When I went to Japan, I bought a kimono.”",
          tokens: ["日本", "へ", "行った", "とき", "着物", "を", "買いました"],
        },
        {
          kind: "mcq",
          text: "Which is correct before とき?",
          options: ["only た-form", "dictionary/た/ない forms depending on meaning", "only ます-stem", "te-form only"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "行くとき and 行ったとき can describe different timing.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n5-u10-l03",
      title: "Doing this and that: 〜たり〜たり",
      titleJp: "〜たり〜たりする",
      grammarLabel: "〜たり〜たり",
      summary: "Listing example activities: 日曜日は本を読んだり、散歩したりします.",
      body: {
        meaning:
          "た-form + り…たり lists representative activities: 日曜日は掃除したり、洗濯したりします (On Sundays I clean, do laundry, and so on). End with する.",
        formation: [
          { pattern: "Verb た ＋ り、Verb た ＋ り します", note: "映画を見たり、本を読んだりします" },
          { pattern: "〜たり〜たりする (past: しました)", note: "weekend reports" },
        ],
        usage: [
          "The list is NON-exhaustive — “things like…”.",
          "Adjectives can join: 忙しかったり、暇だったり (sometimes busy, sometimes free).",
        ],
        pitfalls: [
          "Use the た-form (even for future/habitual): ✗ 食べるたり.",
          "Don't forget the final します/しました.",
        ],
        related: ["た-form", "と (noun lists, Unit 4)"],
      },
      examples: [
        { jp: "日曜日は掃除したり、洗濯したりします。", kana: "にちようびはそうじしたり、せんたくしたりします。", en: "On Sundays I clean, do laundry and so on." },
        { jp: "休みの日は本を読んだり、散歩したりします。", kana: "やすみのひはほんをよんだり、さんぽしたりします。", en: "On days off I read, take walks and such." },
        { jp: "旅行で写真を撮ったり、食べたりしました。", kana: "りょこうでしゃしんをとったり、たべたりしました。", en: "On the trip we took photos, ate, and more." },
        { jp: "最近は忙しかったり、暇だったりです。", kana: "さいきんはいそがしかったり、ひまだったりです。", en: "Lately I'm sometimes busy, sometimes free." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “On Sunday I read books and take walks.”",
          tokens: ["日曜日", "は", "本", "を", "読んだり", "散歩したり", "します"],
        },
        {
          kind: "blank",
          text: "休みに映画を見 ___ 、買い物し ___ します。",
          blanks: ["たり", "たり"],
        },
        {
          kind: "mcq",
          text: "What form does 〜たり attach to?",
          options: ["dictionary form", "た-form", "te-form", "ます-stem"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "「〜たり〜たり」 lists are…",
          options: ["complete lists", "example lists (non-exhaustive)", "ordered steps", "negatives"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "The sentence ends with する in some tense.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n5-u10-l04",
      title: "Because: 〜から・〜ので",
      titleJp: "〜から・〜ので",
      grammarLabel: "〜から・〜ので",
      summary: "Reasons: 忙しいから行きません (I'm busy, so I won't go).",
      body: {
        meaning:
          "から after a reason clause means “because/since”, and can open the sentence: 忙しいですから、行きません. ので is softer and more formal. Order can be reason-first or result-first.",
        formation: [
          { pattern: "Plain ＋ から、Result", note: "雨が降るから、行きません。" },
          { pattern: "Result、Reason ＋ から", note: "行きません。雨だから。" },
          { pattern: "Plain ＋ ので、Result", note: "痛いので、行きません。" },
          { pattern: "Noun/な-adj ＋ だから／なので", note: "学生だから / 雨なので" },
        ],
        usage: [
          "から after nouns/な-adj needs だ: 雨だから行きません.",
          "ので sounds gentler — good for excuses and requests.",
        ],
        pitfalls: [
          "✗ 雨からです → 雨だからです. Nouns need だ before から.",
          "から also means “from” (9時から) — direction of use disambiguates.",
        ],
        related: ["〜てから (after — different!)", "〜のですが (N4)"],
      },
      examples: [
        { jp: "忙しいから、今日は行きません。", kana: "いそがしいから、きょうはいきません。", en: "I'm busy, so I won't go today." },
        { jp: "雨が降っていますから、傘を持って行きます。", kana: "あめがふっていますから、かさをもっていきます。", en: "It's raining, so I'll take an umbrella." },
        { jp: "風邪なので、休みます。", kana: "かぜなので、やすみます。", en: "I have a cold, so I'll rest." },
        { jp: "どうして日本語を勉強していますか。アニメが好きだからです。", kana: "どうしてにほんごをべんきょうしていますか。アニメがすきだからです。", en: "Why are you studying Japanese? Because I like anime." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I'm busy, so I won't go.”",
          tokens: ["忙しい", "から", "行きません", "。"],
        },
        {
          kind: "blank",
          text: "風邪 ___ 、休みます。(softer reason)",
          blanks: ["なので"],
        },
        {
          kind: "mcq",
          text: "「9時から始まります」 — から here means…",
          options: ["because", "from", "after", "but"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Noun + because (it's rain):",
          options: ["雨から", "雨なので／だから", "雨でから", "雨にから"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "ので is softer than から.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n5-u10-l05",
      title: "Why? Because!",
      titleJp: "どうして・だから",
      grammarLabel: "どうして・だから",
      summary: "Asking and giving reasons in conversation.",
      body: {
        meaning:
          "どうして／なぜ asks “why?”; だから／それで answers “so/therefore”. Typical exchange: どうして日本語を勉強していますか。— アニメが好きだからです。",
        formation: [
          { pattern: "どうして ＋ question", note: "どうして行きませんか Why aren't you going?" },
          { pattern: "どうして ＋ のですか", note: "softer inquiry" },
          { pattern: "だから／それで ＋ result", note: "だから行きません So I'm not going." },
        ],
        usage: [
          "Answer with plain+から: 好きだから (です).",
          "なぜ is formal/written; どうして/なんで are conversational (なんで being casual).",
        ],
        pitfalls: [
          "からです vs から: both answer why — 〜からです is the fuller sentence.",
          "Because-questions feel direct; soften with どうして〜んですか.",
        ],
        related: ["〜から (reason)", "〜んです (N4)"],
      },
      examples: [
        { jp: "どうして日本へ来ましたか。", kana: "どうしてにほんへきましたか。", en: "Why did you come to Japan?" },
        { jp: "日本語が好きだからです。", kana: "にほんごがすきだからです。", en: "Because I like Japanese." },
        { jp: "今日は疲れました。だから、早く寝ます。", kana: "きょうはつかれました。だから、はやくねます。", en: "I'm tired today. So I'll sleep early." },
        { jp: "どうして遅れたんですか。", kana: "どうしておくれたんですか。", en: "Why were you late?" },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Ask “Why?” politely:",
          options: ["だから。", "どうしてですか。", "それで？", "いくらですか。"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “Because I like Japanese.”",
          tokens: ["日本語", "が", "好き", "だから", "です", "。"],
        },
        {
          kind: "mcq",
          text: "だから means…",
          options: ["why", "because of that / so", "but", "when"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "疲れました。___ 、休みます。(so)",
          blanks: ["だから"],
        },
        {
          kind: "tf",
          text: "なぜ is more formal than どうして.",
          answer: true,
        },
      ],
    },
  ],
}
