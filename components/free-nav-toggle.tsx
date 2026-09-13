"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import { Unlock, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { updateSettings } from "@/app/actions/progress"
import { cn } from "@/lib/utils"

/**
 * Quick toggle for free navigation — unlocks every unit and lesson without
 * requiring prior unit exams. Mirrors the Settings switch.
 */
export function FreeNavToggle({
  freeNav,
  className,
  compact = false,
}: {
  freeNav: boolean
  className?: string
  compact?: boolean
}) {
  const router = useRouter()
  const [on, setOn] = useState(freeNav)
  const [saving, setSaving] = useState(false)

  async function set(value: boolean) {
    setOn(value)
    setSaving(true)
    const res = await updateSettings({ freeNav: value })
    setSaving(false)
    if (res.ok) {
      toast.success(value ? "All lessons unlocked" : "Progression locks restored")
      router.refresh()
    } else {
      setOn(!value)
      toast.error("Sign in to change this setting")
    }
  }

  if (compact) {
    return (
      <div className={cn("flex items-center justify-between gap-3", className)}>
        <div className="flex min-w-0 items-center gap-2 text-sm">
          {on ? (
            <Unlock className="size-4 shrink-0 text-primary" />
          ) : (
            <Lock className="size-4 shrink-0 text-muted-foreground" />
          )}
          <span className="truncate">
            {on ? "All lessons unlocked" : "Unlock all lessons"}
          </span>
        </div>
        <Switch checked={on} disabled={saving} onCheckedChange={(v) => void set(v)} />
      </div>
    )
  }

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-3 rounded-xl border px-4 py-3",
        on ? "border-primary/40 bg-primary/5" : "bg-card",
        className,
      )}
    >
      <div className="min-w-0">
        <p className="flex items-center gap-2 text-sm font-medium">
          {on ? (
            <Unlock className="size-4 text-primary" />
          ) : (
            <Lock className="size-4 text-muted-foreground" />
          )}
          {on ? "Free navigation is on" : "Some lessons are locked"}
        </p>
        <p className="text-sm text-muted-foreground">
          {on
            ? "Every unit and lesson is open. Turn this off to restore exam gating."
            : "Unlock all units and lessons at once — skip unit exams if you want to browse freely."}
        </p>
      </div>
      <Button
        variant={on ? "outline" : "default"}
        size="sm"
        disabled={saving}
        onClick={() => void set(!on)}
      >
        {on ? "Lock progression" : "Unlock all lessons"}
      </Button>
    </div>
  )
}
