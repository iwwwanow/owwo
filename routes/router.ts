import { Router } from "../deps.ts";

import UserController from "../controllers/user.ts";
import auth from "../controllers/auth.ts";

export const router = new Router();

// MAIN;
router
  .get("/", (ctx) => {
    ctx.render("index.eta", { request: ctx.request });
  })
  .get("/about", (ctx) => {
    ctx.render("about.eta");
  });

// AUTH;
router
  .get("/login", (ctx) => {
    ctx.render("login.eta", { request: ctx.request });
  })
  .post("/login", async (ctx) => {
    await auth.login(ctx);
  })
  .get("/signup", (ctx) => {
    ctx.render("signup.eta", { request: ctx.request });
  })
  .post("/signup", async (ctx) => {
    await auth.signup(ctx);
  })
  .get("/logout", async (ctx) => {
    await auth.logout(ctx);
  });

// PROFILE
router.get("/:username", (ctx) => {
  ctx.render("profile.eta", { request: ctx.request });
});

// PAGE
router.get("/projectId", (ctx) => {
  ctx.render("project.eta");
});

// ELEMENT;
router.get("/elementId", (ctx) => {
  ctx.render("element.eta");
});
