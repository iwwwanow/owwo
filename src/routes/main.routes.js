import { routes } from "@stricjs/app";
import { HomeController } from "../controllers/home.controller";

export default routes().get("/", HomeController.renderHomePage);
