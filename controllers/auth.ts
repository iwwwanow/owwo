// TODO вынести настройку edgedb в отдельный файл. в конфиге.
import * as edgedb from "edgedb";
import e from "../dbschema/edgeql-js/index.ts";
import { bcrypt } from "../deps.ts";
import { key, payload, header } from "../utils/jwt.js";
import { create } from "../deps.ts";

const client = edgedb.createClient();

export default class auth {
  static async signup({ request, response, cookies }) {
    if (request.auth) {
      // TODO вернуть ошибку на клиент
      cookies.set("message", `You have already signed in`);
      response.redirect("/");
    } else {
      const body = await request.body().value;
      const username = body.get("username");
      const password = body.get("password");
      const confirmPassword = body.get("confirm-password");

      if (password !== confirmPassword) {
        // TODO вернуть ошибку на клиент
        console.log("incorrect password");
        response.redirect("/");
      }

      const find = await e
        .select(e.User, (user) => ({
          username: true,
          password: true,

          filter: e.op(user.username, "=", username),
        }))
        .run(client);

      if (find.length) {
        // TODO вернуть ошибку на клиент
        await cookies.set("message", "username already exists");
        response.redirect("/");
      } else {
        await e
          .insert(e.User, {
            username,
            password: await bcrypt.hash(password),
          })
          .run(client);
        await cookies.set("message", `Successfully registered: username.`);
        response.redirect("/login");
      }
    }
    response.redirect("/login");
  }

  static async login({ request, response, cookies }) {
    if (request.auth) {
      // user already auth
      // TODO вернуть ошибку на клиент
      response.redirect("/");
      return;
    }

    const body = await request.body().value;

    const username = await body.get("username");
    const password = await body.get("password");

    const user = await e
      .select(e.User, (user) => ({
        id: true,
        username: true,
        password: true,

        filter_single: e.op(user.username, "=", username),
      }))
      .run(client);

    if (!user) {
      // incorrect username, username not found
      // TODO пробросить ошибку на клиент
      cookies.set("message", "incorrect");
      response.redirect("/login");
      return;
    }

    if (!(await bcrypt.compare(password, user.password))) {
      // incorrect password
      // TODO пробросить ошибку на клиент
      cookies.set("message", "incorrect");
      response.redirect("/login");
      return;
    }

    if (await bcrypt.compare(password, user.password)) {
      response.body = user.username;
      payload.username = user.username;

      cookies.set("message", "logged in");
      cookies.set("token", await create(header, payload, key));

      response.redirect("/");
      return;
    }
  }

  static async logout({ request, response, cookies }) {
    cookies.set("token", "");
    cookies.set("message", "");
    response.redirect("/");
    return;
  }
}
