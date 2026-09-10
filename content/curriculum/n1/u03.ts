import type { AuthoredUnit } from "../../types"

export const u03: AuthoredUnit = {
  level: "N1", order: 3, title: "Emotions at their peak", titleJp: "かんじょう の きわみ",
  description: "Extreme feelings: 〜の至りだ (utmost), 〜かぎりだ (sheer), 〜を禁じ得ない (cannot suppress), 〜に堪えない (unbearable).",
  vocab: ["感激|かんげき", "感謝|かんしゃ", "光栄|こうえい", "恐縮|きょうしゅく", "残念|ざんねん", "悔しい|くやしい", "悲しい|かなしい", "嬉しい|うれしい", "同情|どうじょう", "抗議|こうぎ", "暴力|ぼうりょく", "犠牲|ぎせい", "悲痛|ひつう", "迷惑|めいわく", "涙|なみだ", "同情を禁じ得ない|どうじょうをきんじえない"],
  kanji: ["激", "謝", "栄", "縮", "悔", "抗", "犠", "牲", "禁"],
  exam: [
    { kind: "mcq", text: "「入賞できて、感激の至りです。」 — の至りだ expresses…", options: ["anger", "an emotion at its utmost", "a schedule", "an order"], answer: 1 },
    { kind: "mcq", text: "「犠牲者に同情を禁じ得ない。」 means…", options: ["We refuse to sympathise.", "We cannot help sympathising with the victims.", "The victims refuse help.", "Sympathy is banned."], answer: 1 },
  ],
  lessons: [
    { slug: "n1-u03-l01", title: "Utmost: 〜の至りだ", titleJp: "〜の至りだ", grammarLabel: "〜の至りだ",
      summary: "の至りだ = X to the utmost (fixed phrases): 光栄の至りだ.",
      body: { meaning: "Noun の + 至りだ = FEELING AT ITS PEAK (fixed set): 光栄の至りだ (utterly honoured), 若気の至り (youthful folly).", formation: [{ pattern: "Noun の 至りだ", note: "光栄の至りだ" }, { pattern: "若気の至り", note: "attributive idiom" }], usage: ["Very formal speeches; idioms.", "Fixed nouns only."], pitfalls: ["Don't invent new nouns — it's formulaic.", "至り is a classical form of 至る."], related: ["〜かぎりだ", "〜てやまない"] },
      examples: [
        { jp: "この場でお話しできて、光栄の至りです。", kana: "このばでおはなしできて、こうえいのいたりです。", en: "It is the height of honour to speak here." },
        { jp: "若気の至りで、無謀な挑戦をした。", kana: "わかげのいたりで、むぼうなちょうせんをした。", en: "In youthful folly, I took a reckless challenge." },
        { jp: "感激の至りで、言葉も出なかった。", kana: "かんげきのいたりで、ことばもでなかった。", en: "Utterly moved, I couldn't even speak." },
      ],
      practice: [
        { kind: "blank", text: "この場でお話しできて、光栄の___です。", blanks: ["至り"] },
        { kind: "mcq", text: "の至りだ is used with…", options: ["any noun", "fixed emotional nouns", "verbs", "counters"], answer: 1 },
        { kind: "tf", text: "若気の至り is a set idiom.", answer: true },
      ],
    },
    { slug: "n1-u03-l02", title: "Sheer: 〜かぎりだ", titleJp: "〜かぎりだ", grammarLabel: "〜かぎりだ",
      summary: "かぎりだ = sheer X (adjective-adjacent): 残念なかぎりだ.",
      body: { meaning: "Noun の/な + かぎりだ = THE FEELING KNOWS NO BOUNDS: お目にかかれて嬉しいかぎりだ.", formation: [{ pattern: "Noun の かぎりだ", note: "感激のかぎりだ" }, { pattern: "い-adj かぎりだ", note: "嬉しいかぎりだ" }], usage: ["Formal letters and speeches.", "Positive or negative emotions."], pitfalls: ["Different from ない限り (unless) and 限りでは (as far as).", "Fixed adjective-noun set."], related: ["〜の至りだ", "〜てやまない"] },
      examples: [
        { jp: "不合格とは、残念なかぎりだ。", kana: "ふごうかくとは、ざんねんなかぎりだ。", en: "Failing — how utterly disappointing." },
        { jp: "十年ぶりに再会できて、嬉しいかぎりです。", kana: "じゅうねんぶりにさいかいできて、うれしいかぎりです。", en: "Reuniting after ten years — I'm overjoyed." },
        { jp: "無知をさらけ出すとは、恥ずかしいかぎりだ。", kana: "むちをさらけだすとは、はずかしいかぎりだ。", en: "Exposing my ignorance — how embarrassing." },
      ],
      practice: [
        { kind: "blank", text: "不合格とは、残念な___だ。", blanks: ["かぎり"] },
        { kind: "mcq", text: "嬉しいかぎりだ expresses…", options: ["a limit on time", "boundless joy", "a condition", "a rule"], answer: 1 },
        { kind: "tf", text: "〜かぎりだ can express negative emotions too.", answer: true },
      ],
    },
    { slug: "n1-u03-l03", title: "Cannot suppress: 〜を禁じ得ない", titleJp: "〜を禁じ得ない", grammarLabel: "〜を禁じ得ない",
      summary: "を禁じ得ない = cannot hold back the emotion: 悲憤を禁じ得ない.",
      body: { meaning: "Noun + を禁じ得ない = CANNOT SUPPRESS X (emotion) — news/editorial style: 悲憤を禁じ得ない.", formation: [{ pattern: "Noun ＋ を禁じ得ない", note: "同情を禁じ得ない" }, { pattern: "悲憤を禁じ得ない", note: "set phrase" }], usage: ["Editorials, news commentary.", "Nouns: 同情・悲憤・驚き."], pitfalls: ["禁じ得ない = cannot forbid (the feeling).", "Usually third-person/general observations."], related: ["〜に堪えない", "〜ずにはいられない"] },
      examples: [
        { jp: "事故の犠牲者に同情を禁じ得ない。", kana: "じこのぎせいしゃにどうじょうをきんじえない。", en: "We cannot help sympathising with the accident's victims." },
        { jp: "その報道には、悲憤を禁じ得ない。", kana: "そのほうどうには、ひふんをきんじえない。", en: "That report leaves us grief-stricken." },
        { jp: "記録の更新には、驚きを禁じ得ない。", kana: "きろくのこうしんには、おどろきをきんじえない。", en: "The record update leaves us in astonishment." },
      ],
      practice: [
        { kind: "blank", text: "犠牲者に同情を禁じ___。", blanks: ["得ない"] },
        { kind: "mcq", text: "を禁じ得ない is typical of…", options: ["comic dialogue", "editorials", "recipes", "manuals"], answer: 1 },
        { kind: "tf", text: "禁じ得ない contains the potential of 禁じる.", answer: true },
      ],
    },
    { slug: "n1-u03-l04", title: "Unbearable: 〜に堪えない", titleJp: "〜に堪えない", grammarLabel: "〜に堪えない",
      summary: "に堪えない = cannot bear (emotion) / not worth (聞くに堪えない).",
      body: { meaning: "Noun + に堪えない = CANNOT BEAR X: 悲しみに堪えない. Also 聞くに堪えない = too terrible to listen to.", formation: [{ pattern: "Noun ＋ に堪えない", note: "悲しみに堪えない" }, { pattern: "Verb る ＋ に堪えない", note: "聞くに堪えない" }], usage: ["Formal emotional expression.", "聞くに堪えない = disgraceful."], pitfalls: ["堪える = to endure. 堪えない = cannot endure.", "〜に耐える (endurable) is the opposite sense."], related: ["〜を禁じ得ない", "〜に耐える"] },
      examples: [
        { jp: "友人の死の知らせに、悲しみに堪えない。", kana: "ゆうじんのしのしらせに、かなしみにたえない。", en: "At the news of my friend's death, my grief is unbearable." },
        { jp: "その映画は、見るに堪えない場面があった。", kana: "そのえいがは、みるにたえないばめんがあった。", en: "That film had scenes too painful to watch." },
        { jp: "ご厚情に感謝に堪えません。", kana: "ごこうじょうにかんしゃにたえません。", en: "I cannot sufficiently thank you for your kindness." },
      ],
      practice: [
        { kind: "blank", text: "悲しみ___堪えない。", blanks: ["に"] },
        { kind: "mcq", text: "見るに堪えない means…", options: ["worth watching", "too painful to watch", "must watch", "refuse to watch"], answer: 1 },
        { kind: "tf", text: "に堪えない can express gratitude in letters.", answer: true },
      ],
    },
  ],
}
