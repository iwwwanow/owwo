import sql from "../lib/sql.ts";
import Password from "../middleware/password.ts";

import dbDate from "../middleware/date.js";

import * as jose from "jose";

export default class Auth {
  static async authUser(c) {
    const body = c.body;
    const text = await Bun.readableStreamToText(body);
    const arr = text.split("&");
    const obj = {};
    arr.forEach((item) => {
      item = item.split("=");
      obj[item[0]] = item[1];
    });

    const { username, password } = obj;

    let user;
    try {
      user = sql("users")
        .select(["user_id", "username", "password"])
        .where({ username })
        .get();
    } catch (e) {
      throw new Error("incorrect auth attemp");
    }

    if (!user) throw new Error("incorrect auth attemp");

    await Password.verify(password, user.password);

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const jwt = await new jose.SignJWT({ user_id: user.user_id, username })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1h")
      .sign(secret);

    c.headers["Set-Cookie"] = `auth=${jwt}`;
    return Response.redirect("/", { headers: c.headers });
  }

  static async logout(c) {
    c.headers["Set-Cookie"] =
      "auth=deleted; expires=Thu, 16 Jul 1998 00:00:00 GMT";
    return Response.redirect("/", { headers: c.headers });
  }
}
