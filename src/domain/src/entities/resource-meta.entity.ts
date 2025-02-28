import type { ResourceVariantEnum } from "../enums/index.js";
import type { PageVariantEnum } from "../enums/index.js";
import type { ResourceMetaDto } from "../interfaces/index.js";

export class ResourceMetaEntity {
  path: string;
  title: string;
  resourceType: ResourceVariantEnum;
  pageType: PageVariantEnum;
  createdAt: Date;
  updatedAt: Date;

  constructor(resourceMetaDto: ResourceMetaDto) {
    this.validate();
    Object.assign(resourceMetaDto, this);
  }

  private validate() {
    console.log("TODO validate meta entity");
  }
}
