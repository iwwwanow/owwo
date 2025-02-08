import { NotFoundError } from "../errors";
import type { SiteViewPort } from "../ports";
import { nodeDataMock } from "../tests";

const MOCK_USERS_QUANTITY = 128;

export const indexPageHandler = async (
  req: Request,
  siteViewContext: SiteViewPort,
) => {
  const reqUrl = new URL(req.url);
  const { pathname } = reqUrl;
  const params = pathname.split("/").filter((i) => i);

  if (params.length > 1) throw new NotFoundError();

  const nodeId = params[0];

  if (nodeId) {
    // TODO for test only
    if (nodeId === "node") {
      const nodePageMarkup =
        await siteViewContext.getNodePage(nodePageMockData);
      return new Response(nodePageMarkup, {
        headers: {
          "Content-Type": "text/html",
        },
      });
    }

    if (nodeId === "node-extended") {
      const nodeExtendedPageMarkup = await siteViewContext.getNodeExtendedPage(
        nodeExtendedPageMockData,
      );
      return new Response(nodeExtendedPageMarkup, {
        headers: {
          "Content-Type": "text/html",
        },
      });
    }

    return new Response(`node page ${nodeId}`);
  }

  const indexPageMarkup = await siteViewContext.getIndexPage(indexPageMockData);
  return new Response(indexPageMarkup, {
    headers: {
      "Content-Type": "text/html",
    },
  });
};
