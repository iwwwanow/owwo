import * as edgedb from "edgedb";
// import * as e from "../dbschema/edgeql-js/index.ts";
import e from "../dbschema/edgeql-js/index.ts";

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

    // const query = e.select(e.User, () => ({
    //   ...e.User["*"],
    // }));
    //
    // const result = await query.run(client);

    const query = e.insert(e.User, {
      username,
      password,
    });

    const result = await query.run(client);
    console.log(result);

    await ctx.render("login.eta");
  }
}
