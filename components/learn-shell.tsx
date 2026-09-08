import { LearnSidebar } from "@/components/learn-sidebar"
import type { SidebarData } from "@/lib/learn-sidebar"

export function LearnShell({
  sidebar,
  children,
}: {
  sidebar: SidebarData
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-6">
      <aside className="sticky top-20 hidden h-[calc(100vh-6rem)] w-64 shrink-0 overflow-y-auto rounded-xl border bg-card p-3 lg:block">
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
