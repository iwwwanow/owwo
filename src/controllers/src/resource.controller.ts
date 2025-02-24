import { ResourceService } from "@site/services";

import { getResponseHtml } from "./getters";

export class ResourceController {
  static async get(req: Request) {
    const resourcePageHtml = await ResourceService.getPresentation(req);
    const response = getResponseHtml(resourcePageHtml);
    return response;
  }
}
