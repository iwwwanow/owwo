<script>
  import Hr from "./hr.component.svelte";
  import CardContainer from "./card-container.component.svelte";
  import FileInput from "./inputs/file.input.svelte";
  import TextInput from "./inputs/text.input.svelte";
  import Textarea from "./inputs/textarea.component.svelte";

  const TITLE_INPUT_PLACEHOLDER = "title".toUpperCase();
  const DESCRIPTION_TEXTAREA_PLACEHOLDER = "description".toUpperCase();

  export let imageSrc;
</script>

<fieldset class="main-inputs-fieldset">
  <Hr text="cover-input" />
  <CardContainer>
    <FileInput name="cover-input" {imageSrc} />

    <TextInput
      id="editor-form__title-input"
      name="title"
      rows="auto"
      required={false}
      placeholder={TITLE_INPUT_PLACEHOLDER}
    />

    <Textarea
      id="editor-form__description-textarea"
      name="description"
      rows="auto"
      required={false}
      placeholder={DESCRIPTION_TEXTAREA_PLACEHOLDER}
      text="240 limit???"
    />
  </CardContainer>
</fieldset>

<style>
  @media screen and (max-width: 650px) {
    .main-inputs-fieldset {
      grid-column: 1/2;
    }
  }

  @media screen and (max-width: 360px) {
    .main-inputs-fieldset {
      grid-column: 1/-1;
    }
  }
</style>
