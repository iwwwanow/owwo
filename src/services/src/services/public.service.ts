import { FAVICON_PATH } from "@site/domain";
import { BunFile } from "bun";
import { join } from "path";

export class PublicService {
  static async getFile(req: Request): Promise<BunFile> {
    const reqUrl = new URL(req.url);
    const { pathname: reqPathname } = reqUrl;

    let filePath: string;

    if (reqPathname === "/favicon.ico") {
      filePath = FAVICON_PATH;
    } else {
      filePath = join(reqPathname);
    }

    return Bun.file(`./${filePath}`);
  }
}
