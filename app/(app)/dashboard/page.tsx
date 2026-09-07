import Link from "next/link"
import { ArrowRight, CheckCircle2, Flame, ListChecks, Target } from "lucide-react"

import { Jp } from "@/components/jp"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { prisma } from "@/lib/db"
import { localDay } from "@/lib/xp"
import { getCurrentUser } from "@/lib/session"

export const metadata = { title: "Dashboard" }

export default async function DashboardPage() {
  const user = await getCurrentUser()
  if (!user) return null

  const [dueCount, streak, xpToday, firstUnit, nextLesson, lastLevelExam] = await Promise.all([
    prisma.srsCard.count({ where: { userId: user.id, due: { lte: new Date() }, suspended: false } }),
    prisma.streak.findUnique({ where: { userId: user.id } }),
    prisma.xpEvent.count({ where: { userId: user.id, day: localDay() } }),
    prisma.unit.findFirst({ where: { level: "N5" }, orderBy: { order: "asc" }, include: { lessons: { orderBy: { order: "asc" }, take: 1 } } }),
    prisma.lessonProgress.findFirst({
      where: { userId: user.id, status: { not: "COMPLETED" }, lesson: { unit: { level: "N5" } } },
      orderBy: { lesson: { order: "asc" } },
      include: { lesson: { select: { id: true, title: true, grammarLabel: true } } },
    }),
    prisma.examAttempt.findFirst({ where: { userId: user.id, passed: true }, orderBy: { createdAt: "desc" } }),
  ])

  const continueLesson = nextLesson?.lesson ?? firstUnit?.lessons[0]

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Welcome back{user.name ? `, ${user.name}` : ""}</h1>
          <p className="text-muted-foreground">{lastLevelExam ? "Keep the streak alive." : "Let's learn some Japanese."}</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="gap-1 py-1.5">
            <Flame className="size-3.5 text-orange-500" />
            {streak?.current ?? 0} day streak
          </Badge>
          <Badge variant="outline" className="gap-1 py-1.5">
            <Target className="size-3.5" />
            {xpToday} XP today
          </Badge>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Continue learning</CardTitle>
            <CardDescription>Pick up where you left off.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between gap-3">
            {continueLesson ? (
              <>
                <div className="min-w-0">
                  <Jp jp={continueLesson.grammarLabel} kana={continueLesson.grammarLabel} className="text-lg font-medium" />
                  <p className="truncate text-sm text-muted-foreground">{continueLesson.title}</p>
                </div>
                <Button render={<Link href={`/lesson/${continueLesson.id}`} />}>
                  Resume <ArrowRight className="ml-1 size-4" />
                </Button>
              </>
            ) : (
              <>
                <span className="text-sm text-muted-foreground">All caught up — well done!</span>
                <Button variant="outline" render={<Link href="/learn" />}>
                  Browse
                </Button>
              </>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ListChecks className="size-5" /> Reviews due
            </CardTitle>
            <CardDescription>Spaced-repetition cards waiting.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <span className="text-3xl font-bold">{dueCount}</span>
            <Button variant={dueCount ? "default" : "outline"} render={<Link href="/review" />}>
              Review now
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Today's goal</CardTitle>
          <CardDescription>
            {xpToday} of {20} XP — small steps count.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${Math.min(100, (xpToday / 20) * 100)}%` }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
