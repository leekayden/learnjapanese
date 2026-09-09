import type { AuthoredUnit } from "../../types"

export const u14: AuthoredUnit = {
  level: "N3", order: 14, title: "Leading the pack", titleJp: "だいひょう と しょうりゃく",
  description: "Representatives and exclusions: 〜をはじめ (starting with), 〜はともかく (setting aside), 〜も〜ば〜も (both X and Y).",
  vocab: ["代表|だいひょう", "委員|いいん", "家族|かぞく", "両親|りょうしん", "兄|あに", "姉|あね", "医学|いがく", "科学|かがく", "技術|ぎじゅつ", "発展|はってん", "課題|かだい", "評価|ひょうか", "議論|ぎろん", "内容|ないよう", "戦争|せんそう", "平和|へいわ"],
  kanji: ["代", "委", "両", "医", "技", "発", "題", "評"],
  exam: [
    { kind: "mcq", text: "「東京をはじめ、大都市では人口が増えている。」 — をはじめ means…", options: ["only in Tokyo", "starting with Tokyo (as the prime example)", "except Tokyo", "because of Tokyo"], answer: 1 },
    { kind: "mcq", text: "「値段はともかく、デザインはいい。」 — はともかく means…", options: ["including the price", "setting the price aside", "because of the price", "the price is good"], answer: 1 },
  ],
  lessons: [
    { slug: "n3-u14-l01", title: "Chief among them: 〜をはじめ", titleJp: "〜をはじめ", grammarLabel: "〜をはじめ",
      summary: "をはじめ = starting with the prime example: 東京をはじめ、大都市では…",
      body: { meaning: "Noun + をはじめ(として) = STARTING WITH X (the best-known example), and others too: 東京をはじめ、大都市… (big cities, starting with Tokyo).", formation: [{ pattern: "Noun ＋ をはじめ", note: "東京をはじめ starting with Tokyo" }, { pattern: "Noun ＋ をはじめとして", note: "more formal" }, { pattern: "Noun ＋ をはじめとする ＋ Noun", note: "as an attributive" }], usage: ["X is the representative/leading case.", "Common in news and formal writing."], pitfalls: ["X must be the most typical of the group.", "Not an exhaustive list — X stands for the rest."], related: ["〜など (N5)", "〜はともかく"] },
      examples: [
        { jp: "東京をはじめ、大都市では人口が増えている。", kana: "とうきょうをはじめ、だいとしではじんこうがふえている。", en: "In big cities, starting with Tokyo, the population is growing." },
        { jp: "両親をはじめ、家族みんなが応援してくれている。", kana: "りょうしんをはじめ、かぞくみんながおうえんしてくれている。", en: "My family, starting with my parents, is all rooting for me." },
        { jp: "医学をはじめとする科学の発展が著しい。", kana: "いがくをはじめとするかがくのはってんがいちじるしい。", en: "The development of science, starting with medicine, is remarkable." },
      ],
      practice: [
        { kind: "blank", text: "東京___、大都市では人口が増えている。(starting with)", blanks: ["をはじめ"] },
        { kind: "mcq", text: "をはじめ introduces…", options: ["the last item", "the most representative item", "an exception", "a reason"], answer: 1 },
        { kind: "tf", text: "をはじめとする can modify a noun directly.", answer: true },
      ],
    },
    { slug: "n3-u14-l02", title: "Setting that aside: 〜はともかく", titleJp: "〜はともかく", grammarLabel: "〜はともかく",
      summary: "はともかく = leaving X aside: 値段はともかく、デザインはいい.",
      body: { meaning: "Noun + はともかく(として) = SETTING X ASIDE for now, focusing on what matters: 値段はともかく、デザインはいい (never mind the price — the design is good).", formation: [{ pattern: "Noun ＋ はともかく", note: "値段はともかく" }, { pattern: "Noun ＋ はともかくとして", note: "longer version" }, { pattern: "〜か〜かはともかく", note: "whether X or Y aside" }], usage: ["The speaker downplays X to highlight Y.", "Often used when Y is the real topic."], pitfalls: ["X is usually the less important item.", "Common pattern: 見た目はともかく (looks aside)."], related: ["〜は別として", "〜をはじめ"] },
      examples: [
        { jp: "値段はともかく、デザインは素晴らしい。", kana: "ねだんはともかく、デザインはすばらしい。", en: "Setting the price aside, the design is wonderful." },
        { jp: "見た目はともかく、味は保証します。", kana: "みためはともかく、あじはほしょうします。", en: "Looks aside, I guarantee the taste." },
        { jp: "上手かどうかはともかく、楽しかった。", kana: "じょうずかどうかはともかく、たのしかった。", en: "Whether we were good or not aside, it was fun." },
      ],
      practice: [
        { kind: "blank", text: "値段___、デザインは素晴らしい。(setting aside)", blanks: ["はともかく"] },
        { kind: "mcq", text: "はともかく downplays…", options: ["the main point", "the less important item", "the verb", "the subject"], answer: 1 },
        { kind: "tf", text: "上手かどうかはともかく means 'whether skilled or not, setting that aside'.", answer: true },
      ],
    },
    { slug: "n3-u14-l03", title: "Both X and Y: 〜も〜ば〜も", titleJp: "〜も〜ば〜も", grammarLabel: "〜も〜ば〜も",
      summary: "も〜ば〜も = both X and Y: 賛成もあれば反対もある.",
      body: { meaning: "Xもあれば、Yもある = THERE ARE BOTH X AND Y (emphasizing variety): 賛成もあれば、反対もある (there are both yeses and noes).", formation: [{ pattern: "A もあれば、B もある", note: "verb/い-adj ば-form" }, { pattern: "A もいるし、B もいる", note: "alternative with し" }, { pattern: "A も ～ば、B も", note: "parallel structure" }], usage: ["Balanced presentation of two sides.", "Common in discussion/evaluation contexts."], pitfalls: ["Verb/い-adj use ば-form: あれば、いれば.", "Nouns can use あり for formal writing."], related: ["〜し (N4)", "〜ば (N5)"] },
      examples: [
        { jp: "この意見には賛成もあれば、反対もある。", kana: "このいけんにはさんせいもあれば、はんたいもある。", en: "There are both supporters and opponents of this view." },
        { jp: "彼は日本語も話せるし、英語も話せる。", kana: "かれはにほんごもはなせるし、えいごもはなせる。", en: "He speaks both Japanese and English." },
        { jp: "良い点もあれば、悪い点もある。", kana: "よいてんもあれば、わるいてんもある。", en: "There are both good and bad points." },
      ],
      practice: [
        { kind: "blank", text: "賛成も___、反対もある。(ば-form of ある)", blanks: ["あれば"] },
        { kind: "mcq", text: "〜も〜ば〜も emphasizes…", options: ["only A", "only B", "both A and B", "neither"], answer: 2 },
        { kind: "tf", text: "Verb/い-adj in this pattern take the ば-form.", answer: true },
      ],
    },
    { slug: "n3-u14-l04", title: "War and peace: reading practice", titleJp: "せんそうと へいわ", grammarLabel: "reading",
      summary: "Use をはじめ/はともかく in longer, written-style sentences.",
      body: { meaning: "News-style Japanese loves をはじめ: 戦争をはじめとする悲しい歴史 (sad history starting with war), 平和について考える (think about peace).",
        formation: [
          { pattern: "〜をはじめとする Noun", note: "Noun starting with X" },
          { pattern: "〜はともかく、〜", note: "X aside, Y" },
          { pattern: "〜かどうかはともかく", note: "whether or not aside" },
        ],
        usage: ["をはじめ is register-neutral but formal-leaning.", "はともかく is spoken and written."],
        pitfalls: ["戦争 = war; 平和 = peace — very common N3 vocab pair."],
        related: ["lessons 1-3"] },
      examples: [
        { jp: "戦争をはじめとする歴史の課題について考える。", kana: "せんそうをはじめとするれきしのかだいについてかんがえる。", en: "Think about historical issues, starting with war." },
        { jp: "平和の価値は、言葉では言い表せない。", kana: "へいわのかちは、ことばではいいあらわせない。", en: "The value of peace cannot be expressed in words." },
        { jp: "有名かどうかはともかく、この美術館は価値がある。", kana: "ゆうめいかどうかはともかく、このびじゅつかんはかちがある。", en: "Fame aside, this museum is worth visiting." },
      ],
      practice: [
        { kind: "mcq", text: "「戦争をはじめとする歴史の課題」 — what is the prime example?",
          options: ["history", "war", "peace", "issues"], answer: 1 },
        { kind: "order", text: "値段は／ともかく／デザインは／素晴らしい／。", tokens: ["値段は", "ともかく", "デザインは", "素晴らしい", "。"] },
        { kind: "tf", text: "をはじめ marks the LEAST typical example.", answer: false },
      ],
    },
  ],
}
