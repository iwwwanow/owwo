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

// const app = new Elysia()
//   .onError(({ code, error }) => {
//     console.log("error:", code, error);
//   })
//   .use(html())
//   .use(jwt(config_jwt()))
//   .use(cookie())
//   .use(await staticPlugin({ assets: "public" }))
//   .derive(async (c) => await check_auth(c))
//   .use(router)
//   .listen(8080);

import Props from "../middleware/props.js";
import { eta } from "../config/eta.ts";

const server = Bun.serve({
  port: 8080,
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/favicon.ico") {
      console.log("need favicon braaa");
      return;
    }

    if (url.pathname.split("/").at(1) === "public") {
      const path = "." + url.pathname;
      const file = Bun.file(path);
      return new Response(file);
    }

    if (url.pathname === "/") {
      const props = await new Props(req).init_index();
      const html = eta.render("Index", props);
      return new Response(html, { headers: { "Content-Type": "text/html" } });
    }

    if (url.pathname === "/about") {
      const html = eta.render("About");
      return new Response(html, { headers: { "Content-Type": "text/html" } });
    }

    if (url.pathname === "/login") {
      const html = eta.render("Login");
      return new Response(html, { headers: { "Content-Type": "text/html" } });
    }

    if (url.pathname === "/signup") {
      const html = eta.render("Signup");
      return new Response(html, { headers: { "Content-Type": "text/html" } });
    }

    if (url.pathname.split("/").at(1) === "page") {
      const props = await new Props(req).init_page();
      console.log("page-props:", props);
      return new Response("page!");
    }

    if (url.pathname.split("/").at(1) === "element") {
      const props = await new Props(req).init_element();
      console.log("element-props:", props);
      return new Response("element!");
    }

    if (url.pathname) {
      const props = await new Props(req).init_profile();
      console.log("profile-props:", props);
      // const html = eta.render("Profile", props);
      // console.log(html);
      return new Response("user!");
    }

    return new Response("404!");
  },
});

console.log(`OWWO IS RUNNING AT http://${server.hostname}:${server.port}`);
