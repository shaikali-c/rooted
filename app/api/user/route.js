import { verifyJWT } from "@/lib/jwt";
import { NextResponse } from "next/server";

export async function GET(req) {
  const token = req.cookies.get("auth")?.value;
  const payload = await verifyJWT(token);
  if (!payload)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ id: payload.id }, { status: 200 });
}
