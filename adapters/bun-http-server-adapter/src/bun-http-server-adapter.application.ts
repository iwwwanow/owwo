import type { HttpServerPort } from "@contexts/site-core";
import type { InitProps } from "@contexts/site-core";
import type { RouteType } from "@contexts/site-core";
import type { SiteError } from "@contexts/site-core";
import type { HttpServerErrorHandlers } from "@contexts/site-core";

import { sortRoutesHelper } from "./helpers";
import { findRouteHelper } from "./helpers";

export class BunHttpServerAdapter implements HttpServerPort {
  routes: Array<RouteType> = [];
  errorHandlers: HttpServerErrorHandlers;

  async init({ port, errorHandlers }: InitProps) {
    this.errorHandlers = errorHandlers;
    this.listen(port);
    console.log("init bun http server adapter");
  }

  listen(port: number) {
    const routes = this.routes;
    const errorHandlers = this.errorHandlers;

    const { url } = Bun.serve({
      port: port,
      // static: {
      //   "/": new Response("Hello World"),
      // },
      fetch(req: Request) {
        const reqUrl = new URL(req.url);
        const { pathname } = reqUrl;

        const findedRoute = findRouteHelper(routes, pathname);

        try {
          if (findedRoute) {
            return findedRoute.handler(req);
          }
        } catch (e: unknown) {
          const error = e as SiteError;

          if (error.code === 404) {
            return errorHandlers.pageNotFoundErrorHandler(req);
          }
        }

        return errorHandlers.internalServerErrorHandler(req);
      },
    });

    return { url };
  }

  addRoute(route: RouteType) {
    // TODO check route exist and error if exist
    this.routes.push(route);
    this.routes = this.routes.sort(sortRoutesHelper);
  }
}
