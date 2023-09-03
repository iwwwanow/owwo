import { Router } from "../deps.ts";

import index from "../controllers/index.ts";
import auth from "../controllers/auth.ts";
import user from "../controllers/user.ts";
import page from "../controllers/page.ts";

export const router = new Router();

// MAIN;
router
  .get("/", (ctx) => {
    index.index(ctx);
  })
  .get("/about", (ctx) => {
    index.about(ctx);
  });

// AUTH;
router
  .get("/login", (ctx) => {
    index.login(ctx);
  })
  .post("/login", async (ctx) => {
    await auth.login(ctx);
  })
  .get("/signup", (ctx) => {
    index.signup(ctx);
  })
  .post("/signup", async (ctx) => {
    await auth.signup(ctx);
  })
  .get("/logout", async (ctx) => {
    await auth.logout(ctx);
  });

// USER
router.get("/:username", (ctx) => {
  user.index(ctx);
});

// PAGE
router.post("/:username", async (ctx) => {
  await page.create(ctx);
});
router.get("/projectId", (ctx) => {
  ctx.render("project.eta");
});

// ELEMENT;
router.get("/elementId", (ctx) => {
  ctx.render("element.eta");
});
