import type { AuthoredUnit } from "../../types"

export const u03: AuthoredUnit = {
  level: "N2", order: 3, title: "Formal contrast", titleJp: "けいしきてきな ぎもん",
  description: "Written-style concessions: 〜ものの (although), 〜ながら(も) (while/although), 〜つつ (while), 〜がち (tendency review).",
  vocab: ["期待|きたい", "実際|じっさい", "満足|まんぞく", "成績|せいせき", "向上|こうじょう", "意識|いしき", "健康|けんこう", "運動|うんどう", "休み|やすみ", "働く|はたらく", "疲れ|つかれ", "残る|のこる", "疑問|ぎもん", "解決|かいけつ", "安心|あんしん", "不安|ふあん"],
  kanji: ["期", "待", "際", "満", "足", "疑", "疲", "残", "楽"],
  exam: [
    { kind: "mcq", text: "「新しいパソコンを買ったものの、使い方がよく分からない。」 means…", options: ["I bought a PC because I understood it.", "Although I bought a new PC, I don't really know how to use it.", "I won't buy a PC.", "I understood the PC completely."], answer: 1 },
    { kind: "mcq", text: "「彼女は働きながら、大学にも通っている。」 — ながら means…", options: ["although she doesn't work", "while working (simultaneous)", "instead of working", "because of work"], answer: 1 },
  ],
  lessons: [
    { slug: "n2-u03-l01", title: "Although: 〜ものの", titleJp: "〜ものの", grammarLabel: "〜ものの",
      summary: "ものの = although (unfulfilled expectation): 買ったものの、使っていない.",
      body: { meaning: "Plain + ものの = ALTHOUGH X, (contrary outcome): 新しいカメラを買ったものの、ほとんど使っていない.", formation: [{ pattern: "Verb plain ＋ ものの", note: "買ったものの" }, { pattern: "い-adj ＋ ものの", note: "難しいものの" }, { pattern: "Noun ＋ であるものの", note: "formal" }], usage: ["Written/formal.", "The second clause must be contrary to expectation."], pitfalls: ["Expectation: buying → using; reality: not using.", "Different from が/けど — ものの is more written-style."], related: ["〜が (N4)", "〜ながら(も)"] },
      examples: [
        { jp: "新しいパソコンを買ったものの、使い方がよく分からない。", kana: "あたらしいパソコンをかったものの、つかいかたがよくわからない。", en: "Although I bought a new PC, I don't really understand how to use it." },
        { jp: "期待して行ったものの、映画はつまらなかった。", kana: "きたいしていったものの、えいがはつまらなかった。", en: "I went with high hopes, but the movie was boring." },
        { jp: "合格はしたものの、成績は満足できない。", kana: "ごうかくはしたものの、せいせきはまんぞくできない。", en: "Although I passed, I can't be satisfied with the score." },
      ],
      practice: [
        { kind: "blank", text: "新しいパソコンを買った___、使い方が分からない。", blanks: ["ものの"] },
        { kind: "mcq", text: "ものの is…", options: ["spoken", "written-style", "past only", "future only"], answer: 1 },
        { kind: "tf", text: "The second clause after ものの must go against expectation.", answer: true },
      ],
    },
    { slug: "n2-u03-l02", title: "While: 〜ながら(も)", titleJp: "〜ながら(も)", grammarLabel: "〜ながら(も)",
      summary: "ながら = while (simultaneous); ながらも = although.",
      body: { meaning: "Verb ます-stem + ながら = WHILE DOING X (simultaneous): 音楽を聞きながら勉強する. Add も for ALTHOUGH: 狭いながらも楽しい我が家.", formation: [{ pattern: "Verb ます-stem ＋ ながら", note: "働きながら while working" }, { pattern: "〜ながらも", note: "although (formal)" }, { pattern: "い-adj ＋ ながらも", note: "狭いながらも" }], usage: ["Simultaneous actions (one main, one background).", "ながらも = written-style concession."], pitfalls: ["With verbs: use ます-stem, not て-form.", "ながらも implies tension between the two facts."], related: ["〜つつ", "〜ても"] },
      examples: [
        { jp: "彼女は働きながら、大学にも通っている。", kana: "かのじょははたらきながら、だいがくにもかよっている。", en: "She works while also attending university." },
        { jp: "趣味のバイトをしながら、留学資金を貯めている。", kana: "しゅみのバイトをしながら、りゅうがくしきんをためている。", en: "While doing a hobby job, I'm saving study-abroad funds." },
        { jp: "狭いながらも、楽しい我が家だ。", kana: "せまいながらも、たのしいわがいえだ。", en: "Though small, my home is a happy one." },
      ],
      practice: [
        { kind: "blank", text: "彼女は働き___、大学にも通っている。", blanks: ["ながら"] },
        { kind: "mcq", text: "Verb before ながら takes…", options: ["て-form", "ます-stem", "past", "ba-form"], answer: 1 },
        { kind: "mcq", text: "狭いながらも expresses…", options: ["simultaneity", "concession", "condition", "cause"], answer: 1 },
      ],
    },
    { slug: "n2-u03-l03", title: "While (formal): 〜つつ", titleJp: "〜つつ", grammarLabel: "〜つつ",
      summary: "つつ = while (written); つつも = although: 体に悪いと知りつつ、吸う.",
      body: { meaning: "Verb ます-stem + つつ = WHILE (written-style): 働きつつ勉強する. つつも = ALTHOUGH, often with knowing: 体に悪いと知りつつ、たばこを吸う.", formation: [{ pattern: "Verb ます-stem ＋ つつ", note: "働きつつ" }, { pattern: "〜つつも", note: "although" }, { pattern: "Verb ＋ つつある", note: "is in the process of (u13)" }], usage: ["Very written.", "知りつつ is a set phrase — knowing full well."], pitfalls: ["Same stem rule as ながら.", "つつある (progress) is different — covered in u13."], related: ["〜ながら", "〜つつある"] },
      examples: [
        { jp: "体に悪いと知りつつ、彼はたばこを吸い続ける。", kana: "からだにわるいとしりつつ、かれはたばこをすいつづける。", en: "Knowing full well it's bad for his health, he keeps smoking." },
        { jp: "留学生は働きつつ、勉強している。", kana: "りゅうがくせいははたらきつつ、べんきょうしている。", en: "International students study while working." },
        { jp: "卑怯だと思いつつも、彼はその方法を選んだ。", kana: "ひこうだと思いつつも、かれはそのほうほうをえらんだ。", en: "Although he knew it was unfair, he chose that method." },
      ],
      practice: [
        { kind: "blank", text: "体に悪いと知り___、たばこを吸う。", blanks: ["つつ"] },
        { kind: "mcq", text: "つつ is…", options: ["casual", "written-style", "only past", "only future"], answer: 1 },
        { kind: "tf", text: "つつも adds a concessive 'although' nuance.", answer: true },
      ],
    },
    { slug: "n2-u03-l04", title: "Contrast toolkit", titleJp: "はんめん まとめ", grammarLabel: "review",
      summary: "ものの・ながらも・つつも all express 'although' — register and nuance differ.",
      body: { meaning: "Written concessions: ものの (clause-final, most common), ながらも (tension), つつも (awareness).",
        formation: [
          { pattern: "〜ものの", note: "although (most common written)" },
          { pattern: "〜ながらも", note: "although (tension between facts)" },
          { pattern: "〜つつも", note: "although (knowing/sensing)" },
        ],
        usage: ["ものの = general; ながらも/つつも = more literary.", "All require a contrary second clause."],
        pitfalls: ["ながら/つつ (without も) = simultaneity, not concession.", "Register: が < けど < ものの (written)."],
        related: ["lessons 1-3"] },
      examples: [
        { jp: "健康のために運動を始めたものの、三日でやめてしまった。", kana: "けんこうのためにうんどうをはじめたものの、みっかでやめてしまった。", en: "I started exercising for my health, but quit in three days." },
        { jp: "忙しいながらも、家族との時間を大切にしている。", kana: "いそがしいながらも、かぞくとのじかんをたいせつにしている。", en: "Though busy, I value time with my family." },
        { jp: "不安を感じつつも、新しい仕事に挑戦した。", kana: "ふあんをかんじつつも、あたらしいしごとにちょうせんした。", en: "Though feeling anxious, I took on the new job." },
      ],
      practice: [
        { kind: "mcq", text: "Most common written 'although':", options: ["ながらも", "ものの", "つつも", "とはいえ"], answer: 1 },
        { kind: "mcq", text: "知りつつ implies…", options: ["ignorance", "full awareness", "simultaneity only", "obligation"], answer: 1 },
        { kind: "tf", text: "ながら without も expresses simultaneity.", answer: true },
      ],
    },
  ],
}
