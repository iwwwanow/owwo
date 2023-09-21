import { Application } from "./deps.ts";
import { cron } from "./deps.ts";

import { router } from "./routes/router.ts";
import page from "./controllers/page.ts";
import { validate } from "./utils/validate.ts";

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
// every monday at midnight

// const schedule = "* * * * *";
// every minute

const schedule = "0 */1 * * *";
// every hour at 00 minutes

// const schedule = "*/5 * * * * *";
// every 5sec

cron(schedule, () => {
  page.checkBin();
});

const server = app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${
      hostname ?? "localhost"
    }:${port}`
  );
});

await app.listen({ port: 8000 });
