import { NotFoundError } from "../errors";

export const indexPageRouteHandler = (req: Request) => {
  const reqUrl = new URL(req.url);
  const { pathname } = reqUrl;
  const params = pathname.split("/").filter((i) => i);

  if (params.length > 1) throw new NotFoundError();

  const nodeId = params[0];

  if (nodeId) {
    return new Response(`node page ${nodeId}`);
  }

  return new Response("index page");
};
