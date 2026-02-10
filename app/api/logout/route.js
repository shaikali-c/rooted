import { NextResponse } from "next/server";

export async function GET(req) {
  const res = NextResponse.redirect(new URL("/signup", req.url));
  res.cookies.delete("auth");
  res.cookies.delete("protected");
  res.cookies.delete("owner");
  return res;
}
