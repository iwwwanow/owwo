import { ResourcePage } from "@site/presentation";
import { ResourceRepository } from "@site/repositories";

import { getUploadsPath } from "./getters";
import { getResourcePath } from "./getters";

export class ResourceService {
  // TODO уровень бизнес логики
  // TODO упаковать работу с presentation на этот уровень. контроллер только отпралвяет html
  // getResourcePresentation
  static async getPresentation(req: Request): Promise<string> {
    const reqUrl = new URL(req.url);
    const { pathname: reqPathname } = reqUrl;

    const uploadsPath = getUploadsPath();
    const resourcePath = getResourcePath(uploadsPath, reqPathname);

    const resourceData = await ResourceRepository.getByPath(resourcePath);

    const resourcePageHtml = ResourcePage({ resourceData });

    return resourcePageHtml;
  }
}
