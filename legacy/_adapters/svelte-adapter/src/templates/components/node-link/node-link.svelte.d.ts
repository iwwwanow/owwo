import type { NodeImageType } from "@contexts/site-core";
import type { NodeDataType } from "@contexts/site-core";
import type { SvelteComponentTyped } from "svelte";

export type ImageVariantType = "small" | "big";

export interface NodeLinkProps {
  node: NodeDataType;

  leftSymbol?: string;
  rightSymbol?: string;
}

class NodeLinkType extends SvelteComponentTyped<NodeLinkProps> {}

export default NodeLinkType;
