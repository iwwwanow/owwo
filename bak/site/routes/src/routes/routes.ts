import { ResourceController } from "@site/controllers";
import { PublicController } from "@site/controllers";
import { UploadsController } from "@site/controllers";

import type { App } from "../interfaces/index.js";

export const registerRoutes = (app: App) => {
  app.get("/favicon.ico", (req: Request) => {
    return PublicController.get(req);
  });

  app.get("/public", (req: Request) => {
    return PublicController.get(req);
  });

  app.get("/api", (req: Request) => {
    return new Response("api route");
  });

  app.get("/uploads", (req: Request) => {
    return UploadsController.get(req);
  });

  app.get("/", (req: Request) => {
    return ResourceController.get(req);
  });
};
