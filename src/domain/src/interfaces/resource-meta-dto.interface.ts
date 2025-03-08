import type { ResourceVariantEnum } from "../enums/index.js";
import type { PageVariantEnum } from "../enums/index.js";

export interface ResourceMetaDto {
  path: string;
  title: string;
  resourceType: ResourceVariantEnum;
  pageType: PageVariantEnum;
  createdAt: Date;
  updatedAt: Date;
  jsPath?: null | string;
  cssPath?: null | string;
}
