"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ChevronDown, CheckCircle2, Circle, Lock } from "lucide-react"

import { cn } from "@/lib/utils"

type SidebarLesson = {
  id: string
  title: string
  grammarLabel: string
  order: number
}

type SidebarUnit = {
  id: string
  level: string
  order: number
  title: string
  lessons: SidebarLesson[]
  unlocked: boolean
  passed: boolean
  currentLessonId?: string
}

export function LearnSidebar({
  level,
  units,
  currentUnitId,
  currentLessonId,
  completedLessons,
}: {
  level: string
  units: SidebarUnit[]
  currentUnitId?: string
  currentLessonId?: string
  completedLessons: string[]
}) {
  const pathname = usePathname()
  // Start with the current unit expanded
  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set(currentUnitId ? [currentUnitId] : units.slice(0, 1).map((u) => u.id))
  )

  function toggle(unitId: string) {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(unitId)) next.delete(unitId)
      else next.add(unitId)
      return next
    })
  }

  return (
    <nav className="space-y-1">
      <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {level} Course
      </p>
      {units.map((unit) => {
        const isExpanded = expanded.has(unit.id)
        const isCurrent = unit.id === currentUnitId
        const doneCount = unit.lessons.filter((l) => completedLessons.includes(l.id)).length

        return (
          <div key={unit.id}>
            <button
              type="button"
              onClick={() => toggle(unit.id)}
              className={cn(
                "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors",
                isCurrent ? "bg-accent font-medium" : "hover:bg-accent/50",
                !unit.unlocked && "opacity-50",
              )}
            >
              {unit.passed ? (
                <CheckCircle2 className="size-4 shrink-0 text-green-600" />
              ) : !unit.unlocked ? (
                <Lock className="size-3.5 shrink-0 text-muted-foreground" />
              ) : (
                <Circle className={cn("size-3.5 shrink-0", doneCount > 0 ? "text-primary" : "text-muted-foreground")} />
              )}
              <span className="min-w-0 flex-1 truncate">
                {unit.order}. {unit.title}
              </span>
              <ChevronDown className={cn("size-3.5 shrink-0 transition-transform", isExpanded && "rotate-180")} />
            </button>

            {isExpanded && unit.unlocked && (
              <div className="ml-4 border-l pl-2">
                {unit.lessons.map((lesson) => {
                  const isActive = lesson.id === currentLessonId
                  const isDone = completedLessons.includes(lesson.id)
                  return (
                    <Link
                      key={lesson.id}
                      href={`/lesson/${lesson.id}`}
                      className={cn(
                        "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                        isActive ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                      )}
                    >
                      {isDone ? (
                        <CheckCircle2 className="size-3.5 shrink-0 text-green-600" />
                      ) : (
                        <Circle className="size-3 shrink-0" />
                      )}
                      <span className="min-w-0 flex-1 truncate">
                        {lesson.order}. {lesson.grammarLabel}
                      </span>
                    </Link>
                  )
                })}
                <Link
                  href={`/learn/${level.toLowerCase()}/${unit.id}`}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-2 py-1.5 text-xs transition-colors",
                    pathname === `/learn/${level.toLowerCase()}/${unit.id}`
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground hover:bg-accent/50",
                  )}
                >
                  <Circle className="size-3 shrink-0" />
                  Unit overview & exam
                </Link>
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}
