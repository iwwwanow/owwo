import { ResourceService } from "@site/services";

import { getResponseHtml } from "../getters/index.js";

export class ResourceController {
  static async get(req: Request): Promise<Response> {
    const resourcePageHtml = await ResourceService.getPresentation(req);
    const response = getResponseHtml(resourcePageHtml);
    return response;
  }
}
