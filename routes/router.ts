import { Router } from "../deps.ts";

import auth from "../controllers/auth.ts";

export const router = new Router();

import { Eta } from "https://deno.land/x/eta@v3.1.0/src/index.ts";
import configEta from "../config/eta.ts";

const eta = new Eta(configEta);

console.log(Deno.cwd() + "/views");

// MAIN;
router
  .get("/", (ctx) => {
    ctx.response.body = eta.render("./index", { request: ctx.request });
  })
  .get("/about", (ctx) => {
    ctx.response.body = eta.render("./about", { request: ctx.request });
  });

// AUTH;
router
  .get("/login", (ctx) => {
    ctx.response.body = eta.render("./login", { request: ctx.request });
  })
  .post("/login", async (ctx) => {
    await auth.login(ctx);
  })
  .get("/signup", (ctx) => {
    ctx.response.body = eta.render("./signup", { request: ctx.request });
  })
  .post("/signup", async (ctx) => {
    await auth.signup(ctx);
  })
  .get("/logout", async (ctx) => {
    await auth.logout(ctx);
  });

// PROFILE
router.get("/:username", (ctx) => {
  ctx.response.body = eta.render("./profile", {
    request: ctx.request,
    params: ctx.params,
  });
});

// PAGE
router.get("/projectId", (ctx) => {
  ctx.render("project.eta");
});

// ELEMENT;
router.get("/elementId", (ctx) => {
  ctx.render("element.eta");
});
