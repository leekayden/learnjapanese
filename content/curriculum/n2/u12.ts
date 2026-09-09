import type { AuthoredUnit } from "../../types"

export const u12: AuthoredUnit = {
  level: "N2", order: 12, title: "How sure are we?", titleJp: "すいい の ぶんぽう",
  description: "Certainty and risk: 〜に違いない (must be), 〜に決まっている (for sure), 〜おそれがある (risk of), 〜はずがない (impossible).",
  vocab: ["確信|かくしん", "証拠|しょうこ", "真実|しんじつ", "誤解|ごかい", "事故|じこ", "原因|げんいん", "調査|ちょうさ", "結果|けっか", "発表|はっぴょう", "品物|しなもの", "欠陥|けっかん", "回収|かいしゅう", "判断|はんだん", "間違い|まちがい", "可能性|かのうせい", "警戒|けいかい"],
  kanji: ["確", "信", "証", "拠", "誤", "欠", "陥", "収", "戒"],
  exam: [
    { kind: "mcq", text: "「彼は犯人に違いない。」 means…", options: ["He's certainly not the culprit.", "He must be the culprit.", "He might be the culprit.", "The culprit confessed."], answer: 1 },
    { kind: "mcq", text: "「この品物には欠陥があるおそれがある。」 means…", options: ["The product is perfect.", "There's a risk the product is defective.", "The defect was fixed.", "Defects are impossible."], answer: 1 },
  ],
  lessons: [
    { slug: "n2-u12-l01", title: "Must be: 〜に違いない", titleJp: "〜に違いない", grammarLabel: "〜に違いない",
      summary: "に違いない = must be (confident inference): 彼は犯人に違いない.",
      body: { meaning: "Plain + に違いない = X MUST BE TRUE (based on evidence): 証拠から見て、彼は犯人に違いない.", formation: [{ pattern: "Verb plain ＋ に違いない", note: "違うに違いない" }, { pattern: "Noun ＋ に違いない", note: "犯人に違いない" }], usage: ["Confident deduction.", "Common in detective fiction and analysis."], pitfalls: ["Confidence level: に違いない > だろう > かもしれない.", "Nouns attach directly."], related: ["〜に決まっている", "〜はずだ (N4)"] },
      examples: [
        { jp: "証拠から見て、彼は犯人に違いない。", kana: "しょうこからみて、かれははんにんにちがいない。", en: "Judging by the evidence, he must be the culprit." },
        { jp: "彼は誤解しているに違いない。", kana: "かれはごかいしているにちがいない。", en: "He must have misunderstood." },
        { jp: "この結果は計算ミスに違いない。", kana: "このけっかはけいさんミスにちがいない。", en: "This result must be a calculation error." },
      ],
      practice: [
        { kind: "blank", text: "証拠から見て、彼は犯人___。", blanks: ["に違いない"] },
        { kind: "mcq", text: "に違いない is based on…", options: ["wishes", "evidence", "rules", "habits"], answer: 1 },
        { kind: "tf", text: "に違いない is more confident than かもしれない.", answer: true },
      ],
    },
    { slug: "n2-u12-l02", title: "For sure: 〜に決まっている", titleJp: "〜に決まっている", grammarLabel: "〜に決まっている",
      summary: "に決まっている = it's for sure (subjective): そんな嘘に決まっている.",
      body: { meaning: "Plain + に決まっている = IT'S OBVIOUS / FOR SURE — subjective assertion: 彼は嘘をついているに決まっている.", formation: [{ pattern: "Verb plain ＋ に決まっている", note: "うそに決まっている" }, { pattern: "い-adj ＋ に決まっている", note: "高いに決まっている" }], usage: ["Casual, strong opinion.", "More emotional than に違いない."], pitfalls: ["Subjective — avoid in formal writing.", "Similar to に違いない but feels colloquial."], related: ["〜に違いない", "〜にすぎない (N1)"] },
      examples: [
        { jp: "そんな嘘に決まっている。", kana: "そうなうそにきまっている。", en: "That's obviously a lie." },
        { jp: "彼は遅刻するに決まっている。", kana: "かれはちこくするにきまっている。", en: "He's sure to be late (as always)." },
        { jp: "この品物は高いに決まっている。", kana: "このしなものはたかいにきまっている。", en: "This product is bound to be expensive." },
      ],
      practice: [
        { kind: "blank", text: "そんな嘘___。(for sure)", blanks: ["に決まっている"] },
        { kind: "mcq", text: "に決まっている is…", options: ["formal", "colloquial and strong", "humble", "archaic"], answer: 1 },
        { kind: "tf", text: "Nouns attach directly: うそに決まっている.", answer: true },
      ],
    },
    { slug: "n2-u12-l03", title: "Risk of: 〜おそれがある", titleJp: "〜おそれがある", grammarLabel: "〜おそれがある",
      summary: "おそれがある = there's a risk of: 洪水が起こるおそれがある.",
      body: { meaning: "Verb plain / noun の + おそれがある = THERE'S A RISK OF X (formal warning): 老朽化した橋は崩壊するおそれがある.", formation: [{ pattern: "Verb plain ＋ おそれがある", note: "起こるおそれがある" }, { pattern: "Noun ＋ のおそれがある", note: "欠陥のおそれがある" }], usage: ["Warnings in news, manuals, advisories.", "Formal — not casual speech."], pitfalls: ["Neutral risk — not certainty.", "おそれがない = no risk."], related: ["〜かねない (N3)", "〜に違いない"] },
      examples: [
        { jp: "大雨で、洪水が起こるおそれがある。", kana: "おおあめで、こうずいがおこるおそれがある。", en: "Heavy rain may cause flooding." },
        { jp: "この品物には、欠陥のおそれがあるため、回収します。", kana: "このしなものには、けっかんのおそれがあるため、かいしゅうします。", en: "As this product may be defective, we are recalling it." },
        { jp: "放置すれば、被害が広がるおそれがある。", kana: "ほうちすれば、ひがいがひろがるおそれがある。", en: "If left unaddressed, the damage may spread." },
      ],
      practice: [
        { kind: "blank", text: "大雨で、洪水が起こる___がある。", blanks: ["おそれ"] },
        { kind: "mcq", text: "おそれがある appears most in…", options: ["casual chat", "formal warnings", "recipes", "diaries"], answer: 1 },
        { kind: "tf", text: "おそれがない means 'there's no risk'.", answer: true },
      ],
    },
    { slug: "n2-u12-l04", title: "Can't be: 〜はずがない", titleJp: "〜はずがない", grammarLabel: "〜はずがない",
      summary: "はずがない = can't possibly be: 彼が嘘をつくはずがない.",
      body: { meaning: "Plain + はずがない = X CANNOT BE TRUE (strong denial): 彼が知っているはずがない.", formation: [{ pattern: "Verb plain ＋ はずがない", note: "知るはずがない" }, { pattern: "い-adj ＋ はずがない", note: "高いはずがない" }], usage: ["Confident denial of a claim.", "Follows logic or known facts."], pitfalls: ["はずがない (impossible) ≠ はずだ (should be).", "Stronger than ないだろう."], related: ["〜に違いない", "〜わけがない (N3)"] },
      examples: [
        { jp: "彼が嘘をつくはずがない。", kana: "かれがうそをつくはずがない。", en: "There's no way he would lie." },
        { jp: "宝くじが当たるはずがない。", kana: "たからくじがあたるはずがない。", en: "There's no way the lottery would win." },
        { jp: "この結果は偶然のはずがない。", kana: "このけっかはぐうぜんのはずがない。", en: "This result can't be a coincidence." },
      ],
      practice: [
        { kind: "blank", text: "彼が嘘をつく___。(can't be)", blanks: ["はずがない"] },
        { kind: "mcq", text: "はずがない vs はずだ:", options: ["same", "ない = impossible; だ = should be", "だ = impossible; ない = should", "both impossible"], answer: 1 },
        { kind: "tf", text: "はずがない is a strong denial.", answer: true },
      ],
    },
  ],
}
