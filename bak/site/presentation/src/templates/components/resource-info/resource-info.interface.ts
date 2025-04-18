import type { ResourceDto } from "@site/domain";
import type { CoverDto } from "@site/domain";
import type { ContentDto } from "@site/domain";

export interface ResourceInfoProps {
  resourceData: ResourceDto;

  isTitleNeeded?: boolean;
  isDescriptionNeeded?: boolean;

  // id?: string;
  // title?: string;
  // image?: NodeImageType;
  // author?: NodeDataType;
  // authors?: Array<NodeDataType>;
  // parents?: Array<NodeDataType>;
  // description?: NodeContentType;
  // date?: NodeDateType;
}
