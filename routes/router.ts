import { Router } from "../deps.ts";

import page from "../controllers/page.ts";
import auth from "../controllers/auth.ts";
import user from "../controllers/user.ts";

export const router = new Router();

// MAIN;
router
  .get("/", (ctx) => {
    page.index(ctx);
  })
  .get("/about", (ctx) => {
    page.about(ctx);
  });

// AUTH;
router
  .get("/login", (ctx) => {
    page.login(ctx);
  })
  .post("/login", async (ctx) => {
    await auth.login(ctx);
  })
  .get("/signup", (ctx) => {
    page.signup(ctx);
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
router.post("/:username", (ctx) => {
  console.log("create-page");
  ctx.response.redirect(`/${ctx.params.username}`);
});

// PAGE
router.get("/projectId", (ctx) => {
  ctx.render("project.eta");
});

// ELEMENT;
router.get("/elementId", (ctx) => {
  ctx.render("element.eta");
});
