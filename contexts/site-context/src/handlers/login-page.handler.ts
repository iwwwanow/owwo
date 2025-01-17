import type { SiteViewPort } from "../ports";

export const loginPageHandler = async (
  req: Request,
  siteViewContext: SiteViewPort,
) => {
  const loginPageMarkup = await siteViewContext.getLoginPage();
  return new Response(loginPageMarkup, {
    headers: {
      "Content-Type": "text/html",
    },
  });
};
