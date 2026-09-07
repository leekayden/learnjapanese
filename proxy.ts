import { type NextRequest, NextResponse } from "next/server"

import { getSessionCookie } from "better-auth/cookies"

const PROTECTED_PREFIXES = [
  "/dashboard",
  "/learn",
  "/lesson",
  "/review",
  "/vocab",
  "/kanji",
  "/settings",
]

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hasSession = getSessionCookie(request, { cookiePrefix: "learnjapanese" })

  if (!hasSession && PROTECTED_PREFIXES.some((p) => pathname.startsWith(p))) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Auth pages handle "already signed in" server-side (in their page
  // components) so a stale/invalid cookie can never cause a redirect loop.
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/learn/:path*",
    "/lesson/:path*",
    "/review/:path*",
    "/vocab/:path*",
    "/kanji/:path*",
    "/settings/:path*",
    "/login",
    "/signup",
  ],
}
