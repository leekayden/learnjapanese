// Short readable labels for common JMdict part-of-speech entity tags.
const POS_LABELS: Record<string, string> = {
  adj: "adjective (keiyoushi)",
  "adj-i": "i-adjective",
  "adj-na": "na-adjective",
  "adj-no": "no-adjective (noun+の)",
  "adj-t": "taru-adjective",
  "adj-f": "pre-noun adjective",
  adv: "adverb",
  "adv-to": "adverb (と form)",
  aux: "auxiliary",
  "aux-adj": "auxiliary adjective",
  conj: "conjunction",
  cop: "copula",
  ctr: "counter",
  exp: "expression",
  int: "interjection",
  n: "noun",
  "n-adv": "adverbial noun",
  "n-pref": "noun, used as a prefix",
  "n-suf": "noun, used as a suffix",
  "n-t": "noun (temporal)",
  num: "numeric",
  pn: "pronoun",
  pref: "prefix",
  prt: "particle",
  suf: "suffix",
  unc: "unclassified",
  "v-unspec": "verb unspecified",
  "v1": "ichidan verb (る-verb)",
  "v1-s": "ichidan verb (ずる → じる)",
  "v2a-s": "nidan verb (upper class)",
  "v4r": "yondan verb (る ending)",
  "v5aru": "godan verb (ある)",
  "v5b": "godan verb (ぶ ending)",
  "v5g": "godan verb (ぐ ending)",
  "v5k": "godan verb (く ending)",
  "v5k-s": "godan verb (いく/ゆく)",
  "v5m": "godan verb (む ending)",
  "v5n": "godan verb (ぬ ending)",
  "v5r": "godan verb (る ending)",
  "v5r-i": "godan verb (る ending, irregular)",
  "v5s": "godan verb (す ending)",
  "v5t": "godan verb (つ ending)",
  "v5u": "godan verb (う ending)",
  "v5u-s": "godan verb (う ending, special)",
  "v5uru": "godan verb (うる)",
  vz: "ichidan verb (ずる)",
  vi: "intransitive verb",
  vk: "kuru verb (irregular)",
  vn: "zuru/ronverb (irregular)",
  vr: "nidan verb (る ending, irregular)",
  vs: "noun or verb acting prenominally (する)",
  "vs-c": "su-verb (precursor to する)",
  "vs-i": "suru verb (included)",
  "vs-s": "suru verb (special class)",
  vt: "transitive verb",
}

export function posLabel(tag: string): string {
  return POS_LABELS[tag] ?? tag
}

/** Compact POS badges, e.g. "v5r" → "v5 (godan)", "n" → "noun". */
export function posShort(tag: string): string {
  if (tag.startsWith("v5")) return "godan verb"
  if (tag.startsWith("v1") || tag === "vz") return "ichidan verb"
  if (tag === "vs" || tag.startsWith("vs")) return "suru noun/verb"
  if (tag.startsWith("adj")) return tag === "adj-i" ? "i-adj" : "adj"
  const map: Record<string, string> = { n: "noun", adv: "adverb", prt: "particle", exp: "expr", int: "interj", conj: "conj", num: "num", pn: "pron", ctr: "counter", vt: "trans. verb", vi: "intrans. verb" }
  return map[tag] ?? tag
}
