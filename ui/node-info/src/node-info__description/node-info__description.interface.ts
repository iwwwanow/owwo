import type { NodeContentType } from "@site/interfaces";

type NodeInfoDescriptionProps = {
  description: NodeContentType;
};

export type NodeInfoDescriptionType = (
  props: NodeInfoDescriptionProps,
) => JSX.Element;
