import type { AuthoredUnit } from "../../types"

export const u06: AuthoredUnit = {
  level: "N5",
  order: 6,
  title: "The mighty te-form",
  titleJp: "テフォーム",
  description:
    "The te-form unlocks requests, ongoing actions, permission and prohibitions: てください, ています, てもいいですか, てはいけません.",
  vocab: [
    "立つ|たつ",
    "座る|すわる",
    "使う|つかう",
    "待つ|まつ",
    "住む|すむ",
    "泳ぐ|およぐ",
    "遊ぶ|あそぶ",
    "話す|はなす",
    "教える|おしえる",
    "入る|はいる",
    "出る|でる",
    "始まる|はじまる",
    "終わる|おわる",
    "作る|つくる",
    "働く|はたらく",
    "休む|やすむ",
    "会議|かいぎ",
    "仕事|しごと",
    "病院|びょういん",
    "銀行|ぎんこう",
    "図書館|としょかん",
    "郵便局|ゆうびんきょく",
  ],
  kanji: ["立", "待", "使", "住", "話", "働", "休", "会", "銀"],
  exam: [
    {
      kind: "blank",
      text: "すみません、もう一度___ください。(say it again — 言います)",
      blanks: ["言って"],
      explain: "言います → 言って.",
    },
    {
      kind: "mcq",
      text: "「ここで写真を撮ってもいいですか。」 asks…",
      options: ["May I take photos here?", "Must I take photos here?", "Am I not allowed to take photos?", "Did you take photos here?"],
      answer: 0,
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n5-u06-l01",
      title: "Making the te-form",
      titleJp: "テフォームの作り方",
      grammarLabel: "て-form",
      summary: "One conjugation, five uses: group rules for making 食べて, 飲んで, 書いて, 待って.",
      body: {
        meaning:
          "The te-form is a verb shape that links verbs and makes requests. Rules by verb group: る-verbs drop る add て (食べて); う-verbs change by ending: う・つ・る→って, む・ぶ・ぬ→んで, く→いて, ぐ→いで, する→して, 来る→来(き)て.",
        formation: [
          { pattern: "る-verbs: る → て", note: "食べる→食べて · 見る→見て · 教える→教えて" },
          { pattern: "う・つ・る → って", note: "買う→買って · 待つ→待って · 帰る→帰って" },
          { pattern: "む・ぶ・ぬ → んで", note: "飲む→飲んで · 遊ぶ→遊んで · 死ぬ→死んで" },
          { pattern: "く → いて / ぐ → いで", note: "書く→書いて · 泳ぐ→泳いで (行く→行って is the big exception)" },
          { pattern: "する→して / 来る→来て", note: "irregular" },
        ],
        usage: [
          "The te-form is THE gateway grammar of Japanese — everything from here on uses it.",
          "Verbs ending in す become して: 話す→話して.",
        ],
        pitfalls: [
          "行く is IRREGULAR in the te-form: 行って (not 行いて).",
          "帰る (かえる) looks like a る-verb but conjugates as an う-verb: 帰って.",
        ],
        related: ["〜てください", "〜ています", "〜た-form (Unit 7)"],
      },
      examples: [
        { jp: "ちょっと待ってください。", kana: "ちょっとまってください。", en: "Please wait a moment." },
        { jp: "名前を書いてください。", kana: "なまえをかいてください。", en: "Please write your name." },
        { jp: "この漢字の読み方を教えてください。", kana: "このかんじのよみかたをおしえてください。", en: "Please teach me how to read this kanji." },
        { jp: "歌を歌って。", kana: "うたをうたって。", en: "Sing a song! (casual)" },
      ],
      practice: [
        {
          kind: "mcq",
          text: "Te-form of 飲む:",
          options: ["飲みて", "飲んで", "飲って", "飲いて"],
          answer: 1,
          explain: "む-verbs take んで.",
        },
        {
          kind: "mcq",
          text: "Te-form of 書く:",
          options: ["書って", "書きて", "書いて", "書んで"],
          answer: 2,
        },
        {
          kind: "mcq",
          text: "Te-form of 行く (the famous exception):",
          options: ["行いて", "行って", "行きて", "行んで"],
          answer: 1,
        },
        {
          kind: "match",
          text: "Match each verb with its te-form:",
          pairs: [
            ["食べる", "食べて"],
            ["待つ", "待って"],
            ["泳ぐ", "泳いで"],
            ["する", "して"],
          ],
        },
        {
          kind: "tf",
          text: "帰る becomes 帰って in the te-form.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n5-u06-l02",
      title: "Please do: 〜てください",
      titleJp: "〜てください",
      grammarLabel: "〜てください",
      summary: "The all-purpose polite request: 待ってください (please wait).",
      body: {
        meaning:
          "Verb te-form + ください makes a polite request: 見てください (please look). Add すみません for strangers. Without ください it's casual: 待って！",
        formation: [
          { pattern: "Verb て ＋ ください", note: "座ってください Please sit down." },
          { pattern: "すみません、〜てください", note: "softer with strangers" },
          { pattern: "Verb ないでください", note: "negative request — next lesson" },
        ],
        usage: [
          "Perfect for instructions, shop staff, asking favours.",
          "〜をください (give me X) from Unit 4 is a special case of noun+を+ください.",
        ],
        pitfalls: [
          "てください is polite but direct — with bosses add すみませんが… or use humbler forms later.",
          "✗ 食べてますか as a request — that's the ongoing form (next lesson).",
        ],
        related: ["て-form", "〜ないでください (next lesson)"],
      },
      examples: [
        { jp: "ここに名前を書いてください。", kana: "ここになまえをかいてください。", en: "Please write your name here." },
        { jp: "もう一度言ってください。", kana: "もういちどいってください。", en: "Please say it once more." },
        { jp: "すみません、写真を撮ってもいいですか。", kana: "すみません、しゃしんをとってもいいですか。", en: "Excuse me, may I take a photo?", note: "permission form is L4." },
        { jp: "中に入ってください。", kana: "なかにはいってください。", en: "Please come in." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “Please wait a moment.”",
          tokens: ["ちょっと", "待って", "ください", "。"],
        },
        {
          kind: "blank",
          text: "ここに座って___。(please sit here)",
          blanks: ["ください"],
        },
        {
          kind: "mcq",
          text: "Ask a teacher to repeat (polite):",
          options: ["もう一度言って。", "もう一度言ってください。", "もう一度言います。", "もう一度言いました。"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Te-form + ください of 見る:",
          options: ["見てください", "見ってください", "見みてください", "見いてください"],
          answer: 0,
        },
        {
          kind: "tf",
          text: "待って！ (without ください) is casual but common among friends.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n5-u06-l03",
      title: "Right now: 〜ています",
      titleJp: "〜ています",
      grammarLabel: "〜ています",
      summary: "Ongoing actions: 食べています (is eating).",
      body: {
        meaning:
          "Verb te-form + います says an action is IN PROGRESS: 今、昼ご飯を食べています (I'm eating lunch now). Question: 何をしていますか (What are you doing?).",
        formation: [
          { pattern: "Verb て ＋ います", note: "勉強しています is studying" },
          { pattern: "Verb て ＋ いません", note: "negative: not doing" },
          { pattern: "今／〜ながら …", note: "今、雨が降っています It's raining now." },
        ],
        usage: [
          "Answers to 何をしていますか describe current activity.",
          "Casual speech shortens います: 食べてる.",
        ],
        pitfalls: [
          "〜ています ALSO covers states and habits (next lesson) — context decides.",
          "✗ 勉強ます → always te-form + います.",
        ],
        related: ["て-form", "〜ています (states, Unit 7)"],
      },
      examples: [
        { jp: "今、何をしていますか。", kana: "いま、なにをしていますか。", en: "What are you doing now?" },
        { jp: "日本語を勉強しています。", kana: "にほんごをべんきょうしています。", en: "I'm studying Japanese." },
        { jp: "雨が降っています。", kana: "あめがふっています。", en: "It's raining." },
        { jp: "田中さんは今会議に出ていません。", kana: "たなかさんはいかいぎにでていません。", en: "Mr. Tanaka isn't in the meeting right now." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I'm eating lunch now.”",
          tokens: ["今", "昼ご飯", "を", "食べて", "います", "。"],
        },
        {
          kind: "mcq",
          text: "「雨が降っています。」 means…",
          options: ["It rained.", "It's raining.", "It will rain.", "It doesn't rain."],
          answer: 1,
        },
        {
          kind: "blank",
          text: "田中さんは本を読んで___。(is reading)",
          blanks: ["います"],
        },
        {
          kind: "mcq",
          text: "Ask “What are you doing?”:",
          options: ["何をしますか。", "何をしていますか。", "何をしましたか。", "何をしたいですか。"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "食べています can mean both “is eating” and (in some contexts) a continuing state.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n5-u06-l04",
      title: "May I? 〜てもいいですか",
      titleJp: "〜てもいいですか",
      grammarLabel: "〜てもいいですか",
      summary: "Permission: 写真を撮ってもいいですか (May I take a photo?).",
      body: {
        meaning:
          "te-form + もいいですか asks permission: 入ってもいいですか (May I come in?). Grant with いいですよ; refuse with すみません、ちょっと….",
        formation: [
          { pattern: "Verb て ＋ も いいですか", note: "座ってもいいですか May I sit?" },
          { pattern: "いいですよ", note: "Sure, go ahead." },
          { pattern: "すみません、ちょっと…", note: "soft refusal" },
        ],
        usage: [
          "Literal logic: “even if I do it, is it OK?” — that's the も.",
          "Formal variant: 〜てもよろしいですか.",
        ],
        pitfalls: [
          "Use the te-form, not the dictionary form: ✗ 入るてもいい → ✓ 入ってもいい.",
          "The answer いいですよ refers to the LISTENER's action — don't answer your own question.",
        ],
        related: ["〜てはいけません", "〜てください"],
      },
      examples: [
        { jp: "ここに座ってもいいですか。", kana: "ここにすわってもいいですか。", en: "May I sit here?" },
        { jp: "窓を開けてもいいですか。", kana: "まどをあけてもいいですか。", en: "May I open the window?" },
        { jp: "この辞書を使ってもいいですか。", kana: "このじしょをつかってもいいですか。", en: "May I use this dictionary?" },
        { jp: "はい、いいですよ。", kana: "はい、いいですよ。", en: "Yes, go ahead." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “May I open the window?”",
          tokens: ["窓", "を", "開けて", "も", "いいですか", "。"],
        },
        {
          kind: "blank",
          text: "写真を撮 ___ いいですか。(may I take)",
          blanks: ["っても"],
        },
        {
          kind: "mcq",
          text: "Someone asks 座ってもいいですか。You allow it:",
          options: ["いいえ、ちょっと…", "いいですよ。", "座ります。", "そうですか。"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Which form goes before てもいいですか?",
          options: ["dictionary form", "ます-stem", "te-form", "past form"],
          answer: 2,
        },
        {
          kind: "tf",
          text: "帰ってもいいですか can mean “May I go home?”.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n5-u06-l05",
      title: "You must not: 〜てはいけません",
      titleJp: "〜てはいけません",
      grammarLabel: "〜てはいけません",
      summary: "Prohibition: 入ってはいけません (You must not enter).",
      body: {
        meaning:
          "te-form + はいけません forbids: ここに駐車してはいけません (You must not park here). Casual: 〜ちゃだめ. It's about RULES and strong advice, not preferences.",
        formation: [
          { pattern: "Verb て ＋ は いけません", note: "写真を撮ってはいけません You must not take photos." },
          { pattern: "〜ちゃだめです／だめ", note: "casual: 入っちゃだめ！" },
        ],
        usage: [
          "Signs and rules: 触ってはいけません (Do not touch).",
          "Softer advice uses ないでください (next unit) — てはいけません is stricter.",
        ],
        pitfalls: [
          "Don't use it for “I won't/shouldn't (myself)” — it typically addresses others' behaviour or states rules.",
          "は in ては is pronounced “wa”.",
        ],
        related: ["〜てもいいですか", "〜ないでください (Unit 8)"],
      },
      examples: [
        { jp: "ここで泳いではいけません。", kana: "ここでおよいではいけません。", en: "You must not swim here." },
        { jp: "図書館で話してはいけません。", kana: "としょかんではなしてはいけません。", en: "You must not talk in the library." },
        { jp: "このドアに入ってはいけません。", kana: "このドアにはいってはいけません。", en: "You must not enter this door." },
        { jp: "まだ食べてはいけません。", kana: "まだたべてはいけません。", en: "You must not eat yet." },
      ],
      practice: [
        {
          kind: "blank",
          text: "ここに車を止めて ___ いけません。(must not park)",
          blanks: ["は"],
        },
        {
          kind: "mcq",
          text: "A sign says 触ってはいけません。 It means…",
          options: ["Please touch", "Do not touch", "You may touch", "You touched"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “You must not swim here.”",
          tokens: ["ここで", "泳いで", "は", "いけません", "。"],
        },
        {
          kind: "mcq",
          text: "Casual version of 食べてはいけません:",
          options: ["食べていい", "食べちゃだめ", "食べないで", "食べましょう"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "〜てはいけません is a softer request than 〜ないでください.",
          answer: false,
          explain: "てはいけません is the STRONGER prohibition; ないでください is a softer plea.",
        },
      ],
    },
  ],
}
