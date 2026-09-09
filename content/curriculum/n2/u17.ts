import type { AuthoredUnit } from "../../types"

export const u17: AuthoredUnit = {
  level: "N2", order: 17, title: "Framing your view", titleJp: "はんい と かくど",
  description: "Perspective and framing: 〜からすると (from the standpoint of), 〜から言うと (speaking in terms of), 〜というより (rather than), 〜にしても (even granting).",
  vocab: ["視点|してん", "立場|たちば", "評価|ひょうか", "判断|はんだん", "基準|きじゅん", "経験|けいけん", "役割|やくわり", "指示|しじ", "命令|めいれい", "提案|ていあん", "採用|さいよう", "承認|しょうにん", "改善|かいぜん", "問題点|もんだいてん", "観点|かんてん", "視線|しせん"],
  kanji: ["視", "点", "場", "準", "割", "示", "採", "承", "観"],
  exam: [
    { kind: "mcq", text: "「彼の経験からすると、この判断は正しいだろう。」 means…", options: ["His experience is wrong.", "Judging from his experience, this decision is probably right.", "He lacks experience.", "The decision has nothing to do with experience."], answer: 1 },
    { kind: "mcq", text: "「これは旅行というより、冒険だ。」 means…", options: ["It's a trip, not an adventure.", "It's more an adventure than a trip.", "Adventures are trips.", "It's neither."], answer: 1 },
  ],
  lessons: [
    { slug: "n2-u17-l01", title: "From the standpoint of: 〜からすると", titleJp: "〜からすると", grammarLabel: "〜からすると",
      summary: "からすると = judging from X's standpoint: 学生の立場からすると.",
      body: { meaning: "Noun + からすると/からすれば = FROM X'S STANDPOINT: 親の立場からすると、心配なのは当然だ.", formation: [{ pattern: "Noun ＋ からすると", note: "学生からすると" }, { pattern: "〜からすれば", note: "variant" }], usage: ["Perspective of a person/group.", "Judgments follow."], pitfalls: ["X is usually a viewpoint holder.", "から見ると is similar."], related: ["〜から言うと", "〜にとって (N3)"] },
      examples: [
        { jp: "学生の立場からすると、この授業は難しすぎる。", kana: "がくせいのたちばからすると、このじゅぎょうはむずかしすぎる。", en: "From the students' standpoint, this class is too hard." },
        { jp: "彼の経験からすれば、この判断は正しいだろう。", kana: "かれのけいけんからすれば、このはんだんはただしいだろう。", en: "Judging from his experience, this decision is probably right." },
        { jp: "消費者の観点からすると、価格はまだ高い。", kana: "しょうひしゃのかんてんからすると、かかくはまだたかい。", en: "From the consumer's perspective, the price is still high." },
      ],
      practice: [
        { kind: "blank", text: "学生の立場___、この授業は難しすぎる。", blanks: ["からすると"] },
        { kind: "mcq", text: "からすると takes the viewpoint of…", options: ["objects", "people/groups", "verbs", "places"], answer: 1 },
        { kind: "tf", text: "からすれば is a variant of からすると.", answer: true },
      ],
    },
    { slug: "n2-u17-l02", title: "In terms of: 〜から言うと", titleJp: "〜から言うと", grammarLabel: "〜から言うと",
      summary: "から言うと = speaking in terms of X: 価格から言うと、お得だ.",
      body: { meaning: "Noun + から言うと/から言えば = IN TERMS OF X: 性能から言えば、このモデルが一番だ.", formation: [{ pattern: "Noun ＋ から言うと", note: "価格から言うと" }, { pattern: "〜から言えば", note: "variant" }], usage: ["Evaluating by one criterion.", "Often with 最も/一番."], pitfalls: ["Criterion (price, skill) not person.", "言う is fixed — other verbs don't fit."], related: ["〜からすると", "〜という点で"] },
      examples: [
        { jp: "価格から言うと、このプランはお得だ。", kana: "かかくからいうと、このプランはおとくだ。", en: "In terms of price, this plan is a good deal." },
        { jp: "性能から言えば、こちらの機種が優れている。", kana: "せいのうからいえば、こちらのきしゅがすぐれている。", en: "In terms of performance, this model is superior." },
        { jp: "健康から言うと、歩く習慣は大切だ。", kana: "けんこうからいうと、あるくしゅうかんはたいせつだ。", en: "In terms of health, the habit of walking is important." },
      ],
      practice: [
        { kind: "blank", text: "価格___、このプランはお得だ。", blanks: ["から言うと"] },
        { kind: "mcq", text: "から言うと evaluates by…", options: ["a person", "a criterion", "a time", "a place"], answer: 1 },
        { kind: "tf", text: "から言えば is a valid variant.", answer: true },
      ],
    },
    { slug: "n2-u17-l03", title: "Rather than: 〜というより", titleJp: "〜というより", grammarLabel: "〜というより",
      summary: "というより = rather than calling it X: これは旅行というより、冒険だ.",
      body: { meaning: "Plain + というより(むしろ) = RATHER THAN X, it's closer to Y: 彼は冷静というより、無関心だ.", formation: [{ pattern: "Plain ＋ というより", note: "旅行というより" }, { pattern: "〜というより むしろ 〜", note: "with emphasis" }], usage: ["Correcting a label.", "Y is the more accurate description."], pitfalls: ["Both X and Y are noun-like descriptions.", "むしろ adds 'rather' emphasis."], related: ["〜というものだ", "〜どころか (u11)"] },
      examples: [
        { jp: "これは旅行というより、冒険だ。", kana: "これはりょこうというより、ぼうけんだ。", en: "This is more an adventure than a trip." },
        { jp: "彼は冷静というより、無関心に見える。", kana: "かれはれいせいというより、むかんしんにみえる。", en: "He looks indifferent rather than calm." },
        { jp: "この提案は改善というより、改革に近い。", kana: "このていあんはかいぜんというより、かいかにちかい。", en: "This proposal is closer to reform than improvement." },
      ],
      practice: [
        { kind: "blank", text: "これは旅行___、冒険だ。", blanks: ["というより"] },
        { kind: "mcq", text: "Y after というより is…", options: ["less accurate", "more accurate", "unrelated", "the same"], answer: 1 },
        { kind: "tf", text: "むしろ can strengthen というより.", answer: true },
      ],
    },
    { slug: "n2-u17-l04", title: "Even granting: 〜にしても", titleJp: "〜にしても", grammarLabel: "〜にしても",
      summary: "にしても = even granting X: 忙しいにしても、連絡くらいはできる.",
      body: { meaning: "Plain + にしても = EVEN GRANTING X, Y stands: 安いにしても、品質が悪いのは問題だ.", formation: [{ pattern: "Plain ＋ にしても", note: "忙しいにしても" }, { pattern: "A にしても B にしても", note: "whether A or B" }], usage: ["Concedes X but still argues Y.", "AにしてもBにしても = in either case."], pitfalls: ["Y is the speaker's main point.", "にしろ/にせよ are formal variants."], related: ["〜としても (N3)", "〜にしろ (N1)"] },
      examples: [
        { jp: "忙しいにしても、連絡くらいはできるはずだ。", kana: "いそがしいにしても、れんらくくらいはできるはずだ。", en: "Even granting you're busy, you could at least reply." },
        { jp: "雨にしても、風にしても、予定は変わりません。", kana: "あめにしても、かぜにしても、よていはかわりません。", en: "Rain or wind, the schedule won't change." },
        { jp: "提案を採用するにしても、承認が必要だ。", kana: "ていあんをさいようするにしても、しょうにんがひつようだ。", en: "Even if we adopt the proposal, approval is needed." },
      ],
      practice: [
        { kind: "blank", text: "忙しい___、連絡くらいはできるはずだ。", blanks: ["にしても"] },
        { kind: "mcq", text: "AにしてもBにしても means…", options: ["only A", "only B", "in either case", "neither"], answer: 2 },
        { kind: "tf", text: "にしろ is a formal variant of にしても.", answer: true },
      ],
    },
  ],
}
