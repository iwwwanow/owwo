import type { HttpServerPort } from "@contexts/site-core";
import type { InitProps } from "@contexts/site-core";
import type { RouteHandlerType } from "@contexts/site-core";
import type { RouteOptionsType } from "@contexts/site-core";

type RouteType = {
  route: string;
  handler: RouteHandlerType;
  options: RouteOptionsType;
};

export class BunHttpServerAdapter implements HttpServerPort {
  routes: Array<RouteType> = [];

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

        const findRoute = (pathname: string) => {
          const findedRoute = adapterRoutes.find((route) => {
            return pathname.includes(route.route);
          });
          return findedRoute;
        };

        const getSlugValue = (pathname, route) => {
          const slug = pathname
            .split(route)
            .filter((i) => i)
            .at(-1);
          return slug;
        };

        const findedRoute = findRoute(pathname);
        if (findedRoute) {
          if (findedRoute?.options?.slug) {
            const findedRouteSlugValue = getSlugValue(
              pathname,
              findedRoute.route,
            );
            console.log(findedRoute.route, findedRouteSlugValue);
            return findedRoute.handler({
              params: { [findedRoute.options.slug]: findedRouteSlugValue },
              ...req,
            });
          }

          return findedRoute.handler(req);
        }

        return new Response("404!");
      },
    });

    return { url };
  }

  addRoute(
    route: string,
    routeHandler: RouteHandlerType,
    routeOptions: RouteOptionsType,
  ) {
    // TODO check route exist and error if exist

    this.routes.push({
      route,
      handler: routeHandler,
      options: routeOptions,
    });

    const routesSortFunction = (routeA: RouteType, routeB: RouteType) => {
      const filtredRouteA = routeA.route.split("/").filter((item) => item);
      const filtredRouteB = routeB.route.split("/").filter((item) => item);

      if (filtredRouteA.length < filtredRouteB.length) return 1;
      else if (filtredRouteA.length > filtredRouteB.length) return -1;
      return 0;
    };

    this.routes = this.routes.sort(routesSortFunction);
  }
}
