import type { NodeContentType } from "@contexts/site-core";
import type { SvelteComponentTyped } from "svelte";

export interface ContentPartProps {
  html: string;
}

class ContentPartType extends SvelteComponentTyped<ContentPartProps> {}

export default ContentPartType;
