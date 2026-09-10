import type { AuthoredUnit } from "../../types"

export const u06: AuthoredUnit = {
  level: "N1", order: 6, title: "Deep-seated reasons", titleJp: "しんこう の りゆう",
  description: "Emphatic reasons: 〜ゆえ(に) (because of), 〜ばこそ (precisely because), 〜てやまない (sincerely hope), 〜(よ)うと〜まいと (whether or not).",
  vocab: ["信念|しんねん", "誇り|ほこり", "忠告|ちゅうこく", "指摘|してき", "支持|しじ", "絶望|ぜつぼう", "希望|きぼう", "幸せ|しあわせ", "病気|びょうき", "回復|かいふく", "成功|せいこう", "失敗|しっぱい", "愛情|あいじょう", "信頼|しんらい", "祈る|いのる", "祝福|しゅくふく"],
  kanji: ["念", "誇", "指", "絶", "望", "頼", "祈", "祝", "福"],
  exam: [
    { kind: "mcq", text: "「子を思うゆえに、厳しく叱ることもある。」 means…", options: ["Love makes parents ignore children.", "Precisely because they care, parents sometimes scold strictly.", "Strictness means no love.", "Children scold parents."], answer: 1 },
    { kind: "mcq", text: "「ご成功を祈ってやみません。」 means…", options: ["We'll stop praying.", "We sincerely continue to pray for your success.", "Success is impossible.", "We stopped supporting you."], answer: 1 },
  ],
  lessons: [
    { slug: "n1-u06-l01", title: "Because of: 〜ゆえ(に)", titleJp: "〜ゆえ(に)", grammarLabel: "〜ゆえ(に)",
      summary: "ゆえ(に) = because of (literary): 弱者ゆえに侮られる.",
      body: { meaning: "Noun / plain + ゆえ(に) = BECAUSE OF X (literary): 貧しさゆえに学べない子供たち.", formation: [{ pattern: "Noun ＋ ゆえ(に)", note: "貧しさゆえに" }, { pattern: "Noun の ゆえに", note: "variant" }], usage: ["Literary, proverbs, set phrases.", "ゆえん (所以) = the reason."], pitfalls: ["Classical flavor — rare in daily speech.", "Noun + ゆえ attaches directly (no の needed but allowed)."], related: ["〜ばこそ", "〜からこそ (N3)"] },
      examples: [
        { jp: "子を思うゆえに、厳しく叱ることもある。", kana: "こをおもうゆえに、きびしくしかることもある。", en: "Precisely because they care, parents sometimes scold strictly." },
        { jp: "彼は無知ゆえに、その失敗を招いた。", kana: "かれはむちゆえに、そのしっぱいをまねいた。", en: "Out of ignorance, he invited that failure." },
        { jp: "努力したが、これも若さゆえの過ちだった。", kana: "どりょくしたが、これもわかさゆえのあやまちだった。", en: "He tried, but this too was a mistake born of youth." },
      ],
      practice: [
        { kind: "blank", text: "子を思う___、厳しく叱ることもある。", blanks: ["ゆえ"] },
        { kind: "mcq", text: "ゆえに is…", options: ["casual", "literary", "childish", "imperative"], answer: 1 },
        { kind: "tf", text: "若さゆえの can modify a noun.", answer: true },
      ],
    },
    { slug: "n1-u06-l02", title: "Precisely because: 〜ばこそ", titleJp: "〜ばこそ", grammarLabel: "〜ばこそ",
      summary: "ばこそ = precisely because (deep feelings): 君を信じればこそ、任せた.",
      body: { meaning: "ば-form + こそ = IT'S PRECISELY BECAUSE X (emotional emphasis): 愛していればこそ、厳しくできる.", formation: [{ pattern: "ば-form ＋ こそ", note: "信じればこそ" }, { pattern: "A ばこそ B のだ", note: "B ends with のだ" }], usage: ["Emotional justifications.", "The reason is cherished."], pitfalls: ["Needs のだ/んだ in the main clause often.", "Contrast with からこそ (less formal)."], related: ["〜からこそ (N3)", "〜ゆえに"] },
      examples: [
        { jp: "君を信じていればこそ、この案件を任せたのだ。", kana: "きみをしんじていればこそ、このあんけんをまかせたのだ。", en: "It's precisely because I believe in you that I entrusted you this matter." },
        { jp: "健康でいればこそ、何でも挑戦できる。", kana: "けんこうでいればこそ、なんでもちょうせんできる。", en: "It's precisely by staying healthy that you can try anything." },
        { jp: "客様のことを思えばこそ、正直に言うのです。", kana: "きゃくさまのことをおもえばこそ、しょうじきにいうのです。", en: "Precisely because we think of the customer, we speak honestly." },
      ],
      practice: [
        { kind: "blank", text: "君を信じていれ___、任せたのだ。", blanks: ["ばこそ"] },
        { kind: "mcq", text: "ばこそ needs the ___ form.", options: ["た", "ば", "て", "ない"], answer: 1 },
        { kind: "tf", text: "ばこそ emphasises the reason emotionally.", answer: true },
      ],
    },
    { slug: "n1-u06-l03", title: "Sincerely hoping: 〜てやまない", titleJp: "〜てやまない", grammarLabel: "〜てやまない",
      summary: "てやまない = never stop (hoping/trusting): ご成功を祈ってやみません.",
      body: { meaning: "Verb て + やまない = MY FEELING NEVER CEASES (hope, trust, regret): 御社の発展を祈ってやみません.", formation: [{ pattern: "祈る → 祈ってやまない", note: "sincerely pray" }, { pattern: "信じる → 信じてやまない", note: "never stop believing" }], usage: ["Formal letters, speeches.", "Fixed verbs: 祈る・信じる・期待する・後悔する."], pitfalls: ["Negative form of 止む (to cease).", "Always first-person feelings."], related: ["〜てはならない", "〜を禁じ得ない"] },
      examples: [
        { jp: "ご成功を祈ってやみません。", kana: "ごせいこうをいのってやみません。", en: "I shall never cease praying for your success." },
        { jp: "彼の無実を信じてやまない。", kana: "かれのむじつをしんじてやまない。", en: "I will never stop believing in his innocence." },
        { jp: "判断を誤ったことを後悔してやまない。", kana: "はんだんをあやまったことをこうかいしてやまない。", en: "I shall forever regret misjudging that." },
      ],
      practice: [
        { kind: "blank", text: "ご成功を祈って___ません。", blanks: ["やみ"] },
        { kind: "mcq", text: "てやまない is common in…", options: ["memes", "formal letters", "recipes", "game chat"], answer: 1 },
        { kind: "tf", text: "やむ means 'to cease' — やまない = never ceases.", answer: true },
      ],
    },
    { slug: "n1-u06-l04", title: "Whether or not: 〜(よ)うと〜まいと", titleJp: "〜(よ)うと〜まいと", grammarLabel: "〜(よ)うと〜まいと",
      summary: "うと〜まいと = whether one does or doesn't: 賛成しようとしまいと.",
      body: { meaning: "Volitional + と + まい form + と = WHETHER (I) DO OR DON'T X: 行こうと行くまいと、結果は変わらない.", formation: [{ pattern: "Volitional ＋ と ＋ Verb ＋ まい ＋ と", note: "行こうと行くまいと" }, { pattern: "する → しようとしまいと", note: "irregular" }], usage: ["Written, resolute.", "まい = negative volitional."], pitfalls: ["For る-verbs, まい attaches to dictionary form: 行くまい.", "The outcome is said to be unaffected."], related: ["〜にしろ〜にしろ", "〜であれ〜であれ"] },
      examples: [
        { jp: "彼が賛成しようとしまいと、計画は進める。", kana: "かれがさんせいしようとしまいと、けいかくはすすめる。", en: "Whether or not he agrees, we'll proceed with the plan." },
        { jp: "雨が降ろうと降るまいと、出発する。", kana: "あめがふろうとふるまいと、しゅっぱつする。", en: "Rain or no rain, we depart." },
        { jp: "他の人がどう思おうと思うまいと、私は私の道を行く。", kana: "ほかのひとがどうおもおうとおもうまいと、わたしはわたしのみちをいく。", en: "Whatever others may or may not think, I'll walk my own path." },
      ],
      practice: [
        { kind: "blank", text: "雨が降ろうと降る___、出発する。", blanks: ["まいと"] },
        { kind: "mcq", text: "まい is the ___ volitional.", options: ["positive", "negative", "past", "potential"], answer: 1 },
        { kind: "tf", text: "うと〜まいと claims the outcome is unaffected.", answer: true },
      ],
    },
  ],
}
