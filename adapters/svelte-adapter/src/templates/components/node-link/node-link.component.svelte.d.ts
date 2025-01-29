import type { NodeImageType } from "@contexts/site-core";
import type { NodeDataType } from "@contexts/site-core";
import type { SvelteComponentTyped } from "svelte";

class NodeLinkType extends SvelteComponentTyped<{
  node?: NodeDataType;

  leftSymbol?: string;
  rightSymbol?: string;

  id?: string;
  title?: string;
  image?: NodeImageType;
}> {}

export default NodeLinkType;
