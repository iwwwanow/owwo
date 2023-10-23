import { Elysia } from "elysia";

import IndexController from "../controllers/index.js";
import AuthController from "../controllers/auth.js";
import UserController from "../controllers/user.js";
import PageController from "../controllers/page.js";
import ElementController from "../controllers/element.js";

const router = new Elysia();
// ERROR
router.onError((e) => {
  return new Response(IndexController.renderError(e), {
    headers: {
      "Content-Type": "text/html",
    },
  });
});

// INDEX
router
  .get("/", (c) => {
    return IndexController.renderIndex(c);
  })
  .get("/about", (c) => {
    return IndexController.renderAbout(c);
  })
  .get("/login", (c) => {
    return IndexController.renderLogin(c);
  })
  .get("/signup", (c) => {
    return IndexController.renderSignUp(c);
  });

// AUTH
router
  .post("/signup", (c) => {
    return AuthController.createUser(c);
  })
  .post("/login", (c) => {
    return AuthController.authUser(c);
  })
  .get("/logout", (c) => {
    return AuthController.logout(c);
  });

// USER
router
  .get("/:username", (c) => {
    return UserController.index(c);
  })
  .post("/:username", (c) => {
    if (c.query._method === "DELETE") return UserController.delete(c);
    else if (c.query._method === "PUT") return UserController.update(c);
    return PageController.create(c);
  })
  .post("/:username/:file", (c) => {
    if (c.query._method === "DELETE") return UserController.removeFile(c);
    else c.set.redirect = `/${c.params.username}`;
  });

// PAGE
router
  .get("/page/:page_id", (c) => {
    return PageController.index(c);
  })
  .post("/page/:page_id", (c) => {
    if (c.query._method === "DELETE") return PageController.delete(c);
    else if (c.query._method === "PUT") return PageController.update(c);
    else return ElementController.create(c);
  })
  .post("page/:page_id/:file", (c) => {
    if (c.query._method === "DELETE") return PageController.removeFile(c);
    else c.set.redirect = `/page/${c.params.page_id}`;
  })
  .post("page/:page_id/addpusher", (c) => {
    return PageController.pusherAdd(c);
  })
  .post("page/:page_id/removepusher/:pusher_username", (c) => {
    return PageController.pusherRemove(c);
  });

// ELEMENT
router
  .get("/element/:element_id", (c) => {
    return ElementController.index(c);
  })
  .post("/element/:element_id", (c) => {
    if (c.query._method === "DELETE") return ElementController.delete(c);
    else if (c.query._method === "PUT") return ElementController.update(c);
    else return ElementController.create(c);
  })
  .post("element/:element_id/:file", (c) => {
    if (c.query._method === "DELETE") return ElementController.removeFile(c);
    else c.set.redirect = `/element/${c.params.element_id}`;
  });

export default router;
