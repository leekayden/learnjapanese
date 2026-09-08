"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { toast } from "sonner"
import { BookOpen, GraduationCap, Library, ListChecks, LogOut, Package, Settings, Type, User } from "lucide-react"

import { Jp } from "@/components/jp"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut } from "@/lib/auth-client"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "/learn", label: "Learn", icon: GraduationCap },
  { href: "/review", label: "Review", icon: ListChecks },
  { href: "/vocab", label: "Vocab", icon: BookOpen },
  { href: "/kanji", label: "Kanji", icon: Type },
  { href: "/dictionary", label: "Dictionary", icon: Library },
  { href: "/quiz-exports", label: "Quiz packs", icon: Package },
]

export function AppNavbar({ userName, userEmail }: { userName: string; userEmail: string }) {
  const pathname = usePathname()
  const router = useRouter()

  async function onSignOut() {
    await signOut()
    toast.success("Signed out")
    router.push("/login")
    router.refresh()
  }

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <Jp jp="日本語" kana="にほんご" romaji="Nihongo" className="text-lg" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                pathname.startsWith(link.href) && "bg-accent text-accent-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="ghost" size="icon" className="rounded-full" />}
            >
              <Avatar className="size-8">
                <AvatarFallback>
                  {userName ? userName.slice(0, 1).toUpperCase() : <User className="size-4" />}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="text-sm font-medium">{userName}</div>
                <div className="text-xs font-normal text-muted-foreground">{userEmail}</div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem render={<Link href="/settings" />}>
                <Settings className="mr-2 size-4" /> Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onSignOut}>
                <LogOut className="mr-2 size-4" /> Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <nav className="flex gap-1 overflow-x-auto border-t px-2 py-1.5 md:hidden">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex shrink-0 items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium text-muted-foreground",
              pathname.startsWith(link.href) && "bg-accent text-accent-foreground",
            )}
          >
            <link.icon className="size-3.5" />
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
