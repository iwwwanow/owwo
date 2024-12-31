import type { RouteType } from "@contexts/site-core";

export const sortRoutesHelper = (routeA: RouteType, routeB: RouteType) => {
  const filtredRouteA = routeA.path.split("/").filter((item) => item);
  const filtredRouteB = routeB.path.split("/").filter((item) => item);

  if (filtredRouteA.length < filtredRouteB.length) return 1;
  else if (filtredRouteA.length > filtredRouteB.length) return -1;
  return 0;
};
