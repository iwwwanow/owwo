import type { SvelteComponentTyped } from "svelte";
import type { HTMLTextareaAttributes } from "svelte/elements";

export interface TextareaProps {
  id: HTMLTextareaAttributes["id"];
  name: HTMLTextareaAttributes["name"];
  rows?: HTMLTextareaAttributes["rows"];
  text?: HTMLTextareaAttributes["text"];
  required?: HTMLTextareaAttributes["required"];
  placeholder?: HTMLTextareaAttributes["placeholder"];
}

class TextAreaType extends SvelteComponentTyped<TextareaProps> {}

export default TextAreaType;
