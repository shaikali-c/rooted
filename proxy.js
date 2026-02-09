import { NextResponse } from "next/server";
import { verifyJWT } from "./lib/jwt";

export async function proxy(req) {
  const token = req.cookies.get("auth")?.value;
  const protected_key_check = req.cookies.get("protected")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (!protected_key_check)
    return NextResponse.redirect(new URL("/protected", req.url));

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
