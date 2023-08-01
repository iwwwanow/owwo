import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as path from "https://deno.land/std@0.102.0/path/mod.ts";

import {
  viewEngine,
  oakAdapter,
  etaEngine,
} from "https://deno.land/x/view_engine@v10.6.0/mod.ts";
// import { Eta } from "https://deno.land/x/eta@v3.0.3/src/index.ts";

const app = new Application();

app.use(
  viewEngine(oakAdapter, etaEngine, {
    viewRoot: "./templates",
  })
);

// const __dirname = path.dirname(path.fromFileUrl(import.meta.url));

const router = new Router();
router.get("/", (context) => {
  context.render("index.eta");
});

app.use(router.routes());

await app.listen({ port: 8000 });
