import type { NodeDataType } from "@contexts/site-core";
import type { SvelteComponentTyped } from "svelte";

export interface NodeCardProps {
  node: NodeDataType;
}

class NodeCardType extends SvelteComponentTyped<NodeCardProps> {}

export default NodeCardType;
