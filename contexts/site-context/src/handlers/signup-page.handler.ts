import type { SiteViewPort } from "../ports";

export const signupPageRouteHandler = async (
  _req: Request,
  siteViewContext: SiteViewPort,
) => {
  const signupPageMarkup = await siteViewContext.getSignupPage();
  return new Response(signupPageMarkup, {
    headers: {
      "Content-Type": "text/html",
    },
  });
};
