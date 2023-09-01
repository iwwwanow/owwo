import * as edgedb from "edgedb";
import e from "../dbschema/edgeql-js/index.ts";
import { bcrypt } from "../deps.ts";
import { load } from "../deps.ts";

const client = edgedb.createClient();
const env = await load();

export default class UserController {
  static async login(ctx: any) {
    const body = await ctx.request.body().value;

    const username = body.get("username");
    const password = body.get("password");

    const user = await e
      .select(e.User, (user) => ({
        username: true,
        password: true,

        filter: e.op(user.username, "=", username),
      }))
      .run(client);

    if (!user) {
      // TODO пробросить ошибку на клиент
      console.log("user not found");
      await ctx.render("login.eta");
    } else {
      const checkPassword = await bcrypt.compare(password, user[0].password);
      if (checkPassword) {
        console.log("login correct");
        console.log(ctx.cookies);
        await ctx.render("login.eta");
      } else {
        // TODO пробросить ошибку на клиент
        console.log("login incorrect");
        await ctx.render("login.eta");
      }
    }
  }

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
      const bpassword = await bcrypt.hash(password);

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
