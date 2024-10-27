import type { NodeDataType } from "@site/interfaces";

type NodeExtendedPageProps = {
  node: NodeDataType;
};

type NodeExtendedPageType = (props: NodeExtendedPageProps) => JSX.Element;

export type { NodeExtendedPageType };
