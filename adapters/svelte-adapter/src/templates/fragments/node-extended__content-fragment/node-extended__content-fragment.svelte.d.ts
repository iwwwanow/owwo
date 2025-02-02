import type { NodeContentType } from "@contexts/site-core";
import type { SvelteComponentTyped } from "svelte";

export interface NodeExtendedContentFragmentProps {
  content: NodeContentType;
}

class NodeExtendedContentFragmentType extends SvelteComponentTyped<NodeExtendedContentFragmentType> {}

export default NodeExtendedContentFragmentType;
