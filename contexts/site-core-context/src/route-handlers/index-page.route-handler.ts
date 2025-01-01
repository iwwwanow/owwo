export const indexPageRouteHandler = (req: Request) => {
  const reqUrl = new URL(req.url);
  const { pathname } = reqUrl;
  const nodeId = pathname.split("/").filter((i) => i)[0];

  if (nodeId) {
    return new Response(`node page ${nodeId}`);
  }

  return new Response("index page");
};
