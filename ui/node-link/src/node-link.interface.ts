import type { NodeDataType } from "@site/interfaces";
import type { NodeImageType } from "@site/interfaces";

type NodeLinkProps = {
  node: NodeDataType;
  leftSymbol?: string;
  rightSymbol?: string;
  id?: string;
  title?: string;
  image?: NodeImageType;
};

type NodeLinkType = (props: NodeLinkProps) => JSX.Element;

export type { NodeLinkType };
