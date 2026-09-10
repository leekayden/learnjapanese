import type { AuthoredUnit } from "../../types"

export const u13: AuthoredUnit = {
  level: "N1", order: 13, title: "Setting things aside", titleJp: "はんいがい",
  description: "Exclusion and priority: 〜はさておき (setting aside), 〜をおいて (nothing but), 〜も同然だ (as good as), 〜も同様だ (likewise).",
  vocab: ["本題|ほんだい", "余談|よだん", "議論|ぎろん", "適任|てきにん", "後継|こうけい", "場所|ばしょ", "手続き|てつづき", "書類|しょるい", "免税|めんぜい", "品質|ひんしつ", "価格|かかく", "成功|せいこう", "経験|けいけん", "天才|てんさい", "卒業|そつぎょう", "同然|どうぜん"],
  kanji: ["議", "適", "継", "免", "税", "質", "格", "卒", "然"],
  exam: [
    { kind: "mcq", text: "「細かい問題はさておき、まず予算を確保しよう。」 means…", options: ["Budget first, details later.", "Budget is unimportant.", "Problems are settled.", "Skip the budget."], answer: 0 },
    { kind: "mcq", text: "「この仕事を任せられるのは、彼をおいていない。」 means…", options: ["Many others can do it.", "No one but him can take this on.", "He refuses the job.", "Others outrank him."], answer: 1 },
  ],
  lessons: [
    { slug: "n1-u13-l01", title: "Setting aside: 〜はさておき", titleJp: "〜はさておき", grammarLabel: "〜はさておき",
      summary: "はさておき = X aside for now: 冗談はさておき.",
      body: { meaning: "Noun + はさておき = SETTING X ASIDE (to focus on Y): 詳細な議論はさておき、まず方針を決めよう.", formation: [{ pattern: "Noun ＋ はさておき", note: "冗談はさておき" }, { pattern: "〜もさておき", note: "variant" }], usage: ["Meetings, debates, writing.", "X is postponed, not denied."], pitfalls: ["X returns later — just postponed.", "Similar to はともかく but more formal."], related: ["〜はともかく (N3)", "〜抜きで"] },
      examples: [
        { jp: "冗談はさておき、本題に入りましょう。", kana: "じょうだんはさておき、ほんだいにはいりましょう。", en: "Jokes aside, let's get to the main topic." },
        { jp: "細部はさておき、まず全体の構成を決めよう。", kana: "さいぶはさておき、まずぜんたいのこうせいをきめよう。", en: "Details aside, let's first settle the overall structure." },
        { jp: "値段もさておき、品質に問題がある。", kana: "ねだんもさておき、ひんしつにもんだいがある。", en: "Price aside, there's a quality problem." },
      ],
      practice: [
        { kind: "blank", text: "冗談___、本題に入りましょう。", blanks: ["はさておき"] },
        { kind: "mcq", text: "はさておき ___ X.", options: ["denies", "postpones", "repeats", "praises"], answer: 1 },
        { kind: "tf", text: "〜もさておき is a variant.", answer: true },
      ],
    },
    { slug: "n1-u13-l02", title: "Nothing but: 〜をおいて", titleJp: "〜をおいて", grammarLabel: "〜をおいて",
      summary: "をおいて(他に)〜ない = nothing but X: 彼をおいて適任者はいない.",
      body: { meaning: "Noun + をおいて(他に) 〜ない = NO ONE/NOTHING BUT X: 彼女をおいて、この仕事を任せられる人はいない.", formation: [{ pattern: "Noun ＋ をおいて 他に 〜ない", note: "fixed negative frame" }], usage: ["Emphatic endorsement.", "Formal speeches and writing."], pitfalls: ["Always with a negative predicate.", "X is the one and only candidate."], related: ["〜しか〜ない", "〜ほかない"] },
      examples: [
        { jp: "後継者は、彼をおいていない。", kana: "こうけいしゃは、かれをおいていない。", en: "There is no successor but him." },
        { jp: "この任務にふさわしいのは、彼女をおいて他にいない。", kana: "このにんむにふさわしいのは、かのじょをおいてほかにいない。", en: "No one but her suits this mission." },
        { jp: "花見の名所は、ここをおいて他に知らない。", kana: "はなみのめいしょは、ここをおいてほかにしらない。", en: "For cherry-blossom spots, I know of none but here." },
      ],
      practice: [
        { kind: "blank", text: "後継者は、彼___いない。", blanks: ["をおいて"] },
        { kind: "mcq", text: "をおいて is followed by…", options: ["a positive", "a negative", "a question", "a noun"], answer: 1 },
        { kind: "tf", text: "It emphasises X as the only option.", answer: true },
      ],
    },
    { slug: "n1-u13-l03", title: "As good as: 〜も同然だ", titleJp: "〜も同然だ", grammarLabel: "〜も同然だ",
      summary: "も同然だ = as good as X: 帰国したも同然だ.",
      body: { meaning: "Plain / noun + も同然(だ) = PRACTICALLY X: 許可が下りたも同然だ.", formation: [{ pattern: "Verb plain ＋ も同然だ", note: "終わったも同然だ" }, { pattern: "Noun ＋ も同然だ", note: "独身も同然" }], usage: ["Framing states as near-certain.", "Neutral-positive often."], pitfalls: ["同然 = equal to.", "Also adverbial: 同然に."], related: ["〜ようなものだ", "〜もいいところだ"] },
      examples: [
        { jp: "契約書に署名すれば、完成したも同然だ。", kana: "けいやくしょにしょめいすれば、かんせいしたもどうぜんだ。", en: "Sign the contract and it's as good as done." },
        { jp: "彼は家族も同然の存在だ。", kana: "かれはかぞくもどうぜんのそんざいだ。", en: "He's practically family." },
        { jp: "毎日来ているのだから、研究員も同然だ。", kana: "まいにちきているのだから、けんきゅういんもどうぜんだ。", en: "He's here every day, so he's basically a researcher." },
      ],
      practice: [
        { kind: "blank", text: "契約書に署名すれば、完成した___だ。", blanks: ["も同然"] },
        { kind: "mcq", text: "も同然 means…", options: ["totally different", "as good as", "opposite", "forbidden"], answer: 1 },
        { kind: "tf", text: "同然 can modify nouns with の.", answer: true },
      ],
    },
    { slug: "n1-u13-l04", title: "Likewise: 〜も同様だ", titleJp: "〜も同様だ", grammarLabel: "〜も同様だ",
      summary: "も同様だ = the same applies to X too: 大人も同様だ.",
      body: { meaning: "Noun + も同様(だ) = X IS THE SAME: 子供に限らず、大人も同様だ.", formation: [{ pattern: "Noun ＋ も同様だ", note: "大人も同様" }, { pattern: "Noun ＋ も同様に", note: "adverbial" }], usage: ["Extending a statement to another group.", "Formal-neutral."], pitfalls: ["同様 = same manner.", "Pairs with a previous statement."], related: ["〜もかまわず", "〜に限らず (N2)"] },
      examples: [
        { jp: "技術者に限らず、経営者も同様の問題を抱えている。", kana: "ぎじゅつしゃにかぎらず、けいえいしゃもどうようのもんだいをかかえている。", en: "Not just engineers — managers face the same issue." },
        { jp: "日本でも、海外も同様に高齢化が進んでいる。", kana: "にほんでも、かいがいもどうようにこうれいかがすすんでいる。", en: "In Japan and abroad alike, aging is progressing." },
        { jp: "子どもも同様に、規則を守る義務がある。", kana: "こどももどうように、きそくをまもるぎむがある。", en: "Children likewise have a duty to follow rules." },
      ],
      practice: [
        { kind: "blank", text: "日本でも、海外も___、高齢化が進んでいる。", blanks: ["同様に"] },
        { kind: "mcq", text: "も同様 extends a statement to…", options: ["nothing", "another group", "the past", "the speaker only"], answer: 1 },
        { kind: "tf", text: "同様に can act adverbially.", answer: true },
      ],
    },
  ],
}
