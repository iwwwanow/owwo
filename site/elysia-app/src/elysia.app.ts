import { html } from "@elysiajs/html";
import { Elysia } from "elysia";

import { LISTEN_PORT } from "./elysia.constants";
import { getSignupData } from "./getters";
import { SignupPostType } from "./interfaces";
import { PageRouterService } from "./services";
import { SignupService } from "./services";

const app = new Elysia()
  .use(html())

  .get("/public/*", ({ params: { "*": filepathParam } }) => {
    return PageRouterService.getPublic({ param: filepathParam });
  })
  .get("/", () => {
    return PageRouterService.getHomePage();
  })

  .get("/login", () => {
    return PageRouterService.getLoginPage();
  })
  .get("/signup", () => {
    return PageRouterService.getSignupPage();
  })

  .get("/about", () => {
    return PageRouterService.getAboutPage();
  })
  .get("/error", () => {
    return PageRouterService.getErrorPage();
  })

  .get("/:nodeId", (ctx) => {
    const {
      params: { nodeId },
    } = ctx;
    return PageRouterService.getNodePage(nodeId);
  })

  .post(
    "/signup",
    (ctx) => {
      const signupData = getSignupData(ctx.body);
      return SignupService.processPostRequest(signupData);
    },
    SignupPostType,
  )

  .listen(LISTEN_PORT);

export { app };
