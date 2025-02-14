import type { Resource } from "@site/models";
import { dir } from "console";
import { readdir } from "fs/promises";
import { join } from "path";

export class ResourceRepository {
  static async get(path: string): Resource {
    console.log("get resource on repository by path");
    const dirData = await readdir(path);
    console.log(dirData);
    for (const data of dirData) {
      console.log(Bun.file(join(path, data)));
    }
  }
}
