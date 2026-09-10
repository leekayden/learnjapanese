import type { AuthoredUnit } from "../../types"

export const u12: AuthoredUnit = {
  level: "N1", order: 12, title: "The price of effort", titleJp: "どりょく の だいしょう",
  description: "Extreme effort and outcome: 〜までして (going so far as), 〜てまで (to the extent of), 〜までもない (no need to), 〜ないまでも (if not fully).",
  vocab: ["挑戦|ちょうせん", "努力|どりょく", "犠牲|ぎせい", "手段|しゅだん", "借金|しゃっきん", "留守番|るすばん", "確認|かくにん", "説明|せつめい", "詳細|しょうさい", "完璧|かんぺき", "会議|かいぎ", "出席|しゅっせき", "謝罪|しゃざい", "輸入|ゆにゅう", "妥協|だきょう", "犠牲を払う|ぎせいをはらう"],
  kanji: ["挑", "戦", "犠", "牲", "借", "金", "留", "輸", "妥"],
  exam: [
    { kind: "mcq", text: "「借金までして、車を買う必要はない。」 means…", options: ["You should borrow to buy a car.", "There's no need to go as far as borrowing money to buy a car.", "Cars are cheap.", "Borrowing is encouraged."], answer: 1 },
    { kind: "mcq", text: "「検査の結果は明日出る。今日、病院に行くまでもない。」 means…", options: ["Go to the hospital now.", "No need to go to the hospital today.", "The test was cancelled.", "The hospital is closed."], answer: 1 },
  ],
  lessons: [
    { slug: "n1-u12-l01", title: "Going so far as: 〜までして", titleJp: "〜までして", grammarLabel: "〜までして",
      summary: "までして = to the extreme of X (often criticized): 嘘までして勝ちたいのか.",
      body: { meaning: "Noun + までして = GOING SO FAR AS X (extreme means): 親に嘘までして、金を得た.", formation: [{ pattern: "Noun ＋ までして", note: "嘘までして" }, { pattern: "〜までして 〜るのか", note: "criticism" }], usage: ["Criticism of extreme means.", "Sometimes admiration."], pitfalls: ["X is an extreme sacrifice.", "Follow-up often questions the act."], related: ["〜てまで", "〜あげく (N2)"] },
      examples: [
        { jp: "借金までして、最新機種を買う意味がない。", kana: "しゃっきんまでして、さいしんきしゅをかういみがない。", en: "There's no point going so far as borrowing money to buy the newest model." },
        { jp: "彼は徹夜までして、レポートを仕上げた。", kana: "かれはてつやまでして、レポートをしあげた。", en: "He went so far as pulling an all-nighter to finish the report." },
        { jp: "友達を裏切るまでして、成功したいのか。", kana: "ともだちをうらぎるまでして、せいこうしたいのか。", en: "Do you want success so badly you'd betray friends?" },
      ],
      practice: [
        { kind: "blank", text: "借金___、最新機種を買う意味がない。", blanks: ["までして"] },
        { kind: "mcq", text: "までして presents X as…", options: ["ordinary", "an extreme length", "a habit", "a gift"], answer: 1 },
        { kind: "tf", text: "徹夜までして can even express admiration.", answer: true },
      ],
    },
    { slug: "n1-u12-l02", title: "To the extent of: 〜てまで", titleJp: "〜てまで", grammarLabel: "〜てまで",
      summary: "てまで = is it worth doing X (criticism): 環境を壊してまで開発するのか.",
      body: { meaning: "Verb て + まで = TO THE EXTENT OF X (questioning the worth): 体を壊してまで働くべきではない.", formation: [{ pattern: "Verb て ＋ まで 〜ない／のか", note: "壊してまで" }], usage: ["Criticism of excessive means.", "Often rhetorical questions."], pitfalls: ["X = the costly action; Y = questioned outcome.", "Related to までして (noun version)."], related: ["〜までして", "〜にしては"] },
      examples: [
        { jp: "環境を壊してまで、開発を進めるべきではない。", kana: "かんきょうをこわしてまで、かいはつをすすめるべきではない。", en: "We shouldn't push development at the cost of destroying the environment." },
        { jp: "健康を犠牲にしてまで、お金を稼ぎたくない。", kana: "けんこうをぎせいにしてまで、おかねをかせぎたくない。", en: "I don't want to earn money at the cost of my health." },
        { jp: "人を傷つけてまで、真実を言う必要があるのか。", kana: "ひとをきずつけてまで、しんじつをいうひつようがあるのか。", en: "Is it necessary to tell the truth to the point of hurting people?" },
      ],
      practice: [
        { kind: "blank", text: "環境を壊し___、開発を進めるべきではない。", blanks: ["てまで"] },
        { kind: "mcq", text: "てまで questions whether X is…", options: ["cheap", "worth it", "fast", "new"], answer: 1 },
        { kind: "tf", text: "てまで attaches to the て-form.", answer: true },
      ],
    },
    { slug: "n1-u12-l03", title: "No need to: 〜までもない", titleJp: "〜までもない", grammarLabel: "〜までもない",
      summary: "までもない = not to the point of needing X: 言うまでもない.",
      body: { meaning: "Verb る + までもない = NO NEED TO GO AS FAR AS X: わざわざ行くまでもない.", formation: [{ pattern: "Verb る ＋ までもない", note: "行くまでもない" }, { pattern: "言うまでもなく", note: "adverbial: needless to say" }], usage: ["Downplaying an action.", "言うまでもない = obvious."], pitfalls: ["までもない = don't go that far.", "Different from ないまでも (partial)."], related: ["〜ないまでも", "〜必要はない"] },
      examples: [
        { jp: "確認するまでもなく、彼はもう出発した。", kana: "かくにんするまでもなく、かれはもうしゅっぱつした。", en: "Needless to check — he had already departed." },
        { jp: "そんな簡単な文法、辞書を引くまでもない。", kana: "そんなかんたんなぶんぽう、じしょをひくまでもない。", en: "Such simple grammar — no need to look it up." },
        { jp: "遠くまで出かけるまでもなく、近所で買える。", kana: "とおくまででかけるまでもなく、きんじょでかえる。", en: "No need to go far; you can buy it nearby." },
      ],
      practice: [
        { kind: "blank", text: "確認する___なく、彼はもう出発した。", blanks: ["までも"] },
        { kind: "mcq", text: "言うまでもない means…", options: ["must not say", "needless to say", "say it anyway", "say it later"], answer: 1 },
        { kind: "tf", text: "までもない downplays the need for X.", answer: true },
      ],
    },
    { slug: "n1-u12-l04", title: "If not fully: 〜ないまでも", titleJp: "〜ないまでも", grammarLabel: "〜ないまでも",
      summary: "ないまでも = if not X, at least Y: 完璧ではないまでも、改善した.",
      body: { meaning: "Verb ない + までも = IF NOT FULLY X, AT LEAST Y: 全員ではないまでも、多くの人が賛成した.", formation: [{ pattern: "Verb ない ＋ までも", note: "完璧ではないまでも" }, { pattern: "〜ないまでもせよ", note: "if not do X, at least…" }], usage: ["Partial achievement framing.", "Formal."], pitfalls: ["X is the ideal; Y is the fallback.", "Related: までもない (no need)."], related: ["〜までもない", "〜はともかく (N3)"] },
      examples: [
        { jp: "完璧ではないまでも、実用には耐える品質だ。", kana: "かんぺきではないまでも、じつようにはたえるひんしつだ。", en: "Not perfect, but the quality is practical." },
        { jp: "全員ではないまでも、大多数が賛成した。", kana: "ぜんいんではないまでも、だいたすうがさんせいした。", en: "Not everyone, but a large majority agreed." },
        { jp: "会議に出られないまでも、資料には目を通す。", kana: "かいぎにでられないまでも、しりょうにはめをとおす。", en: "Even if I can't attend the meeting, I'll read the materials." },
      ],
      practice: [
        { kind: "blank", text: "完璧では___、実用には耐える品質だ。", blanks: ["ないまでも"] },
        { kind: "mcq", text: "ないまでも introduces the…", options: ["ideal", "fallback", "punishment", "date"], answer: 1 },
        { kind: "tf", text: "までもない (no need) and ないまでも (at least) differ.", answer: true },
      ],
    },
  ],
}
