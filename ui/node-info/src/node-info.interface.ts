import type { NodeDataType } from "@site/interfaces";
import type { NodeImageType } from "@site/interfaces";
import type { NodeContentType } from "@site/interfaces";
import type { NodeDateType } from "@site/interfaces";

type NodeInfoProps = {
  nodeData: NodeDataType;

  isTitleNeeded?: boolean;
  isDescriptionNeeded?: boolean;

  id?: string;
  title?: string;
  image?: NodeImageType;
  author?: NodeDataType;
  authors?: Array<NodeDataType>;
  parents?: Array<NodeDataType>;
  description?: NodeContentType;
  date?: NodeDateType;
};

type NodeInfoType = (props: NodeInfoProps) => JSX.Element | null;

export type { NodeInfoType };
