import type { NodeDataType } from "@site/interfaces";
import type { NodeIdType } from "@site/interfaces";

type NodeExtendedPageNavigationProps = {
  siblings?: Array<NodeDataType>;
  currentSiblingId: NodeIdType;
};

type NodeExtendedPageNavigationType = (
  props: NodeExtendedPageNavigationProps,
) => JSX.Element | null;

export type { NodeExtendedPageNavigationType };
