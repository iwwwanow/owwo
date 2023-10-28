import Render from "../controllers/render.controller.js";
import Auth from "../controllers/auth.controller.js";
import User from "../controllers/user.controller.js";
import Profile from "../controllers/profile.controller.js";
import Page from "../controllers/page.controller.js";
import Element from "../controllers/element.controller.js";

import Static from "../controllers/static.controller.js";
import checkAuth from "../middleware/auth.middleware.js";

export default async function Router(req) {
  const c = {
    url: new URL(req.url),
    method: req.method,
    headers: {
      // "Cache-Control": "public, max-age=31536000",
    },
    cookie: req.headers.get("cookie"),
    referer: req.headers.get("referer"),
    props: {
      client: {
        auth: false,
        type: "viewer",
        mode: "viewer",
      },
    },
  };

  const p = c.url.pathname;
  console.log(p.split("/"));

  if (c.url.search && c.url.searchParams.get("method"))
    c.method = c.url.searchParams.get("method");

  if (c.url.pathname.split("/").at(1) === "templates") return Static.send(c);

  if (c.url.pathname.split("/").at(1) === "public") {
    if (c.method === "DELETE") return await Static.delete(c);
    else return Static.send(c);
  }

  if (c.url.pathname === "/favicon.ico") return Static.send(c);

  if (c.cookie) c.props.client.auth = await checkAuth(c);

  if (c.url.pathname === "/about") return Render.about(c);

  if (c.url.pathname === "/login") {
    if (c.method === "POST") {
      c.body = req.body;
      return await Auth.authUser(c);
    } else return await Render.login(c);
  }

  if (c.url.pathname === "/logout") return await Auth.logout(c);

  if (c.url.pathname === "/signup") {
    if (c.method === "POST") {
      c.body = req.body;
      return await User.create(c);
    } else return await Render.signup(c);
  }

  if (c.url.pathname === "/") return Render.index(c);

  if (c.url.pathname.split("/").at(1) === "page") {
    if (c.method === "PUT") {
      return Page.update(req);
    } else if (c.method === "POST") {
      return Element.create(c);
    } else if (c.method === "DELETE") {
      return Page.delete(c);
    } else return Render.page(c);
  }

  if (c.url.pathname.split("/").at(1) === "element") {
    if (c.method === "PUT") {
      return Element.update(req);
    } else if (c.method === "DELETE") {
      return Element.delete(c);
    } else return Render.element(c);
  }

  if (c.url.pathname) {
    if (c.method === "PUT") {
      return await Profile.update(req);
    } else if (c.method === "POST") {
      return Page.create(c);
    } else if (c.method === "DELETE") {
      return User.delete(c);
    } else return await Render.profile(c);
  }

  return new Response("404!");
}
