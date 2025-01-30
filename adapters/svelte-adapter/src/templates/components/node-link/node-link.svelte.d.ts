import type { NodeImageType } from "@contexts/site-core";
import type { NodeDataType } from "@contexts/site-core";
import type { SvelteComponentTyped } from "svelte";

export interface NodeLinkProps {
  node?: NodeDataType;

  leftSymbol?: string;
  rightSymbol?: string;

  id?: string;
  title?: string;
  image?: NodeImageType;
}

class NodeLinkType extends SvelteComponentTyped<NodeLinkProps> {}

export default NodeLinkType;
