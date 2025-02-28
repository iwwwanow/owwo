import { ResourceMetaEntity } from "../entities/index.js";
import { ContentEntity } from "../entities/index.js";
import { CoverEntity } from "../entities/index.js";

export class ResourceAggregate {
  constructor(
    public readonly meta: ResourceMetaEntity,
    public content: ContentEntity,
    public cover: CoverEntity,
    public children: Array<ResourceAggregate> = [],
  ) {}

  validate() {
    // TODO validate domain
    if (!this.meta.title) throw new Error("Resource must have title");
  }
}
