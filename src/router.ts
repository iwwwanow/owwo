import { Elysia } from "elysia";

import IndexController from "../controllers";
import AuthController from "../controllers/auth";
import UserController from "../controllers/user";
import PageController from "../controllers/page";

import { ExContext } from "../typescript/interfaces";

const router = new Elysia();
// ERROR
router.onError((e) => {
  console.log(e);
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

// USER
router.get("/:username", (c: any) => {
  return UserController.index(c);
});

// USER
router.post("/:username", (c: any) => {
  return PageController.create(c);
});

export default router;
