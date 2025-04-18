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
  jsPath: null | string;
  cssPath: null | string;

  constructor(resourceMetaDto: ResourceMetaDto) {
    this.validate();
    Object.assign(this, resourceMetaDto);
  }

  private validate() {
    console.log("TODO validate meta entity");
  }
}
