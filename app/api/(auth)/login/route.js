import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { signJWT } from "@/lib/signJWT";
import bcrypt from "bcrypt";
import { sha256 } from "@/helpers/sha256";

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: "Missing credentials" },
        { status: 400 },
      );
    }

    const { data, error } = await supabase
      .from("owners")
      .select("id, password")
      .eq("username", username)
      .single();

    if (!data) {
      return NextResponse.json(
        { error: "Username not found" },
        { status: 400 },
      );
    }

    const isValid = await bcrypt.compare(password, data.password);
    if (!isValid) {
      return NextResponse.json(
        { error: "Incorrect password" },
        { status: 400 },
      );
    }

    const token = signJWT({
      id: data.id,
      owner: sha256(username),
    });

    const res = NextResponse.json({ success: true });
    res.cookies.set("auth", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    return res;
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
