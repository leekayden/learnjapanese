import type { AuthoredUnit } from "../../types"

export const u14: AuthoredUnit = {
  level: "N1", order: 14, title: "When things scale", titleJp: "きゅうげきな へんか",
  description: "Thresholds and reach: 〜ともなると/ともなれば (once it becomes), 〜に至っては (in the case of extreme), 〜に至るまで (extending to), 〜あげく (review).",
  vocab: ["規模|きぼ", "経営|けいえい", "責任|せきにん", "詳細|しょうさい", "細部|さいぶ", "端末|たんまつ", "周辺|しゅうへん", "一過性|いっかせい", "極端|きょくたん", "議論|ぎろん", "解決|かいけつ", "延長|えんちょう", "全国|ぜんこく", "地方|ちほう", "段階|だんかい", "拡大|かくだい"],
  kanji: ["規", "模", "経", "営", "責", "端", "極", "延", "拡"],
  exam: [
    { kind: "mcq", text: "「従業員百人ともなると、管理も大変だ。」 means…", options: ["Ten employees are easy.", "Once you have 100 employees, management is quite a task.", "Management is always easy.", "One employee is enough."], answer: 1 },
    { kind: "mcq", text: "「調査は細部に至るまで行われた。」 means…", options: ["The survey was superficial.", "The survey was conducted down to the smallest details.", "The survey failed.", "Details were ignored."], answer: 1 },
  ],
  lessons: [
    { slug: "n1-u14-l01", title: "Once it becomes: 〜ともなると", titleJp: "〜ともなると", grammarLabel: "〜ともなると",
      summary: "ともなると/ともなれば = once X scale is reached: 社長ともなると責任が重い.",
      body: { meaning: "Noun + ともなると/ともなれば = ONCE X (a notable degree), Y naturally follows: 三十歳ともなると、体の変化を感じる.", formation: [{ pattern: "Noun ＋ ともなると", note: "規模が大きくなるとは限らない" }, { pattern: "〜ともなれば", note: "variant" }], usage: ["Thresholds where expectations change.", "Written-leaning."], pitfalls: ["X is a remarkable degree, not any instance.", "Similar to になると but implies scale."], related: ["〜に至っては", "〜ほど (N4)"] },
      examples: [
        { jp: "従業員百人ともなると、管理も一苦労だ。", kana: "じゅうぎょういんひゃくにんともなると、かんりもひとくろうだ。", en: "Once you employ a hundred people, management is quite an undertaking." },
        { jp: "三十歳ともなれば、体のケアも必要だ。", kana: "さんじゅっさいともなれば、からだのケアもひつようだ。", en: "Once you're thirty, your body needs care." },
        { jp: "一流店ともなると、接客にも独特の作法がある。", kana: "いちりゅうてんともなると、せっきゃくにもどくとくのさほうがある。", en: "Top-tier establishments have their own etiquette of service." },
      ],
      practice: [
        { kind: "blank", text: "従業員百人___、管理も一苦労だ。", blanks: ["ともなると"] },
        { kind: "mcq", text: "ともなると marks…", options: ["any small case", "a notable threshold", "a past habit", "a command"], answer: 1 },
        { kind: "tf", text: "ともなれば is a variant.", answer: true },
      ],
    },
    { slug: "n1-u14-l02", title: "In extreme cases: 〜に至っては", titleJp: "〜に至っては", grammarLabel: "〜に至っては",
      summary: "に至っては = as for the extreme case: 中には、家を失った人に至っては…",
      body: { meaning: "Noun + に至っては = IN THE (EXTREME) CASE OF X: 最悪の場合、倒産に至っては株主の責任も問われる.", formation: [{ pattern: "Noun ＋ に至っては", note: "extreme example" }, { pattern: "〜に至るまで", note: "extending to (next lesson)" }], usage: ["Highlighting worst/most extreme instance.", "Written, critical."], pitfalls: ["至る = to reach (a state).", "Pairs with examples already introduced."], related: ["〜に至るまで", "〜ともなると"] },
      examples: [
        { jp: "被害は広範で、家屋の全壊に至っては百件を超えた。", kana: "ひがいはこうはんで、かおくのぜんかいにいたってはひゃっけんをこえた。", en: "Damage was widespread — total house collapses alone exceeded a hundred." },
        { jp: "部長ともなれば忙しいが、社長に至っては休みなしだ。", kana: "ぶちょうともなればいそがしいが、しゃちょうにいたってはやすみなしだ。", en: "A manager is busy, but the president — he has no days off at all." },
        { jp: "中には、借金に至っては生活も成り立たない人もいる。", kana: "なかには、しゃっきんにいたってはせいかつもなりたたないひともいる。", en: "Some people, in extreme cases, can't even make a living due to debt." },
      ],
      practice: [
        { kind: "blank", text: "被害は広範で、家屋の全壊___百件を超えた。", blanks: ["に至っては"] },
        { kind: "mcq", text: "に至っては introduces…", options: ["a mild example", "an extreme case", "a rule", "a greeting"], answer: 1 },
        { kind: "tf", text: "至る means 'to reach (a state)'.", answer: true },
      ],
    },
    { slug: "n1-u14-l03", title: "Extending to: 〜に至るまで", titleJp: "〜に至るまで", grammarLabel: "〜に至るまで",
      summary: "から〜に至るまで = from A all the way to B: 子供から大人に至るまで.",
      body: { meaning: "A から B に至るまで = FROM A ALL THE WAY TO B (full range): 子供から大人に至るまで楽しめる.", formation: [{ pattern: "A から B に至るまで", note: "full range" }, { pattern: "〜に至るまで", note: "without から too" }], usage: ["Exhaustive coverage.", "Formal."], pitfalls: ["至る is used in the attributive に至る.", "Different from に至っては (extreme case)."], related: ["〜にわたって (N2)", "〜に至っては"] },
      examples: [
        { jp: "この祭りは、子供から大人に至るまで楽しめる。", kana: "このまつりは、こどもからおとなにいたるまでたのしめる。", en: "This festival is enjoyable for everyone from children to adults." },
        { jp: "調査は端末の設置からデータ分析に至るまで行われた。", kana: "ちょうさはたんまつのせっちからデータぶんせきにいたるまでおこなわれた。", en: "The survey was carried out from terminal installation through data analysis." },
        { jp: "彼の研究は全国に至るまで知られている。", kana: "かれのけんきゅうはぜんこくにいたるまでしられている。", en: "His research is known throughout the country." },
      ],
      practice: [
        { kind: "blank", text: "この祭りは、子供から大人___楽しめる。", blanks: ["に至るまで"] },
        { kind: "mcq", text: "から〜に至るまで covers…", options: ["one point", "the full range", "nothing", "one person"], answer: 1 },
        { kind: "tf", text: "に至るまで can be used without から.", answer: true },
      ],
    },
    { slug: "n1-u14-l04", title: "Scale toolkit", titleJp: "まとめ", grammarLabel: "review",
      summary: "ともなると・に至っては・に至るまで — thresholds, extremes, ranges.",
      body: { meaning: "Three scale markers: ともなると (threshold), に至っては (extreme instance), から〜に至るまで (full range).",
        formation: [
          { pattern: "〜ともなると", note: "once X scale" },
          { pattern: "〜に至っては", note: "extreme case" },
          { pattern: "から〜に至るまで", note: "whole span" },
        ],
        usage: ["All formal/written.", "至る appears in both extreme and range patterns."],
        pitfalls: ["に至っては = worst case; に至るまで = everything included.", "ともなると implies changed expectations."],
        related: ["lessons 1-3"] },
      examples: [
        { jp: "評判が広がり、行列ができる店ともなると、品質管理が鍵だ。", kana: "ひょうばんがひろがり、ぎょうれつができるみせともなると、ひんしつかんりがかぎだ。", en: "Once a shop draws queues, quality control is key." },
        { jp: "議論は平行線。徹夜に至っては、決着がつかないままだった。", kana: "ぎろんはへいこうせん。てつやにいたっては、けっちゃくがつかないままだった。", en: "The debate was deadlocked — even pulling an all-nighter, no resolution came." },
        { jp: "説明は初心者から専門家に至るまで分かるよう書かれている。", kana: "せつめいはしょしんしゃからせんもんかにいたるまでわかるようかかれている。", en: "The explanation is written to be clear from beginners to experts." },
      ],
      practice: [
        { kind: "mcq", text: "Extreme case →", options: ["ともなると", "に至っては", "に至るまで", "にわたって"], answer: 1 },
        { kind: "mcq", text: "Full range →", options: ["ともなると", "に至っては", "に至るまで", "における"], answer: 2 },
        { kind: "tf", text: "ともなると signals a threshold.", answer: true },
      ],
    },
  ],
}
