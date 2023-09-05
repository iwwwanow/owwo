// TODO вынести настройку edgedb в отдельный файл. в конфиге.
import { e, client } from "../config/edgedb.ts";

import { eta } from "../config/eta.ts";

export default class user {
  static async index({ request, response, params }) {
    const username = params.username;

    let editor, user;
    if (!!request.auth && request.username == username) {
      editor = request.headers.get("referer").split("/").at(-1);

      user = await e
        .select(e.User, (user) => ({
          // pages: true,
          pages: (page) => ({
            id: true,
            state: true,
          }),
          filter_single: e.op(user.username, "=", username),
        }))
        .run(client);
    } else {
      user = await e
        .select(e.User, (user) => ({
          pages: (page) => ({
            id: true,
            state: true,
            filter: e.op(page.state, "=", "default"),
          }),
          filter_single: e.op(user.username, "=", username),
        }))
        .run(client);
    }

    response.body = eta.render("./profile", {
      request,
      params,
      user,
    });
  }
}
