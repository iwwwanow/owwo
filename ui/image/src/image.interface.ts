import type { NodeImageType } from "@site/interfaces";

type AllowedVariants = "h16" | "h32" | "w190";

type ImageProps = {
  image: NodeImageType;
  id: string;
  variant: AllowedVariants;
};

type ImageType = (props: ImageProps) => JSX.Element;

export type { ImageType };
