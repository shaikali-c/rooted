import { NextResponse } from "next/server";
import { signJWT } from "@/lib/jwt";

export async function POST(req) {
  const { email, password } = await req.json();
  const token = signJWT({ id: 1, email });
  const res = NextResponse.json({ success: true });
  res.cookies.set("auth", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });
  return res;
}
