import { ResourceController } from "@site/controllers";

// TODO app type
export const registerSiteRoutes = (app) => {
  app.get("/resource", (req: Request) => ResourceController.getByPath(req));
};
