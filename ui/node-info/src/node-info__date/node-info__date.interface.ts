import type { NodeDateType } from "@site/interfaces";

type NodeInfoDateProps = {
  date: NodeDateType;
};

export type NodeInfoDateType = (props: NodeInfoDateProps) => JSX.Element;
