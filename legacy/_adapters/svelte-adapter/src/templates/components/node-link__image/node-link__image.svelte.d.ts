import type { NodeImageType } from "@contexts/site-core";
import type { SvelteComponentTyped } from "svelte";

// TODO node link variant type повторяется
export type ImageVariant = "small" | "big";

export interface NodeLinkImageProps {
  image: NodeImageType;
  variant: ImageVariant;
}

class NodeLinkImageType extends SvelteComponentTyped<NodeLinkImageProps> {}

export default NodeLinkImageType;
