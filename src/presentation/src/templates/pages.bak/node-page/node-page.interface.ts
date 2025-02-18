import type { NodeDataType } from "@site/interfaces";
import type { ClientDataType } from "@site/interfaces";

type NodePageProps = {
  nodeData: NodeDataType;
  client: ClientDataType;
};

type NodePageType = (props: NodePageProps) => JSX.Element;

export type { NodePageType };
