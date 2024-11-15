import type { NodeDataType } from "@site/interfaces";
import type { ClientDataType } from "@site/interfaces";

// TODO interfaces
type NodePageProps = {
  node: NodeDataType;
  client: ClientDataType;
};

type NodePageType = (props: NodePageProps) => JSX.Element;

export type { NodePageType };
