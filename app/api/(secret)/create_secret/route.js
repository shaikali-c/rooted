import { sha256 } from "@/helpers/sha256";
import { verifyJWT } from "@/lib/jwt";
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req) {
  const res = await req.json();
  const create_secret = await supabase
    .from("secrets")
    .insert({ uid: res.hash });
  return NextResponse.json({ id: create_secret.id });
}
