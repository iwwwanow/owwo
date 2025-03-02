import type { ImageVariantEnum } from "@site/domain";
import type { CoverDto } from "@site/domain";

type AllowedVariants =
  | ImageVariantEnum.Height_16px
  | ImageVariantEnum.Height_32px
  | ImageVariantEnum.Width_190px;

export interface ImageProps {
  image: CoverDto;
  id: string;
  variant: AllowedVariants;
}
