import { Eta } from "eta";
import { defaultEtaConfig } from "../config/eta.config";
import { JwtUtils } from "../utils/jwt.utils";

const eta = new Eta(defaultEtaConfig);

const getViewParams = async (context) => {
  const params = {};
  const authJwt = await context.getCookie("auth");
  if (authJwt) {
    const { userId } = await JwtUtils.verifyJwt(authJwt);
    params.authUserId = userId;
  }
  return params;
};

export class EtaView {
  static async getHtml(templateName, context, htmlString) {
    const params = await getViewParams(context);

    if (!templateName) {
      if (!htmlString) throw new Error("need html string to render blanc");
      templateName = "blank";
      params.htmlString = htmlString;
    }

    const html = eta.render(templateName, params);
    return html;
  }
}
