"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { CheckCircle2, Circle, Lock, PlayCircle } from "lucide-react"

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
  // Start with the current (or first) unit expanded
  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set(currentUnitId ? [currentUnitId] : units.filter((u) => u.unlocked).slice(0, 1).map((u) => u.id))
  )

  // First incomplete lesson in the first unlocked unit — the "up next" target
  let upNextLessonId: string | null = null
  for (const unit of units) {
    if (!unit.unlocked) continue
    const next = unit.lessons.find((l) => !completedLessons.includes(l.id))
    if (next) {
      upNextLessonId = next.id
      break
    }
  }

  function toggle(unitId: string, unlocked: boolean) {
    if (!unlocked) return
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(unitId)) next.delete(unitId)
      else next.add(unitId)
      return next
    })
  }

  return (
    <nav className="space-y-0.5">
      <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {level} Course
      </p>
      {units.map((unit) => {
        const isExpanded = expanded.has(unit.id) && unit.unlocked
        const isCurrent = unit.id === currentUnitId
        const doneCount = unit.lessons.filter((l) => completedLessons.includes(l.id)).length

        return (
          <div key={unit.id}>
            <button
              type="button"
              onClick={() => toggle(unit.id, unit.unlocked)}
              disabled={!unit.unlocked}
              aria-expanded={isExpanded}
              className={cn(
                "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors",
                isCurrent && unit.unlocked ? "bg-accent font-medium" : "hover:bg-accent/50",
                !unit.unlocked && "cursor-default opacity-50 hover:bg-transparent",
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
              {unit.unlocked ? (
                <Chevron expanded={isExpanded} />
              ) : (
                <span className="size-3.5 shrink-0" aria-hidden />
              )}
            </button>

            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="ml-3 border-l pl-2 pb-1">
                  {unit.lessons.map((lesson, i) => {
                    const isActive = lesson.id === currentLessonId
                    const isDone = completedLessons.includes(lesson.id)
                    const isUpNext = lesson.id === upNextLessonId && !isDone
                    return (
                      <Link
                        key={lesson.id}
                        href={`/lesson/${lesson.id}`}
                        tabIndex={isExpanded ? 0 : -1}
                        className={cn(
                          "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-all duration-200",
                          isExpanded
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-1 opacity-0",
                          isActive
                            ? "bg-primary/10 font-medium text-primary"
                            : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                        )}
                        style={
                          isExpanded
                            ? { transitionDelay: `${Math.min(i * 28, 140)}ms` }
                            : { transitionDelay: "0ms" }
                        }
                      >
                        {isDone ? (
                          <CheckCircle2 className="size-3.5 shrink-0 text-green-600" />
                        ) : isUpNext ? (
                          <PlayCircle className="size-3.5 shrink-0 text-primary" />
                        ) : (
                          <Circle className="size-3 shrink-0" />
                        )}
                        <span className="min-w-0 flex-1 truncate">
                          {lesson.order}. {lesson.grammarLabel}
                        </span>
                        {isUpNext && !isActive && (
                          <span className="shrink-0 text-[10px] font-medium uppercase tracking-wide text-primary">
                            next
                          </span>
                        )}
                      </Link>
                    )
                  })}
                  <Link
                    href={`/learn/${level.toLowerCase()}/${unit.id}`}
                    tabIndex={isExpanded ? 0 : -1}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-2 py-1.5 text-xs transition-all duration-200",
                      isExpanded ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0",
                      pathname === `/learn/${level.toLowerCase()}/${unit.id}`
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-muted-foreground hover:bg-accent/50",
                    )}
                    style={
                      isExpanded
                        ? { transitionDelay: `${Math.min(unit.lessons.length * 28, 160)}ms` }
                        : { transitionDelay: "0ms" }
                    }
                  >
                    <Circle className="size-3 shrink-0" />
                    Unit overview & exam
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </nav>
  )
}

/** Chevron that only rotates for unlocked, expandable units. */
function Chevron({ expanded }: { expanded: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={cn(
        "size-3.5 shrink-0 text-muted-foreground transition-transform duration-300 ease-out",
        expanded && "rotate-180",
      )}
      aria-hidden
    >
      <path
        d="M4 6l4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
