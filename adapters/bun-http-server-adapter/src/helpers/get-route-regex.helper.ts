export const getRouteRegexHelper = (
  route: string,
  routeSlugs: Array<string>,
): RegExp => {
  let re = route;

  routeSlugs.forEach((routeSlug) => {
    console.log(route);
    console.log(routeSlug);
    re = re.replace(routeSlug, `\\w+`);
  });

  return new RegExp(re);
};
