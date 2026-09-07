"use server"

import type { FuriganaMode, ScriptMode } from "@/lib/japanese"
import { getSession } from "@/lib/session"
import { prisma } from "@/lib/db"

export type ScriptSettingsInput = {
  scriptMode?: ScriptMode
  furiganaMode?: FuriganaMode
  audioOn?: boolean
  dailyGoalXp?: number
  freeNav?: boolean
}

export async function updateScriptSettings(input: ScriptSettingsInput) {
  const session = await getSession()
  if (!session) return { ok: false as const, reason: "unauthenticated" }

  await prisma.userSettings.upsert({
    where: { userId: session.user.id },
    update: input,
    create: { userId: session.user.id, ...input },
  })
  return { ok: true as const }
}
