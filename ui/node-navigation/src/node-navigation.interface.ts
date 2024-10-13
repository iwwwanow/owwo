type NodeNavigationProps = {
  prevNode: string;
  nextNode: string;
  current: string;
  length: string;
};

type NodeNavigationType = (props: NodeNavigationProps) => JSX.Element;

export type { NodeNavigationType };
