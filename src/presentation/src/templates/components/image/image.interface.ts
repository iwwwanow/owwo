import type { ImageVariantName } from "@site/models";
import type { NodeImageType } from "@site/models";

type AllowedVariants =
  | ImageVariantName.Height_16px
  | ImageVariantName.Height_32px
  | ImageVariantName.Width_190px;

export interface ImageProps {
  image: NodeImageType;
  id: string;
  variant: AllowedVariants;
}
