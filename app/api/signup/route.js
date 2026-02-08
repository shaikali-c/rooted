import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import bcrypt from "bcrypt";
import { signJWT } from "@/lib/signJWT";
import { redirect } from "next/navigation";

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: "Missing credentials" },
        { status: 400 },
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password too short" },
        { status: 400 },
      );
    }

    const cleanUsername = username.trim().toLowerCase();
    const passwordHash = await bcrypt.hash(password, 12);

    const { data, error } = await supabase
      .from("owners")
      .insert({
        username: cleanUsername,
        password: passwordHash,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: "Username already exists" },
        { status: 409 },
      );
    }

    const token = signJWT({
      id: data.id,
      role: "user",
    });

    const res = NextResponse.json({ success: true });

    res.cookies.set("auth", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    redirect("/home");
  } catch (err) {
    console.error("SIGNUP ERROR:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
