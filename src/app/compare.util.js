export function routeCompare(c, appRoutes) {
  const method = c.method;
  const pathname = c.url.pathname;

  let routes;

  if (method === "GET") routes = appRoutes.get;
  else if (method === "POST") routes = appRoutes.post;
  else if (method === "PUT") routes = appRoutes.put;
  else if (method === "DELETE") routes = appRoutes.delete;
  else throw new Error("method dont match");

  for (const { route, cb } of routes) {
    const regex = new RegExp(route);
    if (regex.test(pathname)) {
      return cb(c);
    } else {
      const error = new Error("Not found");
      error.code = 404;
      throw error;
      // return new Response("owwo__404-page");
    }
  }
}
