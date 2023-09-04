// TODO вынести настройку edgedb в отдельный файл. в конфиге.
import { e, client } from "../config/edgedb.ts";
import { eta } from "../config/eta.ts";

export default class page {
  static async create({ request, response, params }) {
    console.log("create-page");

    const username = params.username;
    const result = await e
      .insert(e.Page, {
        authors: e.select(e.User, (user) => ({
          filter: e.op(user.username, "=", username),
        })),
      })
      .run(client);
    await response.redirect(`/${username}`);
  }

  static async index({ request, response, params }) {
    response.body = eta.render("./page", {
      request,
      params,
    });
  }

  static async post({ request, response, params }) {
    console.log("post");

    const username = params.username;
    await response.redirect(`/${username}`);
  }
}
