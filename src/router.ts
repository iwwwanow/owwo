import { Elysia } from "elysia";

import IndexController from "../controllers/index.ts";
import AuthController from "../controllers/auth.ts";
import UserController from "../controllers/user.ts";
import PageController from "../controllers/page.ts";

import { ExContext } from "../typescript/interfaces";

const router = new Elysia();
// ERROR
router.onError((e: any) => {
  return new Response(IndexController.renderError(e), {
    headers: {
      "Content-Type": "text/html",
    },
  });
});

// INDEX
router
  .get("/", (c: any) => {
    return IndexController.renderIndex(c);
  })
  .get("/about", (c: any) => {
    return IndexController.renderAbout(c);
  })
  .get("/login", () => {
    return IndexController.renderLogin();
  })
  .get("/signup", () => {
    return IndexController.renderSignUp();
  });

// AUTH
router
  .post("/signup", (c: any) => {
    return AuthController.createUser(c);
  })
  .post("/login", (c: any) => {
    return AuthController.authUser(c);
  })
  .get("/logout", (c: any) => {
    return AuthController.logout(c);
  });

console.log("checkauth");

// USER
router
  .get("/:username", (c: any) => {
    return UserController.index(c);
  })
  .post("/:username", (c: any) => {
    return PageController.create(c);
  });

// PAGE
router
  .get("/page/:page_id", (c: any) => {
    return PageController.index(c);
  })
  .post("/page/:page_id", (c: any) => {
    if (c.query._method === "DELETE") return PageController.delete(c);
    if (c.query._method === "PUT") return PageController.update(c);
    // return PageController.update(c);
  });

export default router;
