import type { NodeImageType } from "@site/models";
import type { NodeContentType } from "@site/models";
import type { NodeDateType } from "@site/models";
import type { NodeDataType } from "@site/models";

export interface ResourceInfoProps {
  nodeData: NodeDataType;

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
