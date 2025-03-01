import { ResourceAggregate } from "../aggregates/index.js";
import { ResourceMetaEntity } from "../entities/index.js";
import { ContentEntity } from "../entities/index.js";
import { CoverEntity } from "../entities/index.js";

export interface ResourceAggregateDto {
  readonly meta: ResourceMetaEntity;
  content?: ContentEntity;
  cover?: CoverEntity;
  children?: Array<ResourceAggregate>;
}
