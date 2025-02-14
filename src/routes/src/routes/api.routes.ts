export const registerApiRoutes = (app) => {
  app.get("/api", (req: Request) => {
    console.log("api route");
    return new Response("api route");
    // ResourceController.get(req)
  });
};
