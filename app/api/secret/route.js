import { encryptData } from "@/lib/e";
import { verifyJWT } from "@/lib/jwt";
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";
import { sha256 } from "@/helpers/sha256";

export async function POST(req) {
  const token = req.cookies.get("auth")?.value;
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const payload = await verifyJWT(token);
  if (!payload?.id) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
  const { data, error } = await supabase
    .from("owners")
    .select("password, username")
    .eq("id", payload.id)
    .single();
  if (error || !data) {
    return NextResponse.json({ error: "Owner not found" }, { status: 404 });
  }
  const { password, username } = data;
  const unique_uname_hash = sha256(username);

  const body = await req.json();
  const body_s = JSON.stringify(body);
  const _encrypt = await encryptData(body_s, password);

  result = await supabase
    .from("secrets")
    .update({
      payload: _encrypt,
      owner: unique_uname_hash,
    })
    .eq("uid", body.uid)
    .select()
    .single();

  return NextResponse.json({ success: true, id: result.id }, { status: 201 });
}
