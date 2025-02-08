import type { NodeDataType } from "@contexts/site-core";
import type { SvelteComponentTyped } from "svelte";

export interface NodeNavigationProps {
  prevNode: NodeDataType;
  nextNode: NodeDataType;
  current: number;
  length: number;
}

class NodeNavigationType extends SvelteComponentTyped<NodeNavigationProps> {}

export default NodeNavigationType;
