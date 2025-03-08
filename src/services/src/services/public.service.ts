import { BunFile } from "bun";
import { join } from "path";

// TODO move it to getter and env
const PUBLIC_PATH = "./src/static";

export class PublicService {
  static async getFile(req: Request): Promise<BunFile> {
    const reqUrl = new URL(req.url);
    const { pathname: reqPathname } = reqUrl;

    let filePath: string;

    if (reqPathname === "/favicon.ico") {
      console.log("favicon");
      // TODO favicon name to const
      // TODO all path to const; and check in on start with warning
      filePath = join(PUBLIC_PATH, "public", "assets", "favicon.png");
    } else {
      filePath = join(PUBLIC_PATH, reqPathname);
    }

    return Bun.file(filePath);
  }
}
