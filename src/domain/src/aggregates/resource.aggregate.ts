import { ResourceMetaEntity } from "../entities/index.js";
import { ContentEntity } from "../entities/index.js";
import { CoverEntity } from "../entities/index.js";
import type { ResourceDto } from "../interfaces/index.js";

export class ResourceAggregate {
  public readonly meta: ResourceMetaEntity;
  public content?: ContentEntity;
  public cover?: CoverEntity;
  public children?: Array<ResourceAggregate> = [];

  constructor(resourceDto: ResourceDto) {
    this.validate();
    Object.assign(this, resourceDto);
  }

  validate() {
    // TODO validate aggregate
    // if (!this.meta.title) throw new Error("Resource must have title");
  }

  getDto(): ResourceDto {
    return this;
  }
}
