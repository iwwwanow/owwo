import type { NodeDataType } from "@site/interfaces";
import type { ClientType } from "@site/interfaces";

// TODO interfaces
type NodePageProps = {
  node: NodeDataType;
  client: ClientType;
};

type NodePageType = (props: NodePageProps) => JSX.Element;

export type { NodePageType };
