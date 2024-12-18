import type { NodeContentType } from "@site/interfaces";

type NodeCardTextContentProps = {
  title: string;
  description: NodeContentType;
};

export type NodeCardTextContentType = (
  props: NodeCardTextContentProps,
) => JSX.Element;
