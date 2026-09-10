import type { AuthoredUnit } from "../../types"

export const u09: AuthoredUnit = {
  level: "N1", order: 9, title: "Covered in it", titleJp: "みため の ぶんぽう",
  description: "Appearance and tendencies: 〜まみれ (covered in), 〜めく (take on the air of), 〜きらいがある (tend to, negative), 〜げ (review of appearance).",
  vocab: ["汗|あせ", "泥|どろ", "血|ち", "埃|ほこり", "春|はる", "秋|あき", "皮肉|ひにく", "謎|なぞ", "忘れ物|わすれもの", "遅刻|ちこく", "説明|せつめい", "頑固|がんこ", "穏やか|おだやか", "不安|ふあん", "自信|じしん"],
  kanji: ["汗", "泥", "血", "埃", "皮", "肉", "謎", "遅", "疑"],
  exam: [
    { kind: "mcq", text: "「彼は汗まみれになって働いた。」 means…", options: ["He avoided work.", "He worked covered in sweat.", "He was allergic to sweat.", "He hated work."], answer: 1 },
    { kind: "mcq", text: "「彼の説明は脈絡を欠くきらいがある。」 — きらいがある means…", options: ["He hates explanations.", "His explanations tend to lack coherence.", "He loves explaining.", "His explanations are perfect."], answer: 1 },
  ],
  lessons: [
    { slug: "n1-u09-l01", title: "Covered in: 〜まみれ", titleJp: "〜まみれ", grammarLabel: "〜まみれ",
      summary: "まみれ = covered/ smeared with X: 汗まみれ・泥まみれ.",
      body: { meaning: "Noun + まみれ = SMEARED ALL OVER WITH X: 血まみれ、ほこりまみれ.", formation: [{ pattern: "Noun ＋ まみれ", note: "汗まみれ" }, { pattern: "〜まみれになる", note: "become covered in" }], usage: ["Physical mess; also metaphor: うそまみれ.", "Negative nuance."], pitfalls: ["X must be something that can cover.", "だらけ is broader (mistakes, dust); まみれ = sticky/liquid mess usually."], related: ["〜だらけ (N4)", "〜ずくめ"] },
      examples: [
        { jp: "彼は汗まみれになって働いた。", kana: "かれはあせまみれになってはたらいた。", en: "He worked until he was drenched in sweat." },
        { jp: "子どもたちは泥まみれで遊んでいた。", kana: "こどもたちはどろまみれであそんでいた。", en: "The kids were playing covered in mud." },
        { jp: "うそまみれの報告書は許せない。", kana: "うそまみれのほうこくしょはゆるせない。", en: "A report riddled with lies is unforgivable." },
      ],
      practice: [
        { kind: "blank", text: "彼は汗___になって働いた。", blanks: ["まみれ"] },
        { kind: "mcq", text: "まみれ usually implies…", options: ["cleanliness", "a messy coating", "happiness", "formality"], answer: 1 },
        { kind: "tf", text: "うそまみれ is a metaphorical use.", answer: true },
      ],
    },
    { slug: "n1-u09-l02", title: "Taking on the air of: 〜めく", titleJp: "〜めく", grammarLabel: "〜めく",
      summary: "めく = starts to feel like X: 春めく・皮肉めく.",
      body: { meaning: "Noun + めく = TAKES ON THE QUALITY OF X: 春めいてきた (it's getting spring-like).", formation: [{ pattern: "Noun ＋ めく", note: "春めく" }, { pattern: "〜めいた Noun", note: "attributive" }, { pattern: "〜めいてきた", note: "progressive" }], usage: ["Seasons, moods, atmospheres.", "Poetic-leaning."], pitfalls: ["めく verbs conjugate normally.", "Fixed nouns: 春・謎・皮肉・秘密."], related: ["〜っぽい (N3)", "〜げ (N3)"] },
      examples: [
        { jp: "日差しも春めいてきた。", kana: "ひざしもはるめいてきた。", en: "The sunlight has turned spring-like." },
        { jp: "彼の話は謎めいていた。", kana: "かれのはなしはなぞめいていた。", en: "His talk was shrouded in mystery." },
        { jp: "彼は皮肉めいた言い方をした。", kana: "かれはひにくめたいいいかたをした。", en: "He put it in an ironic way." },
      ],
      practice: [
        { kind: "blank", text: "日差しも春___きた。", blanks: ["めいて"] },
        { kind: "mcq", text: "めく conjugates as a…", options: ["noun", "verb", "adjective", "particle"], answer: 1 },
        { kind: "tf", text: "謎めいた話 = a mysterious story.", answer: true },
      ],
    },
    { slug: "n1-u09-l03", title: "Tends to (badly): 〜きらいがある", titleJp: "〜きらいがある", grammarLabel: "〜きらいがある",
      summary: "きらいがある = has a tendency (negative): 彼の説明は難しすぎるきらいがある.",
      body: { meaning: "Plain + きらいがある = TENDS TO (undesirable): 彼は物事を悲観的に考えるきらいがある.", formation: [{ pattern: "Verb plain ＋ きらいがある", note: "考えるきらいがある" }, { pattern: "Noun の きらいがある", note: "単調なきらいがある" }], usage: ["Objective criticism, reviews.", "X is habitual and undesirable."], pitfalls: ["Not 'dislike' — it's a tendency.", "Often softened criticism in essays."], related: ["〜がち (N3)", "〜っぽい (N3)"] },
      examples: [
        { jp: "彼は物事を悲観的に考えるきらいがある。", kana: "かれはものごとをひかんてきにかんがえるきらいがある。", en: "He tends to look at things pessimistically." },
        { jp: "この作品は単調なきらいがある。", kana: "このさくひんはたんちょうなきらいがある。", en: "This work tends to be monotonous." },
        { jp: "現代人は運動不足のきらいがある。", kana: "げんだいじんはうんどうぶそくのきらいがある。", en: "Modern people tend to lack exercise." },
      ],
      practice: [
        { kind: "blank", text: "彼は物事を悲観的に考える___がある。", blanks: ["きらい"] },
        { kind: "mcq", text: "きらいがある expresses a tendency that is…", options: ["desirable", "undesirable", "neutral", "rare"], answer: 1 },
        { kind: "tf", text: "It can also follow nouns with の.", answer: true },
      ],
    },
    { slug: "n1-u09-l04", title: "Appearance toolkit", titleJp: "まとめ", grammarLabel: "review",
      summary: "まみれ・めく・きらいがある — physical mess, atmosphere, negative habit.",
      body: { meaning: "Three appearance/stance markers: まみれ (smeared), めく (becomes like X), きらいがある (bad habit).",
        formation: [
          { pattern: "〜まみれ", note: "smeared with (physical)" },
          { pattern: "〜めく", note: "turns into the air of X" },
          { pattern: "〜きらいがある", note: "tends to (negative)" },
        ],
        usage: ["まみれ/だらけ: mess; めく: seasons/moods.", "きらいがある is essay-style criticism."],
        pitfalls: ["まみれ is liquid/sticky; だらけ is general.", "めく is a verb; きらいがある is a fixed noun phrase."],
        related: ["lessons 1-3"] },
      examples: [
        { jp: "埃まみれの本棚を拭いた。", kana: "ほこりまみれのほんだなをふいた。", en: "I wiped the bookshelf coated in dust." },
        { jp: "街全体が秋めいてきた。", kana: "まちぜんたいがあきめいてきた。", en: "The whole town has taken on an autumn feel." },
        { jp: "彼の報告は楽観的すぎるきらいがある。", kana: "かれのほうこくはらっかんてきすぎるきらいがある。", en: "His reports tend to be overly optimistic." },
      ],
      practice: [
        { kind: "mcq", text: "Smeared with →", options: ["めく", "まみれ", "きらいがある", "げ"], answer: 1 },
        { kind: "mcq", text: "Negative habitual tendency →", options: ["まみれ", "きらいがある", "めく", "だらけ"], answer: 1 },
        { kind: "tf", text: "春めく means 'to become spring-like'.", answer: true },
      ],
    },
  ],
}
