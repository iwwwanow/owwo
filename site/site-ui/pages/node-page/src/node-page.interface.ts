// TODO interfaces
type NodePageProps = {
  node: any;
  client: any;
};

type NodePageType = (props: NodePageProps) => JSX.Element;

export type { NodePageType };
