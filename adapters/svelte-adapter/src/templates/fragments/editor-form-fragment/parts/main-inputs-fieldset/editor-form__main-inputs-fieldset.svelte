<script lang="ts">
  import { Hr } from "../../../../components";
  import { CardContainer } from "../../../../components";
  import { FileInput } from "../../../../components";
  import { TextInput } from "../../../../components";
  import { Textarea } from "../../../../components";

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
			<!-- TODO props? -->
      rows="auto"
      required={false}
      placeholder={TITLE_INPUT_PLACEHOLDER}
    />

    <Textarea
      id="editor-form__description-textarea"
      name="description"
			<!-- TODO props? -->
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
