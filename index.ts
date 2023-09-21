import { Elysia } from "elysia";
import { Eta } from "eta";

import * as path from "node:path";

const eta = new Eta({ views: path.join(__dirname, "views") });

const app = new Elysia()
  .get("/", async () => {
    return await eta.render("./index", { name: "Ben" });
  })
  .listen(8080);

console.log(`Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
