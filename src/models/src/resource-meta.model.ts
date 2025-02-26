import type { ResourceVariantEnum } from "./enums";

export type ResourceMetaModel = {
  title: string;
  type: ResourceVariantEnum;
  path: string;
  createdAt: Date;
  updatedAt: Date;
};
