import { JwtUtils } from "../utils/jwt.utils";

const getViewParams = async (context) => {
  const params = {};

  params.pathname = context.url.pathname;

  // TODO
  const authUserRights = null;

  const authJwt = await context.getCookie("auth");
  if (authJwt) {
    const { username } = await JwtUtils.verifyJwt(authJwt);
    params.authUserUsername = username;
  }
  return params;
};

export class ProtoView {
  static async getHtml(templateName, context, htmlString) {
    const params = await getViewParams(context);

    if (!templateName) {
      if (!htmlString) throw new Error("need html string to render blanc");
      templateName = "blank";
      params.htmlString = htmlString;
    }
  }
}
