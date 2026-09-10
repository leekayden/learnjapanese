"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { toast } from "sonner"
import { BookOpen, GraduationCap, Languages, Library, ListChecks, LogOut, Package, Settings, Type, User } from "lucide-react"

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
  { href: "/resources/kana", label: "Kana", icon: Languages },
  { href: "/vocab", label: "Vocab", icon: BookOpen },
  { href: "/kanji", label: "Kanji", icon: Type },
  { href: "/dictionary", label: "Dictionary", icon: Library },
  { href: "/quiz-exports", label: "Quiz packs", icon: Package },
]

type PillBox = { left: number; top: number; width: number; height: number }

function NavPillLinks({
  pathname,
  className,
  linkClassName,
  scrollActiveIntoView = false,
}: {
  pathname: string
  className?: string
  linkClassName?: string
  scrollActiveIntoView?: boolean
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pill, setPill] = useState<PillBox | null>(null)

  const activeHref =
    NAV_LINKS.filter((link) => pathname.startsWith(link.href)).sort(
      (a, b) => b.href.length - a.href.length,
    )[0]?.href ?? null

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container || !activeHref) {
      setPill(null)
      return
    }

    const el = container.querySelector<HTMLElement>(`[data-nav-href="${activeHref}"]`)
    if (!el) {
      setPill(null)
      return
    }

    setPill({
      left: el.offsetLeft,
      top: el.offsetTop,
      width: el.offsetWidth,
      height: el.offsetHeight,
    })

    if (scrollActiveIntoView) {
      const target = el.offsetLeft - container.clientWidth / 2 + el.offsetWidth / 2
      container.scrollTo({ left: Math.max(0, target), behavior: "smooth" })
    }
  }, [activeHref, pathname, scrollActiveIntoView])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const update = () => {
      if (!activeHref) {
        setPill(null)
        return
      }
      const el = container.querySelector<HTMLElement>(`[data-nav-href="${activeHref}"]`)
      if (!el) {
        setPill(null)
        return
      }
      setPill({
        left: el.offsetLeft,
        top: el.offsetTop,
        width: el.offsetWidth,
        height: el.offsetHeight,
      })
    }

    const ro = new ResizeObserver(update)
    ro.observe(container)
    window.addEventListener("resize", update)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", update)
    }
  }, [activeHref])

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute rounded-md bg-accent transition-[left,top,width,height] duration-300 ease-out",
          pill ? "opacity-100" : "opacity-0",
        )}
        style={
          pill
            ? { left: pill.left, top: pill.top, width: pill.width, height: pill.height }
            : undefined
        }
      />
      {NAV_LINKS.map((link) => {
        const active = activeHref === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            data-nav-href={link.href}
            className={cn(
              "relative z-10 rounded-md text-sm font-medium transition-colors hover:text-accent-foreground",
              active ? "text-accent-foreground" : "text-muted-foreground",
              linkClassName,
            )}
          >
            {scrollActiveIntoView ? (
              <>
                <link.icon className="size-3.5" />
                {link.label}
              </>
            ) : (
              link.label
            )}
          </Link>
        )
      })}
    </div>
  )
}

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
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-4 px-4 md:px-6">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <Jp jp="日本語" kana="にほんご" romaji="Nihongo" className="text-lg" />
        </Link>

        <NavPillLinks
          pathname={pathname}
          className="hidden items-center gap-1 md:flex"
          linkClassName="px-3 py-1.5"
        />

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

      <NavPillLinks
        pathname={pathname}
        className="flex w-full gap-1 overflow-x-auto border-t px-4 py-1.5 md:hidden"
        linkClassName="flex shrink-0 items-center gap-1 px-2.5 py-1 text-xs"
        scrollActiveIntoView
      />
    </header>
  )
}
