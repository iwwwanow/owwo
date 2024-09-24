import { routes } from "@stricjs/app";
import { StaticController } from "@site/controllers";
import { ViewController } from "@site/controllers";

export default routes()
  .get("/favicon.ico", () => console.log("TODO create favicon"))
  .get("/public/*", StaticController.sendFile)
  .get("/", ViewController.renderHomePage)
  .get("/about", ViewController.renderAboutPage)
  .get("/login", ViewController.renderLoginPage)
  .get("/signup", ViewController.renderSignupPage)
  .get("/:nodeId", ViewController.renderNodePage);
// .get("/error", ViewController.renderErrorPage);
