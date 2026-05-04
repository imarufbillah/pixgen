import { NextResponse } from "next/server";
import { auth } from "./app/lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { pathname } = new URL(request.url);

  if (pathname === "/photos") return NextResponse.next();

  if (session) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

export const config = {
  matcher: ["/photos/:path*", "/profile"],
};
