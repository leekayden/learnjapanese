import { KanaExplorer } from "@/components/kana-explorer"

export const metadata = { title: "Kana" }

export default function KanaPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Kana</h1>
        <p className="text-muted-foreground">
          Hiragana and katakana charts with stroke order, flashcards, and a quick quiz. Click any
          character to watch it drawn stroke by stroke.
        </p>
      </div>
      <KanaExplorer />
    </div>
  )
}
