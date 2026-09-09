import type { AuthoredUnit } from "../../types"

export const u11: AuthoredUnit = {
  level: "N3", order: 11, title: "Against all odds", titleJp: "よそうにはんたいして",
  description: "Contrary to expectation: 〜わりに (for), 〜くせに (despite being), 〜にもかかわらず (despite).",
  vocab: ["値段|ねだん", "味|あじ", "有名|ゆうめい", "能力|のうりょく", "努力|どりょく", "知識|ちしき", "困難|こんなん", "状況|じょうきょう", "雨|あめ", "出発|しゅっぱつ", "彼|かれ", "彼女|かのじょ", "教授|きょうじゅ", "意外|いがい", "残念|ざんねん", "立派|りっぱ"],
  kanji: ["値", "味", "況", "困", "難", "意", "外", "残", "派"],
  exam: [
    { kind: "mcq", text: "「値段のわりに、おいしい。」 means…", options: ["It's expensive and tasty.", "It's tasty considering the price.", "It's expensive but not tasty.", "The price matches the taste."], answer: 1 },
    { kind: "mcq", text: "「雨にもかかわらず、試合が行われた。」 means…", options: ["The game was cancelled due to rain.", "The game took place despite the rain.", "It rained during the game.", "The game was postponed."], answer: 1 },
  ],
  lessons: [
    { slug: "n3-u11-l01", title: "For the price: 〜わりに", titleJp: "〜わりに", grammarLabel: "〜わりに",
      summary: "わりに = considering X, the result is unexpected: 値段のわりにおいしい.",
      body: { meaning: "Noun + の / verb plain + わりに = compared to what you'd EXPECT from X, the result is surprising. If something is cheap but tasty, that's わりにおいしい.", formation: [{ pattern: "Noun の ＋ わりに", note: "値段のわりに for the price" }, { pattern: "Verb plain ＋ わりに", note: "勉強したわりに despite studying" }, { pattern: "い-adj ＋ わりに", note: "安いわりに" }], usage: ["Implies a gap between expectation and reality.", "Can be positive or negative."], pitfalls: ["The expectation comes from the noun/verb before わりに.", " Similar to にしては but more objective."], related: ["〜にしては (N3)", "〜反面"] },
      examples: [
        { jp: "値段のわりに、おいしい。", kana: "ねだんのわりに、おいしい。", en: "It's tasty for the price." },
        { jp: "彼はよく勉強したわりに、試験に落ちた。", kana: "かれはよくべんきょうしたわりに、しけんにおちた。", en: "Despite studying hard, he failed the exam." },
        { jp: "この部屋は広いわりに、安い。", kana: "このへやはひろいわりに、やすい。", en: "This room is cheap considering how spacious it is." },
      ],
      practice: [
        { kind: "blank", text: "値段の___、おいしい。", blanks: ["わりに"] },
        { kind: "mcq", text: "わりに expresses a gap between…", options: ["two people", "expectation and reality", "two times", "two places"], answer: 1 },
        { kind: "tf", text: "わりに can be used with nouns, verbs and adjectives.", answer: true },
      ],
    },
    { slug: "n3-u11-l02", title: "Despite being: 〜くせに", titleJp: "〜くせに", grammarLabel: "〜くせに",
      summary: "くせに = despite/criticising: 知らないくせに、知ったふりをする.",
      body: { meaning: "Plain + くせに = DESPITE having that quality, they do the opposite (critical/judgemental). 知っているくせに (despite knowing). Very critical — use carefully.", formation: [{ pattern: "Verb plain ＋ くせに", note: "知る→知っているくせに" }, { pattern: "い-adj ＋ くせに", note: "難しいくせに" }, { pattern: "Noun の ＋ くせに", note: "子供のくせに" }], usage: ["Strong criticism — implies the person should know better.", "Similar to のに but more judgemental."], pitfalls: ["Never use with superiors — very rude.", "くせに implies blame or criticism."], related: ["〜のに (neutral)", "〜にもかかわらず"] },
      examples: [
        { jp: "彼は知っているくせに、知らないふりをする。", kana: "かれはしっているくせに、しらないふりをする。", en: "He knows, but pretends not to." },
        { jp: "自分では何もしないくせに、文句ばかり言う。", kana: "じぶんではなにもしないくせに、もんくばかりいう。", en: "He does nothing himself, yet complains constantly." },
        { jp: "子供のくせに、大人みたいな話し方をする。", kana: "こどものくせに、おとなみたいなはなしかたをする。", en: "Despite being a child, he talks like an adult." },
      ],
      practice: [
        { kind: "blank", text: "知っている___、知らないふりをする。", blanks: ["くせに"] },
        { kind: "mcq", text: "くせに is more ___ than のに.", options: ["polite", "critical", "formal", "casual"], answer: 1 },
        { kind: "tf", text: "くせに can be rude if used with superiors.", answer: true },
      ],
    },
    { slug: "n3-u11-l03", title: "Despite: 〜にもかかわらず", titleJp: "〜にもかかわらず", grammarLabel: "〜にもかかわらず",
      summary: "Formal 'despite': 雨にもかかわらず、試合が行われた.",
      body: { meaning: "Plain/noun + にもかかわらず = DESPITE X, the result is surprising or opposite. Very formal — news, essays.", formation: [{ pattern: "Verb plain ＋ にもかかわらず", note: "雨が降るにもかかわらず" }, { pattern: "Noun ＋ にもかかわらず", note: "雨にもかかわらず" }, { pattern: "な-adj ＋ にもかかわらず", note: "静かなにもかかわらず" }], usage: ["Formal — news, essays, reports.", "Stronger than のに.", "Nouns attach directly (no の needed)."], pitfalls: ["Very formal — use のに in casual speech.", "The result must be unexpected."], related: ["〜のに (N4)", "〜くせに"] },
      examples: [
        { jp: "雨にもかかわらず、試合が行われた。", kana: "あめにもかかわらず、しあいがおこなわれた。", en: "Despite the rain, the game took place." },
        { jp: "彼は努力したにもかかわらず、失敗した。", kana: "かれはどりょくしたにもかかわらず、しっぱいした。", en: "Despite his efforts, he failed." },
        { jp: "有名にもかかわらず、彼は謙虚です。", kana: "ゆうめいにもかかわらず、かれはけんきょです。", en: "Despite being famous, he is humble." },
      ],
      practice: [
        { kind: "blank", text: "雨___、試合が行われた。(despite the rain)", blanks: ["にもかかわらず"] },
        { kind: "mcq", text: "にもかかわらず is…", options: ["casual", "formal", "only spoken", "only past"], answer: 1 },
        { kind: "tf", text: "にもかかわらず is stronger than のに.", answer: true },
      ],
    },
    { slug: "n3-u11-l04", title: "Three 'despite' patterns compared", titleJp: "ていこうの まとめ", grammarLabel: "despite summary",
      summary: "わりに (for), くせに (despite being — critical), にもかかわらず (despite — formal).",
      body: { meaning: "Three tools for 'despite': わりに = expectation gap; くせに = criticism; にもかかわらず = formal concession.",
        formation: [
          { pattern: "〜わりに", note: "considering X, surprising result" },
          { pattern: "〜くせに", note: "despite X (critical)" },
          { pattern: "〜にもかかわらず", note: "despite X (formal)" },
        ],
        usage: ["わりに = neutral gap; くせに = blame; にもかかわらず = formal surprise."],
        pitfalls: ["くせに is rude — never with superiors.", "にもかかわらず is the most formal."],
        related: ["lessons 1-3"] },
      examples: [
        { jp: "安いわりに、品質がいい。", kana: "やすいわりに、ひんしつがいい。", en: "Good quality for the price." },
        { jp: "できるくせに、やろうとしない。", kana: "できるくせに、やろうとしない。", en: "He can do it but won't even try." },
        { jp: "困難にもかかわらず、計画は成功した。", kana: "こんなんにもかかわらず、けいかくはせいこうした。", en: "Despite difficulties, the plan succeeded." },
      ],
      practice: [
        { kind: "mcq", text: "Neutral gap between expectation and reality →", options: ["くせに", "わりに", "にもかかわらず", "のに"], answer: 1 },
        { kind: "mcq", text: "Critical/blaming →", options: ["わりに", "くせに", "にもかかわらず", "ので"], answer: 1 },
        { kind: "mcq", text: "Most formal →", options: ["わりに", "くせに", "にもかかわらず", "のに"], answer: 2 },
        { kind: "tf", text: "くせに should never be used with superiors.", answer: true },
      ],
    },
  ],
}
