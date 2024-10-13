// TODO use node global type
type NodeCardProps = {
  node: string;
};

type NodeCardType = (props: NodeCardProps) => JSX.Element;

export type { NodeCardType };
