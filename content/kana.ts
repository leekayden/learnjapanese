export type Script = "hiragana" | "katakana"
export type SetId = "basic" | "voiced" | "yoon"

export type KanaEntry = {
  char: string
  romaji: string
  script: Script
  set: SetId
  /** Column heading in gojuon (a/i/u/e/o), y-row (ya/yu/yo), or n */
  column: string
  /** Consonant row label (k, s, t, …) or empty for vowels/n */
  row: string
}

/** Gojuon grid: [column a..o] per consonant row. Empty cells are unused slots. */
const BASIC_ROWS: { row: string; cells: [string, string][] }[] = [
  { row: "", cells: [["あ", "a"], ["い", "i"], ["う", "u"], ["え", "e"], ["お", "o"]] },
  { row: "k", cells: [["か", "ka"], ["き", "ki"], ["く", "ku"], ["け", "ke"], ["こ", "ko"]] },
  { row: "s", cells: [["さ", "sa"], ["し", "shi"], ["す", "su"], ["せ", "se"], ["そ", "so"]] },
  { row: "t", cells: [["た", "ta"], ["ち", "chi"], ["つ", "tsu"], ["て", "te"], ["と", "to"]] },
  { row: "n", cells: [["な", "na"], ["に", "ni"], ["ぬ", "nu"], ["ね", "ne"], ["の", "no"]] },
  { row: "h", cells: [["は", "ha"], ["ひ", "hi"], ["ふ", "fu"], ["へ", "he"], ["ほ", "ho"]] },
  { row: "m", cells: [["ま", "ma"], ["み", "mi"], ["む", "mu"], ["め", "me"], ["も", "mo"]] },
  { row: "y", cells: [["や", "ya"], ["", ""], ["ゆ", "yu"], ["", ""], ["よ", "yo"]] },
  { row: "r", cells: [["ら", "ra"], ["り", "ri"], ["る", "ru"], ["れ", "re"], ["ろ", "ro"]] },
  { row: "w", cells: [["わ", "wa"], ["", ""], ["", ""], ["", ""], ["を", "wo"]] },
  { row: "", cells: [["ん", "n"], ["", ""], ["", ""], ["", ""], ["", ""]] },
]

const KATAKANA_BASIC_ROWS: { row: string; cells: [string, string][] }[] = [
  { row: "", cells: [["ア", "a"], ["イ", "i"], ["ウ", "u"], ["エ", "e"], ["オ", "o"]] },
  { row: "k", cells: [["カ", "ka"], ["キ", "ki"], ["ク", "ku"], ["ケ", "ke"], ["コ", "ko"]] },
  { row: "s", cells: [["サ", "sa"], ["シ", "shi"], ["ス", "su"], ["セ", "se"], ["ソ", "so"]] },
  { row: "t", cells: [["タ", "ta"], ["チ", "chi"], ["ツ", "tsu"], ["テ", "te"], ["ト", "to"]] },
  { row: "n", cells: [["ナ", "na"], ["ニ", "ni"], ["ヌ", "nu"], ["ネ", "ne"], ["ノ", "no"]] },
  { row: "h", cells: [["ハ", "ha"], ["ヒ", "hi"], ["フ", "fu"], ["ヘ", "he"], ["ホ", "ho"]] },
  { row: "m", cells: [["マ", "ma"], ["ミ", "mi"], ["ム", "mu"], ["メ", "me"], ["モ", "mo"]] },
  { row: "y", cells: [["ヤ", "ya"], ["", ""], ["ユ", "yu"], ["", ""], ["ヨ", "yo"]] },
  { row: "r", cells: [["ラ", "ra"], ["リ", "ri"], ["ル", "ru"], ["レ", "re"], ["ロ", "ro"]] },
  { row: "w", cells: [["ワ", "wa"], ["", ""], ["", ""], ["", ""], ["ヲ", "wo"]] },
  { row: "", cells: [["ン", "n"], ["", ""], ["", ""], ["", ""], ["", ""]] },
]

