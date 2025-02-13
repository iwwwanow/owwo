import { ResourcePage } from "@site/presentation";
import { ResourceService } from "@site/services";

export class ResourceController {
  static async get(req: Request) {
    // TODO
    const resourceData = ResourceService.get(req);
    // return ResourcePage(resourceData);
    return new Response("resource");
  }
}
