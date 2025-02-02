import type { SvelteComponentTyped } from "svelte";

export interface AboutPageProps {
  text?: string;
}

class CType extends SvelteComponentTyped<AboutPageProps> {}

export default CType;
