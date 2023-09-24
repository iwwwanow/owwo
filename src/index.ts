import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { cookie } from "@elysiajs/cookie";
import { jwt } from "@elysiajs/jwt";

import config_jwt from "../config/jwt";

import router from "./router";

const app = new Elysia()
  .use(html())
  .use(jwt(config_jwt()))
  .use(await staticPlugin({ assets: "public" }))
  .use(router)
  .listen(8080);

console.log(
  `OWWO IS RUNNING AT http://${app.server?.hostname}:${app.server?.port}`
);
