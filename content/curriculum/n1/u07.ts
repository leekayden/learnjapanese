import type { AuthoredUnit } from "../../types"

export const u07: AuthoredUnit = {
  level: "N1", order: 7, title: "In the blink of an eye", titleJp: "しゅんかん の れんぞく",
  description: "Rapid succession: 〜が早いか (no sooner), 〜や否や (as soon as), 〜そばから (as fast as), 〜次第 (review).",
  vocab: ["爆発|ばくはつ", "炎|ほのお", "消す|けす", "泣く|なく", "笑う|わらう", "|メモ", "忘れる|わすれる", "消しゴム|けしゴム", "直す|なおす", "掃除|そうじ", "汚す|よごす", "散らかる|ちらかる", "|ベル", "鳴る|なる", "飛び出す|とびだす", "駆け出す|かけだす"],
  kanji: ["爆", "発", "炎", "消", "浜", "散", "鳴", "駆", "泥"],
  exam: [
    { kind: "mcq", text: "「彼はベッドに入るが早いか、眠ってしまった。」 means…", options: ["He couldn't sleep.", "No sooner was he in bed than he fell asleep.", "He slept before going to bed.", "He stayed up all night."], answer: 1 },
    { kind: "mcq", text: "「子どもは掃除するそばから部屋を散らかす。」 means…", options: ["The child cleans the room.", "The child messes up the room as fast as it's cleaned.", "The child never cleans.", "Cleaning is forbidden."], answer: 1 },
  ],
  lessons: [
    { slug: "n1-u07-l01", title: "No sooner than: 〜が早いか", titleJp: "〜が早いか", grammarLabel: "〜が早いか",
      summary: "が早いか = the moment X, Y: ベッドに入るが早いか眠った.",
      body: { meaning: "Verb る/た + が早いか = NO SOONER X THAN Y (startling speed): 鳴るが早いか飛び出した.", formation: [{ pattern: "Verb る ＋ が早いか", note: "終わるが早いか" }, { pattern: "Verb た ＋ が早いか", note: "近づいたが早いか" }], usage: ["Written, dramatic narration.", "Y is rapid/automatic."], pitfalls: ["Rare in conversation — literary.", "Both verbs: same subject usually."], related: ["〜や否や", "〜たとたん (N2)"] },
      examples: [
        { jp: "彼はベッドに入るが早いか、眠ってしまった。", kana: "かれはベッドにはいるがはやいか、ねむってしまった。", en: "No sooner was he in bed than he fell asleep." },
        { jp: "火災報知器が鳴るが早いか、客は逃げ出した。", kana: "かさいほうちきがなるがはやいか、きゃくはにげだした。", en: "No sooner did the alarm ring than the guests fled." },
        { jp: "ゴールの合図が近づいたが早いか、彼は走り出した。", kana: "ゴールのあいずがちかづいたがはやいか、かれははしりだした。", en: "The moment the finish approached, he bolted." },
      ],
      practice: [
        { kind: "blank", text: "彼はベッドに入る___、眠ってしまった。", blanks: ["が早いか"] },
        { kind: "mcq", text: "が早いか is…", options: ["conversational", "literary", "imperative", "humble"], answer: 1 },
        { kind: "tf", text: "It usually takes dictionary or past form before が早いか.", answer: true },
      ],
    },
    { slug: "n1-u07-l02", title: "As soon as: 〜や否や", titleJp: "〜や否や", grammarLabel: "〜や否や",
      summary: "や否や = the instant X: 空港に着くや否や、事故のニュースが流れた.",
      body: { meaning: "Verb る + や否や(やいなや) = THE INSTANT X, Y: 空港に着くや否や、彼は空港へ走った.", formation: [{ pattern: "Verb る ＋ や否や", note: "着くや否や" }, { pattern: "〜やいなや", note: "kana variant" }], usage: ["News, narration.", "Y follows almost instantly."], pitfalls: ["X is usually a completed short action.", "No negative Y."], related: ["〜が早いか", "〜次第 (N2)"] },
      examples: [
        { jp: "空港に着くや否や、彼は電話をかけた。", kana: "くうこうにつくやいなや、かれはでんわをかけた。", en: "The instant he landed, he made a call." },
        { jp: "先生が教室を出るや否や、生徒たちは騒ぎ出した。", kana: "せんせいがきょうしつをでるやいなや、せいとはざわぎだした。", en: "The moment the teacher left, the class erupted." },
        { jp: "イベントが始まるや否や、席は埋まった。", kana: "イベントがはじまるやいなや、せきはうまった。", en: "As soon as the event began, the seats filled." },
      ],
      practice: [
        { kind: "blank", text: "空港に着く___、彼は電話をかけた。", blanks: ["や否や"] },
        { kind: "mcq", text: "や否や X is usually…", options: ["a long process", "a short completed action", "a plan", "a wish"], answer: 1 },
        { kind: "tf", text: "やいなや is the kana spelling.", answer: true },
      ],
    },
    { slug: "n1-u07-l03", title: "As fast as: 〜そばから", titleJp: "〜そばから", grammarLabel: "〜そばから",
      summary: "そばから = undone as fast as done (frustration): 忘れるそばから.",
      body: { meaning: "Verb る/た + そばから = Y KEEPS UNDOING X AS FAST AS IT'S DONE (frustration): 片付けるそばから散らかされる.", formation: [{ pattern: "Verb る ＋ そばから", note: "忘れるそばから" }, { pattern: "Verb た ＋ そばから", note: "洗ったそばから" }], usage: ["Frustration, repeated cycles.", "Both verbs recur."], pitfalls: ["Speaker's annoyance is implied.", "Not one-off events."], related: ["〜たびに (N3)", "〜ばかりだ (N2)"] },
      examples: [
        { jp: "教えるそばから、忘れてしまう。", kana: "おしえるそばから、わすれてしまう。", en: "They forget things as fast as I teach them." },
        { jp: "片付けるそばから、子どもが散らかす。", kana: "かたづけるそばから、こどもがちらかす。", en: "The kid messes the room up as fast as I tidy it." },
        { jp: "洗っても洗ったそばから、皿が増えていく。", kana: "あらってもあらったそばから、さらがふえていく。", en: "No matter how I wash, the dishes keep piling up." },
      ],
      practice: [
        { kind: "blank", text: "片付ける___、子どもが散らかす。", blanks: ["そばから"] },
        { kind: "mcq", text: "そばから implies the speaker's…", options: ["joy", "frustration", "hunger", "faith"], answer: 1 },
        { kind: "tf", text: "そばから describes repeated cycles.", answer: true },
      ],
    },
    { slug: "n1-u07-l04", title: "Rapid sequence toolkit", titleJp: "まとめ", grammarLabel: "review",
      summary: "が早いか・や否や・そばから — all mean 'immediately', different flavors.",
      body: { meaning: "Three 'instant' markers: が早いか (dramatic one-off), や否や (news-style), そばから (recurring frustration).",
        formation: [
          { pattern: "〜が早いか", note: "dramatic instant" },
          { pattern: "〜や否や", note: "newsy instant" },
          { pattern: "〜そばから", note: "as fast as (repeated)" },
        ],
        usage: ["Choose by register and repetition.", "All take plain forms before them."],
        pitfalls: ["そばから is the only one for repeated cycles.", "が早いか is rare in speech."],
        related: ["lessons 1-3", "〜たとたん (N2)"] },
      examples: [
        { jp: "彼はペンを取るが早いか、書き始めた。", kana: "かれはペンをとるがはやいか、かきはじめた。", en: "No sooner had he picked up the pen than he began writing." },
        { jp: "情報が公表されるや否や、株価が急落した。", kana: "じょうほうがこうひょうされるやいなや、かぶかがきゅうらくした。", en: "The instant the news broke, the stock price plunged." },
        { jp: "直すそばから、データが壊れていく。", kana: "なおすそばから、データがこわれていく。", en: "The data keeps breaking as fast as I fix it." },
      ],
      practice: [
        { kind: "mcq", text: "Repeated cycles →", options: ["が早いか", "そばから", "や否や", "たとたん"], answer: 1 },
        { kind: "mcq", text: "Dramatic one-off narration →", options: ["が早いか", "そばから", "たびに", "ごとに"], answer: 0 },
        { kind: "tf", text: "や否や fits news reporting.", answer: true },
      ],
    },
  ],
}
