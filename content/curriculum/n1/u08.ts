import type { AuthoredUnit } from "../../types"

export const u08: AuthoredUnit = {
  level: "N1", order: 8, title: "On the verge of action", titleJp: "じどうてきな しせい",
  description: "Dramatic manner: 〜んばかりに (as if about to), 〜んばかりの (attributive), 〜ごとく (like, literary), 〜とばかりに (as if to say).",
  vocab: ["洪水|こうずい", "押し寄せる|おしよせる", "咲く|さく", "満開|まんかい", "飛び出す|とびだす", "泣く|なく", "怒る|おこる", "抗議|こうぎ", "挑む|いどむ", "斬る|きる", "武士|ぶし", "標語|ひょうご", "象徴|しょうちょう", "様子|ようす", "飛行機|ひこうき", "離陸|りりく"],
  kanji: ["洪", "押", "寄", "咲", "満", "開", "抗", "挑", "離"],
  exam: [
    { kind: "mcq", text: "「彼は言いたげな様子だった」 vs 「言わんばかりの様子」 — the latter means…", options: ["He said it clearly.", "He looked as if he were about to say it.", "He refused to speak.", "He was told to speak."], answer: 1 },
    { kind: "mcq", text: "「花々が咲き乱れ、春そのものと言わんばかりだ。」 — んばかり suggests…", options: ["spring failed", "it looks exactly like spring itself", "winter continues", "flowers died"], answer: 1 },
  ],
  lessons: [
    { slug: "n1-u08-l01", title: "As if about to: 〜んばかりに", titleJp: "〜んばかりに", grammarLabel: "〜んばかりに",
      summary: "んばかりに = as if on the verge of X: 押し黙らんばかりに.",
      body: { meaning: "Verb ない-stem + んばかりに = AS IF ABOUT TO X (exaggerated manner): 抱きしめんばかりに.", formation: [{ pattern: "Verb ない-stem ＋ んばかりに", note: "言わんばかりに" }, { pattern: "する → せんばかりに", note: "irregular" }], usage: ["Dramatic descriptions.", "Exaggeration is the point."], pitfalls: ["する→せんばかりに (not しんばかりに).", "Attributive: んばかりの + Noun."], related: ["〜とばかりに", "〜んばかりの"] },
      examples: [
        { jp: "彼は倒れんばかりに疲れていた。", kana: "かれはたおれんばかりにつかれていた。", en: "He was dead tired — about to collapse." },
        { jp: "彼女は今にも泣かんばかりの顔をしていた。", kana: "かのじょはいまにもなかんばかりのかおをしていた。", en: "She looked just about to burst into tears." },
        { jp: "観客は押し寄せんばかりの人出だった。", kana: "かんきゃくはおしよせんばかりのにんしゅだった。", en: "The crowds were on the verge of surging in." },
      ],
      practice: [
        { kind: "blank", text: "彼は倒れ___疲れていた。", blanks: ["んばかりに"] },
        { kind: "mcq", text: "する + んばかりに = ", options: ["しんばかりに", "せんばかりに", "さばかりに", "こばかりに"], answer: 1 },
        { kind: "tf", text: "Attributive form is んばかりの.", answer: true },
      ],
    },
    { slug: "n1-u08-l02", title: "Attributive: 〜んばかりの", titleJp: "〜んばかりの", grammarLabel: "〜んばかりの",
      summary: "んばかりの + Noun = noun looking about to X: 満開んばかりの桜.",
      body: { meaning: "Verb ない-stem + んばかりの + Noun = A NOUN ON THE VERGE OF X: 今にも降らんばかりの空.", formation: [{ pattern: "Verb ない-stem ＋ んばかりの Noun", note: "泣かんばかりの顔" }, { pattern: "咲かんばかりの桜", note: "buds about to burst" }], usage: ["Vivid descriptions, haiku-like.", "Exaggerated states."], pitfalls: ["Follows んばかりに in the attributive slot.", "Keep it for visual/physical imagery."], related: ["〜んばかりに", "〜げ (N3)"] },
      examples: [
        { jp: "今にも降らんばかりの空が広がっていた。", kana: "いまにもふらんばかりのそらがひろがっていた。", en: "A sky that looked about to pour at any moment." },
        { jp: "咲かんばかりの桜のつぼみが並んでいた。", kana: "さかんばかりのさくらのつぼみがならんでいた。", en: "Cherry buds lined up, ready to burst open." },
        { jp: "彼は今にも倒れんばかりの男だった。", kana: "かれはいまにもたおれんばかりのおとこだった。", en: "He was a man who looked about to keel over." },
      ],
      practice: [
        { kind: "blank", text: "今にも降ら___空が広がっていた。", blanks: ["んばかりの"] },
        { kind: "mcq", text: "咲かんばかりの桜 means the buds are…", options: ["already fallen", "about to open", "dead", "artificial"], answer: 1 },
        { kind: "tf", text: "んばかりの precedes a noun.", answer: true },
      ],
    },
    { slug: "n1-u08-l03", title: "Just like: 〜ごとく", titleJp: "〜ごとく", grammarLabel: "〜ごとく",
      summary: "ごとく = like X (literary): 水のごとく流れる.",
      body: { meaning: "Noun の / plain + ごとく = JUST LIKE X (literary simile): 光のごとく速い.", formation: [{ pattern: "Noun の ＋ ごとく", note: "夢のごとく" }, { pattern: "〜ごとき Noun", note: "attributive" }], usage: ["Literature, formal speech, idioms.", "Replaces のようだ in register."], pitfalls: ["Attributive is ごとき.", "Often in proverbs: 水中灯のごとく."], related: ["〜のように (N5)", "〜ことく (variant)"] },
      examples: [
        { jp: "時は水のごとく流れていく。", kana: "ときはみずのごとくながれていく。", en: "Time flows like water." },
        { jp: "夢のごとく消えていった希望。", kana: "ゆめのごとくきえていったきぼう。", en: "Hopes that vanished like a dream." },
        { jp: "光のごとき速さで、彼は走った。", kana: "ひかりのごときはやさで、かれははしった。", en: "He ran with the speed of light." },
      ],
      practice: [
        { kind: "blank", text: "時は水の___流れていく。", blanks: ["ごとく"] },
        { kind: "mcq", text: "Attributive form of ごとく:", options: ["ごとくの", "ごとき", "ごとくに", "ごとくも"], answer: 1 },
        { kind: "tf", text: "ごとく is a literary replacement for のように.", answer: true },
      ],
    },
    { slug: "n1-u08-l04", title: "As if to say: 〜とばかりに", titleJp: "〜とばかりに", grammarLabel: "〜とばかりに",
      summary: "とばかりに = as if to say X: 待っていたとばかりに.",
      body: { meaning: "Plain / noun + とばかりに = AS IF TO SAY X (without saying it): 待ってましたとばかりに、飛び出した.", formation: [{ pattern: "Plain ＋ とばかりに", note: "まだかとばかりに" }, { pattern: "Noun ＋ とばかりに", note: "とうていだめとばかりに" }], usage: ["Narrative gestures.", "The 'saying' is wordless."], pitfalls: ["言う is implied, not stated.", "Often with expressions/actions."], related: ["〜んばかりに", "〜と言わんばかり"] },
      examples: [
        { jp: "彼は待ってましたとばかりに、手を挙げた。", kana: "かれはまってましたとばかりに、てをあげた。", en: "As if to say 'finally!', he raised his hand." },
        { jp: "母親は早く寝ろとばかりに、部屋の電気を消した。", kana: "ははおやははやくねろとばかりに、へやのでんきをけした。", en: "As if to say 'go to bed', she switched off the light." },
        { jp: "彼は拒むとばかりに、うつむいた。", kana: "かれはこばむとばかりに、うつむいた。", en: "He looked down, as if refusing." },
      ],
      practice: [
        { kind: "blank", text: "彼は待ってました___、手を挙げた。", blanks: ["とばかりに"] },
        { kind: "mcq", text: "とばかりに conveys a message that is…", options: ["spoken aloud", "wordless", "written", "sung"], answer: 1 },
        { kind: "tf", text: "早く寝ろとばかりに uses an imperative inside the quote.", answer: true },
      ],
    },
  ],
}
