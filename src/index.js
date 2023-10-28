import * as jose from "jose";

import SQL from "../middleware/sql.ts";

await SQL().init();

import Data from "../middleware/data.middleware.js";
import { eta } from "../config/eta.ts";
import Auth from "../controllers/auth.controller.js";
import Profile from "../controllers/Profile.controller.js";

const server = Bun.serve({
  port: 8080,
  async fetch(req) {
    const url = new URL(req.url);

    const headers = {
      // "Cache-Control": "public, max-age=31536000",
    };

    if (url.pathname.split("/").at(1) === "templates") {
      const path = "." + url.pathname;
      const file = Bun.file(path);
      headers["Cache-Control"] = "public, max-age=31536000, must-revalidate";
      return new Response(file, { headers });
    }

    if (url.pathname.split("/").at(1) === "public") {
      const path = "." + url.pathname;
      const file = Bun.file(path);
      headers["Cache-Control"] = "public, max-age=31536000, must-revalidate";
      return new Response(file, { headers });
    }

    if (url.pathname === "/favicon.ico") {
      const path = "./public/favicon.ico";
      const file = Bun.file(path);
      headers["Cache-Control"] = "public, max-age=31536000, must-revalidate";
      return new Response(file, { headers });
    }

    const props = {
      client: {
        auth: false,
        type: "viewer",
        mode: "viewer",
      },
    };

    const cookie = req.headers.get("cookie");
    if (cookie) {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const jwt = cookie.split("=").at(1);
      try {
        const { payload } = await jose.jwtVerify(jwt, secret);
        props.client.auth = payload;
      } catch (e) {
        console.log("jwt auth error");
        headers["Set-Cookie"] =
          "auth=deleted; expires=Thu, 16 Jul 1998 00:00:00 GMT";
      }
    }

    if (url.pathname === "/") {
      props.data = await Data.index();

      // console.log("inex-props:", props);
      const html = eta.render("Index", props);

      headers["Content-Type"] = "text/html";
      return new Response(html, { headers });
    }

    if (url.pathname === "/about") {
      // console.log("about-props:", props);
      const html = eta.render("About", props);
      headers["Content-Type"] = "text/html";
      return new Response(html, { headers });
    }

    if (url.pathname === "/login") {
      if (req.method === "POST") {
        return await AuthController.authUser(req);
      }
      const html = eta.render("Login", props);
      headers["Content-Type"] = "text/html";
      return new Response(html, { headers });
    }

    if (url.pathname === "/logout") {
      headers["Set-Cookie"] =
        "auth=deleted; expires=Thu, 16 Jul 1998 00:00:00 GMT";
      return Response.redirect("/", { headers });
    }

    if (url.pathname === "/signup") {
      const html = eta.render("Signup", props);
      headers["Content-Type"] = "text/html";
      return new Response(html, { headers });
    }

    if (url.pathname.split("/").at(1) === "page") {
      const page_id = url.pathname.split("/").at(2);

      props.data = await Data.page(page_id);

      if (
        props.client.auth &&
        props.data.authors.find(
          (author) => author.user_id === props.client.auth.user_id
        )
      ) {
        props.client.type = "owner";
        if (url.search && url.searchParams.get("mode"))
          props.client.mode = url.searchParams.get("mode");
      }

      // console.log("page-props:", props);
      const html = eta.render("Page", props);

      headers["Content-Type"] = "text/html";
      return new Response(html, { headers });
    }

    if (url.pathname.split("/").at(1) === "element") {
      const element_id = url.pathname.split("/").at(2);

      props.data = await Data.element(element_id);

      if (
        props.client.auth &&
        props.data.author_id === props.client.auth.user_id
      ) {
        props.client.type = "owner";
        if (url.search && url.searchParams.get("mode"))
          props.client.mode = url.searchParams.get("mode");
      }

      // console.log("element-props:", props);
      const html = eta.render("Element", props);

      headers["Content-Type"] = "text/html";
      return new Response(html, { headers });
    }

    if (url.pathname) {
      const username = url.pathname.split("/").at(1);

      if (req.method === "POST") {
        return await Profile.update(req);
      }

      props.data = await Data.profile(username);

      if (
        props.client.auth &&
        props.client.auth.user_id === props.data.user_id
      ) {
        props.client.type = "owner";
        if (url.search && url.searchParams.get("mode"))
          props.client.mode = url.searchParams.get("mode");
      }

      // console.log("profile-props:", props);
      const html = eta.render("Profile", props);
      headers["Content-Type"] = "text/html";

      return new Response(html, { headers });
    }

    return new Response("404!");
  },
});

console.log(`OWWO IS RUNNING AT http://${server.hostname}:${server.port}`);
