import { html } from "@elysiajs/html";
import { ViewController } from "@site/controllers";
import { homeRouteDto } from "@site/dto";
import { Elysia } from "elysia";

// TODO link query names in dto and место, где они формируются

export const routerService = new Elysia({ name: "router-service" })
  .use(html())

  .get(
    "/",
    (ctx) => {
      const { query } = ctx;
      const { ["success-message"]: successMessage } = query;

      return ViewController.getHomePage({ successMessage });
    },
    homeRouteDto,
  )

  .get("/login", () => {
    return ViewController.getLoginPage();
  })
  .get("/signup", () => {
    return ViewController.getSignupPage();
  })

  .get("/about", () => {
    return ViewController.getAboutPage();
  })

  // .get("/error", () => {
  //   // TODO remove or provide props from searchparams
  //   return ViewController.getErrorPage();
  // })

  .get("/:nodeId", (ctx) => {
    const {
      params: { nodeId },
    } = ctx;

    return ViewController.getNodePage(nodeId);
  });
