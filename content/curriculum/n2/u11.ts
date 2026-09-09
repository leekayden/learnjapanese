import type { AuthoredUnit } from "../../types"

export const u11: AuthoredUnit = {
  level: "N2", order: 11, title: "Not just that", titleJp: "きょうちょう の ぶんぽう",
  description: "Escalation and emphasis: 〜ばかりか (not only), 〜どころか (far from), 〜はもちろん (of course), 〜に越したことはない (nothing better).",
  vocab: ["値上げ|ねあげ", "不満|ふまん", "売り上げ|うりあげ", "数字|すうじ", "減少|げんしょう", "菜食|さいしょく", "野菜|やさい", "果物|くだもの", "手料理|てりょうり", "外食|がいしょく", "家族|かぞく", "友人|ゆうじん", "大人|おとな", "子ども|こども", "日本語|にほんご", "上達|じょうたつ"],
  kanji: ["齢", "満", "掛", "減", "菜", "果", "理", "童", "達"],
  exam: [
    { kind: "mcq", text: "「彼は漢字ばかりか、ひらがなも読めない。」 — ばかりか means…", options: ["only kanji", "not only kanji (but even)", "except kanji", "because of kanji"], answer: 1 },
    { kind: "mcq", text: "「忙しくて、休むどころか、寝る時間もない。」 means…", options: ["I have lots of rest.", "Far from resting, I don't even have time to sleep.", "I rested and slept.", "Sleeping is easy."], answer: 1 },
  ],
  lessons: [
    { slug: "n2-u11-l01", title: "Not only: 〜ばかりか", titleJp: "〜ばかりか", grammarLabel: "〜ばかりか",
      summary: "ばかりか = not only X but also: 値上げばかりか、サービスも悪くなった.",
      body: { meaning: "Noun / verb + ばかりか = NOT ONLY X BUT (even) Y — escalating: 彼は英語ばかりか、中国語も話せる.", formation: [{ pattern: "Noun ＋ ばかりか", note: "大人ばかりか" }, { pattern: "Verb plain ＋ ばかりか", note: "増えるばかりか" }], usage: ["Escalates to something more extreme.", "Written-leaning but common."], pitfalls: ["Y should exceed X in degree.", "Similar to ばかりでなく (N3) — ばかりか is stronger."], related: ["〜ばかりでなく (N3)", "〜はもちろん"] },
      examples: [
        { jp: "この店は値上げばかりか、サービスも悪くなった。", kana: "このみせはねあげばかりか、サービスもわるくなった。", en: "This shop not only raised prices, but service got worse too." },
        { jp: "彼は英語ばかりか、中国語も話せる。", kana: "かれはえいごばかりか、ちゅうごくごもはなせる。", en: "He speaks not only English but also Chinese." },
        { jp: "売り上げは減るばかりか、赤字になりそうだ。", kana: "うりあげはへるばかりか、あかじになりそうだ。", en: "Sales are not only falling — we may go into the red." },
      ],
      practice: [
        { kind: "blank", text: "この店は値上げ___、サービスも悪くなった。", blanks: ["ばかりか"] },
        { kind: "mcq", text: "ばかりか escalates to something…", options: ["less extreme", "more extreme", "unrelated", "opposite"], answer: 1 },
        { kind: "tf", text: "ばかりか is stronger than ばかりでなく.", answer: true },
      ],
    },
    { slug: "n2-u11-l02", title: "Far from: 〜どころか", titleJp: "〜どころか", grammarLabel: "〜どころか",
      summary: "どころか = far from X (opposite/surprising): 直るどころか、悪くなった.",
      body: { meaning: "Noun / verb + どころか = FAR FROM X, (the opposite) happens: 治るどころか、もっと痛くなった.", formation: [{ pattern: "Noun ＋ どころか", note: "休みどころか" }, { pattern: "Verb plain ＋ どころか", note: "増えるどころか" }], usage: ["Denies X and presents stronger reality.", "Often the reality is worse (or far more)."], pitfalls: ["Different from ばかりか: どころか denies X first.", "〜どころではない = far from being able to."], related: ["〜ばかりか", "〜どころではない"] },
      examples: [
        { jp: "忙しくて、休むどころか、寝る時間もない。", kana: "いそがしくて、やすむどころか、ねるじかんもない。", en: "So busy — far from resting, I don't even have time to sleep." },
        { jp: "風邪は治るどころか、悪くなる一方だ。", kana: "かぜはなおるどころか、わるくなるいっぽうだ。", en: "Far from getting better, my cold just keeps getting worse." },
        { jp: "彼は菜食どころか、毎日肉を食べている。", kana: "かれはさいしょくどころか、まいにちにくをたべている。", en: "He's far from vegetarian — he eats meat every day." },
      ],
      practice: [
        { kind: "blank", text: "忙しくて、休む___、寝る時間もない。", blanks: ["どころか"] },
        { kind: "mcq", text: "どころか first…", options: ["agrees with X", "denies X", "ignores X", "doubles X"], answer: 1 },
        { kind: "tf", text: "治るどころか、悪くなった = it got worse instead of healing.", answer: true },
      ],
    },
    { slug: "n2-u11-l03", title: "Of course: 〜はもちろん", titleJp: "〜はもちろん", grammarLabel: "〜はもちろん",
      summary: "はもちろん = X of course, and Y too: 家族はもちろん、友人も来た.",
      body: { meaning: "Noun + はもちろん(のこと) = X, OF COURSE, and Y as well: 日本語はもちろん、英語も話せる.", formation: [{ pattern: "Noun ＋ はもちろん", note: "大人はもちろん" }, { pattern: "Noun ＋ はもとより", note: "formal variant" }], usage: ["X is the obvious case; Y extends it.", "Both nouns usually same polarity."], pitfalls: ["X must be the more obvious/typical item.", "はもとより = more formal."], related: ["〜ばかりか", "〜をはじめ (N3)"] },
      examples: [
        { jp: "手料理はもちろん、外食も楽しんでいる。", kana: "てりょうりはもちろん、がいしょくもたのしんでいる。", en: "Home cooking, of course, and I enjoy eating out too." },
        { jp: "この果物は大人はもちろん、子どもにも人気だ。", kana: "このくだものはおとなはもちろん、こどもにもにんきだ。", en: "This fruit is popular with adults, of course, and children too." },
        { jp: "彼の数字の読みは、日本語はもとより英語でも速い。", kana: "かれのすうじのよみは、にほんごはもとよりえいごでもはやい。", en: "His number reading is fast in English, let alone Japanese." },
      ],
      practice: [
        { kind: "blank", text: "手料理___、外食も楽しんでいる。", blanks: ["はもちろん"] },
        { kind: "mcq", text: "はもとより is…", options: ["casual", "more formal", "negative", "past"], answer: 1 },
        { kind: "tf", text: "X in はもちろん should be the obvious case.", answer: true },
      ],
    },
    { slug: "n2-u11-l04", title: "Nothing better than: 〜に越したことはない", titleJp: "〜に越したことはない", grammarLabel: "〜に越したことはない",
      summary: "に越したことはない = nothing better than X: 安いに越したことはない.",
      body: { meaning: "Plain + に越したことはない = NOTHING BEATS X / X can't be better: 安いに越したことはない.", formation: [{ pattern: "い-adj ＋ に越したことはない", note: "安いに越したことはない" }, { pattern: "Verb る ＋ に越したことはない", note: "聞くに越したことはない" }], usage: ["Pragmatic advice.", "Similar to に限る but softer."], pitfalls: ["越す = surpass — nothing surpasses X.", "Works with plain (non-past) forms."], related: ["〜に限る (u10)"] },
      examples: [
        { jp: "品物は安いに越したことはない。", kana: "しなものはやすいにこしたことはない。", en: "For goods, cheaper is always better." },
        { jp: "健康には、運動を続けるに越したことはない。", kana: "けんこうには、うんどうをつづけるにこしたことはない。", en: "For health, nothing beats continuing to exercise." },
        { jp: "日本語の上達には、毎日話すに越したことはない。", kana: "にほんごのじょうたつには、まいにちはなすにこしたことはない。", en: "For improving Japanese, nothing beats speaking daily." },
      ],
      practice: [
        { kind: "blank", text: "品物は安い___ことはない。", blanks: ["に越した"] },
        { kind: "mcq", text: "に越したことはない is…", options: ["stronger than に限る", "softer than に限る", "unrelated to に限る", "negative"], answer: 1 },
        { kind: "tf", text: "越す here means 'to surpass'.", answer: true },
      ],
    },
  ],
}
