"use client"

import { Suspense, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "@/lib/auth-client"

function LoginForm() {
  const searchParams = useSearchParams()
  const rawCallback = searchParams.get("callbackUrl")
  const callbackUrl =
    rawCallback &&
    rawCallback.startsWith("/") &&
    !rawCallback.startsWith("/login") &&
    !rawCallback.startsWith("/signup")
      ? rawCallback
      : "/dashboard"

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const { error } = await signIn.email({ email, password })
      if (error) {
        setLoading(false)
        toast.error(error.message ?? "Could not sign in")
        return
      }
      window.location.href = callbackUrl
    } catch (err: unknown) {
      setLoading(false)
      toast.error(err instanceof Error ? err.message : "Could not sign in")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Welcome back — continue where you left off.</CardDescription>
      </CardHeader>
      <form onSubmit={onSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="mt-6 flex flex-col gap-3">
          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader2 className="mr-2 size-4 animate-spin" />}
            Sign in
          </Button>
          <p className="text-sm text-muted-foreground">
            No account yet?{" "}
            <Link href="/signup" className="font-medium text-primary underline-offset-4 hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  )
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}
