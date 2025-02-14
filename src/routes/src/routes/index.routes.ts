import { ResourceController } from "@site/controllers";

import type { App } from "../interfaces";

export const registerIndexRoutes = (app: App) => {
  app.get("/", (req: Request) => {
    console.log("index route");
    return ResourceController.get(req);
  });
};
