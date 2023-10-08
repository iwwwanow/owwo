import { ExContext } from "../typescript/interfaces.ts";
import checkType from "../typescript/checkType.ts";
import sql from "./_sql.ts";

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

    sql.createTable({
      table_name: "users",
      columns: {
        user_id: "INTEGER PRIMARY KEY AUTOINCREMENT",
        username: "TEXT NOT NULL",
        password: "TEXT NOT NULL",
      },
    });

    sql.custom("createIndex_idx_users_username");

    try {
      const users = new sql("users");
      users
        .insert({
          username,
          password: await Bun.password.hash(password),
        })
        .run();
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

    // console.log(username);
    const users = new sql("users");
    let user;
    try {
      user = users.select(["username", "password"]).where({ username }).get();
    } catch (e) {
      throw new Error("Incorrect auth attemp");
    }

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
