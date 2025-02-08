import type { SiteViewPort } from "../ports";

export const aboutPageHandler = async (
  _req: Request,
  siteViewContext: SiteViewPort,
) => {
  const aboutPageMarkup = await siteViewContext.getAboutPage();
  return new Response(aboutPageMarkup, {
    headers: {
      "Content-Type": "text/html",
    },
  });
};
