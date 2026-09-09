import type { AuthoredUnit } from "../../types"

export const u09: AuthoredUnit = {
  level: "N2", order: 9, title: "Hard to do", titleJp: "しにくさ の ぶんぽう",
  description: "Difficulty and impossibility: 〜がたい (hard to), 〜かねる (cannot bring oneself to), 〜ようがない (no way to), 〜っこない (impossible).",
  vocab: ["信じる|しんじる", "理解|りかい", "許す|ゆるす", "賛成|さんせい", "承諾|しょうだく", "断る|ことわる", "返事|へんじ", "対応|たいおう", "連絡|れんらく", "確認|かくにん", "解決|かいけつ", "方法|ほうほう", "想像|そうぞう", "実現|じつげん", "不可能|ふかのう", "勝負|しょうぶ"],
  kanji: ["信", "解", "許", "承", "諾", "断", "像", "現", "勝"],
  exam: [
    { kind: "mcq", text: "「彼が犯人だと信じがたい。」 means…", options: ["I firmly believe he's the culprit.", "It's hard to believe he's the culprit.", "He confessed.", "I don't know the culprit."], answer: 1 },
    { kind: "mcq", text: "「本人に聞かないと、解決しようがない。」 means…", options: ["It's already solved.", "There's no way to solve it without asking the person.", "The person solved it.", "Asking is forbidden."], answer: 1 },
  ],
  lessons: [
    { slug: "n2-u09-l01", title: "Hard to: 〜がたい", titleJp: "〜がたい", grammarLabel: "〜がたい",
      summary: "がたい = hard to (mental difficulty): 信じがたい.",
      body: { meaning: "Verb ます-stem + がたい = HARD TO X (mentally difficult): 理解しがたい、許しがたい.", formation: [{ pattern: "Verb ます-stem ＋ がたい", note: "信じがたい hard to believe" }, { pattern: "〜がたい ＋ Noun", note: "想像しがたい話" }], usage: ["Written — emotions and judgments.", "Fixed pairs: 信じがたい、理解しがたい、許しがたい."], pitfalls: ["Mental, not physical difficulty (that's にくい).", "ます-stem only: 信じます→信じがたい."], related: ["〜にくい (N4)", "〜かねる"] },
      examples: [
        { jp: "彼が犯人だとは信じがたい。", kana: "かれがはんにんだとはしんじがたい。", en: "It's hard to believe he's the culprit." },
        { jp: "その説明は理解しがたい。", kana: "そのせつめいはりかいしがたい。", en: "That explanation is hard to grasp." },
        { jp: "一度裏切られたら、許しがたいだろう。", kana: "いちどうらぎられたら、ゆるしがたいだろう。", en: "Once betrayed, it would be hard to forgive." },
      ],
      practice: [
        { kind: "blank", text: "彼が犯人だとは信じ___。", blanks: ["がたい"] },
        { kind: "mcq", text: "がたい expresses…", options: ["physical difficulty", "mental difficulty", "speed", "frequency"], answer: 1 },
        { kind: "tf", text: "理解しがたい is a common fixed pair.", answer: true },
      ],
    },
    { slug: "n2-u09-l02", title: "Cannot bring oneself: 〜かねる", titleJp: "〜かねる", grammarLabel: "〜かねる",
      summary: "かねる = cannot (duty/difficulty): お受けいたしかねます.",
      body: { meaning: "Verb ます-stem + かねる = CANNOT DO X (polite refusal): お応えいたしかねます — standard business refusal.", formation: [{ pattern: "Verb ます-stem ＋ かねます", note: "ご承諾しかねます" }, { pattern: "決しかねる", note: "unable to decide" }], usage: ["Business and service refusals.", "Softer than できません."], pitfalls: ["NOT 'might happen' — that's かねない.", "Always about the speaker's inability/willingness."], related: ["〜かねない (N3)", "〜がたい"] },
      examples: [
        { jp: "申し訳ございませんが、個人的な返事はいたしかねます。", kana: "もうしわけございませんが、こじんてきなへんじはいたしかねます。", en: "We're sorry, but we cannot answer personal replies." },
        { jp: "その件については、ご承諾しかねます。", kana: "そのけんについては、ごしょうだくしかねます。", en: "We cannot consent to that matter." },
        { jp: "彼の態度を見て、賛成しかねた。", kana: "かれのたいどをみて、さんせいしかねた。", en: "Seeing his attitude, I couldn't bring myself to agree." },
      ],
      practice: [
        { kind: "blank", text: "ご承諾___ます。", blanks: ["しかね"] },
        { kind: "mcq", text: "〜かねる vs 〜かねない:", options: ["same meaning", "かねる = cannot; かねない = might", "かねる = might; かねない = cannot", "both mean might"], answer: 1 },
        { kind: "tf", text: "かねる is common in business refusals.", answer: true },
      ],
    },
    { slug: "n2-u09-l03", title: "No way to: 〜ようがない", titleJp: "〜ようがない", grammarLabel: "〜ようがない",
      summary: "ようがない = no way to: 連絡先を知らないから、連絡のしようがない.",
      body: { meaning: "Verb ます-stem + ようがない = THERE'S NO WAY TO X (method absent): 連絡のしようがない.", formation: [{ pattern: "Verb ます-stem ＋ ようがない", note: "しようがない no way to do" }, { pattern: "Noun ＋ の ＋ しようがない", note: "連絡のしようがない" }], usage: ["Method or means is missing.", "Colloquial ようもない also common."], pitfalls: ["よう = means/way — no method exists.", "Not about willingness — かねる is willingness."], related: ["〜かねる", "〜得ない (N1)"] },
      examples: [
        { jp: "連絡先を知らないのだから、連絡のしようがない。", kana: "れんらくさきをしらないのだから、れんらくのしようがない。", en: "I don't know their contact info, so there's no way to reach them." },
        { jp: "材料がなければ、作りようがない。", kana: "ざいりょうがなければ、つくりようがない。", en: "Without ingredients, there's no way to make it." },
        { jp: "データがなくては、調べようがない。", kana: "データがなくては、しらべようがない。", en: "Without data, there's no way to investigate." },
      ],
      practice: [
        { kind: "blank", text: "連絡先を知らないから、連絡の___がない。", blanks: ["しよう"] },
        { kind: "mcq", text: "ようがない means the ___ is missing.", options: ["will", "method", "money", "time"], answer: 1 },
        { kind: "tf", text: "作りようがない = there's no way to make it.", answer: true },
      ],
    },
    { slug: "n2-u09-l04", title: "Absolutely impossible: 〜っこない", titleJp: "〜っこない", grammarLabel: "〜っこない",
      summary: "っこない = totally impossible (casual): 勝てっこない.",
      body: { meaning: "Verb ます-stem + っこない = THERE'S NO WAY X CAN HAPPEN (casual, emphatic): 練習なしで勝てっこない.", formation: [{ pattern: "Verb ます-stem ＋ っこない", note: "勝てっこない" }, { pattern: "わかりっこない", note: "no way (they'd) understand" }], usage: ["Casual speech — confident denial.", "Stronger than ないだろう."], pitfalls: ["Casual only — never in formal writing.", "ます-stem: 勝つ→勝てっこない."], related: ["〜わけがない (N3)", "〜ようがない"] },
      examples: [
        { jp: "彼と勝負しても、勝てっこない。", kana: "かれとしょうぶしても、かてっこない。", en: "Even if I compete with him, there's no way I'd win." },
        { jp: "経験のない人に、わかりっこない。", kana: "けいけんのないひとに、わかりっこない。", en: "Someone without experience would never understand." },
        { jp: "毎日遊んでいては、合格なんてできっこない。", kana: "まいにちあそんでいては、ごうかくなんてできっこない。", en: "Playing every day — passing is simply impossible." },
      ],
      practice: [
        { kind: "blank", text: "彼と勝負しても、勝て___。(no way)", blanks: ["っこない"] },
        { kind: "mcq", text: "っこない is…", options: ["formal", "casual emphatic", "humble", "archaic"], answer: 1 },
        { kind: "tf", text: "わかりっこない uses the ます-stem of わかる.", answer: true },
      ],
    },
  ],
}
