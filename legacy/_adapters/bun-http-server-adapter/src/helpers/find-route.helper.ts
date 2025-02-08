import type { RouteType } from "@contexts/site-core";

export const findRouteHelper = (routes: Array<RouteType>, pathname: string) => {
  const findedRoute = routes.find((route) => {
    return pathname.startsWith(route.path);
  });
  return findedRoute;
};
