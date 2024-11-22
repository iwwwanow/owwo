import type { NodeDataType } from "@site/interfaces";

type NodeInfoParentsProps = {
  parents: Array<NodeDataType>;
};

export type NodeInfoParentsType = (props: NodeInfoParentsProps) => JSX.Element;
