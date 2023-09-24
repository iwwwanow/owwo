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
  .post("/signup", ({ body, set }) => {
    return AuthController.createUser({ body, set });
  })
  .post("login", ({ body, set }) => {
    return AuthController.authUser({ body, set });
  });

export default router;
