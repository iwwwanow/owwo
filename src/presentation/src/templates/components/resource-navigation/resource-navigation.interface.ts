import type { NodeDataType } from "@site/models";

export interface NodeNavigationProps {
  prevNode: NodeDataType;
  nextNode: NodeDataType;
  current: number;
  length: number;
}
