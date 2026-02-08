import "server-only";
import { cookies } from "next/headers";
import { supabase } from "@/lib/supabase";
import { verifyJWT } from "./jwt";

export async function getSecretId() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth")?.value;
  const payload = await verifyJWT(token);
  if (!token) return null;
  // const { data, error } = await supabase.from("owners").select("id").eq("id",).single();
  // if (error) {
  //   throw new Error(error.message);
  // }
  return payload;
}
