import type { NodeContentType } from "@contexts/site-core";
import type { SvelteComponentTyped } from "svelte";

export interface TextProps {
  text: NodeContentType;
  className?: string;
}

class TextType extends SvelteComponentTyped<TextProps> {}

export default TextType;
