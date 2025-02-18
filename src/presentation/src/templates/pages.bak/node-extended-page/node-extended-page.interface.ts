import type { NodeDataType } from "@site/interfaces";

type NodeExtendedPageProps = {
  nodeData: NodeDataType;
};

type NodeExtendedPageType = (props: NodeExtendedPageProps) => JSX.Element;

export type { NodeExtendedPageType };
