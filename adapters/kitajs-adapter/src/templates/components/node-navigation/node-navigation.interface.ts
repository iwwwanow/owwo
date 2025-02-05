import type { NodeDataType } from "@site/interfaces";

type NodeNavigationProps = {
  prevNode: NodeDataType;
  nextNode: NodeDataType;
  current: number;
  length: number;
};

type NodeNavigationType = (props: NodeNavigationProps) => JSX.Element;

export type { NodeNavigationType };
