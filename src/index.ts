import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { cookie } from "@elysiajs/cookie";
import { jwt } from "@elysiajs/jwt";

import config_jwt from "../config/jwt.ts";
import checkAuth from "../utils/checkAuth.ts";
import router from "./router";

import sql from "../controllers/_sql.ts";

await sql.init();

const app = new Elysia()
  .onError(({ code, error }) => {
    console.log("error:", code, error);
  })
  .use(html())
  .use(jwt(config_jwt()))
  .use(cookie())
  .use(await staticPlugin({ assets: "public" }))
  .derive(async (c) => await checkAuth(c))
  .use(router)
  .listen(8080);

console.log(
  `OWWO IS RUNNING AT http://${app.server?.hostname}:${app.server?.port}`
);
