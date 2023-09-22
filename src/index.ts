import { Elysia } from "elysia";
import { html } from "@elysiajs/html";

import router from "./router";

const app = new Elysia().use(html()).use(router).listen(8080);

console.log(`Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
