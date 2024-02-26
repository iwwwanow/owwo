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
    pathname;

    // TODO FIX
    const routerArr = route.split("/");
    const pathArr = pathname.split("/");

    const params = {};

    const regexArr = [];
    routerArr.forEach((p, index) => {
      if (p.startsWith(":")) {
        const paramName = p.substring(1);
        const paramValue = pathArr[index];
        params[paramName] = paramValue;
        regexArr.push(`\\S+`);
      } else {
        regexArr.push(p);
      }
    });

    const regexStr = regexArr.join(`/`);
    const regex = new RegExp(regexStr);

    if (regex.test(pathname)) {
      c.addParams(params);
      return cb(c);
    }
  }

  console.log(regex);
  console.log(pathname);
  const error = new Error("Not found");
  error.code = 404;
  throw error;
  // return new Response("owwo__404-page");
}
