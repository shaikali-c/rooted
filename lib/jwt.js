import { jwtVerify } from "jose";

const SECRET = process.env.JWT_SECRET;
export async function verifyJWT(token) {
  if (!SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }
  const secret = new TextEncoder().encode(SECRET);
  const { payload } = await jwtVerify(token, secret);
  return payload;
}
