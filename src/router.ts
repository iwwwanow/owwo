import { Elysia } from "elysia";

import IndexController from "../controllers";
import AuthController from "../controllers/auth";

const router = new Elysia();

// INDEX
router
  .get("/", () => {
    return IndexController.renderIndex();
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

// AUTH;
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

export default router;
