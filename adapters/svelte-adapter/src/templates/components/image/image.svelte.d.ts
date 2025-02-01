import type { NodeImageType } from "@contexts/site-core";
import type { ImageVariantName } from "@contexts/site-core";
import type { SvelteComponentTyped } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export interface ImageProps {
  image: NodeImageType;
  id: HTMLAttributes["id"];
  variant: ImageVariantName;
}

class ComponentType extends SvelteComponentTyped<ImageProps> {}

export default ComponentType;
