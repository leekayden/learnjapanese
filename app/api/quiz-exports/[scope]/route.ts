import { NextRequest } from "next/server"

import { buildLessonQuizJson, buildUnitQuizJson } from "@/lib/quiz-export"

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ scope: string }> },
) {
  const { scope } = await params
  const json = scope.startsWith("u-") ? await buildUnitQuizJson(scope) : await buildLessonQuizJson(scope)
  if (!json) return new Response("Not found", { status: 404 })
  return new Response(JSON.stringify(json, null, 1), {
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": `attachment; filename="learnjapanese-${scope}.json"`,
    },
  })
}
