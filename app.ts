import { Application, Router } from "./deps.ts";
import path from "./deps.ts";

import { viewEngine, oakAdapter, etaEngine } from "./deps.ts";

import { router } from "./routes/router.ts";

const app = new Application();

await app.use(
  viewEngine(oakAdapter, etaEngine, {
    viewRoot: "./views",
  })
);

await app.use(router.routes());

// static connect
await app.use(async (context) => {
  await context.send({
    root: `${Deno.cwd()}`,
    // index: "index.html",
  });
});

const server = await app.addEventListener(
  "listen",
  ({ hostname, port, secure }) => {
    console.log(
      `Listening on: ${secure ? "https://" : "http://"}${
        hostname ?? "localhost"
      }:${port}`
    );
  }
);

await app.listen({ port: 8000 });
