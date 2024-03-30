import { routes } from "@stricjs/app";
import { text, json } from "@stricjs/app/send";

export default routes()
  .get("/", () => text("Welcome to Stric!"))
  .post("/json", (ctx) => ctx.json().then(json));
