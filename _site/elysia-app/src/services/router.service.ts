import { html } from "@elysiajs/html";
import { HOME_ROUTE_PATH } from "@site/constants";
import { LOGIN_ROUTE_PATH } from "@site/constants";
import { SIGNUP_ROUTE_PATH } from "@site/constants";
import { ABOUT_ROUTE_PATH } from "@site/constants";
import { ViewController } from "@site/controllers";
import { homeRouteDto } from "@site/dto";
import { Elysia } from "elysia";

export const routerService = new Elysia({ name: "router-service" })
  .use(html())

  .get(
    HOME_ROUTE_PATH,
    (ctx) => {
      const { query } = ctx;
      const { ["success-message"]: successMessage } = query;

      return ViewController.getHomePage({ successMessage });
    },
    homeRouteDto,
  )

  .get(LOGIN_ROUTE_PATH, () => {
    return ViewController.getLoginPage();
  })
  .get(SIGNUP_ROUTE_PATH, () => {
    return ViewController.getSignupPage();
  })

  .get(ABOUT_ROUTE_PATH, () => {
    return ViewController.getAboutPage();
  })

  .get("/:nodeId", (ctx) => {
    const {
      params: { nodeId },
    } = ctx;

    return ViewController.getNodePage(nodeId);
  });
