import type { AuthoredUnit } from "../../types"

export const u10: AuthoredUnit = {
  level: "N2", order: 10, title: "Limits and bounds", titleJp: "かぎり の ぶんぽう",
  description: "限り patterns: 〜に限る (nothing beats), 〜に限って (of all times), 〜に限り (limited to), 〜ない限り (unless).",
  vocab: ["観光|かんこう", "温泉|おんせん", "魅力|みりょく", "特典|とくてん", "会員|かいいん", "当日|とうじつ", "遅刻|ちこく", "試験|しけん", "自信|じしん", "練習|れんしゅう", "医者|いしゃ", "助言|じょげん", "質問|しつもん", "遠慮|えんりょ", "期間|きかん", "割引|わりびき"],
  kanji: ["観", "光", "泉", "魅", "典", "遅", "験", "遠", "慮"],
  exam: [
    { kind: "mcq", text: "「疲れた時は、温泉に限る。」 means…", options: ["Hot springs are tiring.", "Nothing beats a hot spring when tired.", "Avoid hot springs.", "Hot springs are limited."], answer: 1 },
    { kind: "mcq", text: "「大切な日のに限って、電車が止まる。」 — に限って implies…", options: ["the train is always late", "bad luck strikes at the worst time", "the day is unimportant", "trains are reliable"], answer: 1 },
  ],
  lessons: [
    { slug: "n2-u10-l01", title: "Nothing beats: 〜に限る", titleJp: "〜に限る", grammarLabel: "〜に限る",
      summary: "に限る = nothing beats X: 疲れた時は、温泉に限る.",
      body: { meaning: "Noun / verb dictionary + に限る = X IS THE BEST (nothing else compares): 夏はビールに限る.", formation: [{ pattern: "Noun ＋ に限る", note: "温泉に限る" }, { pattern: "Verb る ＋ に限る", note: "聞かないに限る best not to ask" }], usage: ["Personal opinion of the best option.", "Casual to neutral register."], pitfalls: ["Subjective — いちばんいい is the plainer version.", "Negative advice: 行かないに限る."], related: ["〜に限って", "〜に越したことはない"] },
      examples: [
        { jp: "疲れた時は、温泉に限る。", kana: "つかれたときは、おんせんにかぎる。", en: "When tired, nothing beats a hot spring." },
        { jp: "観光はやはり京都に限る。", kana: "かんこうはやはりきょうとにかぎる。", en: "For sightseeing, Kyoto is simply the best." },
        { jp: "怪しい話は、信じないに限る。", kana: "あやしいはなしは、しんじないにかぎる。", en: "With suspicious stories, it's best not to believe them." },
      ],
      practice: [
        { kind: "blank", text: "疲れた時は、温泉___。", blanks: ["に限る"] },
        { kind: "mcq", text: "に限る expresses…", options: ["a limit", "nothing beats X", "a schedule", "an order"], answer: 1 },
        { kind: "tf", text: "信じないに限る gives negative advice.", answer: true },
      ],
    },
    { slug: "n2-u10-l02", title: "Of all times: 〜に限って", titleJp: "〜に限って", grammarLabel: "〜に限って",
      summary: "に限って = of all times/possibilities: 急いでいる日に限って、遅れる.",
      body: { meaning: "Noun + に限って = OF ALL TIMES/PEOPLE, X happens (bad luck or trust): 急いでいる日に限って、電車が遅れる.", formation: [{ pattern: "Noun ＋ に限って", note: "当日に限って" }, { pattern: "Person ＋ に限って", note: "彼に限って he, of all people" }], usage: ["Frustration or special trust.", "Very common in speech."], pitfalls: ["Two nuances: (1) worst timing, (2) surely not X (彼に限って、嘘をつくはずがない).", "Not the same as に限る (best)."], related: ["〜に限る", "〜としたことが"] },
      examples: [
        { jp: "大切な試験の日に限って、目覚ましが止まる。", kana: "たいせつなしけんのひにかぎって、めざましがとまる。", en: "Of all days — the exam day — my alarm stops." },
        { jp: "急いでいる時に限って、信号が赤になる。", kana: "いそいでいるときにかぎって、しんごうがあかになる。", en: "Whenever I'm in a hurry, the light turns red." },
        { jp: "彼に限って、嘘をつくはずがない。", kana: "かれにかぎって、うそをつくはずがない。", en: "He, of all people, would never lie." },
      ],
      practice: [
        { kind: "blank", text: "大切な試験の日___、目覚ましが止まる。", blanks: ["に限って"] },
        { kind: "mcq", text: "「彼に限って、嘘をつくはずがない」 expresses…", options: ["suspicion", "trust", "anger", "envy"], answer: 1 },
        { kind: "tf", text: "に限って can express bad-luck timing.", answer: true },
      ],
    },
    { slug: "n2-u10-l03", title: "Limited to: 〜に限り / 〜に限らず", titleJp: "〜に限り・〜に限らず", grammarLabel: "〜に限り・〜に限らず",
      summary: "に限り = only for (announcements); に限らず = not limited to.",
      body: { meaning: "Noun + に限り = LIMITED TO X (offers): 会員に限り、割引します. Noun + に限らず = NOT LIMITED TO X: この駅は週末に限らず混む.", formation: [{ pattern: "Noun ＋ に限り", note: "本日に限り today only" }, { pattern: "Noun ＋ に限らず", note: "東京に限らず not just Tokyo" }], usage: ["に限り: ads, terms & conditions.", "に限らず: broadening a claim."], pitfalls: ["に限り = restriction; に限らず = no restriction.", "に限らず often pairs with も: 東京に限らず、他の都市も."], related: ["〜を問わず (u02)", "〜に限る"] },
      examples: [
        { jp: "本日に限り、全品半額です。", kana: "ほんじつにかぎり、ぜんぴんはんがくです。", en: "Today only, everything is half price." },
        { jp: "会員に限り、特典が受けられます。", kana: "かいいんにかぎり、とくてんがうけられます。", en: "Benefits are available to members only." },
        { jp: "この駅は週末に限らず、いつも混んでいる。", kana: "このえきはしゅうまつにかぎらず、いつもこんでいる。", en: "This station is crowded not just on weekends but always." },
      ],
      practice: [
        { kind: "blank", text: "本日___、全品半額です。(today only)", blanks: ["に限り"] },
        { kind: "mcq", text: "に限らず means…", options: ["restricted to", "not limited to", "only for", "except"], answer: 1 },
        { kind: "tf", text: "会員に限り = members only.", answer: true },
      ],
    },
    { slug: "n2-u10-l04", title: "Unless: 〜ない限り", titleJp: "〜ない限り", grammarLabel: "〜ない限り",
      summary: "ない限り = unless: 練習しない限り、上達しない.",
      body: { meaning: "Verb ない + 限り = UNLESS X: 医者に診てもらわない限り、治らない.", formation: [{ pattern: "Verb ない ＋ 限り", note: "診てもらわない限り" }, { pattern: "Verb る ＋ 限り(では)", note: "as far as I know: 私の知る限り" }], usage: ["Conditions that block an outcome.", "知る限り/見る限り = as far as I know/see."], pitfalls: ["ない限り = unless; 限りでは = as far as.", "The main clause is usually negative or restrictive."], related: ["〜なければ (N4)", "〜次第で (u04)"] },
      examples: [
        { jp: "毎日練習しない限り、上達しない。", kana: "まいにちれんしゅうしないかぎり、じょうたつしない。", en: "Unless you practice daily, you won't improve." },
        { jp: "私の知る限り、彼はまだ日本にいる。", kana: "わたしのしるかぎり、かれはまだにほんにいる。", en: "As far as I know, he's still in Japan." },
        { jp: "遠慮しない限り、質問は何でもどうぞ。", kana: "えんりょしないかぎり、しつもんはなんでもどうぞ。", en: "As long as you don't hold back, ask anything." },
      ],
      practice: [
        { kind: "blank", text: "毎日練習しない___、上達しない。", blanks: ["限り"] },
        { kind: "mcq", text: "「私の知る限り」 means…", options: ["I forget", "as far as I know", "I know best", "unknown to me"], answer: 1 },
        { kind: "tf", text: "ない限り = unless.", answer: true },
      ],
    },
  ],
}
