type NodeCardTextContentProps = {
  title: string;
  description: string;
};

export type NodeCardTextContentType = (
  props: NodeCardTextContentProps,
) => JSX.Element;
