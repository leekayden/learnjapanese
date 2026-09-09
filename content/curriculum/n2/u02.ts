import type { AuthoredUnit } from "../../types"

export const u02: AuthoredUnit = {
  level: "N2", order: 2, title: "Range and scope", titleJp: "はんい と むれん",
  description: "Ranges and conditions: 〜から〜にかけて (from…to), 〜にわたって (spanning), 〜を問わず (regardless of), 〜において (in/at formal).",
  vocab: ["地域|ちいき", "台風|たいふう", "被害|ひがい", "記録|きろく", "企業|きぎょう", "海外|かいがい", "製品|せいひん", "販売|はんばい", "不況|ふきょう", "影響|えいきょう", "発展|はってん", "建築|けんちく", "様式|ようしき", "会議|かいぎ", "場所|ばしょ", "世界|せかい"],
  kanji: ["域", "台", "風", "被", "害", "録", "販", "況", "様"],
  exam: [
    { kind: "mcq", text: "「台風の影響で、今晚から明日の朝にかけて雨が続くでしょう。」 — から〜にかけて means…", options: ["exactly at one time", "roughly from one time to another", "every day", "never"], answer: 1 },
    { kind: "mcq", text: "「国籍を問わず、応募できる。」 means…", options: ["Only certain nationalities can apply.", "Anyone can apply regardless of nationality.", "Nationality is questioned.", "Foreigners cannot apply."], answer: 1 },
  ],
  lessons: [
    { slug: "n2-u02-l01", title: "From…to: 〜から〜にかけて", titleJp: "〜から〜にかけて", grammarLabel: "〜から〜にかけて",
      summary: "から〜にかけて = a rough range: 今夜から明日にかけて雨.",
      body: { meaning: "XからYにかけて = ROUGHLY FROM X TO Y (not exact boundaries): 今夜から明日の朝にかけて雨 (rain from tonight through tomorrow morning).", formation: [{ pattern: "Time から Time にかけて", note: "夜から朝にかけて" }, { pattern: "Place から Place にかけて", note: "九州から関東にかけて" }], usage: ["Ranges that aren't sharply defined.", "Weather forecasts and news love this."], pitfalls: ["から〜まで = precise endpoints; にかけて = loose range.", "Often with weather: 雨が続くでしょう."], related: ["〜にわたって", "〜まで (N5)"] },
      examples: [
        { jp: "台風の影響で、今夜から明日の朝にかけて雨が続くでしょう。", kana: "たいふうのえいきょうで、こんやからあしたのあさにかけてあめがつづくでしょう。", en: "Due to the typhoon, rain will likely continue from tonight through tomorrow morning." },
        { jp: "九州から関東にかけて、強い風が吹くでしょう。", kana: "きゅうしゅうからかんとうにかけて、つよいかぜがふくでしょう。", en: "Strong winds will blow from Kyushu through the Kanto region." },
        { jp: "春から夏にかけて、この地域は観光客で賑わう。", kana: "はるからなつにかけて、このちいきはかんこうきゃくでにぎわう。", en: "From spring through summer, this area is busy with tourists." },
      ],
      practice: [
        { kind: "blank", text: "今夜から明日の朝___、雨が続くでしょう。", blanks: ["にかけて"] },
        { kind: "mcq", text: "から〜にかけて vs から〜まで:", options: ["same precision", "にかけて is looser", "まで is looser", "both are exact"], answer: 1 },
        { kind: "tf", text: "にかけて is common in weather forecasts.", answer: true },
      ],
    },
    { slug: "n2-u02-l02", title: "Spanning: 〜にわたって", titleJp: "〜にわたって", grammarLabel: "〜にわたって",
      summary: "にわたって = spanning a whole range: 三日間にわたって会議が行われた.",
      body: { meaning: "Noun + にわたって = EXTENDING ACROSS the whole span/area: 三日間にわたって (spanning three days), 各地域にわたって (across all regions).", formation: [{ pattern: "Duration ＋ にわたって", note: "三年間にわたって" }, { pattern: "Area ＋ にわたって", note: "全国にわたって" }, { pattern: "〜にわたる ＋ Noun", note: "attributive: 長期にわたる調査" }], usage: ["Emphasises breadth/length of the whole span.", "Formal — news, reports."], pitfalls: ["より complete than から〜にかけて: the WHOLE span.", "Attributive form is にわたる."], related: ["〜にかけて", "〜において"] },
      examples: [
        { jp: "三日間にわたって、会議が行われた。", kana: "みっかかんにわたって、かいぎがおこなわれた。", en: "The conference was held over three days." },
        { jp: "この研究は十年にわたって続けられた。", kana: "このけんきゅうはじゅうねんにわたってつづけられた。", en: "This research continued over ten years." },
        { jp: "長期にわたる不況で、企業の倒産が増えた。", kana: "ちょうきにわたるふきょうで、きぎょうのとうさんがふえた。", en: "Due to the prolonged recession, business failures increased." },
      ],
      practice: [
        { kind: "blank", text: "三日間___、会議が行われた。", blanks: ["にわたって"] },
        { kind: "mcq", text: "Attributive form of にわたって:", options: ["にわたっての", "にわたる", "にわたり", "にわたれ"], answer: 1 },
        { kind: "tf", text: "にわたって emphasises the whole span.", answer: true },
      ],
    },
    { slug: "n2-u02-l03", title: "Regardless of: 〜を問わず", titleJp: "〜を問わず", grammarLabel: "〜を問わず",
      summary: "を問わず = regardless of: 国籍を問わず応募できる.",
      body: { meaning: "Noun + を問わず = REGARDLESS OF X: 国籍を問わず (regardless of nationality), 昼夜を問わず (day or night).", formation: [{ pattern: "Noun ＋ を問わず", note: "経験の有無を問わず" }, { pattern: "AかBかを問わず", note: "whether A or B" }], usage: ["Job ads, official announcements.", "X is typically a dimension that shouldn't matter."], pitfalls: ["問わず comes from 問う (to ask) — negated form.", "Similar to は関係ない but more formal."], related: ["〜にかかわらず (N3)", "〜によらず"] },
      examples: [
        { jp: "国籍を問わず、応募できる。", kana: "こくせきをとわず、おうぼできる。", en: "Anyone can apply regardless of nationality." },
        { jp: "経験の有無を問わず、参加を歓迎します。", kana: "けいけんのうむをとわず、さんかをかんげいします。", en: "Participation is welcome regardless of experience." },
        { jp: "昼夜を問わず、受付で対応します。", kana: "ちゅうやをとわず、うけつけでたいおうします。", en: "The reception handles calls day or night." },
      ],
      practice: [
        { kind: "blank", text: "国籍___、応募できる。", blanks: ["を問わず"] },
        { kind: "mcq", text: "を問わず = ?", options: ["asks about X", "regardless of X", "because of X", "except X"], answer: 1 },
        { kind: "tf", text: "昼夜を問わず means 'day or night, it doesn't matter'.", answer: true },
      ],
    },
    { slug: "n2-u02-l04", title: "Formal 'at/in': 〜において", titleJp: "〜において", grammarLabel: "〜において",
      summary: "において = at/in (formal): 会議は東京において行われた.",
      body: { meaning: "Noun + において = AT/IN X (formal version of で): 会議は東京において行われた (the meeting was held in Tokyo).", formation: [{ pattern: "Place ＋ において", note: "東京において" }, { pattern: "Field/Situation ＋ において", note: "現代社会において" }, { pattern: "〜における ＋ Noun", note: "attributive: 教育における役割" }], usage: ["Written, formal contexts.", "Abstract fields too: 経済における役割."], pitfalls: ["Don't use for living things as subject of action — that's によって.", "Attributive form: における."], related: ["〜で (N5)", "〜における"] },
      examples: [
        { jp: "式典は東京において行われた。", kana: "しきてんはとうきょうにおいておこなわれた。", en: "The ceremony was held in Tokyo." },
        { jp: "現代社会において、情報技術は不可欠だ。", kana: "げんだいしゃかいにおいて、じょうほうぎじゅつはふかけつだ。", en: "In modern society, information technology is indispensable." },
        { jp: "教育における彼の役割は大きい。", kana: "きょういくにおけるかれのやくわりはおおきい。", en: "His role in education is large." },
      ],
      practice: [
        { kind: "blank", text: "式典は東京___行われた。", blanks: ["において"] },
        { kind: "mcq", text: "Attributive form:", options: ["においての", "における", "におい", "におかせる"], answer: 1 },
        { kind: "mcq", text: "において is the formal version of…", options: ["に", "で", "を", "が"], answer: 1 },
      ],
    },
  ],
}
