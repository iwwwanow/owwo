import { Application } from "./deps.ts";

// import { viewEngine, oakAdapter, etaEngine } from "./deps.ts";

import { router } from "./routes/router.ts";
import { validate } from "./utils/validate.ts";

const app = new Application();

// app.use(
//   viewEngine(oakAdapter, etaEngine, {
//     viewRoot: "./views",
//   })
// );

app.use(validate);
app.use(router.routes());
app.use(router.allowedMethods());

// static connect
app.use(async (context) => {
  await context.send({
    root: `${Deno.cwd()}`,
    // index: "index.html",
  });
});

const server = app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${
      hostname ?? "localhost"
    }:${port}`
  );
});

await app.listen({ port: 8000 });
