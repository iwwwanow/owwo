import type { IMAGE_VARIANT_NAME } from "@globals/constants";
import type { NodeImageType } from "@site/interfaces";

type AllowedVariants =
  | IMAGE_VARIANT_NAME.height16px
  | IMAGE_VARIANT_NAME.height32px
  | IMAGE_VARIANT_NAME.width190px;

type ImageProps = {
  image: NodeImageType;
  id: string;
  variant: AllowedVariants;
};

type ImageType = (props: ImageProps) => JSX.Element;

export type { ImageType };
