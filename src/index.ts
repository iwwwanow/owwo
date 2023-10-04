import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { cookie } from "@elysiajs/cookie";
import { jwt } from "@elysiajs/jwt";

import { Database } from "bun:sqlite";
const db = new Database("data/db.sqlite", { create: true });
db.exec("PRAGMA journal_mode = WAL;");

import config_jwt from "../config/jwt.ts";

import checkAuth from "../utils/checkAuth.ts";

import router from "./router";

const app = new Elysia()
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
