import Link from "next/link"
import { redirect } from "next/navigation"

import { Jp } from "@/components/jp"
import { Button } from "@/components/ui/button"
import { getCurrentUser } from "@/lib/session"

export default async function LandingPage() {
  const user = await getCurrentUser()
  if (user) redirect("/dashboard")

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-8 p-6 text-center">
      <div className="space-y-3">
        <Jp jp="日本語を学ぼう" kana="にほんごをまなぼう" romaji="Nihongo o manabou" className="text-5xl font-bold" />
        <p className="max-w-xl text-muted-foreground">
          A structured course from N5 through N1 — every grammar point explained plainly,
          vocabulary introduced step by step, kanji with stroke order, and practice at every
          step.
        </p>
      </div>
      <div className="flex gap-3">
        <Button size="lg" render={<Link href="/signup" />}>
          Start learning
        </Button>
        <Button size="lg" variant="outline" render={<Link href="/login" />}>
          Sign in
        </Button>
      </div>
    </div>
  )
}
