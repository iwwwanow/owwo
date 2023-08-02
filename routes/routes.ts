import { Router } from "https://deno.land/x/oak/mod.ts";

export const router = new Router();

router.get("/", (context) => {
  context.render("index.eta");
});

router.get("/about", (context) => {
  context.render("about.eta");
});

router.get("/login", (context) => {
  context.render("login.eta");
});

router.get("/projectId", (context) => {
  context.render("project.eta");
});

router.get("/elementId", (context) => {
  context.render("element.eta");
});
