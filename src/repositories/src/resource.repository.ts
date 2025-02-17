import type { Resource } from "@site/models";
import { dir } from "console";
import { readdir } from "fs/promises";
import { join } from "path";

export class ResourceRepository {
  static async getResourceData(path: string): Resource {
    const dirData = await readdir(path);
    console.log(dirData);
    for (const data of dirData) {
      console.log(Bun.file(join(path, data)));
    }
  }
}
