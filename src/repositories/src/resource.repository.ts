import type { Resource } from "@site/models";
import { PageType } from "@site/models";
import { create } from "domain";
import { readdir } from "fs/promises";
import { join } from "path";

export class ResourceRepository {
  private static resolvePageType(path: string): PageType {
    // const segments = path.split("/");

    if (path === "/") return PageType.Index;
    else if (path === "/about") return PageType.About;

    return PageType.Common;
  }

  static async getByPath(path: string): Promise<{
    pageType: PageType;
    resourceData: Resource;
  }> {
    const pageType = ResourceRepository.resolvePageType(path);

    const dirData = await readdir(path);
    console.log(dirData);
    for (const data of dirData) {
      console.log(Bun.file(join(path, data)));
    }

    const resourceData = {
      meta: {
        title: "title",
        path,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
    };

    return { pageType, resourceData };
  }
}
