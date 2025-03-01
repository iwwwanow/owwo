import { ResourcePage } from "@site/presentation";
import { ResourceRepository } from "@site/repositories";

export class ResourceService {
  // TODO уровень бизнес логики
  // TODO упаковать работу с presentation на этот уровень. контроллер только отпралвяет html
  // getResourcePresentation
  static async getPresentation(req: Request): Promise<string> {
    const reqUrl = new URL(req.url);
    const { pathname: reqPathname } = reqUrl;

    const resourceRepository = new ResourceRepository();
    const resourceAggregate = await resourceRepository.getByPath(reqPathname);
    console.log(resourceAggregate);

    const resourcePageHtml = ResourcePage({ resourceData });

    return resourcePageHtml;
  }
}
