import type { AuthoredUnit } from "../../types"

export const u02: AuthoredUnit = {
  level: "N1", order: 2, title: "Merely and minimally", titleJp: "たった ひとつ",
  description: "Quantity and sufficiency: 〜にすぎない (merely), 〜のみ (only, formal), 〜たりとも (not even one), 〜に足る (worthy of).",
  vocab: ["無意味|むいみ", "幻想|げんそう", "可能性|かのうせい", "事実|じじつ", "根拠|こんきょ", "少数|しょうすう", "多数|たすう", "権利|けんり", "義務|ぎむ", "証拠|しょうこ", "容疑|ようぎ", "有罪|ゆうざい", "無罪|むざい", "一日|いちにち", "一円|いちえん", "記録|きろく"],
  kanji: ["幻", "想", "容", "疑", "罪", "証", "拠", "権", "足"],
  exam: [
    { kind: "mcq", text: "「それは単なる推測にすぎない。」 means…", options: ["It's a proven fact.", "It's nothing more than a guess.", "It's an important theory.", "It's forbidden to guess."], answer: 1 },
    { kind: "mcq", text: "「一日たりとも、練習を休まなかった。」 means…", options: ["He rested every day.", "He didn't miss practice for even one day.", "He practiced one day only.", "He quit after a day."], answer: 1 },
  ],
  lessons: [
    { slug: "n1-u02-l01", title: "Merely: 〜にすぎない", titleJp: "〜にすぎない", grammarLabel: "〜にすぎない",
      summary: "にすぎない = nothing more than X: 単なる推測にすぎない.",
      body: { meaning: "Plain / noun + にすぎない = X IS NOTHING MORE THAN X — downplaying: それは神話にすぎない.", formation: [{ pattern: "Noun ＋ にすぎない", note: "推測にすぎない" }, { pattern: "Verb plain ＋ にすぎない", note: "一部を述べたにすぎない" }], usage: ["Written, critical or modest tone.", "Often with 単なる/ほんの."], pitfalls: ["Downplays significance — not neutral.", "Opposite nuance: にほかならない (nothing but, emphatic)."], related: ["〜にほかならない", "〜のみ"] },
      examples: [
        { jp: "それは単なる推測にすぎない。", kana: "それはたんなるすいそくにすぎない。", en: "That is nothing more than a guess." },
        { jp: "彼の成功は、幸運にすぎないという人もいる。", kana: "かれのせいこうは、こううんにすぎないというひともいる。", en: "Some say his success is mere luck." },
        { jp: "この記録は、まだ序章にすぎない。", kana: "このきろくは、まだじょしょうにすぎない。", en: "This record is still only the opening chapter." },
      ],
      practice: [
        { kind: "blank", text: "それは単なる推測___。", blanks: ["にすぎない"] },
        { kind: "mcq", text: "にすぎない ___ the significance of X.", options: ["boosts", "downplays", "doubts", "repeats"], answer: 1 },
        { kind: "tf", text: "にほかならない emphasises instead of downplaying.", answer: true },
      ],
    },
    { slug: "n1-u02-l02", title: "Only (formal): 〜のみ", titleJp: "〜のみ", grammarLabel: "〜のみ",
      summary: "のみ = only (written): 本日限り、会員のみ入場可.",
      body: { meaning: "Noun + のみ = ONLY X (formal version of だけ): 会員のみご利用いただけます.", formation: [{ pattern: "Noun ＋ のみ", note: "会員のみ members only" }, { pattern: "Verb plain ＋ のみ", note: "待つのみ all one can do is wait" }, { pattern: "〜のみならず", note: "not only" }], usage: ["Signs, rules, formal writing.", "待つのみ = nothing to do but wait."], pitfalls: ["のみ = だけ in register only.", "のみならず extends (see u16)."], related: ["〜だけ (N5)", "〜のみならず"] },
      examples: [
        { jp: "本日限り、会員のみ入場できます。", kana: "ほんじつかぎり、かいいんのみにゅうじょうできます。", en: "Today only, entry is limited to members." },
        { jp: "今は結果を待つのみだ。", kana: "いまはけっかをまつのみだ。", en: "Now all we can do is wait for the results." },
        { jp: "証拠のみが真実を語る。", kana: "しょうこのみがしんじつをかたる。", en: "Only the evidence tells the truth." },
      ],
      practice: [
        { kind: "blank", text: "本日限り、会員___入場できます。", blanks: ["のみ"] },
        { kind: "mcq", text: "のみ is the formal version of…", options: ["しか", "だけ", "も", "ほど"], answer: 1 },
        { kind: "tf", text: "待つのみ means 'all one can do is wait'.", answer: true },
      ],
    },
    { slug: "n1-u02-l03", title: "Not even one: 〜たりとも", titleJp: "〜たりとも", grammarLabel: "〜たりとも",
      summary: "たりとも = not even one: 一日たりとも忘れたことはない.",
      body: { meaning: "Number + たりとも + negative = NOT EVEN ONE X: 一円たりとも無駄にできない.", formation: [{ pattern: "Number ＋ たりとも 〜ない", note: "一日たりとも休まない" }, { pattern: "一刻たりとも", note: "not for a moment" }], usage: ["Emphatic totality with negatives.", "Formal, resolute tone."], pitfalls: ["Always with a negative predicate.", "Common with 一日・一刻・一瞬・一円."], related: ["〜も〜ない (N5)", "〜のみ"] },
      examples: [
        { jp: "一日たりとも、練習を休まなかった。", kana: "いちにちたりとも、れんしゅうをやすまなかった。", en: "He never missed practice, not even for one day." },
        { jp: "一円たりとも無駄に使うな。", kana: "いちえんたりともむだにつかうな。", en: "Don't waste even a single yen." },
        { jp: "一刻たりとも、監視を怠ってはならない。", kana: "いっこくたりとも、かんしをおこたってはならない。", en: "Not even a moment of vigilance may be neglected." },
      ],
      practice: [
        { kind: "blank", text: "一日___、練習を休まなかった。", blanks: ["たりとも"] },
        { kind: "mcq", text: "たりとも pairs with…", options: ["positive verbs", "negatives", "questions", "commands"], answer: 1 },
        { kind: "tf", text: "一刻たりとも means 'not even for a moment'.", answer: true },
      ],
    },
    { slug: "n1-u02-l04", title: "Worthy of: 〜に足る", titleJp: "〜に足る", grammarLabel: "〜に足る",
      summary: "に足る = worthy of X: 信じるに足る人物.",
      body: { meaning: "Verb dictionary + に足る/に足りない = WORTHY OF X / not worth X: 信じるに足る、問題にするに足りない.", formation: [{ pattern: "Verb る ＋ に足る", note: "信じるに足る" }, { pattern: "Verb る ＋ に足りない", note: "問題にするに足りない" }], usage: ["Evaluation of worth — formal.", "に足りない downplays the object."], pitfalls: ["足る = classical ある系 verb 'to suffice'.", "Fixed verbs: 信じる・頼る・問題にする."], related: ["〜に値する", "〜にすぎない"] },
      examples: [
        { jp: "彼は信じるに足る人物だ。", kana: "かれはしんじるにたるじんぶつだ。", en: "He is a person worthy of trust." },
        { jp: "その噂は、問題にするに足りない。", kana: "そのうわさは、もんだいにするにたりない。", en: "That rumor isn't worth making an issue of." },
        { jp: "誇るに足る記録を残したい。", kana: "ほこるにたるきろくをのこしたい。", en: "I want to leave a record worth being proud of." },
      ],
      practice: [
        { kind: "blank", text: "彼は信じる___人物だ。", blanks: ["に足る"] },
        { kind: "mcq", text: "に足りない means…", options: ["very important", "not worth X", "necessary", "forbidden"], answer: 1 },
        { kind: "tf", text: "に足る is formal/evaluative.", answer: true },
      ],
    },
  ],
}
