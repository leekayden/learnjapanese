import Link from "next/link"
import { ArrowRight, Flame, ListChecks, Target } from "lucide-react"

import { Jp } from "@/components/jp"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { prisma } from "@/lib/db"
import { localDay } from "@/lib/xp"
import { getCurrentUser } from "@/lib/session"
import { getNextLesson } from "@/lib/progress"

export const metadata = { title: "Dashboard" }

export default async function DashboardPage() {
  const user = await getCurrentUser()
  if (!user) return null

  const settings = await prisma.userSettings.findUnique({ where: { userId: user.id } })
  const dailyGoal = settings?.dailyGoalXp ?? 20

  const [dueCount, streak, xpAgg, nextLesson] = await Promise.all([
    prisma.srsCard.count({ where: { userId: user.id, due: { lte: new Date() }, suspended: false } }),
    prisma.streak.findUnique({ where: { userId: user.id } }),
    prisma.xpEvent.aggregate({
      where: { userId: user.id, day: localDay() },
      _sum: { amount: true },
    }),
    getNextLesson(user.id),
  ])

  const xpToday = xpAgg._sum.amount ?? 0
  const goalPct = Math.min(100, (xpToday / Math.max(1, dailyGoal)) * 100)
  const reviewsFirst = dueCount > 0

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Welcome back{user.name ? `, ${user.name}` : ""}</h1>
          <p className="text-muted-foreground">
            {reviewsFirst
              ? `You have ${dueCount} review${dueCount === 1 ? "" : "s"} due — clear those first.`
              : nextLesson
                ? "Pick up your next lesson."
                : "You're all caught up."}
          </p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="gap-1 py-1.5">
            <Flame className="size-3.5 text-orange-500" />
            {streak?.current ?? 0} day streak
          </Badge>
          <Badge variant="outline" className="gap-1 py-1.5">
            <Target className="size-3.5" />
            {xpToday} / {dailyGoal} XP
          </Badge>
        </div>
      </div>

      {/* Primary actions: reviews first when due, otherwise continue learning */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className={cnPrimary(reviewsFirst)}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <ListChecks className="size-5" /> Reviews due
            </CardTitle>
            <CardDescription>
              {dueCount
                ? "Spaced-repetition cards from units you've passed."
                : "Nothing due right now — nice."}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between gap-3">
            <span className="text-3xl font-bold tabular-nums">{dueCount}</span>
            <Button
              variant={dueCount ? "default" : "outline"}
              render={<Link href="/review" />}
            >
              {dueCount ? "Start review" : "Open review"}{" "}
              <ArrowRight className="ml-1 size-4" />
            </Button>
          </CardContent>
        </Card>

        <Card className={cnPrimary(!reviewsFirst)}>
          <CardHeader className="pb-3">
            <CardTitle>Continue learning</CardTitle>
            <CardDescription>
              {nextLesson
                ? `${nextLesson.level} · Unit ${nextLesson.unitOrder} · Lesson ${nextLesson.order}`
                : "Every unlocked lesson is practiced."}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between gap-3">
            {nextLesson ? (
              <>
                <div className="min-w-0">
                  <Jp
                    jp={nextLesson.grammarLabel}
                    kana={nextLesson.grammarLabel}
                    className="text-lg font-medium"
                  />
                  <p className="truncate text-sm text-muted-foreground">{nextLesson.title}</p>
                </div>
                <Button render={<Link href={`/lesson/${nextLesson.id}`} />}>
                  Resume <ArrowRight className="ml-1 size-4" />
                </Button>
              </>
            ) : (
              <>
                <span className="text-sm text-muted-foreground">All caught up — well done!</span>
                <Button variant="outline" render={<Link href="/learn" />}>
                  Browse levels
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Today&apos;s goal</CardTitle>
          <CardDescription>
            {xpToday} of {dailyGoal} XP — small steps count.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Progress value={goalPct} />
          <div className="flex flex-wrap gap-2">
            <Button variant="ghost" size="sm" render={<Link href="/learn" />}>
              Course map
            </Button>
            {nextLesson && (
              <Button variant="ghost" size="sm" render={<Link href={`/learn/${nextLesson.level.toLowerCase()}`} />}>
                {nextLesson.level} units
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function cnPrimary(on: boolean) {
  return on ? "border-primary/40 ring-1 ring-primary/15" : undefined
}
