import type { AuthoredUnit } from "../../types"

export const u12: AuthoredUnit = {
  level: "N3", order: 12, title: "Even so", titleJp: "それでも",
  description: "Conditions and concessions: 〜さえ〜ば (if only), たとえ〜ても (even if), 〜のに (even though).",
  vocab: ["条件|じょうけん", "機会|きかい", "問題|もんだい", "失敗|しっぱい", "お金|おかね", "時間|じかん", "君|きみ", "私|わたし", "先生|せんせい", "歌手|かしゅ", "夢|ゆめ", "諦める|あきらめる", "挑戦|ちょうせん", "参加|さんか", "賛成|さんせい", "反対|はんたい"],
  kanji: ["可", "敗", "夢", "諦", "挑", "賛", "反", "与"],
  exam: [
    { kind: "mcq", text: "「お金さえあれば、行ける。」 means…", options: ["Even with money, I can't go.", "If only I had money, I could go.", "I have money so I can go.", "Without money I can still go."], answer: 1 },
    { kind: "mcq", text: "「たとえ失敗しても、挑戦したい。」 means…", options: ["I won't try in case I fail.", "Even if I fail, I want to try.", "I failed so I won't try.", "Trying means failing."], answer: 1 },
  ],
  lessons: [
    { slug: "n3-u12-l01", title: "If only: 〜さえ〜ば", titleJp: "〜さえ〜ば", grammarLabel: "〜さえ〜ば",
      summary: "さえ〜ば = if only X: お金さえあれば、何でもできる.",
      body: { meaning: "Xさえ〜ば = IF ONLY X (then everything is fine). X is the one minimum condition: お金さえあれば (if only I had money).", formation: [{ pattern: "Noun ＋ さえ ＋ ば-form", note: "お金さえあれば if only money" }, { pattern: "Verb ます-stem ＋ さえすれば", note: "行きさえすれば if (you) just go" }, { pattern: "い-adj く ＋ さえあれば", note: "安くさえあれば" }], usage: ["Emphasises ONE sufficient condition.", "Very common in speech: それさえわかれば."], pitfalls: ["さえ goes BEFORE the ば-form: 時間さえあれば (not 時間がさえあれば).", "Similar to ば but with emphasis on the single condition."], related: ["〜ば (N5)", "〜だけ"] },
      examples: [
        { jp: "お金さえあれば、何でもできる。", kana: "おかねさえあれば、なんでもできる。", en: "If only I had money, I could do anything." },
        { jp: "君さえそばにいれば、他には何もいらない。", kana: "きみさえそばにいれば、ほかにはなにもいらない。", en: "As long as you're by my side, I need nothing else." },
        { jp: "薬を飲みさえすれば、治りますよ。", kana: "くすりをのみさえすれば、なおりますよ。", en: "If you just take the medicine, you'll get better." },
      ],
      practice: [
        { kind: "blank", text: "お金___あれば、何でもできる。(if only money)", blanks: ["さえ"] },
        { kind: "mcq", text: "さえ emphasizes…", options: ["the problem", "the ONE sufficient condition", "the future", "the past"], answer: 1 },
        { kind: "tf", text: "行きさえすれば means 'if you just go'.", answer: true },
      ],
    },
    { slug: "n3-u12-l02", title: "Even if: たとえ〜ても", titleJp: "たとえ〜ても", grammarLabel: "たとえ〜ても",
      summary: "たとえ〜ても = even if X: たとえ失敗しても、諦めない.",
      body: { meaning: "たとえ + plain て-form + も = EVEN IF X happens, the outcome stands. たとえ is optional emphasis: 失敗しても alone also works.", formation: [{ pattern: "たとえ ＋ Verb て-form ＋ も", note: "たとえ行っても even if (I) go" }, { pattern: "たとえ ＋ い-adj くても", note: "たとえ高くても" }, { pattern: "たとえ ＋ Noun でも", note: "たとえ雨でも" }], usage: ["Shows determination or concession.", "Very common with 諦めない、大丈夫."], pitfalls: ["ても is the て-form + も — same as 'even' for nouns (雨でも).", "たとえ is optional but adds emphasis."], related: ["〜ても (N4)", "〜のに"] },
      examples: [
        { jp: "たとえ失敗しても、諦めない。", kana: "たとえしっぱいしても、あきらめない。", en: "Even if I fail, I won't give up." },
        { jp: "たとえ反対されても、彼女と結婚します。", kana: "たとえはんたいされても、かのじょとけっこんします。", en: "Even if people oppose it, I'll marry her." },
        { jp: "たとえ高くても、このパソコンを買いたい。", kana: "たとえたかくても、このパソコンをかいたい。", en: "Even if it's expensive, I want to buy this computer." },
      ],
      practice: [
        { kind: "blank", text: "___失敗しても、諦めない。(even if)", blanks: ["たとえ"] },
        { kind: "mcq", text: "たとえ〜ても shows…", options: ["cause", "concession/determination", "condition", "purpose"], answer: 1 },
        { kind: "tf", text: "たとえ is optional emphasis.", answer: true },
      ],
    },
    { slug: "n3-u12-l03", title: "Even though: 〜のに (recap + nuance)", titleJp: "〜のに", grammarLabel: "〜のに",
      summary: "のに = even though (surprise/frustration): 雨なのに、出かけた.",
      body: { meaning: "Plain + のに = EVEN THOUGH X (unexpected, often frustrated). 雨なのに出かけた (I went out even though it's raining). Distinct from ても (hypothetical) — のに is factual.", formation: [{ pattern: "Verb plain ＋ のに", note: "行ったのに even though (I) went" }, { pattern: "い-adj ＋ のに", note: "高いのに" }, { pattern: "Noun ＋ なのに", note: "子供なのに" }], usage: ["The result contradicts what you'd expect.", "Often expresses regret or annoyance."], pitfalls: ["のに is factual (it DID rain); ても is hypothetical.", "Nouns need な: 子供なのに."], related: ["〜ても", "〜くせに"] },
      examples: [
        { jp: "雨なのに、出かけた。", kana: "あめなのに、でかけた。", en: "I went out even though it was raining." },
        { jp: "頑張ったのに、負けてしまった。", kana: "がんばったのに、まけてしまった。", en: "Even though I tried hard, I lost." },
        { jp: "薬を飲んだのに、熱が下がらない。", kana: "くすりをのんだのに、ねつがさがらない。", en: "Even though I took medicine, my fever won't go down." },
      ],
      practice: [
        { kind: "blank", text: "雨___、出かけた。(even though it's raining)", blanks: ["なのに"] },
        { kind: "mcq", text: "のに vs ても: のに is…", options: ["hypothetical", "factual", "formal", "future"], answer: 1 },
        { kind: "tf", text: "子供なのに is correct (na before のに).", answer: true },
      ],
    },
    { slug: "n3-u12-l04", title: "Dreams and setbacks", titleJp: "ゆめと ざせき", grammarLabel: "reading: dreams",
      summary: "Combine even-if and if-only to talk about dreams and setbacks.",
      body: { meaning: "Talking about goals: 夢のために挑戦する (challenge for the dream), たとえ失敗しても (even if I fail), チャンスさえあれば (if only I had a chance).",
        formation: [
          { pattern: "夢のために挑戦する", note: "challenge for the dream" },
          { pattern: "たとえ〜ても、諦めない", note: "even if X, I won't give up" },
          { pattern: "〜さえあれば、可能性がある", note: "if only X, there's possibility" },
        ],
        usage: ["Very natural motivational speech pattern.", "さえあれば often appears with 可能性、チャンス."],
        pitfalls: ["諦める (give up) pairs with ない: 諦めない = won't give up."],
        related: ["lessons 1-3"] },
      examples: [
        { jp: "彼は歌手になるという夢のために、毎日練習している。", kana: "かれはかしゅになるというゆめのために、まいにちれんしゅうしている。", en: "He practices every day for his dream of becoming a singer." },
        { jp: "チャンスさえあれば、成功する可能性がある。", kana: "チャンスさえあれば、せいこうするかのうせいがある。", en: "If only there's a chance, there's a possibility of success." },
        { jp: "たとえ時間がなくても、練習を続ける。", kana: "たとえじかんがなくても、れんしゅうをつづける。", en: "Even without time, I'll keep practicing." },
      ],
      practice: [
        { kind: "mcq", text: "「夢のために挑戦する」 means…", options: ["I gave up my dream", "I'm challenging myself for my dream", "My dream is a challenge", "Challenges are dreams"], answer: 1 },
        { kind: "order", text: "たとえ／失敗しても／諦めない／。", tokens: ["たとえ", "失敗しても", "諦めない", "。"] },
        { kind: "tf", text: "諦める means 'to give up'.", answer: true },
      ],
    },
  ],
}
