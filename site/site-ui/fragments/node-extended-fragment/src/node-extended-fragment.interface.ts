import type { NodeContentType } from "@site/interfaces";

type NodeExtendedFragmentProps = {
  content: NodeContentType;
};

type NodeExtendedFragmentType = (
  props: NodeExtendedFragmentProps,
) => JSX.Element;

export type { NodeExtendedFragmentType };
