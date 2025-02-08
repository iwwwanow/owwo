import type { NodeDataType } from "@site/interfaces";

type NodeInfoAuthorsProps = {
  authors: Array<NodeDataType>;
};

export type NodeInfoAuthorsType = (props: NodeInfoAuthorsProps) => JSX.Element;
