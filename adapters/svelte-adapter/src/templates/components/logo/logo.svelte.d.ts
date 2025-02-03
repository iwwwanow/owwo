import type { SvelteComponentTyped } from "svelte";

export interface LogoProps {
  classname?: string;
  href?: string;
}

class LogoType extends SvelteComponentTyped<LogoProps> {}

export default LogoType;
