import type { AuthoredUnit } from "../../types"

export const u02: AuthoredUnit = {
  level: "N5",
  order: 2,
  title: "Around town, around the house",
  titleJp: "まわりのことば",
  description:
    "Point precisely: この・その・あの before nouns, places with ここ・そこ・あそこ・どこ, asking who and what, saying what something is NOT (じゃありません), and the sentence-enders ね and よ.",
  vocab: [
    "|ここ",
    "|そこ",
    "|あそこ",
    "|どこ",
    "教室|きょうしつ",
    "部屋|へや",
    "駅|えき",
    "|デパート",
    "|トイレ",
    "|プール",
    "家族|かぞく",
    "お父さん|おとうさん",
    "お母さん|おかあさん",
    "兄|あに",
    "姉|あね",
    "弟|おとうと",
    "妹|いもうと",
    "電話|でんわ",
    "時計|とけい",
    "|かばん",
    "傘|かさ",
    "靴|くつ",
    "窓|まど",
    "机|つくえ",
    "椅子|いす",
  ],
  kanji: ["六", "七", "八", "九", "十", "百", "千", "万", "女"],
  exam: [
    {
      kind: "mcq",
      text: "Your friend asks 「トイレはどこですか。」. What did they ask?",
      options: ["When is the toilet open?", "Where is the toilet?", "Whose toilet is this?", "Is the toilet clean?"],
      answer: 1,
      explain: "どこ = where, so the question is “Where is the toilet?”.",
    },
    {
      kind: "blank",
      text: "このかばん ___ 私のではありません。",
      blanks: ["は"],
      explain: "このかばん is the topic; mark it with は.",
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n5-u02-l01",
      title: "This book, that umbrella",
      titleJp: "この・その・あの＋名詞",
      grammarLabel: "この・その・あの",
      summary: "Pointing before a noun: この・その・あの＋noun.",
      body: {
        meaning:
          "この (this), その (that, near you) and あの (that over there) come BEFORE a noun to say which one you mean. どの asks “which (noun)?”.",
        formation: [
          { pattern: "この ／ その ／ あの ／ どの ＋ 名詞", note: "この本 this book · その傘 that umbrella · あの人 that person over there" },
          { pattern: "どの傘ですか", note: "Which umbrella is it?" },
        ],
        usage: [
          "Same distance zones as これ・それ・あれ — but these must be followed by a noun.",
          "あの人 is the standard polite-ish way to refer to a person you can see: あの人は田中さんです。",
        ],
        pitfalls: [
          "これ and この本 are different shapes: これ stands alone, この needs a noun. ✗ これ本 → ✓ この本.",
          "Don't mix pairs: この is not “this is”. 「これは本です」 uses これ + は.",
        ],
        related: ["これ・それ・あれ (Unit 1)", "ここ・そこ・あそこ"],
      },
      examples: [
        { jp: "このかばんは私のです。", kana: "このかばんはわたしのです。", en: "This bag is mine." },
        { jp: "その傘は田中さんの傘です。", kana: "そのかさはたなかさんのかさです。", en: "That umbrella (near you) is Tanaka's." },
        { jp: "あの窓のそばに椅子があります。", kana: "あのまどのそばにいすがあります。", en: "There is a chair by that window over there.", note: "〜があります is taught in Unit 11 — just recognise the pattern." },
        { jp: "どの靴が好きですか。", kana: "どのくつがすきですか。", en: "Which shoes do you like?" },
      ],
      practice: [
        {
          kind: "blank",
          text: "___ 電話は誰の電話ですか。(this phone)",
          blanks: ["この"],
        },
        {
          kind: "mcq",
          text: "You want to say “that clock (near my friend)”. Which is correct?",
          options: ["あの時計", "その時計", "この時計", "どの時計"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “This room is my room.”",
          tokens: ["この", "部屋", "は", "私の", "部屋", "です"],
        },
        {
          kind: "mcq",
          text: "Which one asks “Which bag is yours?”",
          options: ["このかばんはあなたのです。", "どのかばんがあなたのですか。", "かばんはどこですか。", "それはかばんですか。"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "「その靴」 can mean shoes near the listener.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n5-u02-l02",
      title: "Here, there, and everywhere",
      titleJp: "ここ・そこ・あそこ・どこ",
      grammarLabel: "ここ・そこ・あそこ",
      summary: "Places: ここ (here), そこ (there, near you), あそこ (over there), どこ (where).",
      body: {
        meaning:
          "ここ・そこ・あそこ point at PLACES the same way これ・それ・あれ point at things. どこ asks “where?”. With です they make simple location sentences: 駅はあそこです (The station is over there).",
        formation: [
          { pattern: "Ａ は ここ／そこ／あそこ です", note: "A is here / there / over there." },
          { pattern: "トイレ は どこ ですか", note: "Where is the toilet?" },
        ],
        usage: [
          "Answer a どこ question directly: 「駅はどこですか」「あそこです」.",
          "こちら・そちら・あちら are the politer versions — useful at work; こちら also means “this direction/person”.",
        ],
        pitfalls: [
          "ここ is a noun, so no に or を: say ここです, not ここにです.",
          "そこ refers to a place near the LISTENER — in phone calls, そこ means “your place”: そこにいてください.",
        ],
        related: ["これ・それ・あれ", "この・その・あの"],
      },
      examples: [
        { jp: "駅はあそこです。", kana: "えきはあそこです。", en: "The station is over there." },
        { jp: "トイレはどこですか。", kana: "トイレはどこですか。", en: "Where is the toilet?" },
        { jp: "教室はここです。", kana: "きょうしつはここです。", en: "The classroom is here." },
        { jp: "あなたの部屋はそこです。", kana: "あなたのへやはそこです。", en: "Your room is there (near you)." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Someone asks where the pool is. It's far from both of you. You say:",
          options: ["プールはここです。", "プールはそこです。", "プールはあそこです。", "プールはどこです。"],
          answer: 2,
        },
        {
          kind: "blank",
          text: "トイレ ___ どこですか。",
          blanks: ["は"],
        },
        {
          kind: "order",
          text: "Build: “Where is the station?”",
          tokens: ["駅", "は", "どこ", "ですか", "。"],
        },
        {
          kind: "mcq",
          text: "「デパートはどこですか。」 — which answer makes sense?",
          options: ["はい、そうです。", "あそこです。", "デパートです。", "千円です。"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "ここ means “there (near the listener)”.",
          answer: false,
          explain: "ここ = here (near me). そこ = near the listener.",
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n5-u02-l03",
      title: "Who and what",
      titleJp: "だれ・なん",
      grammarLabel: "だれ・なん",
      summary: "Asking who (だれ／どなた) and what (何／なん).",
      body: {
        meaning:
          "だれ asks “who?” (どなた is the polite version). 何 asks “what?” — pronounced なん before most sounds, なに before ですか in casual reading… in practice: なんですか is standard in polite speech.",
        formation: [
          { pattern: "Ａ は だれ ですか", note: "Who is A?" },
          { pattern: "それ は 何 ですか", note: "What is that?" },
        ],
        usage: [
          "あの人はだれですか — Who is that person? Polite: どなたですか.",
          "何 as a subject takes が: 何がありますか。 As an object it takes を: 何を食べますか。",
        ],
        pitfalls: [
          "何の＋noun asks “what kind of”: 何の本ですか (What kind of book?).",
          "Never use あなた with a stranger's name question — ask お名前は何ですか (polite) instead.",
        ],
        related: ["〜ですか (questions)", "〜の (possession)"],
      },
      examples: [
        { jp: "あの人はだれですか。", kana: "あのひとはだれですか。", en: "Who is that person?" },
        { jp: "これは何ですか。", kana: "これはなんですか。", en: "What is this?" },
        { jp: "田中さんの電話番号は何ですか。", kana: "たなかさんのでんわばんごうはなんですか。", en: "What is Tanaka's phone number?" },
        { jp: "あの方はどなたですか。", kana: "あのかたはどなたですか。", en: "Who is that person? (polite)" },
      ],
      practice: [
        {
          kind: "blank",
          text: "あの人は ___ ですか。(who)",
          blanks: ["だれ"],
        },
        {
          kind: "mcq",
          text: "Which is the polite way to ask “Who is that person?”",
          options: ["あの人はだれですか。", "あの方はどなたですか。", "あれはだれですか。", "だれあの人？"],
          answer: 1,
          explain: "どなた is the polite form of だれ; あの方 of あの人.",
        },
        {
          kind: "order",
          text: "Build: “What is that (near you)?”",
          tokens: ["それ", "は", "何", "ですか", "。"],
        },
        {
          kind: "mcq",
          text: "「何の本ですか。」 asks…",
          options: ["Whose book is it?", "What kind of book is it?", "Where is the book?", "How much is the book?"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "だれ can follow の to ask “whose”: だれのかばん.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n5-u02-l04",
      title: "Saying what something is NOT",
      titleJp: "〜じゃありません",
      grammarLabel: "〜じゃありません",
      summary: "Negative です: じゃありません (casual-ish polite) and ではありません (formal).",
      body: {
        meaning:
          "To say “A is not B”, replace です with じゃありません. The more formal version is ではありません. For the past, use じゃありませんでした.",
        formation: [
          { pattern: "Ａ は Ｂ じゃありません", note: "A is not B." },
          { pattern: "Ａ は Ｂ じゃありませんでした", note: "A was not B." },
        ],
        usage: [
          "じゃありません is standard polite conversation. ではありません appears in writing and very formal speech.",
          "Answering negatively: 「学生ですか」「いいえ、学生じゃありません」.",
        ],
        pitfalls: [
          "じゃありませんでした (past negative), NOT じゃありませんでした→じゃなかったです mixing yet — one thing at a time.",
          "Don't drop は of the topic: 私は学生じゃありません.",
        ],
        related: ["〜は〜です", "〜ですか"],
      },
      examples: [
        { jp: "私は学生じゃありません。", kana: "わたしはがくせいじゃありません。", en: "I am not a student." },
        { jp: "これは私の傘じゃありません。", kana: "これはわたしのかさじゃありません。", en: "This is not my umbrella." },
        { jp: "あの人は先生じゃありませんでした。", kana: "あのひとはせんせいじゃありませんでした。", en: "That person was not a teacher." },
        { jp: "いいえ、違います。日本人じゃありません。", kana: "いいえ、ちがいます。にほんじんじゃありません。", en: "No, that's wrong. I'm not Japanese." },
      ],
      practice: [
        {
          kind: "blank",
          text: "私は先生 ___ ありません。",
          blanks: ["じゃ"],
        },
        {
          kind: "mcq",
          text: "「この靴は私のじゃありません。」 means…",
          options: ["These shoes are mine.", "These shoes are not mine.", "Are these shoes mine?", "These were my shoes."],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “That (over there) is not the station.”",
          tokens: ["あそこ", "は", "駅", "じゃ", "ありません"],
        },
        {
          kind: "mcq",
          text: "What is the formal version of じゃありません?",
          options: ["ではありません", "だったありません", "ではない", "なくありません"],
          answer: 0,
        },
        {
          kind: "tf",
          text: "「昨日は雨じゃありませんでした。」 means “It was not rainy yesterday.”",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n5-u02-l05",
      title: "Right? and you know: ね and よ",
      titleJp: "〜ね・〜よ",
      grammarLabel: "〜ね・〜よ",
      summary: "Soften and colour your sentences: ね seeks agreement, よ gives new information.",
      body: {
        meaning:
          "At the end of a sentence, ね means “right? / isn't it?” — inviting agreement. よ means “you know / I'm telling you” — giving the listener NEW information.",
        formation: [
          { pattern: "〜です ね", note: "…, right? / I see." },
          { pattern: "〜です よ", note: "…, you know. (new info for the listener)" },
        ],
        usage: [
          "いい天気ですね。(Nice weather, isn't it?) — small talk essential.",
          "田中さんは今日休みですよ。(Mr. Tanaka is off today, you know.) — telling something they may not know.",
          "In responses, ね shows you're following: そうですね (I see, right).",
        ],
        pitfalls: [
          "よ can sound pushy if overused with superiors; ね with よ's information sounds like you assume they know.",
          "These are sentence-ENDERS. ✗ ねこれは本です → ✓ これは本ですね。",
        ],
        related: ["〜ですか"],
      },
      examples: [
        { jp: "今日はいい天気ですね。", kana: "きょうはいいてんきですね。", en: "Nice weather today, isn't it?" },
        { jp: "この教室は静かですね。", kana: "このきょうしつはしずかですね。", en: "This classroom is quiet, isn't it?" },
        { jp: "田中さんはそこにいますよ。", kana: "たなかさんはそこにいますよ。", en: "Mr. Tanaka is over there, you know.", note: "〜にいます comes in Unit 11." },
        { jp: "これは高いですよ。", kana: "これはたかいですよ。", en: "This is expensive, you know." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "You want to confirm the time with a colleague: 「会議は三時___。」",
          options: ["よ", "ね", "か", "が"],
          answer: 1,
          explain: "ね seeks confirmation: “The meeting is at three, right?”",
        },
        {
          kind: "mcq",
          text: "Your friend is about to pay an absurd price. You warn them: 「これは高い___！」",
          options: ["ね", "か", "よ", "の"],
          answer: 2,
        },
        {
          kind: "tf",
          text: "そうです。ね correct word order for “I see, right” is そうです。",
          answer: false,
          explain: "It's そうですね — ね comes at the very end.",
        },
        {
          kind: "order",
          text: "Build: “The teacher is kind, isn't she?”",
          tokens: ["先生", "は", "親切", "です", "ね"],
        },
        {
          kind: "short",
          text: "Complete naturally: someone tells you new information and you acknowledge — そうです___。",
          accept: ["よ", "ね"],
          explain: "Both appear in real speech; よ when you newly agree, ね when confirming. (Either accepted here.)",
        },
      ],
    },
  ],
}
