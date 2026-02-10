"use server";
import { cookies } from "next/headers";

export async function createCookie(key, value) {
  const cookieStore = await cookies();
  cookieStore.set(key, value);
}
export async function getCookie(key) {
  const cookieStore = await cookies();
  return cookieStore.get(key);
}
export async function deleteCookie(key) {
  const cookieStore = await cookies();
  cookieStore.delete(key);
}
