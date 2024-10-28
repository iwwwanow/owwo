import { html } from "@elysiajs/html";
import { Elysia } from "elysia";

import { LISTEN_PORT } from "./elysia-app.constants";
import { getLaunchText } from "./helpers";
import { checkEnvs } from "./helpers/check-envs.helper";
import { PageRouterService } from "./services";
import { SignupService } from "./services";

// TODO toutes to consts
// TODO link routes consts with a href consts

checkEnvs();

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

  .post("/signup", () => {
    return SignupService.processPostRequest();
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
