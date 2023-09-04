// TODO вынести настройку edgedb в отдельный файл. в конфиге.
import { e, client } from "../config/edgedb.ts";

import { eta } from "../config/eta.ts";

export default class user {
  static async index({ request, response, params }) {
    const username = params.username;

    const user = await e
      .select(e.User, (user) => ({
        pages: true,
        filter_single: e.op(user.username, "=", username),
      }))
      .run(client);

    response.body = eta.render("./profile", {
      request,
      params,
      user,
    });
  }
}
