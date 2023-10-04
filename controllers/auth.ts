import { Database } from "bun:sqlite";
import { ExContext } from "../typescript/interfaces.ts";

import checkType from "../typescript/checkType.ts";

import stringFromSQL from "../utils/stringFromSQL";

const db = new Database("data/db.sqlite", { create: true });

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

    const query_createTable_users = await stringFromSQL(
      "./controllers/sql/createTable_users.sql"
    );
    db.prepare(query_createTable_users).run();

    const query_createIndex_users_username = await stringFromSQL(
      "./controllers/sql/createIndex_users_username.sql"
    );
    db.prepare(query_createIndex_users_username).run();

    const query_insertUser = await stringFromSQL(
      "./controllers/sql/insert_user.sql"
    );

    try {
      db.prepare(query_insertUser).run({
        $username: username,
        $password: await Bun.password.hash(password),
      });
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

    if (!(typeof username === "string") || !(typeof password === "string")) {
      throw new Error("username or password is not string");
    }

    const query_selectUser = await stringFromSQL(
      "./controllers/sql/select_user.sql"
    );
    const user: { username: string; password: string } | any = db
      .prepare(query_selectUser)
      .get({
        $username: username,
      });

    if (!user) {
      throw new Error("Incorrect auth attemp");
    }

    const verify_password = await Bun.password.verify(password, user.password);
    if (!verify_password) {
      throw new Error("Incorrect auth attemp");
    }

    setCookie("auth", await jwt.sign(username));

    set.redirect = "/";
    return;
  }
  static async logout({ removeCookie, set }: ExContext) {
    removeCookie("auth");
    set.redirect = "/";
  }
}
