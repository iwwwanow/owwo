import { Application } from "./deps.ts";

import { router } from "./routes/router.ts";
import { validate } from "./utils/validate.ts";

import { cron } from "./deps.ts";

const app = new Application();

app.use(validate);
app.use(router.routes());
app.use(router.allowedMethods());

// static connect
app.use(async (context) => {
  await context.send({
    root: `${Deno.cwd()}`,
  });
});

// page deleting timer
// const schedule = '0 0 * * 1'
// every 1st day of the week at midnight

// const schedule = "* * * * *";
// every minute

const schedule = "*/5 * * * * *";
// every 5sec

cron(schedule, () => {
  console.log("cron");
});

const server = app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${
      hostname ?? "localhost"
    }:${port}`
  );
});

await app.listen({ port: 8000 });
