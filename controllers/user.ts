// TODO вынести настройку edgedb в отдельный файл. в конфиге.
import { e, client } from "../config/edgedb.ts";

import { eta } from "../config/eta.ts";

export default class user {
  static async index({ request, response, params }) {
    let editor$, editor, user;
    const username = params.username;

    interface query {
      [index: string]: boolean | any;
      filter?: any;
    }

    let filter: string | boolean = false;
    function pageQueryFunc(page: object, filter: string | boolean): query {
      const output: query = {
        id: true,
        state: true,
        cover: true,
        title: true,
        desc: true,
      };
      if (filter) output.filter = e.op(page.state, "=", filter);
      return output;
    }

    // editor = request.headers.get("referer").split("/").at(-1);
    if (request.auth && request.username === params.username) {
      // TODO нужно проверить, от автора ли идет этот запрос.
      // if (request.auth) {
      //   editor$ = page.authors.some(
      //     (author) => author.username === request.username
      //   );
      // }
    } else {
      filter = "default";
    }

    user = await e
      .select(e.User, (user) => ({
        pages: (page) => pageQueryFunc(page, filter),
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
