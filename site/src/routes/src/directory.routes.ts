import { DirectoryController } from "@site/controllers";

// TODO app type
export const registerDirectoryRoutes = (app) => {
  app.get("/directory", (req: Request) => DirectoryController.getByPath(req));
};
