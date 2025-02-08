import type { SvelteComponentTyped } from "svelte";

export interface HrProps {
  text?: string;
  color?: string;
}

class HrType extends SvelteComponentTyped<HrProps> {}

export default HrType;
