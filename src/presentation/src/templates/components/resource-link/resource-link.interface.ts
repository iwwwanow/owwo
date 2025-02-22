import type { NodeDataType } from "@site/models";
import type { NodeImageType } from "@site/models";

export interface ResourceLinkProps {
  node: NodeDataType;

  isTitleNeeded?: boolean;

  leftSymbol?: string;
  rightSymbol?: string;
  id?: string;
  title?: string;
  image?: NodeImageType;
}
