export async function hashObject(obj) {
  const str = JSON.stringify(obj);
  const buffer = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(str),
  );

  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
