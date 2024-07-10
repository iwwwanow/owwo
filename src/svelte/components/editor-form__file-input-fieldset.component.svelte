<script>
  import Hr from "./hr.component.svelte";
  import CardContainer from "./card-container.component.svelte";
  import FileInput from "./inputs/file.input.svelte";
</script>

<fieldset class="file-input-fieldset">
  <Hr text="file-input" />
  <CardContainer>
    <FileInput />
  </CardContainer>
</fieldset>

<style>
  .file-input-fieldset {
    grid-column: 2/4;
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
  }

  @media screen and (max-width: 650px) {
    .file-input-fieldset {
      grid-column: 2/-1;
    }
  }

  @media screen and (max-width: 360px) {
    .file-input-fieldset {
      grid-column: 1/-1;
    }
  }
</style>
