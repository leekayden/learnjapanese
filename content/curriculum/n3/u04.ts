import type { AuthoredUnit } from "../../types"

export const u04: AuthoredUnit = {
  level: "N3",
  order: 4,
  title: "No way and no can do",
  titleJp: "わけにはいかない",
  description:
    "Strong denials (はずがない・わけがない), social impossibility (わけにはいかない), and obligation of circumstance (ざるを得ない・ないわけにはいかない).",
  vocab: [
    "遅れる|おくれる",
    "保証|ほしょう",
    "責任|せきにん",
    "会社|かいしゃ",
    "会議|かいぎ",
    "出席|しゅっせき",
    "黙る|だまる",
    "着る|きる",
    "友人|ゆうじん",
    "食事|しょくじ",
  ],
  kanji: ["可", "当", "証", "責", "席", "黙", "裁", "招"],
  exam: [
    {
      kind: "mcq",
      text: "「そんなうそ、信じるわけがない。」 means…",
      options: ["I might believe it.", "There's no way I'd believe it.", "I should believe it.", "I believed it."],
      answer: 1,
    },
    {
      kind: "mcq",
      text: "「明日は会議があるので、休むわけにはいきません。」 means…",
      options: ["I want to rest.", "I can't afford to rest (socially).", "I'll definitely rest.", "Resting is forbidden by law."],
      answer: 1,
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n3-u04-l01",
      title: "No way: 〜はずがない・〜わけがない",
      titleJp: "〜はずがない",
      grammarLabel: "〜はずがない",
      summary: "はずがない = logically impossible; わけがない = no reason it would be true.",
      body: {
        meaning:
          "はずがない denies expectation: 彼が嘘をつくはずがない (There's no way he'd lie — he's trustworthy). わけがない is near-identical in casual use: 信じるわけがない.",
        formation: [
          { pattern: "Verb plain ＋ はずがない", note: "denies expectation" },
          { pattern: "い-adj ＋ はずがない", note: "難しいはずがない" },
          { pattern: "な-adj/名詞 ＋ の/な＋はずがない", note: "簡単なはずがない" },
          { pattern: "〜わけがない", note: "same meaning, casual" },
        ],
        usage: [
          "はずだった = expectation failed.",
          "Strengthened: 〜はずがなかった (didn't turn out).",
        ],
        pitfalls: [
          "はずがない is reasoned; あり得ない is factual impossibility.",
          "な-adj needs な: ✗ 簡単はずがない.",
        ],
        related: ["〜はずだ (N4)", "〜わけにはいかない (next lesson)"],
      },
      examples: [
        { jp: "彼が嘘をつくはずがありません。", kana: "かれがうそをつくはずがありません。", en: "There's no way he would lie." },
        { jp: "こんな難しい問題、子供に解けるはずがない。", kana: "こんなむずかしいもんだい、こどもにとけるはずがない。", en: "No way a child could solve such a hard problem." },
        { jp: "一日で覚えるわけがありません。", kana: "いちにちでおぼえるわけがありません。", en: "There's no way to memorise it in one day." },
        { jp: "そんな安い値段はあり得ない。", kana: "そんなやすいねだんはありえない。", en: "Such a cheap price is impossible.", note: "あり得ない = factual impossibility" },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “There's no way he would lie.”",
          tokens: ["彼", "が", "嘘", "を", "つく", "はず", "がありません", "。"],
        },
        {
          kind: "blank",
          text: "一日で覚える___がありません。(no way)",
          blanks: ["わけ"],
        },
        {
          kind: "mcq",
          text: "な-adj + はずがない uses…",
          options: ["な", "の", "が", "で"],
          answer: 0,
        },
        {
          kind: "mcq",
          text: "あり得ない expresses…",
          options: ["social difficulty", "factual impossibility", "obligation", "regret"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "はずがない is a reasoned denial.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n3-u04-l02",
      title: "Can't afford to: 〜わけにはいかない",
      titleJp: "〜わけにはいかない",
      grammarLabel: "〜わけにはいかない",
      summary: "Social duty blocks it: 会議があるので、休むわけにはいきません.",
      body: {
        meaning:
          "Verb dictionary/ない + わけにはいかない means you COULD but it would be socially wrong: 行くわけにはいきません (I'm in no position to go).",
        formation: [
          { pattern: "Verb dictionary ＋ わけにはいかない", note: "can't (socially) do" },
          { pattern: "Verb ない ＋ わけにはいかない", note: "must do (can't not do)" },
          { pattern: "Past: 〜わけにはいかなかった", note: "couldn't bring myself" },
        ],
        usage: [
          "Polite refusals with reasons: 手伝えません — 今日は忙しくて…わけには…",
          "Negative form doubles as obligation: 黙っているわけにはいかない.",
        ],
        pitfalls: [
          "Not physical impossibility (that's できない) — social/ethical.",
          "〜わけがない (no way true) vs 〜わけにはいかない (can't afford to).",
        ],
        related: ["〜はずがない", "〜ざるを得ない (formal)"],
      },
      examples: [
        { jp: "明日は大事な会議があるので、休むわけにはいきません。", kana: "あしたはだいじなかいぎがあるので、やすむわけにはいきません。", en: "I have an important meeting tomorrow, so I can't take the day off." },
        { jp: "友達の秘密を他の人に話すわけにはいきません。", kana: "ともだちのひみつをほかのひとにはなすわけにはいきません。", en: "I can't tell my friend's secret to others." },
        { jp: "彼が困っているなら、黙っているわけにはいかない。", kana: "かれがこまっているなら、だまっているわけにはいかない。", en: "If he's in trouble, I can't just stay silent." },
        { jp: "上司に嘘をつくわけにはいかなかった。", kana: "じょうしにうそをつくわけにはいかなかった。", en: "I couldn't bring myself to lie to my boss." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I can't take the day off.”",
          tokens: ["休む", "わけには", "いきません", "。"],
        },
        {
          kind: "mcq",
          text: "〜ないわけにはいかない means…",
          options: ["no need to do", "must do", "forbidden", "impossible"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "彼が困っているなら、黙っている___いきません。",
          blanks: ["わけには"],
        },
        {
          kind: "mcq",
          text: "わけにはいかない blocks by…",
          options: ["physics", "social duty", "law only", "weather"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "It's stronger than できません but softer than 禁止されている.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n3-u04-l03",
      title: "Can't help: 〜ずにはいられない",
      titleJp: "〜ずにはいられない",
      grammarLabel: "〜ずにはいられない",
      summary: "Compulsion: その話を聞くと、笑わずにはいられない (can't help laughing).",
      body: {
        meaning:
          "Verb ない minus ない + ずにはいられない = can't stop yourself: 悲しくて泣かずにはいられなかった. する→せざるを得ない/せずにはいられない.",
        formation: [
          { pattern: "Verb ない(-ない) ＋ ずにはいられない", note: "泣かずにはいられない" },
          { pattern: "する → せずにはいられない", note: "irregular" },
          { pattern: "〜ざるを得ない (obligation variant)", note: "そうするざるを得ない" },
        ],
        usage: [
          "Emotions/urges: 思わず、買ってしまった…",
          "ざるを得ない = forced by circumstance (formal).",
        ],
        pitfalls: [
          "ず replaces ない: 行く→行かずにはいられない.",
          "する is irregular: せず (not しず).",
        ],
        related: ["〜ないではいられない (colloquial)", "〜わけにはいかない"],
      },
      examples: [
        { jp: "その映画を見ると、笑わずにはいられない。", kana: "そのえいがをみると、わらわずにはいられない。", en: "Whenever I watch that movie, I can't help laughing." },
        { jp: "悲しいニュースを見て、泣かずにはいられなかった。", kana: "かなしいニュースをみて、なかずにはいられなかった。", en: "Seeing the sad news, I couldn't help crying." },
        { jp: "彼のスキルを見ると、驚かずにはいられない。", kana: "かれのスキルをみると、おどろかずにはいられない。", en: "Seeing his skill, I can't help being amazed." },
        { jp: "状況が変わったので、計画を変えざるを得ない。", kana: "じょうきょうがかわったので、けいかくをかえざるをえない。", en: "Circumstances changed, so we have no choice but to change the plan." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I can't help laughing.”",
          tokens: ["笑わず", "には", "いられません", "。"],
        },
        {
          kind: "mcq",
          text: "する in this pattern becomes…",
          options: ["しず", "せず", "しないで", "せない"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "悲しくて泣か___いられなかった。(couldn't help crying)",
          blanks: ["ずには"],
        },
        {
          kind: "mcq",
          text: "〜ざるを得ない implies…",
          options: ["free choice", "circumstantial obligation", "desire", "habit"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "ずにはいられない usually describes emotional compulsion.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n3-u04-l04",
      title: "Certainly: 〜に決まっている",
      titleJp: "〜に決まっている",
      grammarLabel: "〜に決まっている",
      summary: "Confident assertion: 嘘に決まっている (It's obviously a lie).",
      body: {
        meaning:
          "Plain + に決まっている = it's CERTAIN (speaker's conviction): 頑張れば、うまくいくに決まっている! Casual certainty — stronger than はず.",
        formation: [
          { pattern: "Verb plain ＋ に決まっている", note: "行くに決まっている" },
          { pattern: "い-adj ＋ に決まっている", note: "安いに決まっている" },
          { pattern: "な-adj/名詞 ＋ に決まっている", note: "嘘に決まっている" },
        ],
        usage: [
          "Emphatic opinions and convictions.",
          "Formal twin: 〜に相違ない (documents).",
        ],
        pitfalls: [
          "No volition: ✗ 行くに決めています (wrong shape).",
          "Overuse sounds dogmatic.",
        ],
        related: ["〜はずだ", "〜に違いない (Unit 15)"],
      },
      examples: [
        { jp: "嘘に決まっている。", kana: "うそにきまっている。", en: "It's obviously a lie." },
        { jp: "頑張れば、成功に決まっている!", kana: "がんばれば、せいこうにきまっている!", en: "If you try hard, you'll obviously succeed!" },
        { jp: "そんな高い店、学生なんて入れないに決まっている。", kana: "そんなたかいみせ、がくせいなんてはいれないにきまっている。", en: "Students obviously can't get into such an expensive place." },
        { jp: "彼はもう帰ったに決まっている。", kana: "かれはもうかえったにきまっている。", en: "He's obviously already gone home." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “It's obviously a lie.”",
          tokens: ["嘘", "に", "決まって", "います", "。"],
        },
        {
          kind: "mcq",
          text: "に決まっている pairs with…",
          options: ["na-adj/noun directly", "verbs only", "adverbs", "questions"],
          answer: 0,
        },
        {
          kind: "blank",
          text: "頑張れば、成功___きまっている!",
          blanks: ["に"],
        },
        {
          kind: "mcq",
          text: "Formal equivalent:",
          options: ["に相違ない", "に過ぎない", "に限る", "に越したことはない"],
          answer: 0,
        },
        {
          kind: "tf",
          text: "に決まっている is stronger than はず.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n3-u04-l05",
      title: "Denial toolbox",
      titleJp: "ひていの まとめ",
      grammarLabel: "denial summary",
      summary: "Choose: no way true (わけがない), can't afford to (わけには), can't help (ずにはいられない), obvious (に決まっている).",
      body: {
        meaning:
          "Four denials, four stances: factual (わけがない), social (わけにはいかない), emotional (ずにはいられない), convinced (に決まっている).",
        formation: [
          { pattern: "わけがない", note: "no reason it's true" },
          { pattern: "わけにはいかない", note: "socially can't" },
          { pattern: "ずにはいられない", note: "can't suppress" },
          { pattern: "に決まっている", note: "certain to me" },
        ],
        usage: [
          "Ask yourself WHY you deny: logic? duty? emotion? certainty?",
          " Combine: 知るわけがない + 知ってはいけない…",
        ],
        pitfalls: [
          "わけが vs わけには: one letter changes meaning — check the は.",
          "ずにはいられない is emotion-driven, not chosen.",
        ],
        related: ["この unit の lessons 1–4"],
      },
      examples: [
        { jp: "彼が知っているわけがない。", kana: "かれがしっているわけがない。", en: "There's no way he knows." },
        { jp: "今日は行くわけにはいきません。", kana: "きょうはいくわけにはいきません。", en: "I can't go today (socially)." },
        { jp: "美しい景色を見ると、写真を撮らずにはいられない。", kana: "うつくしいけしきをみると、しゃしんをとらずにはいられない。", en: "Seeing beautiful scenery, I can't help taking photos." },
        { jp: "正解はAに決まっている!", kana: "せいかいはAにきまっている!", en: "The answer is obviously A!" },
      ],
      practice: [
        {
          kind: "mcq",
          text: "“No reason it's true” →",
          options: ["わけにはいかない", "わけがない", "ずにはいられない", "に決まっている"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "“Can't suppress the urge” →",
          options: ["わけがない", "ずにはいられない", "わけにはいかない", "はずがない"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "“Obviously” →",
          options: ["に決まっている", "わけにはいかない", "はずがない", "ずにはいられない"],
          answer: 0,
        },
        {
          kind: "mcq",
          text: "“Socially impossible” →",
          options: ["に決まっている", "わけにはいかない", "わけがない", "ずにはいられない"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "Each denial expresses a different stance.",
          answer: true,
        },
      ],
    },
  ],
}
