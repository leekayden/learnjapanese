import { createReadStream } from "node:fs"
import { createInterface } from "node:readline"
import path from "node:path"
import unbzip2Stream from "unbzip2-stream"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
const RAW = path.resolve(process.cwd(), "data/raw")
function bzip2Lines(file: string) {
  return createInterface({ input: createReadStream(file).pipe(unbzip2Stream()), crlfDelay: Infinity })
}
const jpText = new Map<number, string>()
for await (const line of bzip2Lines(path.join(RAW, "jpn_sentences_detailed.tsv.bz2"))) {
  const [id, , text] = line.split("\t")
  if (id && text) jpText.set(Number(id), text)
  if (jpText.size >= 500) break
}
const rows = [...jpText.entries()].map(([id, jp]) => ({ id, jp, en: null }))
console.log("sample row:", JSON.stringify(rows[0]))
await prisma.sentence.deleteMany()
await prisma.sentence.createMany({ data: rows.slice(0, 10) })
console.log("createMany OK for", rows.slice(0, 10).length)
await prisma.$disconnect()
