"use client"

import { useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { updateSettings } from "@/app/actions/progress"
import type { FuriganaMode, ScriptMode } from "@/lib/japanese"

type Settings = {
  scriptMode: ScriptMode
  furiganaMode: FuriganaMode
  showRomaji: boolean
  audioOn: boolean
  dailyGoalXp: number
  freeNav: boolean
}

export function SettingsForm({ initial }: { initial: Settings }) {
  const [settings, setSettings] = useState<Settings>(initial)
  const [saving, setSaving] = useState(false)

  async function save(next: Partial<Settings>) {
    const merged = { ...settings, ...next }
    setSettings(merged)
    setSaving(true)
    const res = await updateSettings(next)
    setSaving(false)
    if (res.ok) toast.success("Saved")
    else toast.error("Sign in to save settings")
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Japanese text display</CardTitle>
          <CardDescription>How Japanese is shown across the whole app.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Script mode</Label>
            <div className="flex flex-wrap gap-2">
              {(
                [
                  ["FURIGANA", "漢字 + furigana"],
                  ["HIRAGANA", "Hiragana only"],
                  ["ROMAJI", "Romaji"],
                ] as const
              ).map(([value, label]) => (
                <Button
                  key={value}
                  variant={settings.scriptMode === value ? "default" : "outline"}
                  onClick={() => save({ scriptMode: value })}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
          {settings.scriptMode === "FURIGANA" && (
            <div className="flex items-center justify-between">
              <div>
                <Label>Romaji overlay</Label>
                <p className="text-sm text-muted-foreground">Show romaji above furigana (pinyin-style).</p>
              </div>
              <Switch checked={settings.showRomaji} onCheckedChange={(v) => save({ showRomaji: v })} />
            </div>
          )}
          {settings.scriptMode === "FURIGANA" && (
            <div className="space-y-2">
              <Label>Furigana</Label>
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    ["ALWAYS", "Always show"],
                    ["HOVER", "On hover"],
                    ["OFF", "Hide"],
                  ] as const
                ).map(([value, label]) => (
                  <Button
                    key={value}
                    variant={settings.furiganaMode === value ? "default" : "outline"}
                    onClick={() => save({ furiganaMode: value })}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Learning</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label>Daily XP goal: {settings.dailyGoalXp}</Label>
            <Slider
              value={[settings.dailyGoalXp]}
              min={5}
              max={100}
              step={5}
              onValueChange={(v) => {
                const goal = typeof v === "number" ? v : (v as readonly number[])[0] ?? 20
                setSettings((s) => ({ ...s, dailyGoalXp: goal }))
                void save({ dailyGoalXp: goal })
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Audio buttons</Label>
              <p className="text-sm text-muted-foreground">Text-to-speech buttons on Japanese text.</p>
            </div>
            <Switch checked={settings.audioOn} onCheckedChange={(v) => save({ audioOn: v })} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Unlock all lessons</Label>
              <p className="text-sm text-muted-foreground">
                Free navigation — open every unit and lesson without passing exams first.
              </p>
            </div>
            <Switch checked={settings.freeNav} onCheckedChange={(v) => save({ freeNav: v })} />
          </div>
        </CardContent>
      </Card>
      {saving && <p className="text-xs text-muted-foreground">Saving…</p>}
    </div>
  )
}
