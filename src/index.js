import { checkEnvUtil } from "./utils/check-env.utils";

import { App } from "./app/index.app";

import { StaticController } from "./controllers/static.controller";
import { IndexController } from "./controllers/index.controller";
import { AuthController } from "./controllers/auth.controller";
import { PageController } from "./controllers/page.controller";
import { ElementController } from "./controllers/element.controller";
import { UserController } from "./controllers/user.controller";

import { checkAuthMiddleware } from "./middleware/check-auth.middleware";

await checkEnvUtil();

const app = new App();

app.use(checkAuthMiddleware);

// STATIC
app
  .get("/favicon.ico", StaticController.sendFile)
  .get("/public", StaticController.sendFile)
  .get("/components", StaticController.sendFile);

// ACTIONS
app
  .get("/logout", AuthController.logout)
  .post("/login", AuthController.login)
  .post("/signup", UserController.create);

// RENDERS
app
  .get("/about", IndexController.renderAboutPage)
  .get("/login", AuthController.renderLoginPage)
  .get("/signup", AuthController.renderSignupPage)
  .get("/element/:elementId", ElementController.renderElementPage)
  .get("/page/:pageId", PageController.renderPagePage)
  .get("/:username/delete", UserController.renderUserDeletePage)
  .get("/:username", UserController.renderUserPage)
  .get("/", IndexController.renderHomePage);

await app.listen(3000);
