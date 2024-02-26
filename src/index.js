import { App } from "./app/index.app";

import { IndexController } from "./controllers/index.controller";
import { AboutController } from "./controllers/about.controller";
import { LoginController } from "./controllers/login.controller";
import { LogoutController } from "./controllers/logout.controller";
import { PageController } from "./controllers/page.controller";
import { ElementController } from "./controllers/element.controller";
import { UserController } from "./controllers/user.controller";

const app = new App();

app
  .get("/favicon.ico", (c) => console.log("favicon"))
  .get("/public", (c) => console.log("public"))
  .get("/views", (c) => console.log("views"))
  .get("/about", AboutController.index)
  .get("/login", LoginController.index)
  .get("/logout", LogoutController.index)
  .get("/page/:pageId", PageController.index)
  .get("/element/:elementId", ElementController.index)
  .get("/:username", UserController.index)
  .get("/", IndexController.index);

await app.listen(3000);
