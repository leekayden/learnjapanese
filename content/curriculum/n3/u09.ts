import type { AuthoredUnit } from "../../types"

export const u09: AuthoredUnit = {
  level: "N3",
  order: 9,
  title: "Based on and according to",
  titleJp: "にもとづく ひょうげん",
  description: "Formal frameworks: 〜に基づいて (based on), 〜に応じて (according to), 〜に沿って (in line with), 〜をめぐって (concerning).",
  vocab: [
    "規則|きそく", "法律|ほうりつ", "計画|けいかく", "方針|ほうしん",
    "議論|ぎろん", "解決|かいけつ", "賛成|さんせい", "反対|はんたい",
    "基本|きほん", "理念|りねん", "教育|きょういく", "制度|せいど",
  ],
  kanji: ["基", "応", "沿", "巡", "則", "法", "針", "需", "位"],
  exam: [
    { kind: "mcq", text: "法律___に、違反者は罰せられます。", options: ["に基づいて", "をめぐって", "に応じて", "に沿って"], answer: 0, explain: "に基づいて = based on (laws are the foundation)." },
    { kind: "blank", text: "需要___価格が変動する。", blanks: ["に応じて"] },
  ],
  lessons: [
    {
      slug: "n3-u09-l01", title: "Based on", titleJp: "〜にもとづいて", grammarLabel: "〜に基づいて",
      summary: "Rules/laws/data as the foundation for an action or judgement.",
      body: {
        meaning: "Noun + に基づいて = the action is DONE ON THE BASIS of that noun. Think of the noun as the FOUNDATION (基) supporting what you do. English: 'based on' / 'in accordance with'.",
        formation: [
          { pattern: "Noun ＋ に基づいて", note: "法律に基づいて = based on the law" },
          { pattern: "Noun ＋ に基づいた ＋ Noun", note: "modifying nouns" },
        ],
        usage: ["Very formal — news, legal documents, academic writing.", "The noun is usually an established rule, plan, data set, or principle."],
        pitfalls: ["Use only with nouns that can serve as a foundation (rules, data, plans).", "Don't use for casual reasons (that's から/ので)."],
        related: ["〜に応じて", "〜に沿って"],
      },
      examples: [
        { jp: "法律に基づいて、厳しく処罰されます。", kana: "ほうりつにもとづいて、きびしくしょばつされます。", en: "Based on the law, offenders are punished strictly." },
        { jp: "調査結果に基づいた報告書を作成した。", kana: "ちょうさけっかに基づいたほうこくしょをさくせいした。", en: "I created a report based on the survey results." },
        { jp: "この計画は政府の方針に基づいて立てられた。", kana: "このけいかくはせいふのほうしんにもとづいてたてられた。", en: "This plan was drawn up based on government policy." },
      ],
      practice: [
        { kind: "blank", text: "法律___、厳しく処罰されます。", blanks: ["に基づいて"] },
        { kind: "mcq", text: "に基づいて is used in…", options: ["casual chat", "formal writing", "questions", "commands"], answer: 1 },
        { kind: "tf", text: "に基づいて means the noun is the foundation for the action.", answer: true },
        {
          kind: "tf",
          text: "に基づいて is used in formal writing.",
          answer: true,
        },
      ],
    },
    {
      slug: "n3-u09-l02", title: "According to / adapting to", titleJp: "〜におうじて", grammarLabel: "〜に応じて",
      summary: "Changes ADAPTING to conditions: 需要に応じて価格が変わる.",
      body: {
        meaning: "Noun + に応じて = the action CHANGES IN RESPONSE to the noun's state. Like a thermostat adjusting to temperature. English: 'according to' / 'in response to'.",
        formation: [
          { pattern: "Noun ＋ に応じて", note: "adapting to conditions" },
          { pattern: "Verb dictionary ＋ に応じて", note: "as X happens" },
        ],
        usage: ["The noun is usually a variable condition (demand, ability, situation).", "Common in business and technical writing."],
        pitfalls: ["The first clause CHANGES, the second clause FOLLOWS that change.", "Don't use with fixed/unchanging nouns."],
        related: ["〜に基づいて", "〜によって"],
      },
      examples: [
        { jp: "需要に応じて、価格が変動します。", kana: "じゅようにおうじて、かかくがへんどうします。", en: "Prices fluctuate according to demand." },
        { jp: "経験に応じて、給料が上がります。", kana: "けいけんにおうじて、きゅうりょうがあがります。", en: "Salary increases according to experience." },
        { jp: "季節に応じて、服を変える。", kana: "きせつにおうじて、ふくをかえる。", en: "Change clothes according to the season." },
      ],
      practice: [
        { kind: "blank", text: "需要___、価格が変動します。", blanks: ["に応じて"] },
        { kind: "mcq", text: "に応じて implies the result…", options: ["is fixed", "changes with the condition", "never changes", "happens once"], answer: 1 },
        { kind: "tf", text: "に応じて means the second clause adapts to the first.", answer: true },
        {
          kind: "tf",
          text: "に応じて means the result adapts to the condition.",
          answer: true,
        },
      ],
    },
    {
      slug: "n3-u09-l03", title: "In line with", titleJp: "〜にそって", grammarLabel: "〜に沿って",
      summary: "Following a path/plan/policy: 方針に沿って進める (proceed in line with the policy).",
      body: {
        meaning: "Noun + に沿って = the action FOLLOWS the direction/plan/policy set by the noun. 沿 means 'alongside' — like walking along a river. English: 'in line with' / 'along'.",
        formation: [
          { pattern: "Noun ＋ に沿って", note: "following a plan/policy/path" },
          { pattern: "Noun ＋ に沿った ＋ Noun", note: "modifying nouns" },
        ],
        usage: ["Noun is usually a plan, policy, river, road, or expectation.", "More concrete than に基づいて — like following a track."],
        pitfalls: ["Use with things that have a direction or course.", "✗ 感情に沿って (emotions don't have a course)."],
        related: ["〜に基づいて", "〜に応じて"],
      },
      examples: [
        { jp: "方針に沿って、プロジェクトを進めます。", kana: "ほうしんにそって、プロジェクトをすすめます。", en: "We'll proceed with the project in line with the policy." },
        { jp: "川に沿って散歩道が続いている。", kana: "かわにそってさんぽみちがつづいている。", en: "A walking path continues along the river." },
        { jp: "マニュアルに沿って操作してください。", kana: "マニュアルにそってそうさしてください。", en: "Please follow the manual when operating." },
      ],
      practice: [
        { kind: "blank", text: "方針___、プロジェクトを進めます。", blanks: ["に沿って"] },
        { kind: "mcq", text: "に沿って means the action…", options: ["ignores the noun", "follows the direction of the noun", "contradicts the noun", "starts the noun"], answer: 1 },
        { kind: "tf", text: "に沿って can be used with rivers and roads.", answer: true },
        {
          kind: "tf",
          text: "に沿って means the action follows the direction of the noun.",
          answer: true,
        },
      ],
    },
    {
      slug: "n3-u09-l04", title: "Concerning / surrounding", titleJp: "〜をめぐって", grammarLabel: "〜をめぐって",
      summary: "Debates SURROUNDING a topic: 環境問題をめぐって、議論が続いている.",
      body: {
        meaning: "Noun + をめぐって = various opinions/activities REVOLVE AROUND this topic. めぐる means 'to go around' — like people circling a debate topic. English: 'surrounding' / 'over'.",
        formation: [
          { pattern: "Noun ＋ をめぐって", note: "debate/discussion around" },
          { pattern: "Noun ＋ をめぐる ＋ Noun", note: "modifying nouns" },
        ],
        usage: ["Always involves multiple parties with different views.", "Common in news: 政治家の発言をめぐって、賛否両論が…"],
        pitfalls: ["The topic is usually CONTESTED (not simple facts).", "Different from について (simple topic) — をめぐって implies debate."],
        related: ["〜について", "〜に関して"],
      },
      examples: [
        { jp: "環境問題をめぐって、活発な議論が続いている。", kana: "かんきょうもんだいをめぐって、かっぱつなぎろんがつづいている。", en: "Active debate continues surrounding environmental issues." },
        { jp: "新しい法律をめぐって、賛否両論がある。", kana: "あたらしいほうりつをめぐって、さんぴりょうろんがある。", en: "There are pros and cons surrounding the new law." },
        { jp: "遺産をめぐる争いが長年続いた。", kana: "いさんをめぐるあらそいがながねんつづいた。", en: "A dispute over the inheritance lasted for years." },
      ],
      practice: [
        { kind: "blank", text: "環境問題___、議論が続いている。", blanks: ["をめぐって"] },
        { kind: "mcq", text: "をめぐって implies…", options: ["simple topic", "contested debate", "casual chat", "one opinion"], answer: 1 },
        { kind: "tf", text: "をめぐって is used when multiple parties have different views.", answer: true },
      ],
    },
    {
      slug: "n3-u09-l05", title: "Formal framework summary", titleJp: "にもとづく まとめ", grammarLabel: "framework summary",
      summary: "に基づいて (foundation), に応じて (adapts), に沿って (follows), をめぐって (debates).",
      body: {
        meaning: "Four formal frameworks: based on a rule (基づく), adapting to conditions (応じる), following a plan (沿う), debating around a topic (めぐる). Each noun type determines which fits.",
        formation: [
          { pattern: "Rule/law/data ＋ に基づいて", note: "foundation" },
          { pattern: "Condition ＋ に応じて", note: "adapts" },
          { pattern: "Plan/path ＋ に沿って", note: "follows" },
          { pattern: "Topic ＋ をめぐって", note: "debates" },
        ],
        usage: ["These are formal — use in writing, not chat.", "Each implies a different relationship between the noun and the action."],
        pitfalls: ["基づく = noun is the FOUNDATION; 応じる = noun CHANGES; 沿う = noun is a TRACK; めぐる = noun is DEBATED."],
        related: ["lessons 1-4"],
      },
      examples: [
        { jp: "法律に基づいて判断する。", kana: "ほうりつにもとづいてはんだんする。", en: "Judge based on the law." },
        { jp: "天気に応じて、予定を変えます。", kana: "てんきにおうじて、よていをかえます。", en: "Change plans according to the weather." },
        { jp: "マニュアルに沿って操作する。", kana: "マニュアルにそってそうさする。", en: "Operate following the manual." },
        { jp: "新政策をめぐって、議論が交わされた。", kana: "しんせいさくをめぐって、ぎろんがかわされた。", en: "Debates were exchanged over the new policy." },
      ],
      practice: [
        { kind: "match", text: "Match noun type to pattern:", pairs: [["Rules/laws", "に基づいて"], ["Conditions", "に応じて"], ["Plans/paths", "に沿って"], ["Contested topics", "をめぐって"]] },
        { kind: "mcq", text: " adapting to demand → 需要に___", options: ["基づいて", "応じて", "沿って", "めぐって"], answer: 1 },
        { kind: "tf", text: "をめぐって implies a simple factual topic.", answer: false },
      ],
    },
  ],
}
