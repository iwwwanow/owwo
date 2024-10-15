// TODO use node global type
type NodeCardProps = {
  // TODO interfaces
  node: any;
};

type NodeCardType = (props: NodeCardProps) => JSX.Element;

export type { NodeCardType };
