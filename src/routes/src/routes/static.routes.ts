export const registerStaticRoutes = (app) => {
  app.get("/static", (req: Request) => {
    console.log("static route");
    return new Response("static route");
    // ResourceController.get(req)
  });
};
