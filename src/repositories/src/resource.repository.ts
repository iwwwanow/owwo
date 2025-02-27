import { ResourceModel } from "@site/models";
import { readdir } from "fs/promises";
import { join } from "path";

export class ResourceRepository {
  static async getByPath(path: string): Promise<ResourceModel> {
    const resource = new ResourceModel(path);
    await resource.init();
    return resource;
  }
}
