import { html } from "@elysiajs/html";
import { ViewController } from "@site/controllers";
import { Elysia } from "elysia";

export const routerService = new Elysia({ name: "router-service" })
  .use(html())

  .get("/", () => {
    return ViewController.getHomePage();
  })

  .get("/login", () => {
    return ViewController.getLoginPage();
  })
  .get("/signup", () => {
    return ViewController.getSignupPage();
  })

  .get("/about", () => {
    return ViewController.getAboutPage();
  })

  .get("/error", () => {
    // TODO remove
    return ViewController.getErrorPage();
  })

  .get("/:nodeId", (ctx) => {
    const {
      params: { nodeId },
    } = ctx;
    return ViewController.getNodePage(nodeId);
  });
