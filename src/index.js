import check_env from "../utils/check_env.utils.js";

import sql from "../lib/sql.js";
import app from "../server/app.server.js";

import AboutController from "../controllers/about.controller.js";

await check_env();
await sql().init();
const owwo = app();

owwo
  .get("/", (c) => c.send("index"))
  .get("/about", (c) => {
    return AboutController.index(c);
  })
  .get("/login", (c) => c.send("login"))
  .get("/signup", (c) => c.send("signup"))
  .get("/profile", (c) => c.send("profile"))
  .get("/page", (c) => c.send("page"))
  .get("/element", (c) => c.send("element"));

owwo.listen(8080);
