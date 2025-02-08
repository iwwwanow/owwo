import type { SvelteComponentTyped } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";

export interface TextInputProps {
  id: HTMLInputAttributes["id"];
  name: HTMLInputAttributes["name"];
  type?: HTMLInputAttributes["type"];
  required?: HTMLInputAttributes["required"];
  placeholder?: HTMLInputAttributes["placeholder"];
}

class TextInputType extends SvelteComponentTyped<TextInputProps> {}

export default TextInputType;
