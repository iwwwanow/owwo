import type { NodeImageType } from "@site/interfaces";

type NodeLinkImageVariants = "small" | "big";

type NodeLinkImageProps = {
  variant: NodeLinkImageVariants;
  image: NodeImageType;
};

export type NodeLinkImageType = (props: NodeLinkImageProps) => JSX.Element;
