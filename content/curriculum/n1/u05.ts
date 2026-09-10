import type { AuthoredUnit } from "../../types"

export const u05: AuthoredUnit = {
  level: "N1", order: 5, title: "Paying no mind", titleJp: "きにしない",
  description: "Disregard and exclusivity: 〜はおろか (let alone), 〜もかまわず (without caring), 〜をものともせず (defying), 〜ならでは (unique to).",
  vocab: ["時間|じかん", "周囲|しゅうい", "視線|しせん", "危険|きけん", "障害|しょうがい", "困難|こんなん", "暑さ|あつさ", "寒さ|さむさ", "食品|しょくひん", "地方|ちほう", "名物|めいぶつ", "特産|とくさん", "文化|ぶんか", "誇り|ほこり", "根気|こんき", "忍耐|にんたい"],
  kanji: ["周", "囲", "障", "害", "暑", "寒", "特", "産", "誇"],
  exam: [
    { kind: "mcq", text: "「彼は疲れもかまわず、働き続けた。」 means…", options: ["He rested carefully.", "He kept working without caring about fatigue.", "He quit from fatigue.", "Fatigue stopped him."], answer: 1 },
    { kind: "mcq", text: "「この味は、この店ならではだ。」 means…", options: ["Many shops have this taste.", "This taste is unique to this shop.", "The taste is ordinary.", "The shop is famous elsewhere."], answer: 1 },
  ],
  lessons: [
    { slug: "n1-u05-l01", title: "Let alone: 〜はおろか", titleJp: "〜はおろか", grammarLabel: "〜はおろか",
      summary: "はおろか = X, let alone Y: 名前はおろか、顔も知らない.",
      body: { meaning: "A は おろか B も = X IS OBVIOUS/TRUE, Y EVEN MORE SO (usually with も/さえ): 英語はおろか、中国語も話せる.", formation: [{ pattern: "A は おろか B も", note: "not only A but B" }, { pattern: "A は おろか B さえ", note: "A, let alone B" }], usage: ["Written.", "B is the more extreme item."], pitfalls: ["Order matters: はおろか introduces the LESS extreme item first.", "Similar to ばかりか but pairs two items explicitly."], related: ["〜ばかりか (N2)", "〜どころか (N2)"] },
      examples: [
        { jp: "彼の住所はおろか、名前さえ知らない。", kana: "かれのじゅうしょはおろか、なまえさえしらない。", en: "Let alone his address, I don't even know his name." },
        { jp: "この地方では、冬はおろか、春でも雪が降る。", kana: "このちほうでは、ふゆはおろか、はるでもゆきがふる。", en: "In this region, not just winter — even in spring it snows." },
        { jp: "彼は英語はおろか、アラビア語まで話せる。", kana: "かれはえいごはおろか、アラビアごまでのはなせる。", en: "Not just English — he even speaks Arabic." },
      ],
      practice: [
        { kind: "blank", text: "彼の住所は___、名前さえ知らない。", blanks: ["おろか"] },
        { kind: "mcq", text: "はおろか introduces the ___ item first.", options: ["more extreme", "less extreme", "unrelated", "negative"], answer: 1 },
        { kind: "tf", text: "はおろか often pairs with も or さえ.", answer: true },
      ],
    },
    { slug: "n1-u05-l02", title: "Without caring: 〜もかまわず", titleJp: "〜もかまわず", grammarLabel: "〜もかまわず",
      summary: "もかまわず = without caring about X: 人の視線もかまわず.",
      body: { meaning: "Noun + もかまわず = PAYING NO ATTENTION TO X: 周囲の反対もかまわず、結婚した.", formation: [{ pattern: "Noun ＋ もかまわず", note: "視線もかまわず" }, { pattern: "Verb る ＋ のもかまわず", note: "約束のもかまわず" }], usage: ["Bold or shameless action.", "X is usually an obstacle/embarrassment."], pitfalls: ["かまわず = not minding.", "Related noun: 構わない."], related: ["〜をものともせず", "〜を問わず (N2)"] },
      examples: [
        { jp: "彼は周囲の視線もかまわず、歌い始めた。", kana: "かれはしゅういのしせんもかまわず、うたいはじめた。", en: "Ignoring everyone's stares, he started singing." },
        { jp: "彼女は休日もかまわず、研究所に通った。", kana: "かのじょはきゅうじつもかまわず、けんきゅうしょにかよった。", en: "She went to the lab regardless of holidays." },
        { jp: "危険もかまわず、山に分け入った。", kana: "きけんもかまわず、やまにわけいった。", en: "He ventured into the mountains heedless of danger." },
      ],
      practice: [
        { kind: "blank", text: "彼は周囲の視線___、歌い始めた。", blanks: ["もかまわず"] },
        { kind: "mcq", text: "もかまわず shows the subject…", options: ["cares deeply", "pays no attention", "asks permission", "complains"], answer: 1 },
        { kind: "tf", text: "休日もかまわず means 'even on days off, ignoring that'.", answer: true },
      ],
    },
    { slug: "n1-u05-l03", title: "Defying: 〜をものともせず", titleJp: "〜をものともせず", grammarLabel: "〜をものともせず",
      summary: "をものともせず = treating X as nothing: 厳しい寒さをものともせず.",
      body: { meaning: "Noun + をものともせず = DEFYING/BRUSHING OFF X (admirable perseverance): 困難をものともせず挑戦し続けた.", formation: [{ pattern: "Noun ＋ をものともせず", note: "寒さをものともせず" }], usage: ["Written, praising persistence.", "X = hardship or obstacle."], pitfalls: ["ものともせず = as if it were nothing.", "Praise-oriented — not for trivial matters."], related: ["〜もかまわず", "〜にものを言わせて"] },
      examples: [
        { jp: "選手たちは猛暑をものともせず、走り続けた。", kana: "せんしゅたちはもうしょをものともせず、はしりつづけた。", en: "The runners kept going, defying the fierce heat." },
        { jp: "彼は病気をものともせず、研究を続けた。", kana: "かれはびょうきをものともせず、けんきゅうをつづけた。", en: "Undeterred by illness, he continued his research." },
        { jp: "障害をものともせず、頂上を目指した。", kana: "しょうがいをものともせず、ちょうじょうをめざした。", en: "Treating obstacles as nothing, they aimed for the summit." },
      ],
      practice: [
        { kind: "blank", text: "選手たちは猛暑___、走り続けた。", blanks: ["をものともせず"] },
        { kind: "mcq", text: "をものともせず usually praises…", options: ["wealth", "perseverance", "luck", "speed"], answer: 1 },
        { kind: "tf", text: "The hardship X is treated as nothing.", answer: true },
      ],
    },
    { slug: "n1-u05-l04", title: "Unique to: 〜ならでは", titleJp: "〜ならでは", grammarLabel: "〜ならでは",
      summary: "ならでは(の) = possible only because it's X: 京都ならではの風景.",
      body: { meaning: "Noun + ならではの + Noun = UNIQUE TO X: 京都ならではの観光資源.", formation: [{ pattern: "Noun ＋ ならではの Noun", note: "京都ならではの" }, { pattern: "Noun ＋ ならでは(だ)", note: "sentence-final" }], usage: ["Praise of regional/brand uniqueness.", "Ads and travel writing love it."], pitfalls: ["X must be the special source.", "Always positive."], related: ["〜をもって", "〜に限る (N2)"] },
      examples: [
        { jp: "この味は、京都ならではの逸品だ。", kana: "このあじは、きょうとならではのいっぴんだ。", en: "This flavour is a delicacy unique to Kyoto." },
        { jp: "こうした風景は、北海道ならではだ。", kana: "こうしたふうけいは、ほっかいどうならではだ。", en: "Scenery like this exists only in Hokkaido." },
        { jp: "地元ならではのおもてなしを体験できる。", kana: "じもとならではのおもてなしをたいけんできる。", en: "You can experience hospitality found only locally." },
      ],
      practice: [
        { kind: "blank", text: "この味は、京都___の逸品だ。", blanks: ["ならでは"] },
        { kind: "mcq", text: "ならでは expresses…", options: ["criticism", "uniqueness", "regret", "obligation"], answer: 1 },
        { kind: "tf", text: "ならでは is always positive.", answer: true },
      ],
    },
  ],
}
