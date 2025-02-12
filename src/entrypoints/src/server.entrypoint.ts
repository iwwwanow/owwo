import { registerSiteRoutes } from "@site/routes";

const app = {
  get: (path: string, handler: Function) =>
    Bun.serve({
      fetch(req) {
        if (req.method === "GET" && new URL(req.url).pathname === path) {
          return handler(req);
        }
        return new Response("Not Found", { status: 404 });
      },
    }),
  // Аналогично для POST, PUT, DELETE...
};

registerSiteRoutes(app);

console.log("Server running on http://localhost:3000");
