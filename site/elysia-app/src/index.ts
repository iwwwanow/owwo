import { Elysia } from "elysia";

import { getLaunchText } from "./app.constants";
import { PageRouterService } from "./services/index";

const app = new Elysia()
  .get("/public/*", ({ params: { "*": filepathParam } }) => {
    return PageRouterService.getPublic({ param: filepathParam });
  })
  .get("/", () => {
    return PageRouterService.getHomePage();
  })
  .get("/hello", "Do you miss me?")
  .listen(3000);

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
