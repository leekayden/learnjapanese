import type { AuthoredUnit } from "../../types"

export const u01: AuthoredUnit = {
  level: "N3",
  order: 1,
  title: "Why and for what",
  titleJp: "もくてきと りゆう",
  description:
    "Two “in order to”s (ために・ように), gratitude and blame (おかげで・せいで), and the formal reason chain ので・から revisited.",
  vocab: [
    "健康|けんこう",
    "節約|せつやく",
    "入院|にゅういん",
    "手術|しゅじゅつ",
    "回復|かいふく",
    "練習|れんしゅう",
    "合格|ごうかく",
    "失敗|しっぱい",
    "成功|せいこう",
    "理由|りゆう",
    "結果|けっか",
    "影響|えいきょう",
    "騒音|そうおん",
    "集中|しゅうちゅう",
  ],
  kanji: ["康", "節", "約", "院", "復", "格", "敗", "功", "影"],
  exam: [
    {
      kind: "mcq",
      text: "「健康のために、毎朝走っています。」 — the running is…",
      options: ["a result of health", "done for the sake of health", "prevented by health", "similar to health"],
      answer: 1,
    },
    {
      kind: "blank",
      text: "電気を消える___に、スイッチを確認する。 (so that it turns off — ように)",
      blanks: ["よう"],
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n3-u01-l01",
      title: "In order to: 〜ために",
      titleJp: "〜ために",
      grammarLabel: "〜ために",
      summary: "Goal-oriented action: 健康のために走ります (for the sake of health).",
      body: {
        meaning:
          "Noun+の/verb plain + ために states the PURPOSE of a deliberate act: 家を買うために貯金しています (I'm saving in order to buy a house).",
        formation: [
          { pattern: "Noun の ＋ ために", note: "健康のために for health" },
          { pattern: "Verb plain ＋ ために", note: "合格するために for passing" },
          { pattern: "する-noun ＋ ために", note: "旅行のために for the trip" },
        ],
        usage: [
          "Both A (purpose) and B (action) are volitional.",
          "〜ための + noun modifies nouns: 試験のための勉強.",
        ],
        pitfalls: [
          "ように is for indirect/natural outcomes; ために for direct goals you control.",
          "✗ 雨が降るために傘を持つ (rain isn't a goal) → 雨が降るので.",
        ],
        related: ["〜ように (next lesson)", "〜によって (Unit 3)"],
      },
      examples: [
        { jp: "健康のために、毎朝走っています。", kana: "けんこうのために、まいあさはしっています。", en: "For my health, I run every morning." },
        { jp: "合格するために、毎日勉強しています。", kana: "ごうかくするために、まいにちべんきょうしています。", en: "I study every day in order to pass." },
        { jp: "家族のために働いています。", kana: "かぞくのためにはたらいています。", en: "I work for my family." },
        { jp: "この本は日本語を勉強するための本です。", kana: "このほんはにほんごをべんきょうするためのほんです。", en: "This book is for studying Japanese." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I'm saving in order to buy a house.”",
          tokens: ["家", "を", "買う", "ために", "貯金して", "います", "。"],
        },
        {
          kind: "blank",
          text: "合格の___に毎日勉強しています。",
          blanks: ["ため"],
        },
        {
          kind: "mcq",
          text: "Which attaches to nouns before ために?",
          options: ["が", "の", "を", "に"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "〜ための ＋ noun means…",
          options: ["because of", "for the purpose of", "similar to", "despite"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "Both sides of ために are volitional actions.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n3-u01-l02",
      title: "So that: 〜ように",
      titleJp: "〜ように",
      grammarLabel: "〜ように",
      summary: "Indirect aims: 忘れないようにメモします (so as not to forget).",
      body: {
        meaning:
          "Plain + ように expresses an aim you steer toward but don't directly control: 忘れないようにメモします. Often with potential/negative/potential verbs.",
        formation: [
          { pattern: "Verb plain ＋ ように", note: "忘れないように" },
          { pattern: "Potential ＋ ように", note: "話せるように練習する" },
          { pattern: "〜ようにしている／している", note: "habitual effort" },
        ],
        usage: [
          "When the goal isn't fully within your control: 風邪をひかないように.",
          "〜ようにと言われた = was told to make sure…",
        ],
        pitfalls: [
          "✗ 健康のように走る (health is a direct goal → ために).",
          "ようになる = change; ように = aim — don't confuse.",
        ],
        related: ["〜ために", "〜ようになる (N4)"],
      },
      examples: [
        { jp: "忘れないように、メモしておきます。", kana: "わすれないように、メモしておきます。", en: "I'll take notes so I don't forget." },
        { jp: "日本語が話せるように、毎日練習しています。", kana: "にほんごがはなせるように、まいにちれんしゅうしています。", en: "I practise daily so I can speak Japanese." },
        { jp: "風邪をひかないように、気をつけています。", kana: "かぜをひかないように、きをつけています。", en: "I'm careful so I don't catch a cold." },
        { jp: "遅刻しないように、早く家を出ました。", kana: "ちこくしないように、はやくいえをでました。", en: "I left home early so as not to be late." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I'll note it down so I don't forget.”",
          tokens: ["忘れない", "ように", "メモします", "。"],
        },
        {
          kind: "mcq",
          text: "ように pairs best with…",
          options: ["volitional action goals", "potential/negative aims", "commands", "hearsay"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "遅刻しない___、タクシーに乗りました。",
          blanks: ["ように"],
        },
        {
          kind: "mcq",
          text: "健康のために走る → can this use ように?",
          options: ["yes", "no — direct goal uses ために", "only in past", "only negative"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "ように often precedes potential verbs as the aim.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n3-u01-l03",
      title: "Thanks to / because of: おかげで・せいで",
      titleJp: "おかげで・せいで",
      grammarLabel: "おかげで・せいで",
      summary: "おかげで = thanks to (positive); せいで = because of (negative blame).",
      body: {
        meaning:
          "先生のおかげで合格しました (Thanks to my teacher, I passed). 電車のせいで遅刻しました (The train was to blame for my being late). おかげ gives credit; せいで assigns blame.",
        formation: [
          { pattern: "Noun の ＋ おかげで", note: "positive cause" },
          { pattern: "Verb plain ＋ おかげで", note: "手伝ってくれたおかげで" },
          { pattern: "Noun の ＋ せいで", note: "negative cause" },
          { pattern: "Verb plain ＋ せいで", note: "寝坊したせいで" },
        ],
        usage: [
          "Neutral middle: ことで (because of — no judgement).",
          "おかげさまで = formulaic thanks to the listener.",
        ],
        pitfalls: [
          "せいで is accusatory — use carefully with people.",
          "✗ 親切なせいで (kindness isn't blame).",
        ],
        related: ["〜ので", "〜ため (cause, formal)"],
      },
      examples: [
        { jp: "先生のおかげで、合格できました。", kana: "せんせいのおかげで、ごうかくできました。", en: "Thanks to my teacher, I could pass." },
        { jp: "電車のせいで、会議に遅刻しました。", kana: "でんしゃのせいで、かいぎにちこくしました。", en: "Because of the train, I was late to the meeting." },
        { jp: "毎日練習したおかげで、上手になりました。", kana: "まいにちれんしゅうしたおかげで、じょうずになりました。", en: "Thanks to daily practice, I got better." },
        { jp: "寝坊したせいで、始発に乗り遅れました。", kana: "ねぼうしたせいで、しはつにのりおくれました。", en: "I overslept and missed the first train." },
      ],
      practice: [
        {
          kind: "blank",
          text: "先生のお___で合格できました。(thanks to)",
          blanks: ["かげ"],
        },
        {
          kind: "mcq",
          text: "Blame the weather: 雨の___、試合が中止になりました。",
          options: ["おかげで", "せいで", "ために", "ように"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “Thanks to your help, it went well.”",
          tokens: ["手伝って", "くれた", "おかげで", "うまくいきました", "。"],
        },
        {
          kind: "mcq",
          text: "Neutral “because of” without judgement:",
          options: ["おかげで", "せいで", "ことで", "ように"],
          answer: 2,
        },
        {
          kind: "tf",
          text: "せいで assigns blame or negative cause.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n3-u01-l04",
      title: "Formal cause: 〜ため（に）",
      titleJp: "〜ため（に）",
      grammarLabel: "〜ため（に）",
      summary: "Reason in writing: 大雨のため、電車が止まりました (Due to heavy rain…).",
      body: {
        meaning:
          "In formal writing/news, ため（に） also means BECAUSE (cause, not goal): 大雨のため、電車が止まっています. Cause reading is clear when the first clause isn't volitional.",
        formation: [
          { pattern: "Noun の ＋ ため（に）", note: "事故のため because of an accident" },
          { pattern: "Verb plain ＋ ため（に）", note: "台風が来たために" },
        ],
        usage: [
          "News, notices, papers — prefer ので/から in speech.",
          "〜ためか = probably because.",
        ],
        pitfalls: [
          "Same shape as the purpose ため — the volition of the first clause decides.",
          "✗ casual: 大雨のためです sounds stiff in chat.",
        ],
        related: ["〜ために (purpose)", "〜おかげで・せいで"],
      },
      examples: [
        { jp: "大雨のため、電車が止まっています。", kana: "おおあめのため、でんしゃがとまっています。", en: "Due to heavy rain, trains are stopped." },
        { jp: "病気のため、今日は休ませていただきます。", kana: "びょうきのため、きょうはやすませていただきます。", en: "Due to illness, I will take today off." },
        { jp: "事故のため、道路が混んでいます。", kana: "じこのため、どうろがこんでいます。", en: "Because of an accident, the roads are congested." },
        { jp: "人手不足のため、営業時間が短くなりました。", kana: "ひとでぶそくのため、えいぎょうじかんがみじかくなりました。", en: "Due to staff shortage, business hours got shorter." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "News style: “Due to a fire, the line is closed” →",
          options: ["火事ように", "火事のため", "火事おかげで", "火事せいで"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "台風が来た___、学校が休みになりました。",
          blanks: ["ため"],
        },
        {
          kind: "mcq",
          text: "ため (cause) appears mostly in…",
          options: ["casual chat", "formal writing/news", "song lyrics", "questions"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "「病気のため」 in an email means…",
          options: ["for the sake of illness", "due to illness", "similar to illness", "without illness"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "When clause A is not volitional, ため reads as a cause.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n3-u01-l05",
      title: "Cause chain review",
      titleJp: "りゆうの まとめ",
      grammarLabel: "cause summary",
      summary: "ので・から・ため・おかげ・せい — the full cause toolbox.",
      body: {
        meaning:
          "Neutral (ので/から), formal (ため), credited (おかげで), blamed (せいで). Same fact, different stance: 雨が降ったため中止 / 雨のおかげで涼しい / 雨のせいで中止.",
        formation: [
          { pattern: "ので — soft", note: "polite reasons, requests" },
          { pattern: "から — direct", note: "casual + assertive" },
          { pattern: "ため — formal", note: "writing" },
          { pattern: "おかげ/せい — evaluated", note: "credit/blame" },
        ],
        usage: [
          "Requests strongly prefer ので: 頭が痛いので帰ってもいいですか。",
          "から can sound blunt before requests.",
        ],
        pitfalls: [
          "から + ください is assertive; ので + ください is polite.",
          " ため without に for purpose vs cause — context again.",
        ],
        related: ["〜ので (N4)", "〜ために", "おかげで・せいで"],
      },
      examples: [
        { jp: "頭が痛いので、早退させてください。", kana: "あたまがいたいので、そうたいさせてください。", en: "My head hurts, so please let me leave early." },
        { jp: "安いから、たくさん買った。", kana: "やすいから、たくさんかった。", en: "It was cheap, so I bought a lot." },
        { jp: "晴天のため、試合が行われました。", kana: "せいてんのため、しあいがおこなわれました。", en: "The match was held thanks to clear weather." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Polite request reason →",
          options: ["から", "ので", "せいで", "おかげで"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Blame framing →",
          options: ["ので", "おかげで", "せいで", "ために"],
          answer: 2,
        },
        {
          kind: "mcq",
          text: "News article cause →",
          options: ["から", "ために", "ように", "たら"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "“Thanks to” framing →",
          options: ["せいで", "おかげで", "ために", "ので"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "ので is softer than から before requests.",
          answer: true,
        },
      ],
    },
  ],
}
