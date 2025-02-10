import { DirectoryService } from "@site/services";

export class DirectoryController {
  static async getByPath(req: Request) {
    // TODO
    const directoryData = DirectoryService.get(path);
    // return DirectoryService.
  }
}
