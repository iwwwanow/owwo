import * as edgedb from "edgedb";
import e from "../dbschema/edgeql-js/index.ts";
import { bcrypt } from "../deps.ts";
import { load } from "../deps.ts";
import { parseBody } from "../utils/parseBody.ts";
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
      // const body = parseBody(await request.body());
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
        console.log("user created");
        await cookies.set("message", `Successfully registered: username.`);
        response.redirect("/");
      }
    }
    response.redirect("/");
  }

  static async login({ request, response, cookies }) {
    if (request.auth) {
      // TODO вернуть ошибку на клиент
      cookies.set("message", `You have already signed in`);
      response.redirect("/");
    } else {
      const body = await request.body().value;
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
        response.redirect("/");
      } else {
        if (await bcrypt.compare(password, user[0].password)) {
          response.body = user.username;
          payload.username = username;
          console.log(payload);
          cookies.set("token", await create(header, payload, key));
          cookies.set("message", "Successfully entered");
          response.redirect("/");
        } else {
          cookies.set("message", "Wrong Password");
          response.redirect("/");
        }
      }
    }
  }
  static async logout({ request, response, cookies }) {
    if (request.auth) {
      // TODO пробросить ошибку на клиент
      cookies.set("token", "");
      cookies.set("message", "Successfully Logged Out");
      response.redirect("/");
    } else {
      // TODO пробросить ошибку на клиент
      cookies.set("message", "your not logged in");
      response.redirect("/");
    }
  }
}
