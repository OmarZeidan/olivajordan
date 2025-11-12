// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const url = req.nextUrl.pathname;

  // Log to confirm middleware runs
  console.log("MIDDLEWARE HIT:", url);

  // Protect admin + the content API
  if (url.startsWith("/admin") || url.startsWith("/api/content")) {
    const auth = req.headers.get("authorization");
    if (!auth?.startsWith("Basic ")) {
      return new NextResponse("Unauthorized", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Oliva Admin"' },
      });
    }

    const [user, pass] = atob(auth.replace("Basic ", "")).split(":");
    if (user !== process.env.BASIC_USER || pass !== process.env.BASIC_PASS) {
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/content/:path*"],
};
