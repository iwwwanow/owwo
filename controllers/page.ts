// TODO вынести настройку edgedb в отдельный файл. в конфиге.
import * as edgedb from "edgedb";
import e from "../dbschema/edgeql-js/index.ts";
const client = edgedb.createClient();
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

    console.log(result);

    await response.redirect(`/${username}`);
  }
}
