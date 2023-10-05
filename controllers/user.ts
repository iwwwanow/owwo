import { ExContext } from "../typescript/interfaces";

import checkEditor from "../utils/checkEditor";

import { Database } from "bun:sqlite";
import { eta } from "../config/eta";

import string from "./sql/_string.ts";
const db = new Database("data/db.sqlite", { create: true });

export default class UserController {
  static async index({ params, cookie_authUsername }: ExContext) {
    const editor$ = checkEditor(params, cookie_authUsername);
    const { username } = params;

    const query_user_id = await string(
      "./controllers/sql/select_userId_users.sql"
    );
    const { user_id }: { user_id: number } = db
      .query(query_user_id)
      .get({ $username: username });
    console.log(user_id);

    const query_page_id = await string(
      "./controllers/sql/select_pageId_userPages.sql"
    );
    const page_ids = db.query(query_page_id).all({ $user_id: user_id });
    console.log(page_ids);

    // const page_id

    // const query_select_userPages_username = await stringFromSQL(
    //   "./controllers/sql/select_userPages_username.sql"
    // );
    // const pages = db
    //   .query(query_select_userPages_username)
    //   .all({ $username: username });
    // console.log(pages);
    // query_select_userPages_username.finalize();

    return eta.render("profile", { params, cookie_authUsername, editor$ });
  }
}