const VOICED_ROWS: { row: string; cells: [string, string][] }[] = [
  { row: "g", cells: [["が", "ga"], ["ぎ", "gi"], ["ぐ", "gu"], ["げ", "ge"], ["ご", "go"]] },
  { row: "z", cells: [["ざ", "za"], ["じ", "ji"], ["ず", "zu"], ["ぜ", "ze"], ["ぞ", "zo"]] },
  { row: "d", cells: [["だ", "da"], ["ぢ", "ji"], ["づ", "zu"], ["で", "de"], ["ど", "do"]] },
  { row: "b", cells: [["ば", "ba"], ["び", "bi"], ["ぶ", "bu"], ["べ", "be"], ["ぼ", "bo"]] },
  { row: "p", cells: [["ぱ", "pa"], ["ぴ", "pi"], ["ぷ", "pu"], ["ぺ", "pe"], ["ぽ", "po"]] },
]

const KATAKANA_VOICED_ROWS: { row: string; cells: [string, string][] }[] = [
  { row: "g", cells: [["ガ", "ga"], ["ギ", "gi"], ["グ", "gu"], ["ゲ", "ge"], ["ゴ", "go"]] },
  { row: "z", cells: [["ザ", "za"], ["ジ", "ji"], ["ズ", "zu"], ["ゼ", "ze"], ["ゾ", "zo"]] },
  { row: "d", cells: [["ダ", "da"], ["ヂ", "ji"], ["ヅ", "zu"], ["デ", "de"], ["ド", "do"]] },
  { row: "b", cells: [["バ", "ba"], ["ビ", "bi"], ["ブ", "bu"], ["ベ", "be"], ["ボ", "bo"]] },
  { row: "p", cells: [["パ", "pa"], ["ピ", "pi"], ["プ", "pu"], ["ペ", "pe"], ["ポ", "po"]] },
]

/** Yoon (拗音) combos: consonant + y-vowel. */
const YOON: { row: string; cells: [string, string][] }[] = [
  { row: "ky", cells: [["きゃ", "kya"], ["きゅ", "kyu"], ["きょ", "kyo"]] },
  { row: "gy", cells: [["ぎゃ", "gya"], ["ぎゅ", "gyu"], ["ぎょ", "gyo"]] },
  { row: "sh", cells: [["しゃ", "sha"], ["しゅ", "shu"], ["しょ", "sho"]] },
  { row: "j", cells: [["じゃ", "ja"], ["じゅ", "ju"], ["じょ", "jo"]] },
  { row: "ch", cells: [["ちゃ", "cha"], ["ちゅ", "chu"], ["ちょ", "cho"]] },
  { row: "ny", cells: [["にゃ", "nya"], ["にゅ", "nyu"], ["にょ", "nyo"]] },
  { row: "hy", cells: [["ひゃ", "hya"], ["ひゅ", "hyu"], ["ひょ", "hyo"]] },
  { row: "by", cells: [["びゃ", "bya"], ["びゅ", "byu"], ["びょ", "byo"]] },
  { row: "py", cells: [["ぴゃ", "pya"], ["ぴゅ", "pyu"], ["ぴょ", "pyo"]] },
  { row: "my", cells: [["みゃ", "mya"], ["みゅ", "myu"], ["みょ", "myo"]] },
  { row: "ry", cells: [["りゃ", "rya"], ["りゅ", "ryu"], ["りょ", "ryo"]] },
]

