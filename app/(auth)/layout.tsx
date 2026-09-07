import Link from "next/link"
import { redirect } from "next/navigation"

import { Jp } from "@/components/jp"
import { getCurrentUser } from "@/lib/session"

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser()
  if (user) redirect("/dashboard")
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted/40 p-6">
      <Link href="/" className="flex flex-col items-center gap-1">
        <Jp jp="日本語" kana="にほんご" romaji="Nihongo" className="text-3xl font-bold" />
        <span className="text-sm text-muted-foreground">Learn Japanese — N5 to N1</span>
      </Link>
      <div className="w-full max-w-sm">{children}</div>
    </div>
  )
}
