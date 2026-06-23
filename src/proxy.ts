import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const forwardedHost = req.headers.get("x-forwarded-host");
  const hostHeader = forwardedHost ?? req.headers.get("host") ?? "";
  const host = hostHeader.split(":")[0];

  if (host === "www.searchrivals.com") {
    const url = req.nextUrl.clone();
    url.hostname = "searchrivals.com";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
