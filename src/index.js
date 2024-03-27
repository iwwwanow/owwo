import { checkEnvUtil } from "./utils/check-env.utils";

import { App } from "./app/index.app";

import { StaticController } from "./controllers/static.controller";
import { IndexController } from "./controllers/index.controller";
import { AboutController } from "./controllers/about.controller";
import { AuthController } from "./controllers/auth.controller";
import { PageController } from "./controllers/page.controller";
import { ElementController } from "./controllers/element.controller";
import { UserController } from "./controllers/user.controller";

import { HomeView } from "./views/home.view";
import { AboutView } from "./views/about.view";
import { LoginView } from "./views/login.view";
import { SignupView } from "./views/signup.view";
import { UserView } from "./views/user.view";
import { PageView } from "./views/page.view";
import { ElementView } from "./views/element.view";

import { checkAuthMiddleware } from "./middleware/check-auth.middleware";

await checkEnvUtil();

const app = new App();

app.use(checkAuthMiddleware);

// STATIC
app
  .get("/favicon.ico", StaticController.sendFile)
  .get("/public", StaticController.sendFile)
  .get("/components", StaticController.sendFile);

// VIEWS
app
  .get("/about", AboutView.index)
  .get("/login", LoginView.index)
  .get("/signup", SignupView.index)
  .get("/page/:pageId", PageView.index)
  .get("/element/:elementId", ElementView.index)
  .get("/:username/delete", UserView.delete)
  .get("/:username", UserView.index)
  .get("/", HomeView.index);

// CONTROLLERS
app
  .get("/logout", AuthController.logout)
  .post("/login", AuthController.login)
  .post("/signup", UserController.create);

await app.listen(3000);
