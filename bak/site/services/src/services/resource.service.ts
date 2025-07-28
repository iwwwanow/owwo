import { ReserverdFilenamesEnum } from "@site/domain";
import { ResourcePage } from "@site/presentation";
import { ErrorPage } from "@site/presentation";
import { ResourceRepository } from "@site/repositories";

export class ResourceService {
  // TODO уровень бизнес логики
  // TODO упаковать работу с presentation на этот уровень. контроллер только отпралвяет html
  // getResourcePresentation
  static async getPresentation(req: Request): Promise<string> {
    const reqUrl = new URL(req.url);
    let { pathname: reqPathname } = reqUrl;

    // TODO to constants/enums (original req name)
    if (reqPathname === "/about") {
      reqPathname = `/${ReserverdFilenamesEnum.AboutPage}`;
    }

    const decodedPathname = decodeURI(reqPathname);

    try {
      const resourceRepository = new ResourceRepository();
      const resourceDto = await resourceRepository.getByPath(decodedPathname);
      const resourcePageHtml = ResourcePage({ resourceData: resourceDto });

      return resourcePageHtml;
    } catch (e) {
      const errorPageHtml = ErrorPage({ error: e });
      return errorPageHtml;
    }
  }
}
