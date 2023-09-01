import { getNumericDate } from "../deps.ts";
import { load } from "../deps.ts";

const enc = new TextEncoder();

await load({ export: true });
const rawKey = enc.encode(Deno.env.get("JWT_KEY"));

export const key = await crypto.subtle.importKey(
  "raw",
  rawKey,
  { name: "HMAC", hash: "SHA-512" },
  true,
  ["sign", "verify"]
);

export const payload = {
  // One hour from now:
  exp: getNumericDate(60 * 60),
};

export const header = { alg: "HS512", typ: "JWT" };
