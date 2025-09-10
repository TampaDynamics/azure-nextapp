// middleware.ts
import { auth } from "@/lib/auth/auth";
import { NextResponse } from "next/server";

const protectedRoutes = ["/dashboard", "/profile"];
const authPageRoutes = ["/login"];
const apiAuthPrefix = "/api/auth";

export default auth(async (req) => {
  const { nextUrl } = req;
  const path = nextUrl.pathname;

  const isApiAuthRoute = path.startsWith(apiAuthPrefix);
  if (isApiAuthRoute) return NextResponse.next();

  // req.auth is a Session (or null) property, not a callable function — do not await/call it
  const authData = req.auth;
  const isLoggedIn = !!authData;

  if (protectedRoutes.includes(path) && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  if (isLoggedIn && authPageRoutes.includes(path)) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
