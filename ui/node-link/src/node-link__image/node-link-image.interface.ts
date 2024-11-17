import type { NodeImageType } from "@site/interfaces";

type NodeLinkImageVariants = "small" | "big";

type NodeLinkImageProps = {
  variant: NodeLinkImageVariants;
  image: NodeImageType;
};

type NodeLinkImageType = (props: NodeLinkImageProps) => JSX.Element;

export type { NodeLinkImageType };
