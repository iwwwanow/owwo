import type { ContentModel } from "./content.model";
import type { CoverModel } from "./cover.model";
import type { ResourceMetaModel } from "./resource-meta.model";

export interface ResourceModel {
  meta: ResourceMetaModel;
  content: ContentModel;
  cover: CoverModel;
  resources?: ResourceModel;
}
