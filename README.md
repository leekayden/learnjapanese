# LearnJapanese — N5 to N1

A structured Japanese course app: every grammar point explained plainly, vocabulary injected step by step from real JLPT lists, kanji with stroke order and radical search, spaced-repetition review, and quizzes exportable to [quiz-renderer](https://github.com/kayde/quiz-renderer).

## Quick start

```bash
yarn install                # install dependencies
yarn prisma migrate deploy  # apply database schema
yarn dev                    # start dev server (http://localhost:3000)
```

### Environment (`.env`)

```
DATABASE_URL="mysql://user:pass@host:3306/learnjapanese"
BETTER_AUTH_SECRET="<openssl rand -base64 32>"
BETTER_AUTH_URL="http://localhost:3000"
```

## Data pipeline

The dictionary and curriculum content are imported from open datasets into MySQL.

### Dictionary imports (one-time)

```bash
node scripts/data/fetch.mjs             # downloads all raw datasets (~250 MB)
npx tsx scripts/data/import-words.ts    # 218k JMdict words
npx tsx scripts/data/import-jlpt.ts     # JLPT level tags
npx tsx scripts/data/import-kanji.ts    # 13k kanji (kanjidic2)
npx tsx scripts/data/import-strokes.ts  # stroke paths (KanjiVG)
npx tsx scripts/data/import-radicals.ts # radical decompositions (Kradfile-u)
npx tsx scripts/data/import-sentences.ts# 249k example sentences (Tatoeba)
npx tsx scripts/export-vocab-index.ts   # vocab lookup for curriculum authoring
```

Raw data is stored in `data/raw/` (gitignored). EDRDG requires monthly re-downloads for server apps.

### Curriculum content

Grammar and vocab live in typed TypeScript files under `content/curriculum/{n5..n1}/uNN.ts`. The seeder validates everything with zod, auto-generates vocab/kanji quizzes, composes unit exams, and calculates furigana:

```bash
npx tsx scripts/seed-curriculum.ts
```

To add a unit: create `content/curriculum/{level}/uNN.ts` following the existing pattern, export it from the level's `index.ts`, and run the seeder. Missing vocab IDs go into `ID_OVERRIDES` in `scripts/export-vocab-index.ts` (look up JMdict ent_seq via `scripts/data/lookup-word.mjs`).

## Architecture

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 (App Router), React 19 |
| Database | MySQL via Prisma 6 |
| Auth | Better Auth (email/password, cookie-cache) |
| UI | shadcn/ui (Base UI), Tailwind v4 |
| Quiz schema | quiz-renderer-compatible Zod (7 question types) |
| Search | MySQL FULLTEXT ngram index |
| SRS | FSRS-lite scheduler |

### Routes

| Path | Description |
|------|-------------|
| `/dashboard` | Continue learning, due reviews, streak, XP |
| `/learn` | Level map (N5–N1) with progress |
| `/learn/[level]/[unit]` | Unit overview (lessons, vocab, kanji) |
| `/lesson/[slug]` | Grammar notes with furigana |
| `/lesson/[slug]/practice` | Lesson practice quiz |
| `/learn/[level]/[unit]/exam` | Unit exam (pass 75% to unlock next) |
| `/learn/[level]/exam` | Level exam (pass 75% to unlock next level) |
| `/review` | Spaced-repetition review session |
| `/vocab` | Vocabulary list |
| `/kanji` | Kanji browser with radical search |
| `/dictionary` | Full JMdict search |
| `/settings` | Script mode (furigana/hiragana/romaji), daily goal |
| `/quiz-exports` | Download quiz packs for quiz-renderer |
| `/resources/kana` | Kana reference chart |
| `/about/sources` | Data attributions |

### Text rendering

Every Japanese string is stored with `{jp, kana, romaji, segments}`. The `<Jp>` component renders according to the user's script mode:
- **Furigana**: `<ruby>` tags per word-segment
- **Hiragana**: full reading text
- **Romaji**: wanakana Hepburn

Furigana sub-modes: always / hover / off.

### Quiz-renderer compatibility

All quiz payloads use quiz-renderer's exact Zod schema. Download packs from `/quiz-exports` and import at quiz-renderer's `/quizzes/new`.

## Progression

1. Read lesson notes → practice (6–10 items, immediate feedback) → pass unit exam (≥75%) → next unit unlocks
2. Passing a unit exam creates SRS cards for that unit's vocab, kanji and grammar
3. Complete all units → level exam → next level unlocks
4. Free-navigation toggle in settings unlocks everything

## Sources & licences

This application uses the JMdict/EDICT and KANJIDIC dictionary files. These files are the property of the Electronic Dictionary Research and Development Group, and are used in conformance with the Group's licence. See [www.edrdg.org](https://www.edrdg.org/).

- **JMdict** — Japanese–English dictionary (~218k entries), CC BY-SA 4.0
- **KANJIDIC2** — Kanji dictionary (13,108 characters), CC BY-SA 4.0
- **KanjiVG** — Stroke order data (CC BY-SA 3.0)
- **Kradfile/Kradfile-u** — Radical decomposition of 13,108 kanji (EDRDG)
- **Tatoeba** — Example sentences (CC BY 2.0 FR)
- **Tanaka Corpus** — Example sentence pairs
- **JLPT lists** — Jonathan Waller's JLPT Resources (CC BY) via yomitan-jlpt-vocab

Many thanks to all the people involved in those projects! See `/about/sources` in the app.
