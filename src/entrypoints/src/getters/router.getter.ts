import type { Handler } from "@site/routes";

interface RouteInt {
  method: string;
  path: string;
  handler: Handler;
}

class Router {
  private routes: Array<RouteInt> = [];

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

export const getRouter = () => {
  const router = new Router();
  return router;
};
