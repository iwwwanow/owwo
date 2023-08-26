import { Router } from "../deps.ts";

export const router = new Router();

router.get("/", (ctx) => {
  ctx.render("index.eta");
});

router.get("/about", (ctx) => {
  ctx.render("about.eta");
});

router.get("/login", (ctx) => {
  ctx.render("login.eta");
});

router.get("/register", (ctx) => {
  ctx.render("register.eta");
});
router.post("/register", async (ctx) => {
  const result = ctx.request.body();
  console.log(result.type);
  console.log(await result.value);
  ctx.render("login.eta");
});

router.get("/projectId", (ctx) => {
  ctx.render("project.eta");
});

router.get("/elementId", (ctx) => {
  ctx.render("element.eta");
});
