<script>
  import Hr from "./hr.component.svelte";
  import CardContainer from "./card-container.component.svelte";
  import FileInput from "./inputs/file.input.svelte";
  import Textarea from "./inputs/textarea.component.svelte";
</script>

<fieldset class="file-input-fieldset">
  <Hr text="file-input" />
  <CardContainer>
    <span class="editor-form__files-textarea-container">
      <Textarea text="blaaa" />
    </span>
    <FileInput />
  </CardContainer>
</fieldset>

<style>
  .file-input-fieldset {
    grid-column: 2/4;
    position: relative;
  }

  .editor-form__files-textarea-container {
    width: 100%;
    height: 40%;
    /* width: 40%; */
    /* height: var(--CARD-HEIGHT); */
    /* height: inherit; */
    padding: var(--GRID-GAP-2);
    z-index: var(--Z-INDEX-SECOND-LEVEL);
    position: absolute;
    visibility: hidden;
  }

  @media screen and (max-width: 1680px) {
    .file-input-fieldset {
      grid-column: 2/3;
    }
  }

  @media screen and (max-width: 1268px) {
    .file-input-fieldset {
      grid-column: 1/-1;
      grid-row: 2/3;
    }

    .editor-form__files-textarea-container {
      width: 40%;
      height: inherit;
    }
  }

  @media screen and (max-width: 650px) {
    .file-input-fieldset {
      grid-column: 2/-1;
    }

    .editor-form__files-textarea-container {
      width: 100%;
      height: 40%;
    }
  }

  @media screen and (max-width: 360px) {
    .file-input-fieldset {
      grid-column: 1/-1;
    }
  }
</style>
