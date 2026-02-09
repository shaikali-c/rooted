import { cookies } from "next/headers";
import { verifyJWT } from "../jwt";
import { supabase } from "../supabase";
import { decryptData } from "../e";

export async function getSecrets() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth")?.value;
  const protected_key = cookieStore.get("protected")?.value;
  const { owner } = await verifyJWT(token);
  const { data, error } = await supabase
    .from("secrets")
    .select("*")
    .eq("owner", owner)
    .order("created_at", { ascending: true });
  if (error) throw error;
  let dec_secrets;
  try {
    dec_secrets = await Promise.all(
      data.map(async (item) => {
        const stringified = item.payload;
        return await decryptData(stringified, protected_key);
      }),
    );
  } catch (err) {
    return { error: true };
  }

  return dec_secrets;
}
export async function getSecret(uid) {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth")?.value;
  const { owner } = await verifyJWT(token);
  const { data, error } = await supabase
    .from("secrets")
    .select("*")
    .eq("owner", owner)
    .eq("uid", uid)
    .order("created_at", { ascending: true })
    .single();
  return data;
}
