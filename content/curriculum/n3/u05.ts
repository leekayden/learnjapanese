import type { AuthoredUnit } from "../../types"

export const u05: AuthoredUnit = {
  level: "N3",
  order: 5,
  title: "Every time, the moment, right in the middle",
  titleJp: "ときの ことば",
  description:
    "Frequency and timing: 〜たびに (every time), 〜たとたん (the moment), 〜最中に (right in the middle), and 〜っぱなし (left as is).",
  vocab: [
    "旅行|りょこう",
    "写真|しゃしん",
    "料理|りょうり",
    "噂|うわさ",
    "電話|でんわ",
    "風呂|ふろ",
    "入る|はいる",
    "開ける|あける",
    "消す|けす",
    "聞く|きく",
    "花|はな",
  ],
  kanji: ["旅", "噂", "覚", "最", "中", "既", "目", "瞬", "問"],
  exam: [
    {
      kind: "mcq",
      text: "「彼の顔を見るたびに、笑ってしまう。」 means…",
      options: ["I saw his face once.", "Every time I see his face, I laugh.", "I laugh before seeing him.", "I can't see his face."],
      answer: 1,
    },
    {
      kind: "mcq",
      text: "「お風呂に入っている最中に電話が鳴った。」 — the phone rang…",
      options: ["before the bath", "right in the middle of the bath", "after the bath", "instead of a bath"],
      answer: 1,
    },
  ],
  lessons: [
    // ------------------------------------------------------------------ L1
    {
      slug: "n3-u05-l01",
      title: "Every time: 〜たびに",
      titleJp: "〜たびに",
      grammarLabel: "〜たびに",
      summary: "いっしょに: 日本に来るたびに、新しい発見があります.",
      body: {
        meaning:
          "Verb dictionary form + たびに means EVERY TIME an event occurs, the same result follows: 会うたびに彼は写真を見せる (Every time we meet, he shows photos).",
        formation: [
          { pattern: "Verb dictionary ＋ たびに", note: "会うたびに" },
          { pattern: "Noun の ＋ たびに", note: "旅行のたびに every trip" },
        ],
        usage: [
          "Result is habitual/repeated — not one-off.",
          "Noun uses の: 試験のたびに緊張する.",
        ],
        pitfalls: [
          "✗ た-form: must be dictionary form (会ったたびに ✗).",
          "One-time events use とき or たとたん.",
        ],
        related: ["〜につけ (similar)", "〜と (automatic, N4)"],
      },
      examples: [
        { jp: "日本に来るたびに、新しい発見があります。", kana: "にほんにくるたびに、あたらしいはっけんがあります。", en: "Every time I come to Japan, there's a new discovery." },
        { jp: "彼の顔を見るたびに、笑ってしまう。", kana: "かれのかおをみるたびに、わらってしまう。", en: "Every time I see his face, I laugh." },
        { jp: "試験のたびに、緊張する。", kana: "しけんのたびに、きんちょうする。", en: "I get nervous every time there's an exam." },
        { jp: "この曲を聞くたびに、故郷を思い出す。", kana: "このきょくをきくたびに、こきょうをおもいだす。", en: "Every time I hear this song, I remember home." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “Every time I come to Japan, there's a discovery.”",
          tokens: ["日本", "に", "来る", "たびに", "新しい", "発見", "があります"],
        },
        {
          kind: "mcq",
          text: "たびに attaches to…",
          options: ["た-form", "dictionary form", "te-form", "ない-form"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "試験の___に、緊張します。(every exam)",
          blanks: ["たび"],
        },
        {
          kind: "mcq",
          text: "The result of たびに is…",
          options: ["one-off", "repeated", "rare", "future only"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "Nouns take の before たびに.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L2
    {
      slug: "n3-u05-l02",
      title: "The moment: 〜たとたん",
      titleJp: "〜たとたん",
      grammarLabel: "〜たとたん",
      summary: "Instant result: ドアを開けたとたん、猫が出てきた.",
      body: {
        meaning:
          "た-form + とたん（に） means B happened THE INSTANT A completed (usually unexpected): 立ち上がったとたん、めまいがしました.",
        formation: [
          { pattern: "Verb た ＋ とたん（に）", note: "the moment" },
          { pattern: "Noun の ＋ とたん", note: "出発のとたん" },
        ],
        usage: [
          "B is surprising/unplanned — not deliberate actions.",
          "Past-tense B common: 〜とたんに〜ました.",
        ],
        pitfalls: [
          "✗ B planned: 行ったとたん勉強します is wrong (use たら).",
          "Only た-form before とたん.",
        ],
        related: ["〜たら (sequence)", "〜ばかり・〜ところ"],
      },
      examples: [
        { jp: "ドアを開けたとたん、猫が出てきた。", kana: "ドアをあけたとたん、ねこがでてきた。", en: "The moment I opened the door, a cat ran out." },
        { jp: "立ち上がったとたん、めまいがしました。", kana: "たちあがったとたん、めまいがしました。", en: "The moment I stood up, I felt dizzy." },
        { jp: "家を出たとたんに、雨が降り出した。", kana: "いえをでたとたんに、あめがふりだした。", en: "The moment I left home, it started raining." },
        { jp: "電車が止まったとたん、みんな立ち上がった。", kana: "でんしゃがとまったとたん、みんなたちあがった。", en: "The moment the train stopped, everyone stood up." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “The moment I opened the door, a cat came out.”",
          tokens: ["ドア", "を", "開けた", "とたん", "猫", "が", "出てきた"],
        },
        {
          kind: "mcq",
          text: "とたん attaches to…",
          options: ["dictionary form", "た-form", "te-form", "ます-stem"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "家を出た___に、雨が降り出した。(the moment)",
          blanks: ["とたん"],
        },
        {
          kind: "mcq",
          text: "B after たとたん is usually…",
          options: ["planned", "unexpected", "polite", "habitual"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "Deliberate B actions don't fit たとたん.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L3
    {
      slug: "n3-u05-l03",
      title: "Right in the middle: 〜最中に",
      titleJp: "〜さいちゅうに",
      grammarLabel: "〜最中に",
      summary: "最中に = while it's actively happening: 会議の最中に電話が鳴った.",
      body: {
        meaning:
          "Verb ている/noun + 最中に = something interrupts at the PEAK moment: 食事の最中に、停電した (right in the middle of dinner, the power went).",
        formation: [
          { pattern: "Verb ている ＋ 最中に", note: "会議をしている最中に" },
          { pattern: "Noun の ＋ 最中に", note: "試合の最中に" },
        ],
        usage: [
          "Interruption nuance stronger than 間に.",
          "Formal variant: 〜最中において.",
        ],
        pitfalls: [
          "Verb must be ている form or noun+の.",
          "最中 with instant verbs (着く) is odd.",
        ],
        related: ["〜間に (N4)", "〜たとたん"],
      },
      examples: [
        { jp: "会議の最中に、電話が鳴った。", kana: "かいぎのさいちゅうに、でんわがなった。", en: "Right in the middle of the meeting, the phone rang." },
        { jp: "お風呂に入っている最中に、停電しました。", kana: "おふろにはいっているさいちゅうに、ていでんしました。", en: "Right in the middle of my bath, the power went out." },
        { jp: "試合の最中に雨が降り出した。", kana: "しあいのさいちゅうにあめがふりだした。", en: "It started raining in the middle of the game." },
        { jp: "料理をしている最中に友達が来た。", kana: "りょうりをしているさいちゅうにともだちがきた。", en: "A friend came right in the middle of my cooking." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “The phone rang in the middle of the meeting.”",
          tokens: ["会議", "の", "最中", "に", "電話", "が", "鳴った"],
        },
        {
          kind: "mcq",
          text: "最中に precedes…",
          options: ["plain form", "ている / noun+の", "た-form", "potential"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "お風呂に入っている___に、停電しました。(right in the middle)",
          blanks: ["最中"],
        },
        {
          kind: "mcq",
          text: "最中に implies the interrupting event was…",
          options: ["expected", "bad timing", "planned", "repeated"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "最中に is stronger timing emphasis than 間に.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L4
    {
      slug: "n3-u05-l04",
      title: "Left as is: 〜っぱなし",
      titleJp: "〜っぱなし",
      grammarLabel: "〜っぱなし",
      summary: "っぱなし = keep (something) as is: 水を出しっぱなしにする.",
      body: {
        meaning:
          "Verb ます-stem + っぱなし = an action/state left ongoing or unattended: 窓を開けっ放しで寝ました (slept with the window open).",
        formation: [
          { pattern: "Verb ます-stem ＋ っぱなし", note: "つけっぱなし left on" },
          { pattern: "〜っぱなしの ＋ Noun", note: "開けっぱなしの窓" },
          { pattern: "〜っぱなしにする／になっている", note: "leave it / it is left" },
        ],
        usage: [
          "Negative connotation usually (wasteful, sloppy).",
          "立ちっぱなし・座りっぱなし (postures) are neutral.",
        ],
        pitfalls: [
          "Only ます-stem (食べっぱななし ✗ — no, 食べっぱなし is fine actually but context: usually continuous states).",
          "Not for completed one-off actions.",
        ],
        related: ["〜ている", "〜まま (N3)"],
      },
      examples: [
        { jp: "水を出しっぱなしにして、出かけてしまった。", kana: "みずをだしっぱなしにして、でかけてしまった。", en: "I left the water running and went out." },
        { jp: "エアコンをつけっぱなしにします。", kana: "エアコンをつけっぱなしにします。", en: "I'll leave the AC on." },
        { jp: "昨日は立ちっぱなしだった。", kana: "きのうはたちっぱなしだった。", en: "Yesterday I was standing the whole time." },
        { jp: "開けっ放しの窓から風が入る。", kana: "あけっぱなしのまどからかぜがはいる。", en: "Wind comes in through the window left open." },
      ],
      practice: [
        {
          kind: "order",
          text: "Build: “I left the water running.”",
          tokens: ["水", "を", "出し", "っぱなしに", "しました", "。"],
        },
        {
          kind: "mcq",
          text: "っぱなし attaches to…",
          options: ["た-form", "ます-stem", "te-form", "plain form"],
          answer: 1,
        },
        {
          kind: "blank",
          text: "エアコンをつけ___にします。(leave on)",
          blanks: ["っぱなし"],
        },
        {
          kind: "mcq",
          text: "っぱなし usually implies…",
          options: ["careful planning", "neglect/continuation", "completion", "politeness"],
          answer: 1,
        },
        {
          kind: "tf",
          text: "立ちっぱなし (standing the whole time) is a common use.",
          answer: true,
        },
      ],
    },
    // ------------------------------------------------------------------ L5
    {
      slug: "n3-u05-l05",
      title: "Timing toolbox",
      titleJp: "じかんの まとめ",
      grammarLabel: "timing summary",
      summary: "たびに (every time), とたん (instant), 最中に (mid-event), っぱなし (left on) — pick by rhythm.",
      body: {
        meaning:
          "Four timing tools: repeated (たびに), instant-unexpected (たとたん), interrupted-mid (最中に), left-running (っぱなし).",
        formation: [
          { pattern: "Dictionary ＋ たびに", note: "frequency" },
          { pattern: "た ＋ とたん（に）", note: "instant" },
          { pattern: "ている/の ＋ 最中に", note: "mid-point" },
          { pattern: "ます-stem ＋ っぱなし", note: "left as is" },
        ],
        usage: [
          "Ask: how often? how sudden? how interrupted? how long left?",
          "たとたん/最中に both signal surprise.",
        ],
        pitfalls: [
          "たびに vs と: たびに = every occurrence; と = automatic single law.",
          "っぱなし is a state, たとたん is an event.",
        ],
        related: ["この unit の lessons 1–4"],
      },
      examples: [
        { jp: "朝起きるたびに、コーヒーを飲みます。", kana: "あさおきるたびに、コーヒーをのみます。", en: "Every morning when I wake up, I drink coffee." },
        { jp: "電気が消えたとたん、悲鳴が聞こえた。", kana: "でんきがきえたとたん、ひめいがきこえた。", en: "The moment the light went out, a scream was heard." },
        { jp: "食事の最中に、地震があった。", kana: "しょくじのさいちゅうに、じしんがあった。", en: "There was an earthquake in the middle of dinner." },
        { jp: "彼は遅刻しそうになっても、走らないまま来た。", kana: "かれはちこくしそうになっても、はしらないままきた。", en: "Even about to be late, he came without running.", note: "〜まま preview" },
      ],
      practice: [
        {
          kind: "mcq",
          text: "“Every time it rains, the roof leaks” →",
          options: ["雨が降ったとたん", "雨が降るたびに", "雨の最中に", "雨っぱなし"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "“The moment I pressed the button” →",
          options: ["押すたびに", "押したとたん", "押しppy最中に", "押しっぱなし"],
          answer: 1,
        },
        {
          kind: "mcq",
          text: "“In the middle of the concert” →",
          options: ["コンサートのたびに", "コンサートしたとたん", "コンサートの最中に", "コンサートっぱなし"],
          answer: 2,
        },
        {
          kind: "mcq",
          text: "“Left the tap running” →",
          options: ["蛇口をひねったとたん", "蛇口をひねるたびに", "蛇口をひねりっぱなし", "蛇口の最中"],
          answer: 2,
        },
        {
          kind: "tf",
          text: "Each tool has its own tempo.",
          answer: true,
        },
      ],
    },
  ],
}
