import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"

import { prisma } from "@/lib/db"

export const auth = betterAuth({
  appName: "LearnJapanese",
  database: prismaAdapter(prisma, { provider: "mysql" }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 30,
    updateAge: 60 * 60 * 24,
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,
    },
  },
  rateLimit: {
    enabled: true,
    window: 60,
    max: 50,
  },
  trustedOrigins: [
    process.env.BETTER_AUTH_URL ?? "http://localhost:3000",
  ],
  advanced: {
    // Isolate cookies from other better-auth apps on localhost (e.g. quiz-renderer).
    cookiePrefix: "learnjapanese",
  },
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          await prisma.userSettings
            .create({ data: { userId: user.id } })
            .catch(() => {})
          await prisma.streak
            .create({ data: { userId: user.id } })
            .catch(() => {})
        },
      },
    },
  },
})
