import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || ""

  // Force canonical host (no www)
  if (host === "www.searchrivals.com") {
    const url = req.nextUrl.clone()
    url.hostname = "searchrivals.com"
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
}
