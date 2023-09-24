import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { cookie } from "@elysiajs/cookie";
import { jwt } from "@elysiajs/jwt";

import config_jwt from "../config/jwt";
console.log(config_jwt());

import router from "./router";

const app = new Elysia()
  .use(html())
  // .use(jwt(config_jwt))
  .use(await staticPlugin({ assets: "public" }))
  .use(router)
  .listen(8080);

console.log(`Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
