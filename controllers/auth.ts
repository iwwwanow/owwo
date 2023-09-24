import { Database } from "bun:sqlite";

import stringFromSQL from "../utils/stringFromSQL";

const db = new Database("data/db.sqlite", { create: true });

export default class AuthController {
  static async createUser({ body, set }) {
    const { username, password, confirm } = body;

    if (password !== confirm) {
      // TODO выводить эту ошибку на клиент.
      throw new Error("Password mismatch");
    }

    const query_checkTable_users = await stringFromSQL(
      "./controllers/sql/check-table_users.sql"
    );
    db.prepare(query_checkTable_users).run();

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

  static async authUser({ body, set }) {
    const { username, password } = body;

    const query_selectUser = await stringFromSQL(
      "./controllers/sql/select_user.sql"
    );
    const user = db.prepare(query_selectUser).get({
      $username: username,
    });

    if (!user) {
      throw new Error("Incorrect auth attemp");
    }

    const verify_password = await Bun.password.verify(password, user.password);
    if (!verify_password) {
      throw new Error("Incorrect auth attemp");
    }

    set.redirect = "/login";
    // set.redirect = "/";
    return;
  }
}
