import { headers } from "next/headers"

import { auth } from "@/lib/auth"
import { prisma } from "@/lib/db"

export async function getSession() {
  return auth.api.getSession({ headers: await headers() })
}

export async function getCurrentUser() {
  return (await getSession())?.user ?? null
}

export async function getUserSettings() {
  const session = await getSession()
  if (!session) return null
  return prisma.userSettings.findUnique({ where: { userId: session.user.id } })
}
