import type { NodeDataType } from "@site/interfaces";

type NodeCardProps = {
  nodeData: NodeDataType;
};

type NodeCardType = (props: NodeCardProps) => JSX.Element;

export type { NodeCardType };
