import { jwt } from "@elysiajs/jwt";
import { Database } from "bun:sqlite";

import stringFromSQL from "../utils/stringFromSQL";

const db = new Database("data/db.sqlite", { create: true });

interface Context {
  body: object | any;
  jwt: object | any;
  cookie: object | any;
  setCookie: any;
  set: { redirect: string } | any;
}

interface Body {
  username?: string;
  password?: string;
  confirm?: string;
}

export default class AuthController {
  static async createUser({ body, set }: Context) {
    const { username, password, confirm }: Body = body;

    if (password !== confirm) {
      // TODO выводить эту ошибку на клиент.
      throw new Error("Password mismatch");
    }

    const query_checkTable_users = await stringFromSQL(
      "./controllers/sql/check-table_users.sql"
    );
    db.prepare(query_checkTable_users).run();

    if (!(typeof username === "string")) {
      throw new Error("username is not string");
    }

    if (!(typeof password === "string")) {
      throw new Error("password is not string");
    }

    const query_checkUsername = await stringFromSQL(
      "./controllers/sql/check_username.sql"
    );
    const userExist = !!db
      .prepare(query_checkUsername)
      .all({ $username: username }).length;

    if (!userExist) {
      const query_insertUser = await stringFromSQL(
        "./controllers/sql/insert_user.sql"
      );
      db.prepare(query_insertUser).run({
        $username: username,
        $password: await Bun.password.hash(password),
      });
    } else {
      throw new Error("User exists");
    }

    set.redirect = "/login";
    return;
  }

  static async authUser({ body, jwt, setCookie, set }: Context) {
    const { username, password }: Body = body;

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

    console.log("correct login");
    setCookie("auth", await jwt.sign(username));

    set.redirect = "/";
    return;
  }
  static async logout({ cookie, setCookie }: Context) {
    console.log("logout");
  }
}
