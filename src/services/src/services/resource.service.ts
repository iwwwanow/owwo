import { ResourcePage } from "@site/presentation";
import { ResourceRepository } from "@site/repositories";

export class ResourceService {
  // TODO уровень бизнес логики
  // TODO упаковать работу с presentation на этот уровень. контроллер только отпралвяет html
  // getResourcePresentation
  static async getPresentation(req: Request): Promise<string> {
    const reqUrl = new URL(req.url);
    const { pathname: reqPathname } = reqUrl;
    const decodedPathname = decodeURI(reqPathname);

    const resourceRepository = new ResourceRepository();
    const resourceDto = await resourceRepository.getByPath(decodedPathname);
    const resourcePageHtml = ResourcePage({ resourceData: resourceDto });

    return resourcePageHtml;
  }
}
