import { getPublicPath } from "../getters";

export const publicRouteHandler = (req: Request) => {
  const reqUrl = new URL(req.url);
  const { pathname } = reqUrl;
  const publicPath = getPublicPath(pathname);
  const file = Bun.file(publicPath);
  return new Response(file);
};
