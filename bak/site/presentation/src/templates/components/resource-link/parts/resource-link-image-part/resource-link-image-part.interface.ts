import type { CoverDto } from "@site/domain";

type NodeLinkImageVariants = "small" | "big";

export interface ResourceLinkImageProps {
  variant: NodeLinkImageVariants;
  image: CoverDto;
}
