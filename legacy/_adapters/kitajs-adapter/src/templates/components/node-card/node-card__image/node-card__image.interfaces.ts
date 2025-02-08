import type { NodeImageType } from "@site/interfaces";

type NodeCardImageProps = {
  image: NodeImageType;
};

export type NodeCardImageType = (props: NodeCardImageProps) => JSX.Element;
