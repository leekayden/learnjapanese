import type { AuthoredUnit } from "../../types"

export const u01: AuthoredUnit = {
  level: "N1", order: 1, title: "Grounds and standards", titleJp: "こんきょ と ひょうじゅん",
  description: "Judgment bases: 〜をもとに (based on), 〜に即して (in accordance with), 〜に照らして (in light of), 〜を踏まえて (building on).",
  vocab: ["事実|じじつ", "証拠|しょうこ", "根拠|こんきょ", "前提|ぜんてい", "判断|はんだん", "基準|きじゅん", "規則|きそく", "法律|ほうりつ", "経験|けいけん", "調査|ちょうさ", "結果|けっか", "論理|ろんり", "理性|りせい", "知性|ちせい", "賢明|けんめい", "妥結|だけつ"],
  kanji: ["拠", "提", "準", "則", "即", "照", "踏", "賢", "妥"],
  exam: [
    { kind: "mcq", text: "「調査結果をもとに、報告書を作成した。」 means…", options: ["The report created the survey.", "The report was made using the survey results as its basis.", "The survey was abandoned.", "The report contradicted the survey."], answer: 1 },
    { kind: "mcq", text: "「法律に照らして、この行為は違法だ。」 means…", options: ["The law shines on this act.", "In light of the law, this act is illegal.", "The law made this act legal.", "This act lit up the law."], answer: 1 },
  ],
  lessons: [
    { slug: "n1-u01-l01", title: "Based on: 〜をもとに", titleJp: "〜をもとに", grammarLabel: "〜をもとに",
      summary: "をもとに = using X as raw material: 小説をもとに、映画を作る.",
      body: { meaning: "Noun + をもとに(して) = X IS THE SOURCE/RAW MATERIAL for creating something: 実話をもとにした小説.", formation: [{ pattern: "Noun ＋ をもとに", note: "体験をもとに" }, { pattern: "〜をもとにした Noun", note: "attributive" }], usage: ["Creation and reconstruction.", "X is transformed into the product."], pitfalls: ["をもとに = raw material; に基づいて = logical foundation.", "Attributive: をもとにした／をもとにして."], related: ["〜に基づいて (N3)", "〜を踏まえて"] },
      examples: [
        { jp: "この映画は、実話をもとに作られた。", kana: "このえいがは、じつわをもとにつくられた。", en: "This movie was made based on a true story." },
        { jp: "アンケートをもとに、新製品を開発した。", kana: "アンケートをもとに、しんせいひんをかいはつした。", en: "We developed the new product using the survey as a basis." },
        { jp: "彼の経験をもとに、訓練計画を立てた。", kana: "かれのけいけんをもとに、くんれんけいかくをたてた。", en: "They drew up the training plan from his experience." },
      ],
      practice: [
        { kind: "blank", text: "この映画は、実話___作られた。", blanks: ["をもとに"] },
        { kind: "mcq", text: "をもとに emphasises X as…", options: ["a rule", "raw material", "an obstacle", "a goal"], answer: 1 },
        { kind: "tf", text: "をもとにした can modify a noun.", answer: true },
      ],
    },
    { slug: "n1-u01-l02", title: "In accordance with: 〜に即して", titleJp: "〜に即して", grammarLabel: "〜に即して",
      summary: "に即して = staying true to the facts: 現実に即して考える.",
      body: { meaning: "Noun + に即して = ACTING/JUDGING IN ACCORDANCE WITH X (facts, reality): 現実に即して対策を考える.", formation: [{ pattern: "Noun ＋ に即して", note: "現実に即して" }, { pattern: "〜に即した Noun", note: "attributive" }], usage: ["Formal — policies, analysis.", "X is usually 現実・事実・実情."], pitfalls: ["に即して = faithful to X; に照らして = measured against X.", "即す = to conform to."], related: ["〜に照らして", "〜を踏まえて"] },
      examples: [
        { jp: "現実に即して、計画を見直すべきだ。", kana: "げんじつにそくして、けいかくをみなおすべきだ。", en: "We should rethink the plan in accordance with reality." },
        { jp: "事実に即した報道が求められている。", kana: "じじつにそくしたほうどうがもとめられている。", en: "Reporting faithful to the facts is demanded." },
        { jp: "実情に即して判断することが大切だ。", kana: "じつじょうにそくしてはんだんすることがたいせつだ。", en: "It matters to judge according to the actual situation." },
      ],
      practice: [
        { kind: "blank", text: "現実___、計画を見直すべきだ。", blanks: ["に即して"] },
        { kind: "mcq", text: "に即して usually pairs with…", options: ["dreams", "facts/reality", "jokes", "weather"], answer: 1 },
        { kind: "tf", text: "Attributive form is に即した.", answer: true },
      ],
    },
    { slug: "n1-u01-l03", title: "In light of: 〜に照らして", titleJp: "〜に照らして", grammarLabel: "〜に照らして",
      summary: "に照らして = measured against a standard: 法律に照らして罰する.",
      body: { meaning: "Noun + に照らして = MEASURED AGAINST X (law, rule, custom): 規則に照らして処分する.", formation: [{ pattern: "Noun ＋ に照らして", note: "法律に照らして" }, { pattern: "〜に照らして 考える／罰する", note: "typical verbs" }], usage: ["Legal and official evaluation.", "X is the standard applied."], pitfalls: ["照らす = to illuminate — metaphorically casting light via the standard.", "Don't confuse with 現実に即して (staying true to facts)."], related: ["〜に即して", "〜に基づいて"] },
      examples: [
        { jp: "法律に照らして、この行為は違法だ。", kana: "ほうりつにてらして、このこういはいほうだ。", en: "In light of the law, this act is illegal." },
        { jp: "社内規則に照らして、彼は処分された。", kana: "しゃないきそくにてらして、かれはしょぶんされた。", en: "Measured against company rules, he was disciplined." },
        { jp: "常識に照らして考えれば、その要求は過酷だ。", kana: "じょうしきにてらしてかんがえれば、そのようきゅうはかこくだ。", en: "Judged against common sense, that demand is harsh." },
      ],
      practice: [
        { kind: "blank", text: "法律___、この行為は違法だ。", blanks: ["に照らして"] },
        { kind: "mcq", text: "に照らして evaluates against…", options: ["a wish", "a standard/law", "a friend", "a mood"], answer: 1 },
        { kind: "tf", text: "に照らして and に即して are interchangeable.", answer: false },
      ],
    },
    { slug: "n1-u01-l04", title: "Building on: 〜を踏まえて", titleJp: "〜を踏まえて", grammarLabel: "〜を踏まえて",
      summary: "を踏まえて = taking X into account (builds on it): 前回の結果を踏まえて.",
      body: { meaning: "Noun + を踏まえて = TAKING X INTO ACCOUNT (X is a foundation to build further on): これまでの成果を踏まえて方針を決めた.", formation: [{ pattern: "Noun ＋ を踏まえて", note: "調査結果を踏まえて" }, { pattern: "〜を踏まえた Noun", note: "attributive" }], usage: ["Plans, policies, speeches.", "X is acknowledged then extended."], pitfalls: ["踏まえる = to stand firm on.", "More forward-looking than をもとに."], related: ["〜をもとに", "〜に即して"] },
      examples: [
        { jp: "前回の結果を踏まえて、戦略を修正した。", kana: "ぜんかいのけっかをふまえて、せんりゃくをしゅうせいした。", en: "Building on last time's results, they revised the strategy." },
        { jp: "住民の意見を踏まえた上で、計画を策定する。", kana: "じゅうみんのいけんをふまえたうえで、けいかくをさくていする。", en: "They'll finalise the plan after taking residents' views into account." },
        { jp: "現状を踏まえ、現実的な目標を設定しよう。", kana: "げんじょうをふまえ、げんじつてきなもくひょうをせっていしよう。", en: "Given the current state, let's set realistic goals." },
      ],
      practice: [
        { kind: "blank", text: "前回の結果___、戦略を修正した。", blanks: ["を踏まえて"] },
        { kind: "mcq", text: "を踏まえて is…", options: ["backward only", "forward-building", "negative", "casual"], answer: 1 },
        { kind: "tf", text: "Attributive form is を踏まえた.", answer: true },
      ],
    },
  ],
}
