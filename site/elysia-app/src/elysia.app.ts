import { html } from "@elysiajs/html";
import { signupDto } from "@site/dto";
import { Elysia } from "elysia";

import { LISTEN_PORT } from "./elysia.constants";
import { onErrorHelper } from "./helpers";
import { PageRouterService } from "./services";
import { SignupService } from "./services";

const pagesService = new Elysia({ name: "Service.Pages" })
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
  });

const app = new Elysia()
  .onError(onErrorHelper)
  .use(pagesService)

  .get("/favicon.ico", () => {
    // TODO
    console.log("need to provide favicon");
    return "bla";
  })

  .post(
    "/signup",
    (ctx) => {
      const { redirect, body: signupData } = ctx;
      return SignupService.processPostRequest({ signupData, redirect });
    },
    {
      body: signupDto,
    },
  )

  .listen(LISTEN_PORT);

export { app };
