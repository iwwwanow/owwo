import { ResourceMetaEntity } from "../entities/index.js";
import { ContentEntity } from "../entities/index.js";
import { CoverEntity } from "../entities/index.js";

export interface ResourceDto {
  readonly meta: ResourceMetaEntity;
  content?: ContentEntity;
  cover?: CoverEntity;
  children?: Array<ResourceDto>;
}
