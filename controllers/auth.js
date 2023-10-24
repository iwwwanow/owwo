import { v4 as uuidv4 } from "uuid";

import check_uniqueUsername from "../middleware/check_unique-username.ts";
import Password from "../middleware/password.ts";
import sql from "../middleware/sql.ts";
import dbDate from "../middleware/date.js";

export default class AuthController {
  static async createUser(c) {
    const { body, set } = c;
    const { username, password, confirm } = body;

    Password.confirm(password, confirm);

    const user_id = uuidv4();

    try {
      sql("users")
        .insert({
          user_id,
          username,
          password: await Bun.password.hash(password),
          date_creation: Date.now(),
          date_lastModify: Date.now(),
        })
        .run();

      dbDate.update({ user_id });
    } catch (e) {
      check_uniqueUsername(username);
      throw new Error("failed to add the user");
    }

    set.redirect = "/login";
    return;
  }

  static async authUser(c) {
    const { body, jwt, setCookie, set } = c;
    const { username, password } = body;

    let user;
    try {
      user = sql("users")
        .select(["user_id", "username", "password"])
        .where({ username })
        .get();
    } catch (e) {
      throw new Error("incorrect auth attemp");
    }

    await Password.verify(password, user.password);

    setCookie("auth", await jwt.sign({ user_id: user.user_id, username }));

    set.redirect = "/";
    return;
  }

  static async logout({ removeCookie, set }) {
    removeCookie("auth");
    set.redirect = "/";
  }
}
