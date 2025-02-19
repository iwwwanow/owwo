import { ResourcePage } from "@site/presentation";
import { ResourceService } from "@site/services";

import { getResponseHtml } from "./getters";

export class ResourceController {
  static async get(req: Request) {
    // TODO
    const resourceData = ResourceService.get(req);
    const html = ResourcePage({ resourceData });
    const response = getResponseHtml(html);
    return response;
  }
}
