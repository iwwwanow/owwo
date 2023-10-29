import Render from "../controllers/render.controller.js";
import Auth from "../controllers/auth.controller.js";
import User from "../controllers/user.controller.js";
import Profile from "../controllers/profile.controller.js";
import Page from "../controllers/page.controller.js";
import Element from "../controllers/element.controller.js";

import Static from "../controllers/static.controller.js";
import JWT from "../middleware/jwt.middleware.js";

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

  const p = c.url.pathname.split("/");
  p.shift();
  const p1 = p.shift();
  const p2 = p.shift();

  try {
    if (c.url.search && c.url.searchParams.get("method"))
      c.method = c.url.searchParams.get("method");

    if (p1 === "templates") return Static.send(c);

    if (p1 === "public") {
      if (c.method === "DELETE") return await Static.delete(c);
      else return Static.send(c);
    }

    if (p1 === "favicon.ico") return Static.send(c);

    if (c.cookie) c.props.client.auth = await JWT(c);

    if (p1 === "404") return await Render.page404(c);

    if (p1 === "about") return Render.about(c);

    if (p1 === "login") {
      if (c.method === "POST") {
        c.body = req.body;
        return await Auth.authUser(c);
      } else return await Render.login(c);
    }

    if (p1 === "logout") return await Auth.logout(c);

    if (p1 === "signup") {
      if (c.method === "POST") {
        c.body = req.body;
        return await User.create(c);
      } else return await Render.signup(c);
    }

    if (!p1) return Render.index(c);

    if (p1 === "page") {
      if (c.method === "PUT") {
        return Page.update(req);
      } else if (c.method === "POST") {
        return Element.create(c);
      } else if (c.method === "DELETE") {
        return Page.delete(c);
      } else return Render.page(c);
    }

    if (p1 === "element") {
      if (c.method === "PUT") {
        return Element.update(req);
      } else if (c.method === "DELETE") {
        return Element.delete(c);
      } else return Render.element(c);
    }

    if (p1 && !p2) {
      if (c.method === "PUT") {
        return await Profile.update(req);
      } else if (c.method === "POST") {
        return Page.create(c);
      } else if (c.method === "DELETE") {
        return User.delete(c);
      } else return await Render.profile(c);
    }

    return Response.redirect("/404");
  } catch (e) {
    return await Render.error(c, e);
  }
}
