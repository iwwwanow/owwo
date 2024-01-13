import check_env from "../utils/check_env.utils.js";

import sql from "../lib/sql.js";
import app from "../server/app.server.js";

import StaticController from "../controllers/static.controller.js";
import IndexController from "../controllers/index.controller.js";
import AboutController from "../controllers/about.controller.js";
import LoginController from "../controllers/login.controller.js";
import SignupController from "../controllers/signup.controller.js";
import UserController from "../controllers/user.controller.js";
import PageController from "../controllers/page.controller.js";
import ElementController from "../controllers/element.controller.js";

await check_env();
await sql().init();
const owwo = app();

owwo
  .get("/public", (c) => StaticController.response(c))
  .get("/views", (c) => StaticController.response(c));

owwo
  .get("/about", (c) => AboutController.index(c))
  .get("/login", (c) => LoginController.index(c))
  .get("/signup", (c) => SignupController.index(c))
  .get("/profile", (c) => UserController.index(c))
  .get("/page", (c) => PageController.index(c))
  .get("/element", (c) => ElementController.index(c))
  .get("/", (c) => IndexController.index(c));

owwo.listen(8080);
