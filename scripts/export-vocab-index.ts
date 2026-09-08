// @ts-nocheck
// Exports the JLPT-tagged word list to content/vocab-index.json so curriculum
// files can reference words as "kanji|kana" strings.
// Run: npx tsx scripts/export-vocab-index.ts
import { writeFileSync } from "node:fs"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

type Entry = { id: string; kana: string; kanji: string; gloss: string; level: number; pos: string[] }

// The yomitan JLPT CSV maps some kana-only words to marginal entries
// (e.g. これ → interjection "hey!"). Override with the correct entries.
const ID_OVERRIDES: Record<string, string> = {
  "|これ": "1628530",
  "|それ": "1006970",
  "|あれ": "1000580",
  "|どれ": "1009290",
  "|ここ": "1288810",
  "|そこ": "1006670",
  "|あそこ": "1000320",
  "誰|だれ": "1416830",
  "|みんな": "1202150",
  "|いつ": "1188760",
  // Essential N5 loanwords missing from the JLPT CSV
  "|パン": "1103090",
  "|ケーキ": "1047860",
  "|コーヒー": "1049180",
  "|バス": "1098390",
  "|テレビ": "1080510",
  "|トイレ": "1084810",
  "|レストラン": "1145310",
  "|ジュース": "1065950",
  "|ビール": "2796520",
  "|コピー": "1050590",
  "|シャワー": "1061820",
  "|する": "1157170",
  "|カメラ": "1038350",
  "会社員|かいしゃいん": "1198560",
  "朝ご飯|あさごはん": "1586330",
  "晩ご飯|ばんごはん": "1601340",
  // more N5 essentials missing from the CSV
  "|どこ": "1577140",
  "|デパート": "1083590",
  "|プール": "1115150",
  "|かばん": "1208910",
  "お父さん|おとうさん": "1497610",
  "お母さん|おかあさん": "1514990",
  "部屋|へや": "1499320",
  "傘|かさ": "1301940",
  "靴|くつ": "1246700",
  // adjectives & everyday items missing from the CSV
  "|プレゼント": "1116840",
  "|いい": "2820690",
  "|おいしい": "1486650",
  "|にぎやか": "1463480",
  "|きれい": "1591900",
  "|ゼロ": "2839962",
  "|レポート": "1145990",
  "|シャツ": "1061520",
  "|ズボン": "1074260",
  "|セーター": "1074270",
  "|ノート": "1093450",
  "|ネクタイ": "1092820",
  "|テニス": "1080000",
  "|ゴルフ": "1054620",
  "京都|きょうと": "1652350",
  "|なる": "1375610",
  "|まだ": "1527110",
  "|たくさん": "1415870",
  "|もう": "1012480",
  "何度|なんど": "1189170",
  "一度|いちど": "1576250",
  "|テーブル": "1078630",
  "|ベッド": "1119650",
  "|ドア": "1087820",
  "社員|しゃいん": "1322670",
  "野球|やきゅう": "1537300",
  "部活|ぶかつ": "1622100",
  "残業|ざんぎょう": "1304560",
  "宝くじ|たからくじ": "1516170",
  "お客様|おきゃくさま": "1001770",
  "|納豆": "1470070",
  "|点ける": "1350470",
  "|付けます": "1433680",
  "東京|とうきょう": "1447690",
  "大阪|おおさか": "2078800",
  "|シャワー": "1061820",
}

async function main() {
  const rows = await prisma.word.findMany({
    where: { jlptLevel: { not: null } },
    select: { id: true, kanjiForms: true, kanaForms: true, senses: true, jlptLevel: true },
    orderBy: { id: "asc" },
  })
  const index: Record<string, Entry> = {}
  for (const r of rows) {
    const kanjiForms = (r.kanjiForms as { text: string }[]) ?? []
    const kanaForms = (r.kanaForms as { text: string }[]) ?? []
    const senses = (r.senses as { pos: string[]; glosses: string[] }[]) ?? []
    const kanji = kanjiForms[0]?.text ?? ""
    const kana = kanaForms[0]?.text ?? ""
    if (!kanji && !kana) continue
    const key = kanji ? `${kanji}|${kana}` : `|${kana}`
    index[key] = {
      id: r.id,
      kana,
      kanji,
      gloss: (() => {
        const core = senses.filter((x) => (x.pos ?? []).some((t) => /^(n|v|adj|pron|pn|ctr|num|vs)/.test(t)))
        return (core[0] ?? senses[0])?.glosses?.[0] ?? ""
      })(),
      level: r.jlptLevel ?? 0,
      pos: [...new Set(senses.flatMap((s) => s.pos))].slice(0, 4),
    }
  }
  for (const [key, id] of Object.entries(ID_OVERRIDES)) {
    const r = await prisma.word.findUnique({ where: { id }, select: { id: true, kanjiForms: true, kanaForms: true, senses: true } })
    if (!r) continue
    const kanjiForms = (r.kanjiForms as { text: string }[]) ?? []
    const kanaForms = (r.kanaForms as { text: string }[]) ?? []
    const senses = (r.senses as { pos: string[]; glosses: string[] }[]) ?? []
    const core = senses.filter((x) => (x.pos ?? []).some((t) => /^(n|v|adj|pron|pn|ctr|num|vs|cop)/.test(t)))
    const kana = kanaForms[0]?.text ?? ""
    const kanji = kanjiForms[0]?.text ?? ""
    index[key] = {
      id: r.id,
      kana,
      kanji,
      gloss: (core[0] ?? senses[0])?.glosses?.[0] ?? "",
      level: 5,
      pos: [...new Set(senses.flatMap((x) => x.pos))].slice(0, 4),
    }
  }
  writeFileSync("content/vocab-index.json", JSON.stringify(index, null, 1))
  console.log(`Exported ${Object.keys(index).length} entries to content/vocab-index.json`)
}

main()
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
