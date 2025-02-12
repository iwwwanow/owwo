import { ResourceRepository } from "@site/repositories";

export class ResourceService {
  static async get(req: Request) {
    console.log("req on resourece service");
    // TODO get path from req
    const path = "bla";
    const resourceData = ResourceRepository.get(path);
  }
}
