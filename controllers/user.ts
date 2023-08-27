import * as edgedb from "edgedb";
import * as e from "../dbschema/edgeql-js/external.ts";

const client = edgedb.createClient();

export default class UserController {
  static async create(ctx: any) {
    const body = await ctx.request.body().value;

    const username = body.get("username");
    const password = body.get("password");
    const confirmPassword = body.get("confirm-password");

    if (password !== confirmPassword) {
      // TODO вернуть ошибку на клиент
      console.log("incorrect password");
      await ctx.render("login.eta");
    }

    console.log(e);

    const user = {
      username,
      password,
    };

    console.log(user);

    await ctx.render("login.eta");
  }
}
