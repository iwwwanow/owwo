export const registerStaticRoutes = (app) => {
  app.get("/favicon.ico", (req: Request) => {
    console.log("TODO FAVICON!");
    return new Response("static route");
    // ResourceController.get(req)
  });
  app.get("/static", (req: Request) => {
    console.log("static route");
    return new Response("static route");
    // ResourceController.get(req)
  });
};
