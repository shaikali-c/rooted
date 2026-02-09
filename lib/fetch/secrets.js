import { cookies } from "next/headers";
import { verifyJWT } from "../jwt";
import { supabase } from "../supabase";

export async function getSecrets() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth")?.value;
  const { owner } = await verifyJWT(token);
  const { data, error } = await supabase
    .from("secrets")
    .select("*")
    .eq("owner", owner)
    .order("created_at", { ascending: true });
  if (error) throw error;
  return data;
}
