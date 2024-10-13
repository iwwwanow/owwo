import { html } from "@elysiajs/html";
import { Elysia } from "elysia";

import { LISTEN_PORT } from "./elysia-app.constants";
import { getLaunchText } from "./helpers";
import { checkEnvs } from "./helpers/check-envs.helper";
import { PageRouterService } from "./services/index";
import { TestPage } from "./test-page.tsx";

// TODO toutes to consts
// TODO link routes consts with a href consts

checkEnvs();

const app = new Elysia()
  .use(html())
  .get("/jsx", () => {
    return TestPage();
  })
  .get("/public/*", ({ params: { "*": filepathParam } }) => {
    return PageRouterService.getPublic({ param: filepathParam });
  })
  .get("/", () => {
    return PageRouterService.getHomePage();
  })
  .get("/about", () => {
    return PageRouterService.getAboutPage();
  })
  .get("/login", () => {
    return PageRouterService.getLoginPage();
  })
  .get("/signup", () => {
    return PageRouterService.getSignupPage();
  })
  .get("/:nodeId", (ctx) => {
    const {
      params: { nodeId },
    } = ctx;

    // TODO pass url params to options
    return PageRouterService.getNodePage(nodeId);
  })
  .get("/error", () => {
    return PageRouterService.getErrorPage();
  })
  .listen(LISTEN_PORT);

if (!app?.server?.url) {
  console.error(app);
  throw new Error(`error on elysia-app launch`);
}

const {
  server: { url },
} = app;

//   .get("/public/*", )
//   .get("/", )
//   .get("/about", )
//   .get("/login", )
//   .get("/signup", )
//   .get("/:nodeId", );
//   .get("/error", );

console.log(getLaunchText(url));
