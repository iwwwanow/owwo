// TODO вынести настройку edgedb в отдельный файл. в конфиге.
import { e, client } from "../config/edgedb.ts";

import { eta } from "../config/eta.ts";

export default class user {
  static async index({ request, response, params }) {
    const pages = await e.select(e.Page).run(client);
    response.body = eta.render("./profile", {
      request,
      params,
      pages,
    });
  }
}
