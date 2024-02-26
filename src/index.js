import { App } from "./app/index.app";

const app = new App();

app
  .get("/about", (c) => {
    return c.send("about");
  })
  .get("/favicon.ico", (c) => {
    return;
  })
  .get("/page/:pageId", (c) => {
    const { pageId } = c.params;
    return c.send(pageId);
  })
  .get("/:username", (c) => {
    const { username } = c.params;
    return c.send(username);
  })
  .get("/", (c) => c.send("home"));

await app.listen(3000);
