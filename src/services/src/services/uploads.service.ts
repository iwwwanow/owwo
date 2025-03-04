import { BunFile } from "bun";
import { join } from "path";

import { getUploadsPath } from "../getters/index.js";

const PUBLIC_PATH = "./src/static";

export class UploadsService {
  static async getFile(req: Request): Promise<BunFile> {
    const reqUrl = new URL(req.url);
    const { pathname: reqPathname } = reqUrl;
    const slug = reqPathname.split("/").slice(2).join("/");
    const uploadsPath = getUploadsPath();
    const filePath = join(uploadsPath, slug);
    return Bun.file(filePath);
  }
}
