import { ResourceController } from "@site/controllers";

// TODO app type
export const registerSiteRoutes = (app) => {
  app.get("/api", (req: Request) => {
    console.log("api route");
    return new Response("api route");
    // ResourceController.get(req)
  });
  app.get("/static", (req: Request) => {
    console.log("static route");
    return new Response("static route");
    // ResourceController.get(req)
  });
  app.get("/", (req: Request) => {
    console.log("index route");
    return new Response("index route");
    // ResourceController.get(req)
  });
};
