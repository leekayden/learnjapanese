import type { AuthoredUnit } from "../../types"

export const u10: AuthoredUnit = {
  level: "N1", order: 10, title: "Tools and trade-offs", titleJp: "しゅだん と かんきょう",
  description: "Means and absence: 〜をもって (with/by means of), 〜をもってしても (even with), 〜なしに (without), 〜抜きで (dispensing with).",
  vocab: ["技術|ぎじゅつ", "能力|のうりょく", "努力|どりょく", "根気|こんき", "支援|しえん", "資金|しきん", "許可|きょか", "連絡|れんらく", "遅刻|ちこく", "開会|かいかい", "辞書|じしょ", "翻訳|ほんやく", "優秀|ゆうしゅう", "完璧|かんぺき", "礼儀|れいぎ", "常識|じょうしき"],
  kanji: ["技", "能", "援", "資", "金", "許", "訳", "礼", "儀"],
  exam: [
    { kind: "mcq", text: "「彼は持ち前の根気をもって、難事業を成し遂げた。」 means…", options: ["He gave up the project.", "By virtue of his native perseverance, he completed the difficult project.", "The project needed money.", "His perseverance was borrowed."], answer: 1 },
    { kind: "mcq", text: "「許可なしに入場できない。」 means…", options: ["Entry is always allowed.", "You cannot enter without permission.", "Permission is automatic.", "Entering is encouraged."], answer: 1 },
  ],
  lessons: [
    { slug: "n1-u10-l01", title: "By means of: 〜をもって", titleJp: "〜をもって", grammarLabel: "〜をもって",
      summary: "をもって = with X (formal means/deadline): 誠意をもって対応する.",
      body: { meaning: "Noun + をもって = BY MEANS OF / AS OF X: 本日をもって終了します (as of today).", formation: [{ pattern: "Noun ＋ をもって", note: "誠意をもって" }, { pattern: "Time ＋ をもって", note: "本日をもって" }], usage: ["Business, formal announcements.", "Means or deadline."], pitfalls: ["As deadline: 本日をもって終了.", "Opposite: 〜をもってしても (even with)."], related: ["〜をもってしても", "〜で (N5)"] },
      examples: [
        { jp: "彼は誠意をもって、顧客に対応した。", kana: "かれはせいいをもって、こきゃくにたいおうした。", en: "He dealt with the customer in all sincerity." },
        { jp: "本部は本日をもって、移転いたします。", kana: "ほんぶはほんじつをもって、いてんいたします。", en: "As of today, headquarters relocates." },
        { jp: "持ち前の体力をもって、彼は完走した。", kana: "もちまえのたいりょくをもって、かれはかんそうした。", en: "With his natural stamina, he finished the race." },
      ],
      practice: [
        { kind: "blank", text: "本部は本日___、移転いたします。", blanks: ["をもって"] },
        { kind: "mcq", text: "Time + をもって often means…", options: ["before X", "as of X", "despite X", "without X"], answer: 1 },
        { kind: "tf", text: "をもって can express both means and deadlines.", answer: true },
      ],
    },
    { slug: "n1-u10-l02", title: "Even with: 〜をもってしても", titleJp: "〜をもってしても", grammarLabel: "〜をもってしても",
      summary: "をもってしても = even with X (insufficient): 彼の能力をもってしても不可能だ.",
      body: { meaning: "Noun + をもってしても = EVEN WITH X, (can't be done): 彼の才能をもってしても解決できなかった.", formation: [{ pattern: "Noun ＋ をもってしても 〜ない", note: "even with X, not" }], usage: ["Emphasises insufficiency of X.", "Formal."], pitfalls: ["Main clause is negative/inadequate.", "Stronger than でも."], related: ["〜をもって", "〜ても (N4)"] },
      examples: [
        { jp: "彼の能力をもってしても、一人での対応は無理だ。", kana: "かれののうりょくをもってしても、ひとりでのたいおうはむりだ。", en: "Even with his ability, handling it alone is impossible." },
        { jp: "優秀なチームをもってしても、期限は守れなかった。", kana: "ゆうしゅうなチームをもってしても、きげんはまもれなかった。", en: "Even an excellent team couldn't meet the deadline." },
        { jp: "最新の技術をもってしても、完璧な翻訳は難しい。", kana: "さいしんのぎじゅつをもってしても、かんぺきなほんやくはむずかしい。", en: "Even with the latest tech, perfect translation is hard." },
      ],
      practice: [
        { kind: "blank", text: "彼の能力___、一人での対応は無理だ。", blanks: ["をもってしても"] },
        { kind: "mcq", text: "をもってしても implies X is…", options: ["sufficient", "insufficient", "irrelevant", "new"], answer: 1 },
        { kind: "tf", text: "The main clause is typically negative.", answer: true },
      ],
    },
    { slug: "n1-u10-l03", title: "Without: 〜なしに", titleJp: "〜なしに", grammarLabel: "〜なしに",
      summary: "なしに/なしでは = without: 許可なしに入場できない.",
      body: { meaning: "Noun + なしに(は) / なしでは = WITHOUT X: 契約なしに取引しない.", formation: [{ pattern: "Noun ＋ なしに", note: "許可なしに" }, { pattern: "Noun ＋ なしでは 〜ない", note: "conditional" }, { pattern: "〜なくして", note: "variant" }], usage: ["Conditions and requirements.", "Formal-leaning."], pitfalls: ["なしでは takes a negative.", "なくして is the more literary twin."], related: ["〜抜きで", "〜なくして"] },
      examples: [
        { jp: "許可なしに、敷地内へ入ることはできません。", kana: "きょかなしに、しきちないへはいることはできません。", en: "You may not enter the premises without permission." },
        { jp: "事前の連絡なしでは、受付できかねます。", kana: "じぜんのれんらくなしでは、うけつけできかねます。", en: "Without prior notice, we cannot accept (you)." },
        { jp: "努力なくして、成功はない。", kana: "どりょくなくして、せいこうはない。", en: "Without effort, there is no success." },
      ],
      practice: [
        { kind: "blank", text: "許可___、入場できない。", blanks: ["なしに"] },
        { kind: "mcq", text: "なしでは is followed by…", options: ["a positive", "a negative", "a question", "a command"], answer: 1 },
        { kind: "tf", text: "なくして is a literary variant of なしで.", answer: true },
      ],
    },
    { slug: "n1-u10-l04", title: "Dispensing with: 〜抜きで", titleJp: "〜抜きで", grammarLabel: "〜抜きで",
      summary: "抜きで/抜きに = leaving out X: 冗談抜きで話そう.",
      body: { meaning: "Noun + 抜きで/抜きに(して) = WITH X LEFT OUT: 冗談抜きで (jokes aside).", formation: [{ pattern: "Noun ＋ 抜きで", note: "冗談抜きで" }, { pattern: "Noun ＋ 抜きに(しては)", note: "variant" }, { pattern: "Noun 抜きでは 〜ない", note: "negative" }], usage: ["Setting terms of discussion.", "抜きする = skip X."], pitfalls: ["X is deliberately omitted.", "〜抜きで by itself sets a tone."], related: ["〜なしに", "〜はさておき"] },
      examples: [
        { jp: "冗談抜きで、本題に入ろう。", kana: "じょうだんぬきで、ほんだいにはいろう。", en: "Jokes aside, let's get to the point." },
        { jp: "彼の支援抜きに、この計画は実現しない。", kana: "かれのしえんぬきに、このけいかくはじつげんしない。", en: "Without his support, this plan won't materialise." },
        { jp: "今日はお酒抜きにしましょう。", kana: "きょうはおさけぬきにしましょう。", en: "Let's skip the alcohol today." },
      ],
      practice: [
        { kind: "blank", text: "冗談___、本題に入ろう。", blanks: ["抜きで"] },
        { kind: "mcq", text: "支援抜きに means…", options: ["with support", "without support", "only support", "support first"], answer: 1 },
        { kind: "tf", text: "お酒抜きにする = to skip drinking.", answer: true },
      ],
    },
  ],
}
