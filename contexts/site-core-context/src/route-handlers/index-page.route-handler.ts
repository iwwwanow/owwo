import { NotFoundError } from "../errors";
import type { SiteViewPort } from "../ports";

export const indexPageRouteHandler = async (
  req: Request,
  siteViewContext: SiteViewPort,
) => {
  const reqUrl = new URL(req.url);
  const { pathname } = reqUrl;
  const params = pathname.split("/").filter((i) => i);

  if (params.length > 1) throw new NotFoundError();

  const nodeId = params[0];

  if (nodeId) {
    return new Response(`node page ${nodeId}`);
  }

  const homePageMarkup = await siteViewContext.getHomePage();
  return new Response(homePageMarkup, {
    headers: {
      "Content-Type": "text/html",
    },
  });
};
