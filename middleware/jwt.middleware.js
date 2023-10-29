import * as jose from "jose";

export default async function checkAuth(c) {
  if (!process.env.JWT_SECRET) throw new Error("jwt secret needet");
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const jwt = c.cookie.split("=").at(1);
  try {
    const { payload } = await jose.jwtVerify(jwt, secret);
    return payload;
  } catch (e) {
    console.log("jwt auth error");
    c.props.client.auth = false;
    c.headers["Set-Cookie"] =
      "auth=deleted; expires=Thu, 16 Jul 1998 00:00:00 GMT";
  }
}
