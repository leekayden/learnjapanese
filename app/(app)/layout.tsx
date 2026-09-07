import { redirect } from "next/navigation"

import { AppNavbar } from "@/components/app-navbar"
import { getCurrentUser } from "@/lib/session"

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser()
  if (!user) redirect("/login")

  return (
    <div className="min-h-svh">
      <AppNavbar userName={user.name} userEmail={user.email} />
      <main className="mx-auto max-w-6xl p-4 md:p-6">{children}</main>
    </div>
  )
}
