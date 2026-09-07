import type { AuthoredUnit } from "../../types"

export const u03: AuthoredUnit = {
  level: "N5",
  order: 3,
  title: "Doing things",
  titleJp: "どうさを言う",
  description:
    "Your first verbs: the polite ます form and its negative, the object particle を, going somewhere with に・へ, saying when with time words, and inviting people with 〜ませんか・〜ましょう.",
  vocab: [
    "行く|いく",
    "来る|くる",
    "帰る|かえる",
    "食べる|たべる",
    "飲む|のむ",
    "見る|みる",
    "聞く|きく",
    "読む|よむ",
    "書く|かく",
    "買う|かう",
    "撮る|とる",
    "|する",
    "勉強|べんきょう",
    "朝ご飯|あさごはん",
    "昼ご飯|ひるごはん",
    "晩ご飯|ばんごはん",
    "水|みず",
    "お茶|おちゃ",
    "|コーヒー",
    "|パン",
    "今日|きょう",
    "明日|あした",
    "昨日|きのう",
    "今|いま",
    "|ケーキ",
  ],
  kanji: ["行", "来", "帰", "食", "飲", "見", "聞", "読", "書"],
  exam: [
    {
      kind: "order",
      text: "Build: “I drink coffee every morning.”",
      tokens: ["毎朝", "コーヒー", "を", "飲みます", "。"],
    },
    {
      kind: "mcq",
      text: "Which particle marks WHERE you are going in 学校へ行きます?",
      options: ["を", "に", "が", "の"],
      answer: 1,
      explain: "に (or へ) marks the destination. を is for objects, が for subjects.",
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n5-u03-l01",
      title: "Your first verbs: 〜ます",
      titleJp: "Verb ます",
      grammarLabel: "〜ます",
      summary: "Polite present/future: 食べます (eat/will eat), 飲みます, 行きます…",
      body: {
        meaning:
          " Japanese verbs come at the END of the sentence. The ます form is the polite “present/future”: it covers habits (I eat breakfast every day) and the future (I'll eat soon). Negative: drop ます, add せん → 食べません.",
        formation: [
          { pattern: "Verb ます (affirmative)", note: "食べます eat · 飲みます drink · 行きます go" },
          { pattern: "Verb ません (negative)", note: "食べません don't eat · 行きません don't go" },
          { pattern: "Ｎ は Ｏ を Verb ます", note: "Full polite sentence" },
        ],
        usage: [
          "ます verbs are safe everywhere — with strangers, teachers, at shops.",
          "Time expressions usually come early: 今日、映画を見ます。",
          "する “to do” becomes します; 来る “to come” becomes 来(き)ます — irregular, memorise them.",
        ],
        pitfalls: [
          "The verb is LAST. ✗ 食べますパンを → ✓ パンを食べます。",
          "ます never follows the dictionary form: ✗ 食べるます → ✓ 食べます.",
        ],
        related: ["を (object)", "ました (past, Unit 4)"],
      },
      examples: [
        { jp: "私は毎朝パンを食べます。", kana: "わたしはまいあさパンをたべます。", en: "I eat bread every morning." },
        { jp: "今日は水を飲みません。", kana: "きょうはみずをのみません。", en: "I won't drink water today." },
        { jp: "田中さんはテレビを見ます。", kana: "たなかさんはテレビをみます。", en: "Mr. Tanaka watches TV." },
        { jp: "私は日本語を勉強します。", kana: "わたしはにほんごをべんきょうします。", en: "I study Japanese." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I drink tea.”",
          tokens: ["お茶", "を", "飲みます", "。"],
        },
        {
          kind: "blank",
          text: "私は日本語を勉強___。",
          blanks: ["します"],
        },
        {
          kind: "mcq",
          text: "Which sentence is correct?",
          options: ["パンを食べます私。", "私をパン食べます。", "私はパンを食べます。", "私がパンは食べます。"],
          answer: 2,
        },
        {
          kind: "mcq",
          text: "What is the negative of 食べます?",
          options: ["食べますん", "食べません", "食べいました", "飲みません"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "「明日、映画を見ます。」 can mean “I will watch a movie tomorrow.”",
          answer: true,
          explain: "The ます form covers both habit and future.",
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n5-u03-l02",
      title: "The object particle を",
      titleJp: "〜を",
      grammarLabel: "〜を",
      summary: "Mark what the verb acts on: パンを食べます.",
      body: {
        meaning:
          "を comes right after the DIRECT OBJECT — the thing the verb happens to. パンを食べます = eat bread. 写真を撮ります = take a photo. It answers “what?” after the verb.",
        formation: [
          { pattern: "Noun を Verb", note: "水を飲む drink water · 本を読む read a book" },
          { pattern: "Ｎ は Ｏ を Verb ます", note: "Topic + object + polite verb" },
        ],
        usage: [
          "を is pronounced “o”, not “wo”.",
          "Question the object with 何: 何を食べますか (What will you eat?).",
          "Some verbs take を with movement: 道を歩きます (walk along the street) — comes later.",
        ],
        pitfalls: [
          "Don't use を with です or with movement-to destinations (that's に/へ): ✗ 学校を行きます.",
          "を and が are different: を marks objects, が marks subjects (Unit 5).",
        ],
        related: ["〜ます", "に・へ (destination)"],
      },
      examples: [
        { jp: "毎日日本語を勉強します。", kana: "まいにちにほんごをべんきょうします。", en: "I study Japanese every day." },
        { jp: "昨日ケーキを買いました。", kana: "きのうケーキをかいました。", en: "I bought cake yesterday.", note: "買いました is past — Unit 4." },
        { jp: "何を読みますか。", kana: "なにをよみますか。", en: "What are you reading?" },
        { jp: "写真を撮ります。", kana: "しゃしんをとります。", en: "I'll take a photo." },
      ],
      practice: [
        {
          kind: "blank",
          text: "コーヒー ___ 飲みます。",
          blanks: ["を"],
        },
        {
          kind: "mcq",
          text: "“Listen to music” is…",
          options: ["音楽が聞きます", "音楽を聞きます", "音楽は聞きます", "音楽に聞きます"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “I write a letter (手紙).”",
          tokens: ["手紙", "を", "書きます", "。"],
        },
        {
          kind: "mcq",
          text: "How do you ask “What will you eat?”",
          options: ["何は食べますか。", "何が食べますか。", "何を食べますか。", "どこを食べますか。"],
          answer: 2,
        },
        {
          kind: "tf",
          text: "を is pronounced “wo” in modern Japanese.",
          answer: false,
          explain: "It's pronounced “o” as a particle.",
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n5-u03-l03",
      title: "Going places: に and へ",
      titleJp: "〜に・〜へ",
      grammarLabel: "〜に・〜へ",
      summary: "Destinations: 学校に行きます — に and へ both work.",
      body: {
        meaning:
          "に and へ mark the destination of movement verbs (行く, 来る, 帰る). 学校に行きます and 学校へ行きます both mean “I'm going to school”. に feels like arriving AT a point; へ feels like heading TOWARD a direction.",
        formation: [
          { pattern: "Place に／へ ＋ 行く・来る・帰る", note: "日本に行きます I'm going to Japan." },
          { pattern: "Time に Verb", note: "七時に起きます I get up at 7." },
        ],
        usage: [
          "に also marks exact TIMES: 九時に会います (meet at 9). Days like 今日/明日 need no に.",
          "へ is pronounced “e” as a particle.",
          "For places you exist at or act in, other particles take over (に for existence, で for action — later units).",
        ],
        pitfalls: [
          "✗ 学校を帰ります → ✓ 学校へ帰ります (return TO school).",
          "With 今日/明日/昨日, do NOT add に: ✗ 今日に行きます → ✓ 今日行きます.",
        ],
        related: ["〜ます", "で (Unit 11)", "に (existence, Unit 11)"],
      },
      examples: [
        { jp: "私は毎日学校に行きます。", kana: "わたしはまいにちがっこうにいきます。", en: "I go to school every day." },
        { jp: "田中さんは日本へ来ました。", kana: "たなかさんはにほんへきました。", en: "Mr. Tanaka came to Japan." },
        { jp: "今、家に帰ります。", kana: "いま、いえにかえります。", en: "I'm going home now." },
        { jp: "明日、東京へ行きます。", kana: "あした、とうきょうへいきます。", en: "I'm going to Tokyo tomorrow." },
      ],
      practice: [
        {
          kind: "blank",
          text: "明日、銀行 ___ 行きます。",
          blanks: ["に"],
        },
        {
          kind: "mcq",
          text: "Which particle is pronounced “e”?",
          options: ["を", "に", "へ", "が"],
          answer: 2,
        },
        {
          kind: "order",
          text: "Build: “I'm going home now.”",
          tokens: ["今", "家", "に", "帰ります", "。"],
        },
        {
          kind: "mcq",
          text: "Which is WRONG?",
          options: ["学校に行きます", "学校へ行きます", "学校を帰ります", "家に帰ります"],
          answer: 2,
        },
        {
          kind: "tf",
          text: "「七時に朝ご飯を食べます」 means “I eat breakfast at seven.”",
          answer: true,
          explain: "七時 is an exact time, so に is correct; 朝ご飯 is the object with を.",
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n5-u03-l04",
      title: "Won't you…? Let's…",
      titleJp: "〜ませんか・〜ましょう",
      grammarLabel: "〜ませんか・〜ましょう",
      summary: "Invitations: 一緒に行きませんか (Won't you come along?) / 行きましょう (Let's go).",
      body: {
        meaning:
          "Verb ませんか politely invites: “Won't you …?” — the listener can refuse without embarrassment. Verb ましょう is cheerfully decisive: “Let's …”. ましょうか offers help: “Shall I …?”.",
        formation: [
          { pattern: "Verb ませんか", note: "一緒に映画を見ませんか Won't you watch a movie with me?" },
          { pattern: "Verb ましょう", note: "行きましょう Let's go." },
          { pattern: "Verb ましょうか", note: "手伝いましょうか Shall I help?" },
        ],
        usage: [
          "ませんか is softer; ましょう presumes agreement — use with friends or after a yes.",
          "Accept: いいですね (Sounds good). Decline: すみません、ちょっと… (Sorry, I'm a bit…).",
        ],
        pitfalls: [
          "ませんか is an INVITATION, not a negative question about habit: 食べませんか = “Won't you eat?”, not “Don't you eat?”.",
          "Answering ましょう invitations: don't repeat ましょう to accept — say はい、そうしましょう.",
        ],
        related: ["〜ます", "〜ましょう (review in Unit 12)"],
      },
      examples: [
        { jp: "一緒に昼ご飯を食べませんか。", kana: "いっしょにひるごはんをたべませんか。", en: "Won't you have lunch together?" },
        { jp: "いいですね。行きましょう。", kana: "いいですね。いきましょう。", en: "Sounds good. Let's go." },
        { jp: "少し休みましょうか。", kana: "すこしやすみましょうか。", en: "Shall we rest a little?" },
        { jp: "写真を撮りましょう。", kana: "しゃしんをとりましょう。", en: "Let's take a photo." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Invite someone politely to watch a movie:",
          options: ["映画を見ます。", "映画を見ませんか。", "映画を見ましょうか。", "映画を見ません。"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "ちょっと休み___。(Let's take a break)",
          blanks: ["ましょう"],
        },
        {
          kind: "order",
          text: "Build: “Won't you drink coffee?”",
          tokens: ["コーヒー", "を", "飲みません", "か", "。"],
        },
        {
          kind: "mcq",
          text: "「傘を貸しましょうか。」 means…",
          options: ["Lend me an umbrella.", "Shall I lend you an umbrella?", "I won't lend an umbrella.", "Did you lend an umbrella?"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "「行きませんか」 usually means “You don't go?”.",
          answer: false,
          explain: "With rising intent it's an invitation: “Won't you go?”.",
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n5-u03-l05",
      title: "When? Time words in action",
      titleJp: "時間のことば",
      grammarLabel: "時間のことば",
      summary: "今日・明日・昨日・今・毎日 — no に needed on days.",
      body: {
        meaning:
          "Time words set the scene at the START of the sentence. Relative days (今日 today, 明日 tomorrow, 昨日 yesterday, 今 now) and 毎日/毎朝 never take に; clock times and days of the week DO (七時に, 月曜日に).",
        formation: [
          { pattern: "Time word ＋ Ｎ は Ｏ を Verb ます", note: "明日、映画を見ます。" },
          { pattern: "Clock time に Verb", note: "七時に起きます (wake at 7 — 起きます is Unit 4 vocab but the pattern is here)." },
        ],
        usage: [
          "昨日/今日/明日/毎日 — no に. 月曜日/三時 — with に.",
          "Time order in a sentence: time → place → object → verb.",
        ],
        pitfalls: [
          "✗ 明日に 行きます → ✓ 明日行きます. But ✓ 日曜日に行きます.",
          "今日 is read きょう, not こんにち, in daily speech.",
        ],
        related: ["〜に (destination)", "ました (past)"],
      },
      examples: [
        { jp: "今日は何を食べますか。", kana: "きょうはなにをたべますか。", en: "What will you eat today?" },
        { jp: "明日、友達に会います。", kana: "あした、ともだちにあいます。", en: "I'll meet a friend tomorrow.", note: "Person に = meet — an important extra use of に." },
        { jp: "昨日、本を読みました。", kana: "きのう、ほんをよみました。", en: "I read a book yesterday." },
        { jp: "毎朝コーヒーを飲みます。", kana: "まいあさコーヒーをのみます。", en: "I drink coffee every morning." },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Which is correct?",
          options: ["明日に行きます。", "明日、行きます。", "明日を行きます。", "明日が行きます。"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "月曜 ___ 映画を見ます。(on Monday)",
          blanks: ["に"],
        },
        {
          kind: "order",
          text: "Build: “I drink coffee every morning.”",
          tokens: ["毎朝", "コーヒー", "を", "飲みます", "。"],
        },
        {
          kind: "mcq",
          text: "「昨日」 is read…",
          options: ["きょう", "あした", "きのう", "いま"],
          answer: 2,
        },
        {
          kind: "short",
          text: "Say “today” in Japanese (one word, kanji ok).",
          accept: ["今日", "きょう", "こんにち"],
        },
      ],
    },
  ],
}