const KATAKANA_YOON_ROWS: { row: string; cells: [string, string][] }[] = [
  { row: "ky", cells: [["キャ", "kya"], ["キュ", "kyu"], ["キョ", "kyo"]] },
  { row: "gy", cells: [["ギャ", "gya"], ["ギュ", "gyu"], ["ギョ", "gyo"]] },
  { row: "sh", cells: [["シャ", "sha"], ["シュ", "shu"], ["ショ", "sho"]] },
  { row: "j", cells: [["ジャ", "ja"], ["ジュ", "ju"], ["ジョ", "jo"]] },
  { row: "ch", cells: [["チャ", "cha"], ["チュ", "chu"], ["チョ", "cho"]] },
  { row: "ny", cells: [["ニャ", "nya"], ["ニュ", "nyu"], ["ニョ", "nyo"]] },
  { row: "hy", cells: [["ヒャ", "hya"], ["ヒュ", "hyu"], ["ヒョ", "hyo"]] },
  { row: "by", cells: [["ビャ", "bya"], ["ビュ", "byu"], ["ビョ", "byo"]] },
  { row: "py", cells: [["ピャ", "pya"], ["ピュ", "pyu"], ["ピョ", "pyo"]] },
  { row: "my", cells: [["ミャ", "mya"], ["ミュ", "myu"], ["ミョ", "myo"]] },
  { row: "ry", cells: [["リャ", "rya"], ["リュ", "ryu"], ["リョ", "ryo"]] },
]

const COLUMNS = ["a", "i", "u", "e", "o"] as const

function expand(
  rows: { row: string; cells: [string, string][] }[],
  script: Script,
  set: SetId,
  columns: readonly string[] = COLUMNS,
): KanaEntry[] {
  const out: KanaEntry[] = []
  for (const { row, cells } of rows) {
    cells.forEach(([char, romaji], i) => {
      if (!char) return
      out.push({ char, romaji, script, set, column: columns[i]!, row })
    })
  }
  return out
}

export const HIRAGANA_BASIC = expand(BASIC_ROWS, "hiragana", "basic")
export const HIRAGANA_VOICED = expand(VOICED_ROWS, "hiragana", "voiced")
export const HIRAGANA_YOON = expand(YOON, "hiragana", "yoon", ["ya", "yu", "yo"])
export const KATAKANA_BASIC = expand(KATAKANA_BASIC_ROWS, "katakana", "basic")
export const KATAKANA_VOICED = expand(KATAKANA_VOICED_ROWS, "katakana", "voiced")
export const KATAKANA_YOON = expand(KATAKANA_YOON_ROWS, "katakana", "yoon", ["ya", "yu", "yo"])

export const ALL_KANA: KanaEntry[] = [
  ...HIRAGANA_BASIC,
  ...HIRAGANA_VOICED,
  ...HIRAGANA_YOON,
  ...KATAKANA_BASIC,
  ...KATAKANA_VOICED,
  ...KATAKANA_YOON,
]

export type ChartRow = { id: string; label: string; cells: { char: string; romaji: string }[] }

function rowsToChart(
  rows: { row: string; cells: [string, string][] }[],
  columns: readonly string[],
): ChartRow[] {
  return rows.map((r, idx) => ({
    id: `${r.row || "row"}-${idx}`,
    label: r.row,
    cells: columns.map((_, i) => {
      const [char, romaji] = r.cells[i] ?? ["", ""]
      return { char, romaji }
    }),
  }))
}

export function chartFor(script: Script, set: SetId): ChartRow[] {
  if (set === "basic") {
    return rowsToChart(script === "hiragana" ? BASIC_ROWS : KATAKANA_BASIC_ROWS, COLUMNS)
  }
  if (set === "voiced") {
    return rowsToChart(script === "hiragana" ? VOICED_ROWS : KATAKANA_VOICED_ROWS, COLUMNS)
  }
  return rowsToChart(script === "hiragana" ? YOON : KATAKANA_YOON_ROWS, ["ya", "yu", "yo"])
}

export function poolFor(script: Script | "both", set: SetId | "all"): KanaEntry[] {
  const sets: SetId[] = set === "all" ? ["basic", "voiced"] : [set]
  return ALL_KANA.filter(
    (k) => (script === "both" || k.script === script) && sets.includes(k.set),
  )
}
