import { ResourceRepository } from "@site/repositories";

import { getUploadsPath } from "./getters";
import { getResourcePath } from "./getters";

export class ResourceService {
  static async get(req: Request) {
    const reqUrl = new URL(req.url);
    const { pathname: reqPathname } = reqUrl;

    const uploadsPath = getUploadsPath();
    const resourcePath = getResourcePath(uploadsPath, reqPathname);

    const resourceData = ResourceRepository.get(resourcePath);
  }
}
