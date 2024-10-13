// TODO interfaces

type NodeInfoProps = {
  node: any;
  id: string;
  title: string;
  image: string;
  author: string;
  authors: string;
  parents: string;
  description: string;
  date: string;
};

type NodeInfoType = (props: NodeInfoProps) => JSX.Element;

export type { NodeInfoType };
