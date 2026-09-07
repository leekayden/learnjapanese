import type { AuthoredUnit } from "../../types"

export const u05: AuthoredUnit = {
  level: "N5",
  order: 5,
  title: "Describing the world",
  titleJp: "ようしを言う",
  description:
    "The two adjective families (い and な) in all their tenses, degree words like とても and あまり, saying what you like with 〜が好きです, and what you want with 〜がほしいです.",
  vocab: [
    "大きい|おおきい",
    "小さい|ちいさい",
    "新しい|あたらしい",
    "古い|ふるい",
    "|いい",
    "悪い|わるい",
    "熱い|あつい",
    "冷たい|つめたい",
    "楽しい|たのしい",
    "|おいしい",
    "忙しい|いそがしい",
    "難しい|むずかしい",
    "易しい|やさしい",
    "高い|たかい",
    "安い|やすい",
    "元気|げんき",
    "静か|しずか",
    "|にぎやか",
    "有名|ゆうめい",
    "親切|しんせつ",
    "|きれい",
    "便利|べんり",
  ],
  kanji: ["大", "小", "高", "安", "新", "古", "白", "黒", "空"],
  exam: [
    {
      kind: "order",
      text: "Build: “This cake is very delicious.”",
      tokens: ["この", "ケーキ", "は", "とても", "おいしい", "です"],
    },
    {
      kind: "mcq",
      text: "Past polite of 静か (it WAS quiet):",
      options: ["静かいでした", "静かでした", "静かじゃありません", "静かくでした"],
      answer: 1,
      explain: "な-adjectives make the past with でした.",
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n5-u05-l01",
      title: "い-adjectives",
      titleJp: "いけいようし",
      grammarLabel: "い-adjectives",
      summary: "高い・安い・古い — and their negatives and pasts.",
      body: {
        meaning:
          "い-adjectives end in い and behave like verbs: they conjugate on their own. 高いです → 高くないです (not high) → 高かったです (was high) → 高くなかったです (wasn't high).",
        formation: [
          { pattern: "Ｎ は 〜い です", note: "この本は高いです This book is expensive." },
          { pattern: "〜く ない です", note: "高くないです not expensive" },
          { pattern: "〜かった です", note: "高かったです was expensive" },
          { pattern: "〜くなかった です", note: "高くなかったです wasn't expensive" },
        ],
        usage: [
          "Drop the final い and add くない/かった/くなかった: 楽しい→楽しくない.",
          "Before a noun they need nothing: 高い店 (an expensive shop).",
          "いい (good) is irregular: よくない, よかった, よくなかった.",
        ],
        pitfalls: [
          "✗ 高いでした → past is 高かったです.",
          "✗ 静かい — 静か has no い ending; it's a な-adjective (next lesson).",
        ],
        related: ["な-adjectives", "〜が (subjects)"],
      },
      examples: [
        { jp: "この車は高いです。", kana: "このくるまはたかいです。", en: "This car is expensive." },
        { jp: "昨日は暑くなかったです。", kana: "きのうはあつくなかったです。", en: "It wasn't hot yesterday." },
        { jp: "旅行は楽しかったです。", kana: "りょこうはたのしかったです。", en: "The trip was fun." },
        { jp: "この店は安くないです。", kana: "このみせはやすくないです。", en: "This shop isn't cheap." },
      ],
      practice: [
        {
          kind: "blank",
          text: "この本は難しく___です。(not difficult)",
          blanks: ["ない"],
        },
        {
          kind: "mcq",
          text: "Past polite of 楽しい:",
          options: ["楽しいでした", "楽しかったです", "楽しくでした", "楽しいかったです"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "“This coffee is hot.” →",
          options: ["このコーヒーは熱いです。", "このコーヒーは熱かったです。", "このコーヒーは熱いじゃありません。", "このコーヒーは暑いです。"],
          answer: 0,
          explain: "熱い = hot to the touch (things); 暑い = hot weather.",
        },
        {
          kind: "order",
          text: "Build: “That shop wasn't cheap.”",
          tokens: ["あの", "店", "は", "安く", "なかった", "です"],
        },
        {
          kind: "tf",
          text: "いい becomes よかったです in the past.",
          answer: true,
          explain: "いい is irregular: よくない、よかった、よくなかった.",
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n5-u05-l02",
      title: "な-adjectives",
      titleJp: "なけいようし",
      grammarLabel: "な-adjectives",
      summary: "元気・静か・便利 — conjugate like nouns with な before nouns.",
      body: {
        meaning:
          "な-adjectives act like NOUNS: add です/じゃありません/でした for tense, and な when they modify a noun: 元気な人 (a healthy person), 静かな部屋 (a quiet room).",
        formation: [
          { pattern: "Ｎ は 〜 です", note: "田中さんは元気です Mr. Tanaka is well." },
          { pattern: "〜 じゃありません", note: "便利じゃありません not convenient" },
          { pattern: "〜 でした", note: "静かでした it was quiet" },
          { pattern: "〜な ＋ Noun", note: "有名な人 a famous person" },
        ],
        usage: [
          "きれい (pretty), 有名 (famous), 親切 (kind), 便利 (convenient) are all な-adjectives even though some end in い-sounds.",
          "Past negative: 静かじゃありませんでした (it wasn't quiet).",
        ],
        pitfalls: [
          "きれい and ゆうめい end in い but are な-adjectives — memorise the common ones.",
          "✗ 元気い人 → ✓ 元気な人.",
        ],
        related: ["い-adjectives", "〜じゃありません (Unit 2)"],
      },
      examples: [
        { jp: "この町はにぎやかです。", kana: "このまちはにぎやかです。", en: "This town is lively." },
        { jp: "図書館は静かでした。", kana: "としょかんはしずかでした。", en: "The library was quiet." },
        { jp: "この駅は便利じゃありません。", kana: "このえきはべんりじゃありません。", en: "This station isn't convenient." },
        { jp: "田中さんは親切な人です。", kana: "たなかさんはしんせつなひとです。", en: "Mr. Tanaka is a kind person." },
      ],
      practice: [
        {
          kind: "blank",
          text: "田中さんは有名 ___ 人です。(famous)",
          blanks: ["な"],
        },
        {
          kind: "mcq",
          text: "Which is a な-adjective?",
          options: ["高い", "静か", "古い", "楽しい"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “This room is not clean/pretty.”",
          tokens: ["この", "部屋", "は", "きれい", "じゃ", "ありません"],
        },
        {
          kind: "mcq",
          text: "Past polite of 便利 (it WAS convenient):",
          options: ["便利かったです", "便利でした", "便利くでした", "便利なでした"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "元気 before a noun is 元気な人.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n5-u05-l03",
      title: "Very, not very",
      titleJp: "とても・あまり",
      grammarLabel: "とても・あまり",
      summary: "Degree words: とても (very) with positives, あまり＋negative (not very).",
      body: {
        meaning:
          "Adverbs of degree sit BEFORE the adjective: とても高いです (very expensive). あまり and 全然 pair with NEGATIVES: あまり高くないです (not very expensive), 全然難しくないです (not difficult at all).",
        formation: [
          { pattern: "とても ＋ positive", note: "とてもおいしいです very tasty" },
          { pattern: "あまり ＋ negative", note: "あまり面白くないです not very interesting" },
          { pattern: "全然 ＋ negative", note: "全然熱くないです not hot at all" },
        ],
        usage: [
          "ちょっと also softens negatives: ちょっと難しいです (a little difficult).",
          "These adverbs also work with verbs later: あまり食べません (I don't eat much).",
        ],
        pitfalls: [
          "✗ あまり高いです — あまり needs a negative.",
          "全然 with a positive is casual-modern slang; stick to negatives at N5.",
        ],
        related: ["い-adjectives", "な-adjectives"],
      },
      examples: [
        { jp: "このケーキはとてもおいしいです。", kana: "このケーキはとてもおいしいです。", en: "This cake is very delicious." },
        { jp: "この本はあまり面白くないです。", kana: "このほんはあまりおもしろくないです。", en: "This book isn't very interesting." },
        { jp: "今日は全然寒くないです。", kana: "きょうはぜんぜんさむくないです。", en: "Today isn't cold at all." },
        { jp: "日本語はちょっと難しいです。", kana: "にほんごはちょっとむずかしいです。", en: "Japanese is a little difficult." },
      ],
      practice: [
        {
          kind: "blank",
          text: "この店は ___ 高くないです。(not very expensive)",
          blanks: ["あまり"],
        },
        {
          kind: "mcq",
          text: "Which sentence is correct?",
          options: ["全然高いです。", "あまり高いです。", "全然高くないです。", "あまりとても高いです。"],
          answer: 2,
        },
        {
          kind: "order",
          text: "Build: “This car is very expensive.”",
          tokens: ["この", "車", "は", "とても", "高い", "です"],
        },
        {
          kind: "mcq",
          text: "「ちょっと忙しいです。」 means…",
          options: ["I'm not busy.", "I'm very busy.", "I'm a little busy.", "I was busy."],
          answer: 2,
        },
        {
          kind: "tf",
          text: "あまり goes with positive adjectives.",
          answer: false,
          explain: "あまり must pair with a negative form.",
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n5-u05-l04",
      title: "Liking things",
      titleJp: "〜が好きです",
      grammarLabel: "〜が好きです",
      summary: "好き・嫌い・上手 mark the liked thing with が.",
      body: {
        meaning:
          "好き (like), 嫌い (dislike), 上手 (good at) are な-adjectives, but the THOE you like takes が: 音楽が好きです (I like music). Add は for the person: 私は犬が好きです.",
        formation: [
          { pattern: "Ｎ は Ｘ が 好きです", note: "私は猫が好きです I like cats." },
          { pattern: "Ｎ は Ｘ が 嫌いです", note: "私は雨が嫌いです I dislike rain." },
          { pattern: "Ｎ は Ｘ が 上手です", note: "田中さんは料理が上手です good at cooking" },
        ],
        usage: [
          "Verb-likes use the dictionary form + の: 映画を見るのが好きです (I like watching movies) — Unit 9 grammar, recognise for now.",
          "大好き (love) and 大嫌い (hate) intensify.",
        ],
        pitfalls: [
          "✗ 猫は好きです for “I like cats” — the thing liked takes が (猫が好きです); 猫は好きです sounds like contrasting.",
          "好きです is a feeling about SOMETHING — a bare 好きです without context means “I like it”.",
        ],
        related: ["な-adjectives", "〜がほしいです"],
      },
      examples: [
        { jp: "私は日本語が好きです。", kana: "わたしはにほんごがすきです。", en: "I like Japanese." },
        { jp: "田中さんは魚が嫌いです。", kana: "たなかさんはさかながきらいです。", en: "Mr. Tanaka dislikes fish." },
        { jp: "妹は歌が上手です。", kana: "いもうとはうたがじょうずです。", en: "My little sister is good at singing." },
        { jp: "私は犬も猫も大好きです。", kana: "わたしはいぬもねこもだいすきです。", en: "I love both dogs and cats." },
      ],
      practice: [
        {
          kind: "blank",
          text: "私は音楽 ___ 好きです。",
          blanks: ["が"],
        },
        {
          kind: "mcq",
          text: "“Mr. Tanaka is bad at cooking” uses…",
          options: ["上手です", "下手です", "好きです", "嫌いです"],
          answer: 1,
          explain: "下手 (へた) is the opposite of 上手.",
        },
        {
          kind: "order",
          text: "Build: “I like this shop.”",
          tokens: ["私", "は", "この", "店", "が", "好きです"],
        },
        {
          kind: "mcq",
          text: "「大好き」 means…",
          options: ["a little like", "like", "love / really like", "dislike"],
          answer: 2,
        },
        {
          kind: "tf",
          text: "In 私は犬が好きです, the dog is marked with を.",
          answer: false,
          explain: "The felt thing takes が with 好き.",
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n5-u05-l05",
      title: "Wanting things",
      titleJp: "〜がほしいです",
      grammarLabel: "〜がほしいです",
      summary: "ほしい expresses wanting an object: 新しい車がほしいです.",
      body: {
        meaning:
          "ほしい (want) is an い-adjective about a THING you want, marked with が: 新しい傘がほしいです (I want a new umbrella). To want to DO something, use 〜たい (Unit 9).",
        formation: [
          { pattern: "Ｎ が ほしいです", note: "お金がほしいです I want money." },
          { pattern: "Ｎ が ほしくないです", note: "negative: I don't want" },
          { pattern: "Ｎ が ほしかったです", note: "past: I wanted" },
        ],
        usage: [
          "ほしい expresses YOUR want; asking about others directly is indirect in Japanese — どんな物がほしいですか is fine.",
          "Casual: 新しい携帯がほしい！ Polite keeps です.",
        ],
        pitfalls: [
          "ほしい takes が, not を: ✗ 車をほしいです.",
          "Don't use ほしい for actions — that's 〜たいです (食べたい = want to eat), taught in Unit 9.",
        ],
        related: ["い-adjectives", "〜たいです (Unit 9)"],
      },
      examples: [
        { jp: "新しい車がほしいです。", kana: "あたらしいくるまがほしいです。", en: "I want a new car." },
        { jp: "私は何もほしくないです。", kana: "わたしはなにもほしくないです。", en: "I don't want anything." },
        { jp: "誕生日にカメラがほしかったです。", kana: "たんじょうびにカメラがほしかったです。", en: "I wanted a camera for my birthday." },
        { jp: "水がほしいです。", kana: "みずがほしいです。", en: "I want (some) water." },
      ],
      practice: [
        {
          kind: "blank",
          text: "私は新しい靴 ___ ほしいです。",
          blanks: ["が"],
        },
        {
          kind: "mcq",
          text: "“I don't want anything.” →",
          options: ["何もほしいです。", "何もほしくないです。", "何がほしいですか。", "何でもほしいです。"],
          answer: 1,
        },
        {
          kind: "order",
          text: "Build: “I want money.”",
          tokens: ["お金", "が", "ほしい", "です", "。"],
        },
        {
          kind: "mcq",
          text: "To say “I want to eat cake”, you will later use…",
          options: ["ケーキがほしいです", "ケーキを食べたいです", "ケーキが食べほしいです", "ケーキを好きです"],
          answer: 1,
          explain: "ほしい is for THINGS; 〜たい is for ACTIONS.",
        },
        {
          kind: "tf",
          text: "ほしい is an い-adjective.",
          answer: true,
          explain: "It conjugates: ほしくない、ほしかった.",
        },
      ],
    },
  ],
}
