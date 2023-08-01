import { Router } from "https://deno.land/x/oak/mod.ts";

export const router = new Router();

router.get("/", (context) => {
  context.render("index.eta");
});
