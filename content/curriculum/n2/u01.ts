import type { AuthoredUnit } from "../../types"

export const u01: AuthoredUnit = {
  level: "N2", order: 1, title: "Change and trends", titleJp: "へんか と すいい",
  description: "Describing change: 〜につれて (as), 〜に伴って (along with), 〜とともに (together with), 〜一方だ (keeps on).",
  vocab: ["変化|へんか", "増える|ふえる", "減る|へる", "推移|すいい", "人口|じんこう", "対策|たいさく", "交通|こうつう", "事故|じこ", "期間|きかん", "契約|けいやく", "業界|ぎょうかい", "競争|きょうそう", "拡大|かくだい", "時代|じだい", "技術|ぎじゅつ", "進歩|しんぽ"],
  kanji: ["変", "化", "増", "減", "推", "移", "険", "拡", "競"],
  exam: [
    { kind: "mcq", text: "「年を取るにつれて、体力が落ちる。」 means…", options: ["Strength causes age.", "As one ages, physical strength declines.", "Age stops strength.", "Strength and age are unrelated."], answer: 1 },
    { kind: "mcq", text: "「物価は上がる一方だ。」 means…", options: ["Prices finally rise.", "Prices keep rising.", "Prices rise on one side.", "Prices rose once."], answer: 1 },
  ],
  lessons: [
    { slug: "n2-u01-l01", title: "As X changes: 〜につれて", titleJp: "〜につれて", grammarLabel: "〜につれて",
      summary: "につれて = as X changes, Y changes too: 年を取るにつれて、体力が落ちる.",
      body: { meaning: "Verb plain / noun + につれて = AS X PROGRESSES, Y changes with it. Two things change in parallel: 都市が発展するにつれて、交通量が増えた.", formation: [{ pattern: "Verb plain ＋ につれて", note: "増えるにつれて as (it) increases" }, { pattern: "Noun ＋ につれて", note: "時代の変化につれて" }], usage: ["Both clauses must describe gradual change.", "Common in reports and essays."], pitfalls: ["One-time events don't fit: ×会ったにつれて.", "Similar to に伴って but につれて is more general."], related: ["〜に伴って (this unit)", "〜とともに"] },
      examples: [
        { jp: "年を取るにつれて、体力が落ちる。", kana: "としをとるにつれて、たいりょくがおちる。", en: "As you get older, your physical strength declines." },
        { jp: "人口が増えるにつれて、交通の問題が深刻になった。", kana: "じんこうがふえるにつれて、こうつうのもんだいがしんこくになった。", en: "As the population grew, traffic problems became serious." },
        { jp: "技術の進歩につれて、生活は便利になった。", kana: "ぎじゅつのしんぽにつれて、せいかつはべんりになった。", en: "With technological progress, life has become more convenient." },
      ],
      practice: [
        { kind: "blank", text: "年を取る___、体力が落ちる。", blanks: ["につれて"] },
        { kind: "mcq", text: "につれて requires…", options: ["one-time events", "gradual parallel change", "commands", "questions"], answer: 1 },
        { kind: "tf", text: "Nouns attach directly: 時代の変化につれて.", answer: false },
      ],
    },
    { slug: "n2-u01-l02", title: "Along with: 〜に伴って", titleJp: "〜に伴って", grammarLabel: "〜に伴って",
      summary: "に伴って = along with X (formal): 経済の発展に伴って、環境問題が起きた.",
      body: { meaning: "Verb / noun + に伴って = ALONG WITH X (formal, written): 経済の成長に伴って、環境への影響も拡大した.", formation: [{ pattern: "Verb plain ＋ に伴って", note: "契約するに伴って" }, { pattern: "Noun ＋ に伴って", note: "成長に伴って" }, { pattern: "Noun ＋ に伴い", note: "even more formal" }], usage: ["News and formal writing.", "Change in X brings change in Y."], pitfalls: ["More formal than につれて.", "Nouns attach directly (no の)."], related: ["〜につれて", "〜とともに"] },
      examples: [
        { jp: "経済の発展に伴って、環境問題も増えた。", kana: "けいざいのはってんにともなって、かんきょうもんだいもふえた。", en: "Along with economic development, environmental problems also increased." },
        { jp: "年齢に伴って、体の変化を感じる。", kana: "ねんれいにともなって、からだのへんかをかんじる。", en: "Along with age, you feel changes in your body." },
        { jp: "会社の拡大に伴い、新しい事務所を借りた。", kana: "かいしゃのかくだいにともない、あたらしいじむしょをかりた。", en: "Along with the company's expansion, we rented a new office." },
      ],
      practice: [
        { kind: "blank", text: "経済の発展___、環境問題も増えた。", blanks: ["に伴って"] },
        { kind: "mcq", text: "に伴い is…", options: ["casual", "more formal than に伴って", "past tense", "negative"], answer: 1 },
        { kind: "tf", text: "Nouns attach directly to に伴って (no の).", answer: true },
      ],
    },
    { slug: "n2-u01-l03", title: "Together with: 〜とともに", titleJp: "〜とともに", grammarLabel: "〜とともに",
      summary: "とともに = together with / at the same time as: 時代とともに変わる.",
      body: { meaning: "Noun / verb + とともに = TWO things happen TOGETHER: 時代とともに変化する (change with the times). Also simultaneous: 終了とともに、拍手が起きた.", formation: [{ pattern: "Noun ＋ とともに", note: "時代とともに with the times" }, { pattern: "Verb plain ＋ とともに", note: "増えるとともに" }], usage: ["Formal.", "Can mean physical accompaniment (with X) or simultaneous change."], pitfalls: ["With verbs, the pair must change together.", "For 'with a friend', use と alone or 一緒に — not とともに for people usually."], related: ["〜につれて", "〜と同時に"] },
      examples: [
        { jp: "時代とともに、人々の考え方も変わる。", kana: "じだいとともに、ひとびとのかんがえかたもかわる。", en: "Along with the times, people's ways of thinking change too." },
        { jp: "景気の回復とともに、雇用も増えた。", kana: "けいきのかいふくとともに、こようもふえた。", en: "Along with the economic recovery, employment increased." },
        { jp: "彼は電車が止まるとともに、飛び出した。", kana: "かれはでんしゃがとまるとともに、とびだした。", en: "The moment the train stopped, he dashed out." },
      ],
      practice: [
        { kind: "blank", text: "時代___、人々の考え方も変わる。", blanks: ["とともに"] },
        { kind: "mcq", text: "とともに with verbs means the two actions…", options: ["contrast", "happen together", "repeat", "fail"], answer: 1 },
        { kind: "tf", text: "とともに can also mean a single moment: 開店とともに.", answer: true },
      ],
    },
    { slug: "n2-u01-l04", title: "One direction: 〜一方だ", titleJp: "〜一方だ", grammarLabel: "〜一方だ",
      summary: "一方だ = keeps moving in one direction: 物価は上がる一方だ.",
      body: { meaning: "Verb dictionary form + 一方だ = KEEPS MOVING IN ONE DIRECTION (usually unwanted): 物価は上がる一方だ (prices just keep rising).", formation: [{ pattern: "Verb る ＋ 一方だ", note: "上がる一方だ keeps rising" }, { pattern: "増える一方だ", note: "keeps increasing" }], usage: ["Often negative trends.", "Common in news: 増える一方だ."], pitfalls: ["Use dictionary form, not past: ×上がった一方だ.", "Positive use exists but less common."], related: ["〜ばかりだ", "〜つつある (u13)"] },
      examples: [
        { jp: "物価は上がる一方だ。", kana: "ぶっかはあがるいっぽうだ。", en: "Prices just keep rising." },
        { jp: "市の人口は減る一方だ。", kana: "しのじんこうはへるいっぽうだ。", en: "The city's population keeps declining." },
        { jp: "彼の実力は上がる一方だ。", kana: "かれのじつりょくはあがるいっぽうだ。", en: "His skill just keeps improving." },
      ],
      practice: [
        { kind: "blank", text: "物価は上がる___。(keeps on)", blanks: ["一方だ"] },
        { kind: "mcq", text: "一方だ uses which verb form?", options: ["past", "dictionary", "te-form", "ba-form"], answer: 1 },
        { kind: "mcq", text: "増える一方だ is most often…", options: ["positive", "a negative trend", "neutral", "a command"], answer: 1 },
      ],
    },
  ],
}
