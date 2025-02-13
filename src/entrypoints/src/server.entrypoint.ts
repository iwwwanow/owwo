import { registerSiteRoutes } from "@site/routes";

type Handler = (req: Request) => Response | Promise<Response>;

class Router {
  private routes: Array<{
    method: string;
    path: string;
    handler: Handler;
  }> = [];

  add(method: string, path: string, handler: Handler) {
    this.routes.push({ method, path, handler });
  }

  handle(request: Request) {
    const url = new URL(request.url);

    for (const route of this.routes) {
      if (
        request.method === route.method &&
        url.pathname.startsWith(route.path)
      ) {
        return route.handler(request);
      }
    }

    return new Response("Not Found", { status: 404 });
  }
}

const router = new Router();

const app = {
  get: (path: string, handler: Handler) => router.add("GET", path, handler),
  post: (path: string, handler: Handler) => router.add("POST", path, handler),
  put: (path: string, handler: Handler) => router.add("PUT", path, handler),
  delete: (path: string, handler: Handler) =>
    router.add("DELETE", path, handler),
};

Bun.serve({
  port: 3000,
  fetch(request) {
    return router.handle(request);
  },
});

console.log("Server running on http://localhost:3000");

registerSiteRoutes(app);
