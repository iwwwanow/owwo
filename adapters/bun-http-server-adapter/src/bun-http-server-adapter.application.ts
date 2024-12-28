import type { HttpServerPort } from "@contexts/site-core";
import type { InitProps } from "@contexts/site-core";
import type { RouteHandlerType } from "@contexts/site-core";

import { checkSlugHelper } from "./helpers";

export class BunHttpServerAdapter implements HttpServerPort {
  routes: Record<string, RouteHandlerType> = {};

  async init({ port }: InitProps) {
    this.listen(port);
    console.log("init bun http server adapter");
  }

  listen(port: number) {
    const adapterRoutes = this.routes;

    const { url } = Bun.serve({
      port: port,
      // static: {
      //   "/": new Response("Hello World"),
      // },
      fetch(req: Request) {
        const url = new URL(req.url);
        const { pathname } = url;

        const findedRouteHandler = adapterRoutes[pathname];
        if (findedRouteHandler) {
          return findedRouteHandler(req);
        }

        return new Response("404!");
      },
    });

    return { url };
  }

  // /\/bla\/\S+/gm
  get(route: string, routeHandler: RouteHandlerType) {
    const hasSlug = checkSlugHelper(route);

    if (!hasSlug) {
      this.routes[route] = routeHandler;
    } else {
      console.log(`${route} has slug`);
    }

    return this;
  }
}
