import { App } from "./app/index.app";

import { IndexController } from "./controllers/index.controller";

const app = new App();

app
  .get("/favicon.ico", (c) => {
    return;
  })
  .get("/about", (c) => {
    return c.send("about");
  })
  .get("/login", (c) => {
    return c.send("login");
  })
  .get("/logout", (c) => {
    return c.send("logout");
  })
  .get("/page/:pageId", (c) => {
    const { pageId } = c.params;
    return c.send(`page: ${pageId}`);
  })
  .get("/element/:elementId", (c) => {
    const { elementId } = c.params;
    return c.send(`element: ${elementId}`);
  })
  .get("/:username", (c) => {
    const { username } = c.params;
    return c.send(`username: ${username}`);
  })
  .get("/", IndexController.index);

await app.listen(3000);
