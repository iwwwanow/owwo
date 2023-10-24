import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { cookie } from "@elysiajs/cookie";
import { jwt } from "@elysiajs/jwt";

import config_jwt from "../config/jwt.ts";
import check_auth from "../middleware/check_auth.ts";
import router from "./router";

import SQL from "../middleware/sql.ts";

await SQL().init();

const app = new Elysia()
  .onError(({ code, error }) => {
    console.log("error:", code, error);
  })
  .use(html())
  .use(jwt(config_jwt()))
  .use(cookie())
  .use(await staticPlugin({ assets: "public" }))
  .derive(async (c) => await check_auth(c))
  .use(router)
  .listen(8080);

console.log(
  `OWWO IS RUNNING AT http://${app.server?.hostname}:${app.server?.port}`
);
