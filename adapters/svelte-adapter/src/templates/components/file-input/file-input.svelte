<script lang="ts">
  import type { FileInputProps } from "./file-input.svelte";

  export let props: FileInputProps;

  const { id, name, accept, required, imageSrc } = props;
</script>

<label for={id} class="border file-input__label">
  <h6 class="file-input__label-text">{name}</h6>
  {#if imageSrc}
    <img src={imageSrc} alt="" class="file-input__label-image" />
  {/if}
</label>

<input
  form="form"
  {id}
  {required}
  {name}
  {accept}
  type="file"
  class="file-input"
/>

<style>
  .file-input {
    display: none;
  }
  .file-input__label {
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--WHITE);

    border-style: dashed;
  }

  .file-input__label-text {
    margin: 0;
    z-index: 1;

    text-transform: uppercase;

    color: var(--BLACK);
    background-color: var(--WHITE);
  }

  .file-input__label-image {
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
</style>
