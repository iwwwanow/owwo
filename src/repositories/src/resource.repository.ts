import type { Resource } from "@site/models";

export class ResourceRepository {
  static get(path: string): Resource {
    console.log("get resource on repository by path");
  }
}
