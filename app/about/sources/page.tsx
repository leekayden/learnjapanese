import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = { title: "Sources & licences" }

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <h1 className="text-2xl font-bold">Sources &amp; licences</h1>
      <p className="text-sm text-muted-foreground">
        Many thanks to all the people involved in the projects below.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>JMdict / KANJIDIC (EDRDG)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            This application uses the JMdict/EDICT and KANJIDIC dictionary files. These files are
            the property of the Electronic Dictionary Research and Development Group, and are used
            in conformance with the Group&apos;s licence. See{" "}
            <a href="https://www.edrdg.org/" className="underline">
              www.edrdg.org
            </a>
            .
          </p>
          <p>Licence: Creative Commons Attribution-ShareAlike 4.0.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Example sentences — Tatoeba &amp; Tanaka Corpus</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Example sentences come from the Tatoeba project (
          <a href="https://tatoeba.org" className="underline">
            tatoeba.org
          </a>
          ) and the Tanaka Corpus, licensed under CC BY 2.0 FR.
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Radical decomposition — Kradfile / Kradfile-u</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Kanji search by radicals is based on the Kradfile and Kradfile-u files containing
          radical decomposition of 13,108 Japanese characters, distributed by EDRDG under the
          same group licence.
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Stroke order — KanjiVG</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Stroke-order data is derived from KanjiVG (
          <a href="https://kanjivg.tagaini.net/" className="underline">
            kanjivg.tagaini.net
          </a>
          ), copyright Ulrich Apel, released under the Creative Commons Attribution-ShareAlike 3.0
          licence.
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>JLPT vocabulary levels</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          JLPT level tags are based on Jonathan Waller&apos;s JLPT Resources lists (
          <a href="https://www.tanos.co.uk/jlpt/" className="underline">
            tanos.co.uk/jlpt
          </a>
          , CC BY) via the yomitan-jlpt-vocab project (CC BY-SA 4.0). Level labels are
          approximations — there is no official JLPT vocabulary list.
        </CardContent>
      </Card>
    </div>
  )
}
