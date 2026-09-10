import type { AuthoredUnit } from "../../types"

export const u11: AuthoredUnit = {
  level: "N1", order: 11, title: "This or that", titleJp: "ならべあげ",
  description: "Enumerating alternatives: 〜なり〜なり (either…or), 〜やら〜やら (and so on), 〜につけ〜につけ (whenever), 〜であれ〜であれ (whether).",
  vocab: ["方法|ほうほう", "選択|せんたく", "意見|いけん", "相談|そうだん", "旅行|りょこう", "出張|しゅっちょう", "荷物|にもつ", "掃除|そうじ", "洗濯|せんたく", "忙しい|いそがしい", "目にする|めにする", "耳にする|みみにする", "状況|じょうきょう", "対応|たいおう", "勝つ|かつ", "負ける|まける"],
  kanji: ["択", "意", "見", "旅", "張", "荷", "洗", "濯", "応"],
  exam: [
    { kind: "mcq", text: "「分からないことがあれば、先生になり友達になり相談しなさい。」 — なり〜なり means…", options: ["neither", "ask either the teacher or friends", "only the teacher", "ask no one"], answer: 1 },
    { kind: "mcq", text: "「行くやら行かないやら、はっきりしない。」 means…", options: ["He decided clearly.", "Going or not, it's unclear — mixed claims.", "He refuses to go.", "He goes every time."], answer: 1 },
  ],
  lessons: [
    { slug: "n1-u11-l01", title: "Either…or: 〜なり〜なり", titleJp: "〜なり〜なり", grammarLabel: "〜なり〜なり",
      summary: "なり〜なり = A or B (whichever works): 電話なりメールなり.",
      body: { meaning: "A + なり + B + なり = A OR B (whichever suits): 映画なり舞台なり見に行こう.", formation: [{ pattern: "A なり B なり", note: "A or B" }, { pattern: "Verb る ＋ なり", note: "食べるなり飲むなり" }], usage: ["Suggestions with free choice.", "Casual-leaning imperative contexts."], pitfalls: ["Two or more alternatives, not exhaustive.", "Imperatives often follow."], related: ["〜とか〜とか", "〜やら〜やら"] },
      examples: [
        { jp: "休みの日には、本を読むなり散歩なりして過ごす。", kana: "やすみのひには、ほんをよむなりさんぽなりしてすごす。", en: "On days off, I spend time reading or taking walks." },
        { jp: "困ったときは、家族なり友人なりに相談するといい。", kana: "こまったときは、かぞくなりゆうじんなりにそうだんするといい。", en: "When in trouble, consult family or friends." },
        { jp: "留守なら、電話なりメールなりを残しておいて。", kana: "るすなら、でんわなりメールなりをのこしておいて。", en: "If they're out, leave a call or message." },
      ],
      practice: [
        { kind: "blank", text: "家族___、友人___に相談するといい。", blanks: ["なり", "なり"] },
        { kind: "mcq", text: "なり〜なり implies the choice is…", options: ["fixed", "free", "forbidden", "past"], answer: 1 },
        { kind: "tf", text: "Verbs take dictionary form before なり.", answer: true },
      ],
    },
    { slug: "n1-u11-l02", title: "And so on: 〜やら〜やら", titleJp: "〜やら〜やら", grammarLabel: "〜やら〜やら",
      summary: "やら〜やら = A and B and whatnot (often overwhelming): 荷造りやら掃除やら.",
      body: { meaning: "A + やら + B + やら = A, B, AND MORE (list feels chaotic): 引っ越しやら出張やらで忙しい.", formation: [{ pattern: "A やら B やら", note: "A and B and such" }, { pattern: "Verb plain ＋ やら", note: "泣くやら笑うやら" }], usage: ["Overwhelmed or listing examples.", "Emotional coloring."], pitfalls: ["List is non-exhaustive.", "Different from なり〜なり (free choice)."], related: ["〜なり〜なり", "〜とか〜とか"] },
      examples: [
        { jp: "荷造りやら掃除やらで、週末はつぶれた。", kana: "にづくりやらそうじやらで、しゅうまつはつぶれた。", en: "Packing and cleaning and more — the weekend was gone." },
        { jp: "会場は泣くやら笑うやら、大騒ぎだった。", kana: "かいじょうはなくやらわらうやら、おおさわぎだった。", en: "The hall was pandemonium — people crying, laughing…" },
        { jp: "電車が止まるやらバスが来ないやら、さんざんだった。", kana: "でんしゃがとまるやらバスがこないやら、さんざんだった。", en: "Trains stopping, buses not coming — what an ordeal." },
      ],
      practice: [
        { kind: "blank", text: "荷造り___、掃除___で、週末はつぶれた。", blanks: ["やら", "やら"] },
        { kind: "mcq", text: "やら〜やら lists feel…", options: ["orderly", "chaotic/exhaustive-ish", "complete", "forbidden"], answer: 1 },
        { kind: "tf", text: "Verbs can appear before やら.", answer: true },
      ],
    },
    { slug: "n1-u11-l03", title: "Whenever: 〜につけ", titleJp: "〜につけ", grammarLabel: "〜につけ",
      summary: "につけ〜につけ = every time X (emotion triggered): 見るにつけ聞くにつけ.",
      body: { meaning: "Verb る + につけ(て) = EVERY TIME X HAPPENS, (a feeling): 母の料理を見るにつけ、故郷を思い出す.", formation: [{ pattern: "Verb る ＋ につけ", note: "見るにつけ" }, { pattern: "A につけ B につけ", note: "whether A or B" }], usage: ["Recurring emotional response.", "A〜Bにつけ = no matter which."], pitfalls: ["Emotive main clause expected.", "Fixed pair verbs: 見る/聞く."], related: ["〜たびに (N3)", "〜たとたん (N2)"] },
      examples: [
        { jp: "母の姿を見るにつけ、感謝の気持ちが湧く。", kana: "ははのすがたをみるにつけ、かんしゃのきもちがわく。", en: "Every time I see my mother, gratitude wells up." },
        { jp: "ニュースを聞くにつけ、将来が心配になる。", kana: "ニュースをきくにつけ、しょうらいがしんぱいになる。", en: "Each time I hear the news, I worry about the future." },
        { jp: "うまくいったにつけ、うまくいかないにつけ、記録を残す。", kana: "うまくいったにつけ、うまくいかないにつけ、きろくをのこす。", en: "Win or lose, I keep a record." },
      ],
      practice: [
        { kind: "blank", text: "母の姿を見る___、感謝の気持ちが湧く。", blanks: ["につけ"] },
        { kind: "mcq", text: "につけ describes a response that is…", options: ["one-time", "recurring/emotive", "forbidden", "physical"], answer: 1 },
        { kind: "tf", text: "AにつけBにつけ = whether A or B.", answer: true },
      ],
    },
    { slug: "n1-u11-l04", title: "Whether: 〜であれ〜であれ", titleJp: "〜であれ〜であれ", grammarLabel: "〜であれ〜であれ",
      summary: "であれ〜であれ = whether A or B: 勝つであれ負けるであれ.",
      body: { meaning: "A + であれ + B + であれ = WHETHER A OR B, Y holds: 賛成であれ反対であれ、理由は要る.", formation: [{ pattern: "A であれ B であれ", note: "whether A or B" }, { pattern: "Noun ＋ であれ", note: "child for adults" }, { pattern: "Verb plain ＋ であれ", note: "formal" }], usage: ["Formal, decisive.", "Both paths lead to same Y."], pitfalls: ["であれ is the classical copula in imperative.", "Similar to にしろ〜にしろ but heavier."], related: ["〜にしろ〜にしろ (N1 u04)", "〜であろうと"] },
      examples: [
        { jp: "勝つであれ、負けるであれ、全力を出すことに変わりはない。", kana: "かつであれ、まけるであれ、ぜんりょくをだすことにかわりはない。", en: "Win or lose, giving my all doesn't change." },
        { jp: "大人であれ子どもであれ、規則は守るべきだ。", kana: "おとなであれこどもであれ、きそくはまもるべきだ。", en: "Adult or child, rules should be followed." },
        { jp: "雨天であれ、出発であれ、連絡は必須だ。", kana: "うてんであれ、しゅっぱつであれ、れんらくはひっすだ。", en: "Rain or departure — notification is essential." },
      ],
      practice: [
        { kind: "blank", text: "大人___、子ども___、規則は守るべきだ。", blanks: ["であれ", "であれ"] },
        { kind: "mcq", text: "であれ is the imperative of…", options: ["である", "だ", "です", "にある"], answer: 0 },
        { kind: "tf", text: "であれ〜であれ parallels にしろ〜にしろ.", answer: true },
      ],
    },
  ],
}
