import type { NodeDataType } from "@site/interfaces";

type NodeInfoAuthorProps = {
  author: NodeDataType;
};

export type NodeInfoAuthorType = (props: NodeInfoAuthorProps) => JSX.Element;
