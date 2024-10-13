// TODO props

type NodeLinkImageVariants = "small" | "big";

type NodeLinkImageProps = {
  variant: NodeLinkImageVariants;
  image: string;
};

type NodeLinkType = (props: NodeLinkImageProps) => JSX.Element;

export type { NodeLinkType };
