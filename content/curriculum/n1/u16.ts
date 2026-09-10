import type { AuthoredUnit } from "../../types"

export const u16: AuthoredUnit = {
  level: "N1", order: 16, title: "Would that it were not", titleJp: "かこつ ごんご",
  description: "Regret and sighs: 〜ものを (if only), 〜ことか (how ever so), 〜ことだ (advice, emphatic), 〜あろうものなら (if it ever happened).",
  vocab: ["残念|ざんねん", "約束|やくそく", "守る|まもる", "昨日|きのう", "言う|いう", "知らせる|しらせる", "事故|じこ", "起きる|おきる", "会う|あう", "故郷|こきょう", "懐かしい|なつかしい", "健康|けんこう", "規則|きそく", "違反|いはん", "信じる|しんじる", "厳しい|きびしい"],
  kanji: ["残", "念", "約", "束", "故", "郷", "懐", "違", "厳"],
  exam: [
    { kind: "mcq", text: "「早く連絡してくれればいいものを。」 — ものを expresses…", options: ["joy that they called", "regret that they didn't call sooner", "an order to call", "a question"], answer: 1 },
    { kind: "mcq", text: "「事故が起きてからでは、取り返しがつかない。」 + あろうものなら → 「許可のない使用があろうものなら、直ちに処分する。」 means…", options: ["Unauthorized use is welcome.", "If any unauthorized use occurs, it will be dealt with immediately.", "Nothing will be done.", "Use is automatic."], answer: 1 },
  ],
  lessons: [
    { slug: "n1-u16-l01", title: "If only: 〜ものを", titleJp: "〜ものを", grammarLabel: "〜ものを",
      summary: "ものを = if only you had… (trailing regret): 知らせてくれればいいものを.",
      body: { meaning: "Plain + ものを = IF ONLY X (sentence trails off in regret): 早く言えばいいものを.", formation: [{ pattern: "ば-form ＋ いいものを", note: "standard" }, { pattern: "Plain ＋ ものを", note: "shortened" }], usage: ["Sighs, monologue, fiction.", "The main clause is unstated."], pitfalls: ["Regret is the whole point — the sentence feels unfinished.", "Written/spoken both, but emotional."], related: ["〜ば〜のに", "〜ことか"] },
      examples: [
        { jp: "早く知らせてくれればいいものを。", kana: "はやくしらせてくれればいいものを。", en: "If only you'd told me sooner…" },
        { jp: "昨日言ってくれれば、準備できたものを。", kana: "きのういってくれれば、じゅんびできたものを。", en: "Had you said so yesterday, I could have been ready…" },
        { jp: "自分の部屋くらい、自分で片付ければいいものを。", kana: "じぶんのへやくらい、じぶんでかたづければいいものを。", en: "Your own room — if only you'd tidy it yourself…" },
      ],
      practice: [
        { kind: "blank", text: "早く知らせてくれればいい___。", blanks: ["ものを"] },
        { kind: "mcq", text: "ものを leaves the sentence…", options: ["complete", "trailing in regret", "questioned", "commanded"], answer: 1 },
        { kind: "tf", text: "ものを often follows the ば-form.", answer: true },
      ],
    },
    { slug: "n1-u16-l02", title: "How ever so: 〜ことか", titleJp: "〜ことか", grammarLabel: "〜ことか",
      summary: "ことか = how much/how ever so (emotive questions): どれほど嬉しいことか.",
      body: { meaning: "Plain + ことか = HOW VERY X (rhetorical exclamation): どれだけ待ったことか.", formation: [{ pattern: "どれほど／なんと ＋ Plain ＋ ことか", note: "exclamation" }, { pattern: "い-adj ＋ ことか", note: "悲しいことか" }], usage: ["Emotive emphasis.", "Often with どれほど・どんなに."], pitfalls: ["Grammatically a question form, emotionally an exclamation.", "Pairs with quantity/degree words."], related: ["〜ものだ (N3)", "〜ばかりだ"] },
      examples: [
        { jp: "合格の知らせを聞いた時、どれほど嬉しかったことか。", kana: "ごうかくのしらせをきいたとき、どれほうどうれしかったことか。", en: "How overjoyed I was when I heard I'd passed!" },
        { jp: "故郷の風景は、なんと懐かしいことか。", kana: "こきょうのふうけいは、なんとなつかしいことか。", en: "How dear the scenery of my hometown is!" },
        { jp: "十年ぶりの再会——どんなに涙が出たことか。", kana: "じゅうねんぶりのさいかい——どんなになみだがでたことか。", en: "Reuniting after ten years — oh how the tears flowed." },
      ],
      practice: [
        { kind: "blank", text: "どれほど嬉しかった___。", blanks: ["ことか"] },
        { kind: "mcq", text: "ことか usually pairs with…", options: ["numbers only", "degree words like どれほど", "names", "dates"], answer: 1 },
        { kind: "tf", text: "ことか is an emotive exclamation despite its question form.", answer: true },
      ],
    },
    { slug: "n1-u16-l03", title: "You really should: 〜ことだ", titleJp: "〜ことだ", grammarLabel: "〜ことだ",
      summary: "ことだ = strong personal advice: 休むことだ.",
      body: { meaning: "Verb plain / ない + ことだ = YOU SHOULD X (direct advice): 風邪なら、ゆっくり休むことだ.", formation: [{ pattern: "Verb る ＋ ことだ", note: "休むことだ" }, { pattern: "Verb ない ＋ ことだ", note: "無理をしないことだ" }], usage: ["Advice to one person.", "Direct but warm."], pitfalls: ["Different from ものだ (general truth).", "Second person only."], related: ["〜ものだ (N3)", "〜べきだ"] },
      examples: [
        { jp: "風邪をひいたなら、ゆっくり休むことだ。", kana: "かぜをひいたなら、ゆっくりやすむことだ。", en: "If you've caught a cold, you should rest well." },
        { jp: "合格したいなら、毎日少しずつ勉強することだ。", kana: "ごうかくしたいなら、まいにちすこしずつべんきょうすることだ。", en: "If you want to pass, study a little every day." },
        { jp: "健康のため、夜更かしをしないことだ。", kana: "けんこうのため、よふかしをしないことだ。", en: "For your health, you shouldn't stay up late." },
      ],
      practice: [
        { kind: "blank", text: "風邪をひいたなら、ゆっくり休む___。", blanks: ["ことだ"] },
        { kind: "mcq", text: "ことだ is directed at…", options: ["everyone", "one specific person", "the past", "objects"], answer: 1 },
        { kind: "tf", text: "無理をしないことだ = don't overdo it.", answer: true },
      ],
    },
    { slug: "n1-u16-l04", title: "Heaven forbid: 〜あろうものなら", titleJp: "〜あろうものなら", grammarLabel: "〜あろうものなら",
      summary: "あろうものなら = if X were ever to happen (drastic consequence): 嘘をつこうものなら.",
      body: { meaning: "Volitional + ものなら = IF X WERE EVER TO HAPPEN, (severe Y): 規則を破ろうものなら、即処分だ.", formation: [{ pattern: "Volitional ＋ ものなら", note: "破ろうものなら" }, { pattern: "する → しようものなら", note: "irregular" }], usage: ["Warnings, strict rules.", "Y is drastic."], pitfalls: ["Volitional form + ものなら.", "Consequence is exaggerated severity."], related: ["〜が最後 (N2)", "〜ものなら"] },
      examples: [
        { jp: "嘘をつこうものなら、即座に信頼を失う。", kana: "うそをつこうものなら、そくざにしんらいをうしなう。", en: "If you were to tell one lie, you'd lose trust on the spot." },
        { jp: "規則違反があろうものなら、厳しく対処する。", kana: "きそくいはんがあろうものなら、きびしくたいしょする。", en: "Should any violation occur, it will be dealt with firmly." },
        { jp: "彼に口を開こうものなら、止まらないだろう。", kana: "かれにくちをひろうものなら、とまらないだろう。", en: "If he were to open his mouth, he'd never stop." },
      ],
      practice: [
        { kind: "blank", text: "嘘をつ___ものなら、即座に信頼を失う。", blanks: ["こう"] },
        { kind: "mcq", text: "あろうものなら consequences are…", options: ["mild", "drastic", "welcome", "unknown"], answer: 1 },
        { kind: "tf", text: "しようものなら is the する-verb form.", answer: true },
      ],
    },
  ],
}
