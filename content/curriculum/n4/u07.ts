import type { AuthoredUnit } from "../../types"

export const u07: AuthoredUnit = {
  level: "N4",
  order: 7,
  title: "The other ifs",
  titleJp: "ば・なら・と",
  description:
    "Complete the conditional toolbox: 〜ば (general rules), 〜なら (topic-limiting), and 〜と (automatic consequences) — and when each beats たら.",
  vocab: [
    "来る|くる",
    "桜|さくら",
    "咲く|さく",
    "直る|なおる",
    "直す|なおす",
    "規則|きそく",
    "守る|まもる",
    "確認|かくにん",
    "柔らかい|やわらかい",
    "硬い|かたい",
    "薄い|うすい",
    "濃い|こい",
    "味|あじ",
    "材料|ざいりょう",
    "品物|しなもの",
  ],
  kanji: ["桜", "咲", "規", "則", "守", "柔", "固", "薄", "遣"],
  exam: [
    {
      kind: "mcq",
      text: "「春になると、桜が咲きます。」 describes…",
      options: ["one special spring", "a natural, automatic yearly event", "a request", "a regret"],
      answer: 1,
      explain: "と = automatic, inevitable consequence.",
    },
    {
      kind: "mcq",
      text: "ば-form of 買う:",
      options: ["買えば", "買うえば", "買えば", "買えば"],
      answer: 0,
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n4-u07-l01",
      title: "The ば conditional",
      titleJp: "ばけい",
      grammarLabel: "〜ば",
      summary: "General conditions: 安ければ買います (If it's cheap, I'll buy).",
      body: {
        meaning:
          "〜ば expresses general conditions and wishes. う-verbs: u→e + ば (買えば, 飲めば). る-verbs: る→れば (食べれば). い-adj: い→ければ (安ければ). な-adj/noun: なら(ば) / であれば.",
        formation: [
          { pattern: "う-verbs: -u → -eba", note: "飲む→飲めば · 買う→買えば · 待つ→待てば" },
          { pattern: "る-verbs: る → れば", note: "食べる→食べれば · 見る→見れば" },
          { pattern: "い-adj: い → ければ", note: "安い→安ければ · いい→よければ" },
          { pattern: "な-adj/noun: なら（ば）", note: "暇なら · 雨なら" },
        ],
        usage: [
          "Often for advice/suggestions: 安ければ買いますよ.",
          "Formal-ish; everyday speech prefers たら.",
        ],
        pitfalls: [
          "The B part is usually a wish, suggestion, or judgement — not plain facts.",
          "いい→よければ (irregular).",
        ],
        related: ["たら (Unit 6)", "〜なら", "〜と"],
      },
      examples: [
        { jp: "安ければ買います。", kana: "やすければかいます。", en: "If it's cheap, I'll buy it." },
        { jp: "時間があれば、行きます。", kana: "じかんがあれば、いきます。", en: "If I have time, I'll go." },
        { jp: "薬を飲めば、治りますよ。", kana: "くすりをのめば、なおりますよ。", en: "If you take medicine, you'll get better." },
        { jp: "雨なら、試合は中止です。", kana: "あめなら、しあいはちゅうしです。", en: "If it's rain, the game is cancelled." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "ば-form of 飲む:",
          options: ["飲むば", "飲めば", "飲えば", "飲みば"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "ば-form of 安い:",
          options: ["安いければ", "安ければ", "安かったら", "安くば"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “If I have time, I'll go.”",
          tokens: ["時間", "が", "あれば", "行きます", "。"],
        },
        {
          kind: "mcq",
          text: "ば-form of いい:",
          options: ["いければ", "よければ", "いいなら", "よかったら"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "な-adjectives use なら with ば.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n4-u07-l02",
      title: "なら — taking up the topic",
      titleJp: "〜なら",
      grammarLabel: "〜なら",
      summary: "“If it's X you mean / speaking of X”: 京都なら、桜がきれいですよ.",
      body: {
        meaning:
          "〜なら responds to information just mentioned: A: 京都に行きたいんです。 B: 京都なら、桜がきれいですよ (Speaking of Kyoto — the cherry blossoms are lovely).",
        formation: [
          { pattern: "Noun ＋ なら", note: "田中さんなら知っていますよ" },
          { pattern: "Verb plain ＋ なら", note: "行くなら早いほうがいい" },
        ],
        usage: [
          "Gives advice/recommendations based on the listener's topic.",
          "なら can follow politeness: 田中さんなら (if it's Tanaka we're talking about).",
        ],
        pitfalls: [
          "なら doesn't describe natural laws — that's と.",
          "Don't use なら for your own hypothetical plans (that's たら).",
        ],
        related: ["〜ば", "〜たら"],
      },
      examples: [
        { jp: "京都なら、桜がきれいですよ。", kana: "きょうとなら、さくらがきれいですよ。", en: "If it's Kyoto you mean, the cherry blossoms are beautiful." },
        { jp: "日本語を習うなら、この学校がいいですよ。", kana: "にほんごをならうなら、このがっこうがいいですよ。", en: "If you're going to learn Japanese, this school is good." },
        { jp: "田中さんなら、必ず来ますよ。", kana: "たなかさんなら、かならずきますよ。", en: "If it's Tanaka, he'll definitely come." },
        { jp: "安いパソコンなら、あの店がおすすめです。", kana: "やすいパソコンなら、あのみせがおすすめです。", en: "For cheap computers, that shop is recommended." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Friend says 京都に行きたい。You recommend:",
          options: ["京都なら、桜がきれいですよ。", "京都と、桜がきれいですよ。", "京都に、桜が咲きます。", "京都で桜です。"],
          answer: 0,
        },
        {
          kind: "blank",
          text: "日本語を習う___、あの先生がいいですよ。(if learning)",
          blanks: ["なら"],
        },
        {
          kind: "mcq",
          text: "なら responds to…",
          options: ["natural laws", "the listener's topic", "regrets", "commands"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "なら often introduces recommendations.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n4-u07-l03",
      title: "と — automatic results",
      titleJp: "〜と",
      grammarLabel: "〜と（条件）",
      summary: "Inevitable cause-effect: 春になると、桜が咲きます.",
      body: {
        meaning:
          "Plain form + と states AUTOMATIC consequences — natural laws, machine operations, habits: このボタンを押すと、電気がつきます (Press this button and the light comes on — every time).",
        formation: [
          { pattern: "Verb plain ＋ と", note: "押すと · 降ると · 行くと" },
          { pattern: "い-adj ＋ と", note: "熱いと、飲めません" },
          { pattern: "な-adj/名詞 ＋ だと", note: "静かだと · 休みだと" },
        ],
        usage: [
          "B must be beyond your control — natural or inevitable.",
          "Discoveries too: 家に帰ると、猫がいました (surprise).",
        ],
        pitfalls: [
          "✗ と + will/volition: 決めると、買います is wrong (voluntary).",
          "Directions: 交差点を右に曲がると、駅があります (turn and — there it is).",
        ],
        related: ["〜たら", "〜ば"],
      },
      examples: [
        { jp: "春になると、桜が咲きます。", kana: "はるになると、さくらがさきます。", en: "When spring comes, cherry blossoms bloom." },
        { jp: "このボタンを押すと、水が出ます。", kana: "このボタンをおすと、みずがでます。", en: "Press this button and water comes out." },
        { jp: "熱いと、飲めません。", kana: "あついと、のめません。", en: "If it's hot, I can't drink it." },
        { jp: "角を曲がると、駅があります。", kana: "かどをまがると、えきがあります。", en: "Turn the corner and there's the station." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Natural law: 春になると、桜が___。",
          options: ["咲きます", "咲きたいです", "咲いてください", "咲かせます"],
          answer: 0,
        },
        {
          kind: "order",
          text: "Build: “Press the button and water comes out.”",
          tokens: ["ボタン", "を", "押す", "と", "水", "が", "出ます"],
        },
        {
          kind: "mcq",
          text: "と conditions do NOT precede…",
          options: ["natural results", "machine results", "voluntary decisions", "directions"],
          answer: 2,
        },
        {
          kind: "mcq",
          text: "Turn the corner AND there's the station →",
          options: ["曲がったら、駅でした", "曲がると、駅があります", "曲がれば、駅をします", "曲がると、駅をします"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "と can express sudden discoveries.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n4-u07-l04",
      title: "Which conditional?",
      titleJp: "じょうけんけいの つかいわけ",
      grammarLabel: "たら・ば・と・なら",
      summary: "The four-way choice, with decision rules.",
      body: {
        meaning:
          "たら = all-purpose if/when (incl. volition). ば = conditions with wishes/judgement. と = automatic results. なら = topic-limiting advice. Same sentence, different nuance.",
        formation: [
          { pattern: " Volition in B → たら", note: "雨が降ったら行きません (my choice)" },
          { pattern: "Wish/judgement → ば", note: "安ければ買いたい" },
          { pattern: "Automatic → と", note: "押すと出ます" },
          { pattern: "Responding to topic → なら", note: "京都なら…" },
        ],
        usage: [
          "When in doubt, たら is safest.",
          "ば and たら overlap; と excludes volition; なら excludes general conditions.",
        ],
        pitfalls: [
          "✗ と + 決めます/買います (voluntary).",
          "✗ なら for natural laws.",
        ],
        related: ["たら (Unit 6)", "ば・なら・と (this unit)"],
      },
      examples: [
        { jp: "雨が降ったら、出かけません。", kana: "あめがふったら、でかけません。", en: "If it rains, I won't go out. (たら — my choice)" },
        { jp: "安ければ買いたいです。", kana: "やすければかいたいです。", en: "I'd like to buy it if it's cheap. (ば — wish)" },
        { jp: "春になると、暖かくなります。", kana: "はるになると、あたたかくなります。", en: "When spring comes, it gets warm. (と — automatic)" },
        { jp: "日本語なら、田中さんに聞いてください。", kana: "にほんごなら、たなかさんにきいてください。", en: "For Japanese, ask Tanaka. (なら — topic)" },
      ],
      practice: [
        {
          kind: "mcq",
          text: "“When you press this, an alarm rings.” (automatic) →",
          options: ["押すと", "押せば", "押すなら", "押したら"],
          answer: 0,
        },
        {
          kind: "mcq",
          text: "“If it's cheap I'll BUY (my decision)” →",
          options: ["安いと", "安かったら", "安いなら", "安くて"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Friend mentions Tokyo; you advise: 東京___、渋谷がおすすめです。",
          options: ["と", "ば", "なら", "たら"],
          answer: 2,
        },
        {
          kind: "match",
          text: "Match conditional to use:",
          pairs: [
            ["たら", "all-purpose"],
            ["ば", "wishes"],
            ["と", "automatic"],
            ["なら", "advice on topic"],
          ],
        },
        {
          kind: "tf",
          text: "When unsure, たら is the safest choice.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n4-u07-l05",
      title: "〜ば …ほど & なければなりません review",
      titleJp: "ばの ふくしゅう",
      grammarLabel: "〜ば～ほど",
      summary: "The more… the more…: 考えるほど分からなくなる + obligation review.",
      body: {
        meaning:
          "Verb ば-form + dictionary form + ほど means “the more… the more…”: 日本語は話せば話すほど面白い (The more I speak Japanese, the more interesting it gets).",
        formation: [
          { pattern: "Verb ば ＋ plain ＋ ほど", note: "食べれば食べるほど太る" },
          { pattern: "い-adj ければ ＋ adj ＋ ほど", note: "安ければ安いほどいい" },
        ],
        usage: [
          "Same verb repeated in both slots.",
          "な-adj: 便利なら便利なほどいい.",
        ],
        pitfalls: [
          "Both slots use the SAME adjective/verb — that's the pattern's signature.",
          "〜なければなりません review: obligation (Unit 8 N5).",
        ],
        related: ["〜ば", "〜ほど (N3)"],
      },
      examples: [
        { jp: "日本語は話せば話すほど面白いです。", kana: "にほんごははなせばはなすほどおもしろいです。", en: "The more you speak Japanese, the more interesting it is." },
        { jp: "安ければ安いほどいいです。", kana: "やすければやすいほどいいです。", en: "The cheaper the better." },
        { jp: "練習すればするほど上手になります。", kana: "れんしゅうすればするほどじょうずになります。", en: "The more you practise, the better you get." },
        { jp: "考えるほど分からなくなります。", kana: "かんがえるほどわからなくなります。", en: "The more I think, the less I understand." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “The cheaper the better.”",
          tokens: ["安ければ", "安い", "ほど", "いいです", "。"],
        },
        {
          kind: "mcq",
          text: "“The more I eat, the fatter I get” →",
          options: ["食べるほど食べれば", "食べれば食べるほど", "食べたら食べるほど", "食べると食べるほど"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "練習すれば練習する___、上手になります。",
          blanks: ["ほど"],
        },
        {
          kind: "mcq",
          text: "Both slots of ば〜ほど use…",
          options: ["different words", "the same word", "opposites", "any word"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "〜ば～ほど expresses proportional change.",
          answer: true,
        },
      ],
    },
  ],
}
