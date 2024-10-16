type NodeExtendedFragmentProps = {
  // TODO interface (content-interface-global-type)
  content: any;
};

type NodeExtendedFragmentType = (
  props: NodeExtendedFragmentProps,
) => JSX.Element;

export type { NodeExtendedFragmentType };
