import * as edgedb from "edgedb";
import e from "../dbschema/edgeql-js/index.ts";
import { bcrypt } from "../deps.ts";
import { load } from "../deps.ts";

const client = edgedb.createClient();
const env = await load();

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

    // TODO проверка на уникальность.
    const unique = await e
      .select(e.User, (user) => ({
        username: true,
        password: true,

        filter: e.op(user.username, "=", username),
      }))
      .run(client);

    if (unique.length) {
      // TODO вернуть ошибку на клиент
      console.log("username already exists");
      await ctx.render("login.eta");
    } else {
      // TODO bcrypt.
      const bpassword = await bcrypt.hash(password);
      console.log(bpassword);

      await e
        .insert(e.User, {
          username,
          password: bpassword,
        })
        .run(client);
      console.log("user created");

      await ctx.render("login.eta");
    }
  }
}
