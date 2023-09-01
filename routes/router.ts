import { Router } from "../deps.ts";

import UserController from "../controllers/user.ts";
import auth from "../controllers/auth.ts";

export const router = new Router();

// MAIN;
router.get("/", (ctx) => {
  ctx.render("index.eta");
});
router.get("/about", (ctx) => {
  ctx.render("about.eta");
});

// AUTH;
router.get("/login", (ctx) => {
  ctx.render("login.eta");
});
router.post("/login", async (ctx) => {
  await auth.login(ctx);
});
router.get("/signup", (ctx) => {
  ctx.render("signup.eta");
});
router.post("/signup", async (ctx) => {
  await auth.signup(ctx);
});

// PAGE
router.get("/projectId", (ctx) => {
  ctx.render("project.eta");
});

// ELEMENT;
router.get("/elementId", (ctx) => {
  ctx.render("element.eta");
});
