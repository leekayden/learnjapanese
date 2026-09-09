import type { AuthoredUnit } from "../../types"

export const u07: AuthoredUnit = {
  level: "N2", order: 7, title: "In a flash", titleJp: "しゅんかん の ぶんぽう",
  description: "Immediate sequences: 〜たとたん (the moment), 〜(か)と思うと (no sooner than), 〜(か)と思ったら, 〜か〜ないかのうちに.",
  vocab: ["駅|えき", "降りる|おりる", "出口|でぐち", "渡る|わたる", "事件|じけん", "犯人|はんにん", "逃げる|にげる", "警察|けいさつ", "電車|でんしゃ", "乗る|のる", "終わる|おわる", "映画|えいが", "始まる|はじまる", "泣く|なく", "笑う|わらう", "寝る|ねる"],
  kanji: ["駅", "降", "口", "渡", "犯", "逃", "察", "電", "泣"],
  exam: [
    { kind: "mcq", text: "「彼は家を出たとたん、雨が降り出した。」 means…", options: ["It rained before he left.", "The moment he left, it started raining.", "He left because of rain.", "It never rained."], answer: 1 },
    { kind: "mcq", text: "「ベルが鳴ったか鳴らないかのうちに、生徒は走り出した。」 means…", options: ["Students ran long after the bell.", "Students ran almost simultaneously with the bell.", "The bell never rang.", "Students refused to run."], answer: 1 },
  ],
  lessons: [
    { slug: "n2-u07-l01", title: "The moment: 〜たとたん", titleJp: "〜たとたん", grammarLabel: "〜たとたん",
      summary: "たとたん = the instant X happened: ドアを開けたとたん、猫が飛び出した.",
      body: { meaning: "Verb た + とたん(に) = THE INSTANT X HAPPENED, Y followed immediately: 立ち上がったとたん、めまいがした.", formation: [{ pattern: "Verb た ＋ とたん(に)", note: "開けたとたん" }], usage: ["Y is sudden and often unexpected.", "Past-oriented — the sequence actually happened."], pitfalls: ["Y must be an unplanned sudden event.", "Don't use for deliberate actions: ×行ったとたん、食事した."], related: ["〜か〜ないかのうちに", "〜(か)と思うと"] },
      examples: [
        { jp: "彼は家を出たとたん、雨が降り出した。", kana: "かれはいえをでたとたん、あめがふりだした。", en: "The instant he left home, it started raining." },
        { jp: "ドアを開けたとたん、猫が飛び出した。", kana: "ドアをあけたとたん、ねこがとびだした。", en: "The moment I opened the door, the cat darted out." },
        { jp: "薬を飲んだとたん、眠気が襲ってきた。", kana: "くすりをのんだとたん、ねむきがおそってきた。", en: "Right after taking the medicine, drowsiness hit me." },
      ],
      practice: [
        { kind: "blank", text: "ドアを開けた___、猫が飛び出した。", blanks: ["とたん"] },
        { kind: "mcq", text: "たとたん events are…", options: ["planned", "sudden/unexpected", "repeated", "future"], answer: 1 },
        { kind: "tf", text: "Verb before とたん must be past (た-form).", answer: true },
      ],
    },
    { slug: "n2-u07-l02", title: "No sooner than: 〜(か)と思うと", titleJp: "〜(か)と思うと", grammarLabel: "〜(か)と思うと",
      summary: "と思うと = no sooner than: 帰ってきたかと思うと、また出て行った.",
      body: { meaning: "Verb た + (か)と思うと/(か)と思ったら = NO SOONER X THAN Y — surprising speed: 泣いていたかと思うと、笑っている.", formation: [{ pattern: "Verb た ＋ かと思うと", note: "立ったかと思うと" }, { pattern: "Verb る ＋ かと思ったら", note: "rapid alternation" }], usage: ["Describes rapid, surprising succession.", "Speaker's astonishment implied."], pitfalls: ["Often states contrasting states: crying ↔ laughing.", "Y is not the speaker's intention."], related: ["〜たとたん", "〜ようになった"] },
      examples: [
        { jp: "帰ってきたかと思うと、また出て行った。", kana: "かえってきたかとおもうと、またでていった。", en: "No sooner had he returned than he went out again." },
        { jp: "泣いていたかと思ったら、もう笑っている。", kana: "ないていたかとおもったら、もうわらっている。", en: "She was crying one moment, and laughing the next." },
        { jp: "電車が止まったかと思うと、ドアが開いた。", kana: "でんしゃがとまったかとおもうと、ドアがあいた。", en: "No sooner had the train stopped than the doors opened." },
      ],
      practice: [
        { kind: "blank", text: "帰ってきた___、また出て行った。", blanks: ["かと思うと"] },
        { kind: "mcq", text: "と思うと conveys…", options: ["speaker's plan", "astonishment at speed", "obligation", "permission"], answer: 1 },
        { kind: "tf", text: "泣いていたかと思ったら、笑っている contrasts two states.", answer: true },
      ],
    },
    { slug: "n2-u07-l03", title: "Almost simultaneously: 〜か〜ないかのうちに", titleJp: "〜か〜ないかのうちに", grammarLabel: "〜か〜ないかのうちに",
      summary: "か〜ないかのうちに = almost as X happens: 終わるか終わらないかのうちに.",
      body: { meaning: "Verb る + か + verb ない + かのうちに = Y STARTS WHILE X IS BARELY FINISHING: 映画が終わるか終わらないかのうちに、人が流れ出した.", formation: [{ pattern: "Verb る か ＋ Verb ない かのうちに", note: "始まるか始まらないかのうちに" }], usage: ["Y overlaps the end of X.", "Very rapid succession."], pitfalls: ["Same verb repeated in る/ない forms.", "Y is often a crowd/pressure image."], related: ["〜たとたん", "〜次第 (u04)"] },
      examples: [
        { jp: "映画が終わるか終わらないかのうちに、客は流れ出した。", kana: "えいががおわるかおわらないかのうちに、きゃくはながれだした。", en: "Almost before the movie ended, the crowd poured out." },
        { jp: "ベルが鳴るか鳴らないかのうちに、生徒は走り出した。", kana: "ベルがなるかならないかのうちに、せいとはしりだした。", en: "Almost as the bell rang, the students started running." },
        { jp: "席に着くか着かないかのうちに、料理が出てきた。", kana: "せきにつくかつかないかのうちに、りょうりがでてきた。", en: "Barely had I sat down when the food arrived." },
      ],
      practice: [
        { kind: "blank", text: "映画が終わるか終わらない___、客は流れ出した。", blanks: ["かのうちに"] },
        { kind: "mcq", text: "The pattern repeats the verb in…", options: ["past forms", "る/ない forms", "te-forms", "imperatives"], answer: 1 },
        { kind: "tf", text: "Y in this pattern overlaps with the end of X.", answer: true },
      ],
    },
    { slug: "n2-u07-l04", title: "News flash reading", titleJp: "じけん ぶん", grammarLabel: "reading",
      summary: "たとたん・と思うと in incident reporting.",
      body: { meaning: "Incident narrative: 「信号を渡ったとたん、事件が起きた。警察が駆けつけたかと思うと、犯人は逃げ出した。」",
        formation: [
          { pattern: "渡ったとたん", note: "the instant (he) crossed" },
          { pattern: "駆けつけたかと思うと", note: "no sooner (police) arrived" },
          { pattern: "逃げ出した", note: "bolted" },
        ],
        usage: ["News and narration use these for pace.", "とたん + unexpected; と思うと + rapid sequence."],
        pitfalls: ["犯人 = culprit; 逃げる = flee."],
        related: ["lessons 1-3"] },
      examples: [
        { jp: "信号を渡ったとたん、事故が起きた。", kana: "しんごうをわったとたん、じこがおきた。", en: "The instant he crossed the signal, an accident occurred." },
        { jp: "警察が駆けつけたかと思うと、犯人は逃げ出した。", kana: "けいさつがかけつけたかとおもうと、はんにんはにげだした。", en: "No sooner had the police arrived than the culprit bolted." },
        { jp: "電車に乗ったか乗らないかのうちに、ドアが閉まった。", kana: "でんしゃにのったかのらないかのうちに、ドアがしまった。", en: "Barely had I boarded the train when the doors closed." },
      ],
      practice: [
        { kind: "mcq", text: "「渡ったとたん、事故が起きた」 — とたん = ?",
          options: ["before", "the instant", "because", "although"], answer: 1 },
        { kind: "order", text: "警察が／駆けつけた／かと思うと／犯人は逃げ出した／。", tokens: ["警察が", "駆けつけた", "かと思うと", "犯人は逃げ出した", "。"] },
        { kind: "tf", text: "か〜ないかのうちに can describe boarding a train just in time.", answer: true },
      ],
    },
  ],
}
