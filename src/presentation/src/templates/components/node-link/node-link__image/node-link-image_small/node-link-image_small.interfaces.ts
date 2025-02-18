import type { NodeImageType } from "@site/interfaces";

type NodeLinkImageSmallProps = {
  image: NodeImageType;
};

export type NodeLinkImageSmallType = (
  props: NodeLinkImageSmallProps,
) => JSX.Element;
