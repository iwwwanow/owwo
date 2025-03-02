import { BunFile } from "bun";
import { join } from "path";

const PUBLIC_PATH = "./src/static";

export class PublicService {
  static async getFile(req: Request): Promise<BunFile> {
    const reqUrl = new URL(req.url);
    const { pathname: reqPathname } = reqUrl;
    const filePath = join(PUBLIC_PATH, reqPathname);
    return Bun.file(filePath);
  }
}
