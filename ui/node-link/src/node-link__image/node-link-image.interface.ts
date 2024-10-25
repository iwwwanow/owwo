import type { NodeImageType } from "@site/interfaces";

type NodeLinkImageVariants = "small" | "big";

type NodeLinkImageProps = {
  variant: NodeLinkImageVariants;
  // TODO image type
  image: NodeImageType;
};

type NodeLinkImageType = (props: NodeLinkImageProps) => JSX.Element;

export type { NodeLinkImageType };
