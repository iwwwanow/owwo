import type { SvelteComponentTyped } from "svelte";
import type { HTMLImgAttributes } from "svelte/elements";
import type { HTMLInputAttributes } from "svelte/elements";

export interface FileInputProps {
  id: HTMLInputAttributes["id"];
  name: HTMLInputAttributes["name"];
  accept: HTMLInputAttributes["accept"];
  required: HTMLInputAttributes["required"];
  imageSrc: HTMLImgAttributes["src"];
}

class FileInputType extends SvelteComponentTyped<FileInputProps> {}

export default FileInputType;
