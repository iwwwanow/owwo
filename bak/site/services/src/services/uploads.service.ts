import { getUploadsPath } from "@site/domain";
import { BunFile } from "bun";
import { join } from "path";

export class UploadsService {
  static async getFile(req: Request): Promise<BunFile> {
    const reqUrl = new URL(req.url);
    const { pathname: reqPathname } = reqUrl;
    const decodedPathname = decodeURI(reqPathname);
    const slug = decodedPathname.split("/").slice(2).join("/");
    const uploadsPath = getUploadsPath();
    const filePath = join(uploadsPath, slug);
    return Bun.file(filePath);
  }
}
