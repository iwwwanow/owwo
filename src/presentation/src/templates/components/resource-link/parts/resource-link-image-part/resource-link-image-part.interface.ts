import type { NodeImageType } from "@site/interfaces";

type NodeLinkImageVariants = "small" | "big";

export interface ResourceLinkImageProps {
  variant: NodeLinkImageVariants;
  image: NodeImageType;
}
