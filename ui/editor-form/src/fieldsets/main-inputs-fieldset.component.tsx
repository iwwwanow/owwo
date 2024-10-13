import Hr from "@ui/hr";

import { TITLE_INPUT_PLACEHOLDER } from "../editor-form.constants";
import { DESCRIPTION_TEXTAREA_PLACEHOLDER } from "../editor-form.constants";
import CardContainer from "./card-container.component.svelte";
import FileInput from "./inputs/file.input.svelte";
import TextInput from "./inputs/text.input.svelte";
import Textarea from "./inputs/textarea.component.svelte";

const MainInputsFieldset = (props) => {
  const { imageSrc } = props;

  return (
    <fieldset class="main-inputs-fieldset">
      <Hr text="cover-input" />
      <CardContainer>
        <FileInput name="cover-input" imageSrc={imageSrc} />
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
  );
};

export { MainInputsFieldset };
