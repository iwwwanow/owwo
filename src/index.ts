import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";

import router from "./router";

const app = new Elysia()
  .use(html())
  .use(await staticPlugin({ assets: "public" }))
  .use(router)
  .listen(8080);

console.log(`Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
