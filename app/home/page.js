import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default async function PostsPage() {
  const { data } = await supabase
    .from("secrets")
    .select("uid")
    .order("created_at")
    .limit(1)
    .single();

  if (!data) return null;

  redirect(`/home/${data.uid}`);
}
