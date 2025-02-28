import { ResourceAggregate } from "@site/domain";
import { ResourceMetaEntity } from "@site/domain";
import { ContentEntity } from "@site/domain";
import { CoverEntity } from "@site/domain";
import { readdir } from "fs/promises";
import { join } from "path";

// TODO uploads full system path
const UPLOADS_PATH = "/uploads";

export class ResourceRepository {
  async getByPath(path: string): Promise<ResourceAggregate> {
    const fullPath = join(UPLOADS_PATH, path);

    const [meta, content, cover] = await Promise.all([
      this.loadMetaByPath(fullPath),
      this.loadContentByPath(fullPath),
      this.loadCoverByPath(fullPath),
    ]);

    const children = await this.loadChildrenByPath(fullPath);

    return new ResourceAggregate(meta, content, cover, children);
  }

  private async loadMetaByPath(path: string): Promise<ResourceMetaEntity> {
    // TODO get meta by path
    const meta = new ResourceMetaEntity();
    return meta;
  }

  private async loadContentByPath(path: string): Promise<ContentEntity> {
    // TODO get content by path
    const content = new ContentEntity();
    return content;
  }

  private async loadCoverByPath(path: string) {
    // TODO get cover by path
    const cover = new CoverEntity();
    return cover;
  }

  private async loadChildrenByPath(
    path: string,
  ): Promise<Array<ResourceAggregate>> {
    const dirEntries = await readdir(path, { withFileTypes: true });
    return Promise.all(
      dirEntries
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => this.getByPath(join(path, dirent.name))),
    );
  }
}
