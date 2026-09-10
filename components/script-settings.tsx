"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

import type { FuriganaMode, ScriptMode } from "@/lib/japanese"
import { SCRIPT_MODES } from "@/lib/japanese"
import { updateScriptSettings } from "@/app/actions/settings"

type ScriptSettings = {
  scriptMode: ScriptMode
  furiganaMode: FuriganaMode
  showRomaji: boolean
  setScriptMode: (mode: ScriptMode) => void
  setFuriganaMode: (mode: FuriganaMode) => void
  setShowRomaji: (v: boolean) => void
  cycleScriptMode: () => void
}

const ScriptSettingsContext = createContext<ScriptSettings | null>(null)

const LS_KEY = "lj-script-settings"

type Persisted = { scriptMode: ScriptMode; furiganaMode: FuriganaMode; showRomaji: boolean }

export function ScriptSettingsProvider({
  children,
  initialScriptMode = "FURIGANA",
  initialFuriganaMode = "ALWAYS",
  initialShowRomaji = false,
  authenticated,
}: {
  children: React.ReactNode
  initialScriptMode?: ScriptMode
  initialFuriganaMode?: FuriganaMode
  initialShowRomaji?: boolean
  authenticated: boolean
}) {
  const [scriptMode, setScriptModeState] = useState<ScriptMode>(initialScriptMode)
  const [furiganaMode, setFuriganaModeState] = useState<FuriganaMode>(initialFuriganaMode)
  const [showRomaji, setShowRomajiState] = useState(initialShowRomaji)

  // Guests: restore persisted choice from localStorage.
  // Deferred to a microtask so the first paint uses server-rendered defaults
  // (avoids a hydration mismatch and a synchronous cascade in the effect).
  useEffect(() => {
    if (authenticated) return
    queueMicrotask(() => {
      try {
        const raw = localStorage.getItem(LS_KEY)
        if (!raw) return
        const parsed = JSON.parse(raw) as Partial<Persisted>
        if (parsed.scriptMode) setScriptModeState(parsed.scriptMode)
        if (parsed.furiganaMode) setFuriganaModeState(parsed.furiganaMode)
        if (parsed.showRomaji !== undefined) setShowRomajiState(parsed.showRomaji)
      } catch {
        // ignore malformed storage
      }
    })
  }, [authenticated])

  const persist = useCallback(
    (next: Persisted) => {
      if (authenticated) {
        void updateScriptSettings(next)
      } else {
        try {
          localStorage.setItem(LS_KEY, JSON.stringify(next))
        } catch {
          // storage unavailable — settings just won't persist
        }
      }
    },
    [authenticated],
  )

  const setScriptMode = useCallback(
    (mode: ScriptMode) => {
      setScriptModeState(mode)
      persist({ scriptMode: mode, furiganaMode, showRomaji })
    },
    [furiganaMode, showRomaji, persist],
  )

  const setFuriganaMode = useCallback(
    (mode: FuriganaMode) => {
      setFuriganaModeState(mode)
      persist({ scriptMode, furiganaMode: mode, showRomaji })
    },
    [scriptMode, showRomaji, persist],
  )

  const cycleScriptMode = useCallback(() => {
    const next = SCRIPT_MODES[(SCRIPT_MODES.indexOf(scriptMode) + 1) % SCRIPT_MODES.length]
    setScriptModeState(next)
    persist({ scriptMode: next, furiganaMode, showRomaji })
  }, [scriptMode, furiganaMode, showRomaji, persist])

  const setShowRomaji = useCallback(
    (v: boolean) => {
      setShowRomajiState(v)
      persist({ scriptMode, furiganaMode, showRomaji: v })
    },
    [scriptMode, furiganaMode, persist],
  )

  const value = useMemo(
    () => ({ scriptMode, furiganaMode, showRomaji, setScriptMode, setFuriganaMode, setShowRomaji, cycleScriptMode }),
    [scriptMode, furiganaMode, showRomaji, setScriptMode, setFuriganaMode, setShowRomaji, cycleScriptMode],
  )

  return <ScriptSettingsContext.Provider value={value}>{children}</ScriptSettingsContext.Provider>
}

export function useScriptSettings() {
  const ctx = useContext(ScriptSettingsContext)
  if (!ctx) throw new Error("useScriptSettings must be used inside ScriptSettingsProvider")
  return ctx
}
