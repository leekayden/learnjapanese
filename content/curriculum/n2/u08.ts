import type { AuthoredUnit } from "../../types"

export const u08: AuthoredUnit = {
  level: "N2", order: 8, title: "No other choice", titleJp: "ぎむ と やむをえなさ",
  description: "Obligation and inevitability: 〜ざるを得ない (can't help but), 〜ないわけにはいかない (must), 〜ずにはいられない (can't refrain), 〜を余儀なくされる (forced).",
  vocab: ["責任|せきにん", "謝罪|しゃざい", "義務|ぎむ", "規則|きそく", "守る|まもる", "正直|しょうじき", "感動|かんどう", "涙|なみだ", "中止|ちゅうし", "台風|たいふう", "影響|えいきょう", "承諾|しょうだく", "雇用|こよう", "調整|ちょうせい", "納得|なっとく", "判断|はんだん"],
  kanji: ["責", "罪", "儀", "規", "則", "涙", "延", "承", "雇"],
  exam: [
    { kind: "mcq", text: "「事故の責任を取らざるを得ない。」 means…", options: ["I can avoid responsibility.", "I have no choice but to take responsibility.", "I refuse responsibility.", "Responsibility is unclear."], answer: 1 },
    { kind: "mcq", text: "「台風のため、大会は中止を余儀なくされた。」 means…", options: ["The event continued.", "The event was forced to be cancelled.", "The typhoon was cancelled.", "The event was postponed by choice."], answer: 1 },
  ],
  lessons: [
    { slug: "n2-u08-l01", title: "Can't help but: 〜ざるを得ない", titleJp: "〜ざるを得ない", grammarLabel: "〜ざるを得ない",
      summary: "ざるを得ない = can't help but X (logical necessity): 認めざるを得ない.",
      body: { meaning: "Verb ない-stem + ざるを得ない = CANNOT HELP BUT X — logic leaves no choice: 彼の主張は正しいと認めざるを得ない.", formation: [{ pattern: "Verb ない-stem ＋ ざるを得ない", note: "する→せざるを得ない" }, { pattern: "認める→認めざるを得ない", note: "irregular ない-stem" }], usage: ["Written, formal — debates, essays.", "Based on logic/circumstances."], pitfalls: ["する → せざるを得ない (irregular).", "Deny the ない: 残念ながら認めざるを得ない."], related: ["〜ないわけにはいかない", "〜ずにはいられない"] },
      examples: [
        { jp: "事故の責任を取らざるを得ない。", kana: "じこのせきにんをとらざるをえない。", en: "I have no choice but to take responsibility for the accident." },
        { jp: "データを見れば、その主張は正しいと認めざるを得ない。", kana: "データをみれば、そのしゅちょうはただしいとみとめざるをえない。", en: "Looking at the data, one cannot help but admit the claim is correct." },
        { jp: "台風のため、出発を延期せざるを得ない。", kana: "たいふうのため、しゅっぱつをえんきせざるをえない。", en: "Because of the typhoon, we have no choice but to postpone the departure." },
      ],
      practice: [
        { kind: "blank", text: "責任を取ら___を得ない。", blanks: ["ざる"] },
        { kind: "mcq", text: "する + ざるを得ない becomes…", options: ["しざるを得ない", "せざるを得ない", "すざるを得ない", "さざるを得ない"], answer: 1 },
        { kind: "tf", text: "ざるを得ない is formal/written.", answer: true },
      ],
    },
    { slug: "n2-u08-l02", title: "Must (moral): 〜ないわけにはいかない", titleJp: "〜ないわけにはいかない", grammarLabel: "〜ないわけにはいかない",
      summary: "ないわけにはいかない = must (social duty): 約束は守らないわけにはいかない.",
      body: { meaning: "Verb ない + わけにはいかない = THERE'S NO WAY I CAN NOT X — social/moral obligation: 納得するまで話し合わないわけにはいかない.", formation: [{ pattern: "Verb ない ＋ わけにはいかない", note: "守らないわけにはいかない" }, { pattern: "する→しないわけにはいかない", note: "standard" }], usage: ["Obligation from duty or promise.", "Stronger than なければならない in nuance."], pitfalls: ["Related to わけにはいかない (can't afford to).", "The ない form itself carries the obligation."], related: ["〜ざるを得ない", "〜わけにはいかない (N3)"] },
      examples: [
        { jp: "約束は守らないわけにはいかない。", kana: "やくそくはまもらないわけにはいかない。", en: "There's no way I can break a promise." },
        { jp: "彼の援助を断らないわけにはいかない。", kana: "かれのえんじょをことわらないわけにはいかない。", en: "I have no option but to decline his help." },
        { jp: "明日は重要な会議なので、出席しないわけにはいかない。", kana: "あしたはじゅうようなかいぎなので、しゅっせきしないわけにはいかない。", en: "Tomorrow is an important meeting, so I must attend." },
      ],
      practice: [
        { kind: "blank", text: "約束は守らない___。(no way I can not)", blanks: ["わけにはいかない"] },
        { kind: "mcq", text: "The obligation here comes mainly from…", options: ["laws of nature", "social duty", "preference", "skill"], answer: 1 },
        { kind: "tf", text: "出席しないわけにはいかない = must attend.", answer: true },
      ],
    },
    { slug: "n2-u08-l03", title: "Can't refrain: 〜ずにはいられない", titleJp: "〜ずにはいられない", grammarLabel: "〜ずにはいられない",
      summary: "ずにはいられない = can't help (feeling): 感動せずにはいられない.",
      body: { meaning: "Verb ない-stem + ずにはいられない = CAN'T REFRAIN FROM X — emotional compulsion: 感動せずにはいられない.", formation: [{ pattern: "Verb ない-stem ＋ ずにはいられない", note: "する→せずにはいられない" }, { pattern: "言う→言わずにはいられない", note: "can't help saying" }], usage: ["Emotions, laughter, tears.", "Subject usually first person (or reported feeling)."], pitfalls: ["する→せずにはいられない.", "More emotional than ざるを得ない (logical)."], related: ["〜ざるを得ない", "〜ないではいられない"] },
      examples: [
        { jp: "彼の話を聞いて、感動せずにはいられなかった。", kana: "かれのはなしをきいて、かんどうせずにはいられなかった。", en: "Hearing his story, I couldn't help being moved." },
        { jp: "その映画は、泣かずにはいられなかった。", kana: "そのえいがは、なかずにはいられなかった。", en: "That film — I couldn't help crying." },
        { jp: "彼は毎日遅刻するので、一言言わずにはいられない。", kana: "かれはまいにちちこくするので、ひとこといわずにはいられない。", en: "Since he's late every day, I can't help saying something." },
      ],
      practice: [
        { kind: "blank", text: "感動___、いられなかった。", blanks: ["せずには"] },
        { kind: "mcq", text: "する + ずにはいられない = ", options: ["しずにはいられない", "せずにはいられない", "さずにはいられない", "こずにはいられない"], answer: 1 },
        { kind: "mcq", text: "ずにはいられない is driven by…", options: ["logic", "emotion", "law", "skill"], answer: 1 },
      ],
    },
    { slug: "n2-u08-l04", title: "Forced by circumstance: 〜を余儀なくされる", titleJp: "〜を余儀なくされる", grammarLabel: "〜を余儀なくされる",
      summary: "を余儀なくされる = be forced to X: 中止を余儀なくされた.",
      body: { meaning: "Noun + を余儀なくされる = BE FORCED TO X by circumstances: 大会は中止を余儀なくされた.", formation: [{ pattern: "Noun ＋ を余儀なくされる", note: "変更を余儀なくされる" }, { pattern: "Passive of 余儀なくする", note: "circumstances force it" }], usage: ["News and formal reports.", "Subject is the victim of circumstances."], pitfalls: ["Very formal — rare in speech.", "Related: 〜を余儀なくさせる (makes X forced)."], related: ["〜ざるを得ない", "passive voice"] },
      examples: [
        { jp: "台風のため、大会は中止を余儀なくされた。", kana: "たいふうのため、たいかいはちゅうしをよぎなくされた。", en: "Due to the typhoon, the tournament was forced to cancel." },
        { jp: "不況で、会社は計画の変更を余儀なくされた。", kana: "ふきょうで、かいしゃはけいかくのへんこうをよぎなくされた。", en: "The recession forced the company to change its plans." },
        { jp: "震災は多くの住民に移住を余儀なくさせた。", kana: "しんさいはおおくのじゅうみんにいじゅうをよぎなくさせた。", en: "The disaster forced many residents to relocate." },
      ],
      practice: [
        { kind: "blank", text: "大会は中止を余儀なく___。(was forced)", blanks: ["された"] },
        { kind: "mcq", text: "を余儀なくされる is…", options: ["casual", "very formal", "childish", "poetic"], answer: 1 },
        { kind: "tf", text: "The subject is usually the victim of circumstance.", answer: true },
      ],
    },
  ],
}
