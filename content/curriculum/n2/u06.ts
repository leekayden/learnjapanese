import type { AuthoredUnit } from "../../types"

export const u06: AuthoredUnit = {
  level: "N2", order: 6, title: "Key moments", titleJp: "きげん と きっかけ",
  description: "Occasions and turning points: 〜にあたって (on the occasion of), 〜に際して (on the occasion of), 〜をきっかけに (triggered by), 〜を機に (taking the chance).",
  vocab: ["開幕|かいまく", "式典|しきてん", "祝辞|しゅくじ", "就任|しゅうにん", "挨拶|あいさつ", "留学|りゅうがく", "経験|けいけん", "復帰|ふっき", "選手|せんしゅ", "結婚|けっこん", "改める|あらためる", "生活|せいかつ", "見直す|みなおす", "機会|きかい", "挑戦|ちょうせん", "転機|てんき"],
  kanji: ["幕", "式", "典", "祝", "任", "拶", "帰", "選", "転"],
  exam: [
    { kind: "mcq", text: "「開店にあたって、皆様のお越しをお待ちしております。」 — にあたって means…", options: ["after opening", "on the occasion of opening", "without opening", "before thinking of opening"], answer: 1 },
    { kind: "mcq", text: "「留学をきっかけに、日本文化に興味を持った。」 means…", options: ["Studying abroad ended my interest.", "Studying abroad sparked my interest in Japanese culture.", "I lost interest in Japan.", "Culture prevented studying."], answer: 1 },
  ],
  lessons: [
    { slug: "n2-u06-l01", title: "On the occasion of: 〜にあたって", titleJp: "〜にあたって", grammarLabel: "〜にあたって",
      summary: "にあたって = on the occasion of (important event): 新学期にあたって.",
      body: { meaning: "Noun / verb + にあたって = ON THE OCCASION OF X (a significant event): 開業にあたって、ご挨拶を申し上げます.", formation: [{ pattern: "Noun ＋ にあたって", note: "開幕にあたって" }, { pattern: "Verb る ＋ にあたって", note: "出発するにあたって" }, { pattern: "〜にあたり", note: "more formal" }], usage: ["Speeches, greetings, ceremonies.", "Emphasises the importance of the moment."], pitfalls: ["Use for major occasions, not daily events.", "にあたり = more formal variant."], related: ["〜に際して", "〜を機に"] },
      examples: [
        { jp: "開店にあたって、心から感謝を申し上げます。", kana: "かいてんにあたって、こころからかんしゃをもうしあげます。", en: "On the occasion of the opening, I express my heartfelt gratitude." },
        { jp: "新学期にあたって、新しい目標を立てた。", kana: "しんがっきにあたって、あたらしいもくひょうをたてた。", en: "For the new term, I set new goals." },
        { jp: "実験を開始するにあたり、注意事項を確認する。", kana: "じっけんをかいしするにあたり、ちゅういじこうをかくにんする。", en: "Before starting the experiment, we confirm the precautions." },
      ],
      practice: [
        { kind: "blank", text: "開店___、心から感謝を申し上げます。", blanks: ["にあたって"] },
        { kind: "mcq", text: "にあたって is used for…", options: ["daily routines", "significant occasions", "questions", "negatives"], answer: 1 },
        { kind: "tf", text: "にあたり is the more formal variant.", answer: true },
      ],
    },
    { slug: "n2-u06-l02", title: "On the occasion of: 〜に際して", titleJp: "〜に際して", grammarLabel: "〜に際して",
      summary: "に際して = at the time of (formal): ご利用に際して.",
      body: { meaning: "Noun / verb + に際して = AT THE TIME OF X (formal notices): ご利用に際して、以下の点にご注意ください.", formation: [{ pattern: "Noun ＋ に際して", note: "ご利用に際して" }, { pattern: "Verb る ＋ に際して", note: "出場するに際して" }, { pattern: "〜に際し", note: "more formal" }], usage: ["Official notices and instructions.", "Focus on actions taken at that moment."], pitfalls: ["に際して vs にあたって: both formal; に際して slightly more notice-like.", "Attaches to する-verbs directly: 利用するに際して."], related: ["〜にあたって", "〜場合"] },
      examples: [
        { jp: "ご利用に際して、以下の点にご注意ください。", kana: "ごりようにさいして、いかのてんにごちゅういください。", en: "When using this, please note the following points." },
        { jp: "就任に際して、彼は基本方針を発表した。", kana: "しゅうにんにさいして、かれはきほんほうしんをはっぴょうした。", en: "Upon taking office, he announced his basic policy." },
        { jp: "出場に際し、選手は誓いを述べた。", kana: "しゅつじょうにさいし、せんしゅはちかいをのべた。", en: "Upon entering the competition, the athlete made an oath." },
      ],
      practice: [
        { kind: "blank", text: "ご利用___、以下の点にご注意ください。", blanks: ["に際して"] },
        { kind: "mcq", text: "に際して appears most in…", options: ["diaries", "official notices", "comics", "song lyrics"], answer: 1 },
        { kind: "tf", text: "に際し is a shorter formal variant.", answer: true },
      ],
    },
    { slug: "n2-u06-l03", title: "Triggered by: 〜をきっかけに", titleJp: "〜をきっかけに", grammarLabel: "〜をきっかけに",
      summary: "をきっかけに = X became the trigger: 留学をきっかけに.",
      body: { meaning: "Noun + をきっかけに(として) = X BECAME THE TRIGGER for change: 引っ越しをきっかけに、生活が変わった.", formation: [{ pattern: "Noun ＋ をきっかけに", note: "結婚をきっかけに" }, { pattern: "Noun ＋ をきっかけとして", note: "formal" }], usage: ["Describes turning points.", "Change follows the trigger."], pitfalls: ["きっかけ = trigger/start, not cause of disaster.", "Similar to を機に — 機 is slightly more formal."], related: ["〜を機に", "〜によって"] },
      examples: [
        { jp: "留学をきっかけに、日本文化に興味を持った。", kana: "りゅうがくをきっかけに、にほんぶんかにきょうみをもった。", en: "Studying abroad sparked my interest in Japanese culture." },
        { jp: "病気をきっかけに、食生活を見直した。", kana: "びょうきをきっかけに、しょくせいかつをみなおした。", en: "Illness prompted me to rethink my diet." },
        { jp: "友人の死をきっかけとして、彼は作家になった。", kana: "ゆうじんのしをきっかけとして、かれはさっかになった。", en: "His friend's death was the trigger for becoming a writer." },
      ],
      practice: [
        { kind: "blank", text: "留学___、日本文化に興味を持った。", blanks: ["をきっかけに"] },
        { kind: "mcq", text: "をきっかけに describes…", options: ["constant habits", "turning points", "obligations", "abilities"], answer: 1 },
        { kind: "tf", text: "病気をきっかけに can introduce a positive change.", answer: true },
      ],
    },
    { slug: "n2-u06-l04", title: "Taking the chance: 〜を機に", titleJp: "〜を機に", grammarLabel: "〜を機に",
      summary: "を機に = taking X as the opportunity: 引っ越しを機に、家具を新しくした.",
      body: { meaning: "Noun + を機に = TAKING X AS THE OPPORTUNITY: 定年を機に、田舎に引っ越した.", formation: [{ pattern: "Noun ＋ を機に", note: "引っ越しを機に" }, { pattern: "Noun ＋ を機として", note: "formal" }], usage: ["Deliberate change using an occasion.", "Very common in essays and news."], pitfalls: ["機 = opportunity — the change is intentional.", "Different from をきっかけに which can be accidental."], related: ["〜をきっかけに", "〜に際して"] },
      examples: [
        { jp: "引っ越しを機に、家具をすべて新しくした。", kana: "ひっこしをきに、かぐをすべてあたらしくした。", en: "Taking the move as an opportunity, I replaced all the furniture." },
        { jp: "退職を機に、趣味の絵を本格的に始めた。", kana: "たいしょくをきに、しゅみのえをほんかくてきにはじめた。", en: "Upon retirement, he seriously started painting." },
        { jp: "復帰を機として、練習方法を改めた。", kana: "ふっきをきとして、れんしゅうほうほうをあらためた。", en: "Using his comeback as an opportunity, he revamped his training." },
      ],
      practice: [
        { kind: "blank", text: "引っ越し___、家具を新しくした。", blanks: ["を機に"] },
        { kind: "mcq", text: "を機に implies the change is…", options: ["accidental", "intentional", "impossible", "unknown"], answer: 1 },
        { kind: "tf", text: "を機に and をきっかけに can both describe turning points.", answer: true },
      ],
    },
  ],
}
