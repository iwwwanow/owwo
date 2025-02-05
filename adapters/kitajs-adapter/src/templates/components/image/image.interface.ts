import type { ImageVariantName } from "@globals/constants";
import type { NodeImageType } from "@site/interfaces";

type AllowedVariants =
  | ImageVariantName.HEIGHT_16PX
  | ImageVariantName.HEIGHT_32PX
  | ImageVariantName.WIDTH_190PX;

type ImageProps = {
  image: NodeImageType;
  id: string;
  variant: AllowedVariants;
};

type ImageType = (props: ImageProps) => JSX.Element;

export type { ImageType };
