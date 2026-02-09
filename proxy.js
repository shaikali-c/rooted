import { NextResponse } from "next/server";
import { verifyJWT } from "./lib/jwt";

export async function proxy(req) {
  const token = req.cookies.get("auth")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const payload = await verifyJWT(token);
    let response = NextResponse.next();
    response.cookies.set("owner", payload.owner);
    return response;
  } catch (err) {
    const res = NextResponse.redirect(new URL("/login", req.url));
    res.cookies.delete("auth");
    return res;
  }
}

export const config = {
  matcher: ["/new/:path*", "/home/:path*"],
};
