import { checkEnvUtil } from "./utils/check-env.utils";

import { App } from "./app/index.app";

import { StaticController } from "./controllers/static.controller";
import { IndexController } from "./controllers/index.controller";
import { AboutController } from "./controllers/about.controller";
import { LoginController } from "./controllers/login.controller";
import { LogoutController } from "./controllers/logout.controller";
import { SignupController } from "./controllers/signup.controller";
import { PageController } from "./controllers/page.controller";
import { ElementController } from "./controllers/element.controller";
import { UserController } from "./controllers/user.controller";

import { checkAuthMiddleware } from "./middleware/check-auth.middleware";

await checkEnvUtil();

const app = new App();

app.use(checkAuthMiddleware);

app
  .get("/favicon.ico", StaticController.sendFile)
  .get("/public", StaticController.sendFile)
  .get("/components", StaticController.sendFile);

app
  .get("/about", AboutController.index)
  .get("/login", LoginController.index)
  .get("/logout", LogoutController.index)
  .get("/signup", SignupController.index)
  .get("/page/:pageId", PageController.index)
  .get("/element/:elementId", ElementController.index)
  .get("/:username", UserController.index)
  .get("/", IndexController.index);

app.post("/login", UserController.login).post("/signup", UserController.create);

await app.listen(3000);
