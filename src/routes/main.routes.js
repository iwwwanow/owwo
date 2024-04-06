import { routes } from "@stricjs/app";
import { StaticController } from "../controllers/static.controller";
import { HomeController } from "../controllers/home.controller";

export default routes()
  .get("/public/*", StaticController.sendFile)
  .get("/", HomeController.renderHomePage);
