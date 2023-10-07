import { ExContext } from "../typescript/interfaces.ts";
import checkType from "../typescript/checkType.ts";
import SQL from "./sql.ts";

export default class AuthController {
  static async createUser({
    body: { username, password, confirm },
    set,
  }: ExContext) {
    checkType.string(username);
    checkType.string(password);

    if (password !== confirm) {
      // TODO выводить эту ошибку на клиент.
      throw new Error("Password mismatch");
    }

    SQL.createTable("users", [
      { name: "user_id", option: "INTEGER PRIMARY KEY AUTOINCREMENT" },
      { name: "username", option: "TEXT NOT NULL" },
      { name: "password", option: "TEXT NOT NULL" },
    ]);

    SQL.createIndex("idx_users_username", "users", "username");

    try {
      SQL.insert(
        "users",
        ["username", "password"],
        [username, await Bun.password.hash(password)]
      );
    } catch (e) {
      throw new Error("Failed to add the user. Maybe username exists");
    }

    set.redirect = "/login";
    return;
  }

  static async authUser({
    body: { username, password },
    jwt,
    setCookie,
    set,
    cookie_authUsername,
  }: ExContext) {
    if (cookie_authUsername) {
      throw new Error("already login");
    }

    checkType.string(username);
    checkType.string(password);

    const users = SQL.select(
      ["username", "password"],
      ["users"],
      [{ name: "username", value: username }]
    );

    const user = users[0];

    if (users.length > 1) throw new Error("Users more than one");
    if (!user) throw new Error("Incorrect auth attemp");

    const verify_password = await Bun.password.verify(password, user.password);
    if (!verify_password) throw new Error("Incorrect auth attemp");

    setCookie("auth", await jwt.sign(username));

    set.redirect = "/";
    return;
  }

  static async logout({ removeCookie, set }: ExContext) {
    removeCookie("auth");
    set.redirect = "/";
  }
}
