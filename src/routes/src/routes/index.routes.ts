import { ResourceController } from "@site/controllers";

import type { App } from "../interfaces";

// TODO app type
export const registerIndexRoutes = (app: App) => {
  app.get("/", (req: Request) => {
    console.log("index route");
    return new Response("index route");
    // ResourceController.get(req)
  });
};
