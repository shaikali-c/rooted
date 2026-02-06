import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;
export function signJWT(payload, expiresIn = "30d") {
  return jwt.sign(payload, SECRET, { expiresIn });
}
export function verifyJWT(token) {
  return jwt.verify(token, SECRET);
}
