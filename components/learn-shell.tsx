import { LearnSidebar } from "@/components/learn-sidebar"
import type { SidebarData } from "@/lib/learn-sidebar"

/**
 * Sticky course sidebar under the app navbar.
 *
 * Navbar is `h-14` (3.5rem); main has `md:py-6` (1.5rem top padding). Natural
 * content top is therefore 5rem — so sticky `top-20` matches scroll position 0
 * (no jump when you start scrolling). Max height leaves room for main's bottom
 * padding so sticky doesn't get shoved up at the end of the page either.
 */
export function LearnShell({
  sidebar,
  children,
}: {
  sidebar: SidebarData
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-6">
      <aside className="sticky top-20 hidden max-h-[calc(100dvh-6.5rem)] w-64 shrink-0 self-start overflow-y-auto overscroll-contain rounded-xl border bg-card p-3 lg:block">
        <LearnSidebar
          level={sidebar.level}
          units={sidebar.units}
          currentUnitId={sidebar.currentUnitId}
          currentLessonId={sidebar.currentLessonId}
          completedLessons={sidebar.completedLessons}
        />
      </aside>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  )
}
