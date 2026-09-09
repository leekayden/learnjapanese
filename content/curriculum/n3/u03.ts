import type { AuthoredUnit } from "../../types"

export const u03: AuthoredUnit = {
  level: "N3",
  order: 3,
  title: "Depending, comparing, facing",
  titleJp: "によって・にとって・に対して",
  description:
    "によって (by/depending on), にとって (from the viewpoint of), に対して (toward/contrasting), and ついでに (on the way).",
  vocab: [
    "習慣|しゅうかん",
    "国|くに",
    "違う|ちがう",
    "意見|いけん",
    "温度|おんど",
    "変化|へんか",
    "態度|たいど",
    "客|きゃく",
    "教授|きょうじゅ",
    "丁寧|ていねい",
    "財産|ざいさん",
    "健康|けんこう",
    "拡大|かくだい",
  ],
  kanji: ["習", "違", "温", "態", "客", "授", "丁", "寧", "財"],
  exam: [
    {
      kind: "mcq",
      text: "「人によって、好きな音楽は違います。」 means…",
      options: ["Music changes people.", "Tastes in music differ from person to person.", "Music makes people meet.", "People make music."],
      answer: 1,
    },
    {
      kind: "mcq",
      text: "「私にとって、家族は一番大切です。」 — 私にとって marks…",
      options: ["the doer", "whose viewpoint", "the place", "the time"],
      answer: 1,
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n3-u03-l01",
      title: "Depending on / by means of: 〜によって",
      titleJp: "〜によって",
      grammarLabel: "〜によって",
      summary: "人によって違います (differs by person); 車によって来ます (come by car — formal).",
      body: {
        meaning:
          "Noun + によって has three jobs: (1) differences — 人によって違う (varies by person); (2) means — 問題を技術によって解決 (formal “by means of”); (3) agent in passives — この歌はビートルズによって作られた.",
        formation: [
          { pattern: "Noun ＋ によって（は）", note: "differences: 国によって习惯が違う" },
          { pattern: "Means (formal)", note: "メールによって連絡する" },
          { pattern: "Passive agent", note: "発明によって社会が変わった" },
        ],
        usage: [
          "〜によっては = in some cases: 場合によっては中止です.",
          "More formal than で for means.",
        ],
        pitfalls: [
          "Don't drop よって vs よると: よると cites, よって varies/means.",
          "Place-dependent is 場所によって, not によって場所.",
        ],
        related: ["〜によると (Unit 2)", "passive agent に"],
      },
      examples: [
        { jp: "人によって、好きな音楽は違います。", kana: "ひとによって、すきなおんがくはちがいます。", en: "Tastes in music differ from person to person." },
        { jp: "国によって、文化も習慣も違います。", kana: "くにによって、ぶんかもしゅうかんも違います。", en: "Culture and customs differ by country." },
        { jp: "この寺は有名な僧によって建てられました。", kana: "このてらはゆうめいなそうによってたてられました。", en: "This temple was built by a famous monk." },
        { jp: "場合によっては、延期します。", kana: "ばあいによっては、えんきします。", en: "In some cases, we'll postpone." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “Tastes differ by person.”",
          tokens: ["人", "によって", "味", "は", "違います", "。"],
        },
        {
          kind: "mcq",
          text: "“In some cases” →",
          options: ["場合によって", "場合によると", "場合のため", "场合ように"],
          answer: 0,
        },
        {
          kind: "blank",
          text: "国___によって、習慣も違います。(by country)",
          blanks: [""],
        },
        {
          kind: "mcq",
          text: "Passive agent (formal) uses…",
          options: ["によると", "によって", "について", "にとって"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "によって can mark the means of doing something.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n3-u03-l02",
      title: "From the viewpoint of: 〜にとって",
      titleJp: "〜にとって",
      grammarLabel: "〜にとって",
      summary: "Viewpoint evaluation: 私にとって、家族は一番大切です.",
      body: {
        meaning:
          "Noun + にとって frames an evaluation FROM someone's standpoint: にとって、健康が何もできない (For him, health matters most). The judged thing takes が/は.",
        formation: [
          { pattern: "Person ＋ にとって", note: "for me/him" },
          { pattern: "Group ＋ にとって", note: "for students / for Japan" },
          { pattern: "〜にとって の ＋ Noun", note: "私にとっての宝物" },
        ],
        usage: [
          "The evaluation verb/adjective usually follows: 大切だ・難しい・嬉しい.",
          "とって casual contraction in speech.",
        ],
        pitfalls: [
          "にとって is a PERSON/GROUP's viewpoint — not events: ✗ 試験にとって.",
          "に対して contrasts behaviour; にとって evaluates worth.",
        ],
        related: ["〜として (role)", "〜に対して (next lesson)"],
      },
      examples: [
        { jp: "私にとって、家族は一番大切です。", kana: "わたしにとって、かぞくはいちばんたいせつです。", en: "To me, family is the most important." },
        { jp: "学生にとって、この辞書は分かりやすい。", kana: "がくせいにとって、このじしょはわかりやすい。", en: "For students, this dictionary is easy to understand." },
        { jp: "彼にとって、日本は第二の故郷です。", kana: "かれにとって、にほんはだいにのこきょうです。", en: "For him, Japan is his second home." },
        { jp: "山頂までの道は、初心者にとって難しい。", kana: "さんちょうまでのみちは、しょしんしゃにとってむずかしい。", en: "The trail to the summit is hard for beginners." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “To me, family is the most important.”",
          tokens: ["私", "にとって", "家族", "は", "一番", "大切です", "。"],
        },
        {
          kind: "blank",
          text: "学生___にとって、この本は高い。(for students)",
          blanks: [""],
        },
        {
          kind: "mcq",
          text: "にとって follows…",
          options: ["verbs", "persons/groups", "adjectives", "times"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Which evaluation follows にとって?",
          options: ["行きます", "大切です", "ください", "らしい"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "Events (like 試験) don't usually take にとって.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n3-u03-l03",
      title: "Toward / contrasting: 〜に対して",
      titleJp: "〜に対して",
      grammarLabel: "〜に対して",
      summary: "Treating someone some way (客に対して丁寧), and contrast (弟に対して、兄は静かだ).",
      body: {
        meaning:
          "Noun + に対して = (1) directed AT: お客様に対して丁寧に話す (speak politely to customers); (2) IN CONTRAST: 兄に対して、弟はよく話す.",
        formation: [
          { pattern: "Noun ＋ に対して", note: "toward / against" },
          { pattern: "Noun ＋ に対する ＋ Noun", note: "客に対する態度" },
          { pattern: "Aに対して、B", note: "contrast pair" },
        ],
        usage: [
          "Attitude/behaviour toward a target.",
          "Contrast between two parallel things.",
        ],
        pitfalls: [
          "に対する takes の for noun modification (に対する＋Noun, not に対しての).",
          "Contrast version often pairs with、and a different trait.",
        ],
        related: ["にとって (viewpoint)", "と比べて (Unit 6)"],
      },
      examples: [
        { jp: "お客様に対して、丁寧な言葉を使います。", kana: "おきゃくさまに対して、ていねいなことばをつかいます。", en: "We use polite language toward customers." },
        { jp: "兄はスポーツが好きだ。それに対して、弟は音楽が好きだ。", kana: "あにはスポーツがすきだ。それに対して、おとうとはおんがくがすきだ。", en: "My brother likes sports. In contrast, my younger brother likes music." },
        { jp: "彼は客に対する態度がとても良い。", kana: "かれはきゃくに対するたいどがとてもよい。", en: "His attitude toward customers is very good." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “Speak politely toward customers.”",
          tokens: ["お客様", "に対して", "丁寧に", "話します", "。"],
        },
        {
          kind: "blank",
          text: "客に対___の態度が良い。(toward customers)",
          blanks: ["する"],
        },
        {
          kind: "mcq",
          text: "Contrast usage pairs two…",
          options: ["times", "parallel items", "verbs only", "questions"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "Noun modification of に対する:",
          options: ["に対する本", "に対しての本", "に対本", "に対して本"],
          answer: 0,
        },
        {
          kind: "tf",
          text: "に対して can both direct action and contrast items.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n3-u03-l04",
      title: "While you're at it: 〜ついでに",
      titleJp: "〜ついでに",
      grammarLabel: "〜ついでに",
      summary: "ついでに = on the same trip/opportunity: 買い物のついでに、図書館に寄った.",
      body: {
        meaning:
          "Verb/noun の + ついでに means doing B while out for A (opportunistic): 買い物のついでに切手を買った. Not simultaneous actions — one trip, two stops.",
        formation: [
          { pattern: "Verb plain ＋ ついでに", note: "行くついでに" },
          { pattern: "Noun の ＋ ついでに", note: "旅行のついでに" },
        ],
        usage: [
          "A must be the main purpose; B the bonus.",
          "Different from ながら (simultaneous) and 間に (during).",
        ],
        pitfalls: [
          "✗ 音楽を聞くついでに走る — that's ながら.",
          " B should be lighter/quick compared to A.",
        ],
        related: ["〜ながら", "〜間に", "〜がてら (N1)"],
      },
      examples: [
        { jp: "買い物のついでに、図書館に寄りました。", kana: "かいもののついでに、としょかんによりました。", en: "While out shopping, I stopped by the library." },
        { jp: "东京へ出張に行くついでに、友人に会いました。", kana: "とうきょうへしゅっちょうにいくついでに、ゆうじんにあいました。", en: "On my business trip to Tokyo, I met a friend." },
        { jp: "洗濯するついでに、掃除もしました。", kana: "せんたくするついでに、そうじもしました。", en: "While doing laundry, I cleaned too." },
        { jp: "京都へ行ったついでに、お寺を見学しました。", kana: "きょうとへいったついでに、おてらをけんがくしました。", en: "Since I was in Kyoto anyway, I toured the temples." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “While shopping, I stopped by the library.”",
          tokens: ["買い物", "の", "ついでに", "図書館", "に", "寄りました", "。"],
        },
        {
          kind: "blank",
          text: "出張の___に、友人に会いました。(on the trip)",
          blanks: ["ついで"],
        },
        {
          kind: "mcq",
          text: "ついでに vs ながら:",
          options: ["same", "one trip vs simultaneous", "past vs future", "formal vs casual"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "ついでに attaches to…",
          options: ["te-form", "plain form / noun+の", "た-form only", "ます-stem"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "The main purpose comes before ついでに.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n3-u03-l05",
      title: "Comparing: 〜と比べて・〜比べ",
      titleJp: "〜とくらべて",
      grammarLabel: "〜と比べて",
      summary: "Noun + と比べて = compared with: 都会と比べて、田舎は静かです.",
      body: {
        meaning:
          "A + と比べて、B… compares A with B: 去年と比べて、物価が高くなりました. Also 比べる as a verb: 二つを比べます.",
        formation: [
          { pattern: "Noun ＋ と比べて", note: "compared with" },
          { pattern: "Noun ＋ に比べて", note: "same meaning, に variant" },
          { pattern: "〜と比べると／比べれば", note: "if you compare" },
        ],
        usage: [
          "Objective comparisons of price, size, taste, etc.",
          "Combines with adjectives: ずっと安い (much cheaper).",
        ],
        pitfalls: [
          "と and に both work before 比べて — pick one.",
          "Don't confuse with に対して (contrast of traits, not degree).",
        ],
        related: ["〜に対して", "いちばん・のほうが (N5)"],
      },
      examples: [
        { jp: "都会と比べて、田舎は空気がきれいです。", kana: "とかいとくらべて、いなかはくうきがきれいです。", en: "Compared with cities, the countryside has clean air." },
        { jp: "去年に比べて、物価が高くなりました。", kana: "きょねんにくらべて、ぶっかがたかくなりました。", en: "Compared with last year, prices have risen." },
        { jp: "兄と比べると、弟は背が低い。", kana: "あにとくらべると、おとうとはせがひくい。", en: "Compared with his brother, he's short." },
        { jp: "二つの案を比べてみましょう。", kana: "ふたつのあんをくらべてみましょう。", en: "Let's compare the two plans." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “Compared with last year, prices rose.”",
          tokens: ["去年", "と比べて", "物価", "が", "高く", "なりました", "。"],
        },
        {
          kind: "mcq",
          text: "Both ___ and ___ work before 比べて:",
          options: ["に / と", "が / を", "で / に", "は / が"],
          answer: 0,
        },
        {
          kind: "blank",
          text: "兄と___と、弟は背が高い。(compared with)",
          blanks: ["比べ"],
        },
        {
          kind: "mcq",
          text: "比べて compares…",
          options: ["roles", "degree/quality", "topics", "sources"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "〜と比べると can introduce a comparison clause.",
          answer: true,
        },
      ],
    },
  ],
}
