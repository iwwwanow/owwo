import { Elysia } from "elysia";

import IndexController from "../controllers";
import AuthController from "../controllers/auth";
import UserController from "../controllers/user";

const router = new Elysia();

// INDEX
router
  .get("/", (c) => {
    return IndexController.renderIndex(c);
  })
  .get("/about", () => {
    return IndexController.renderAbout();
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

export default router;
