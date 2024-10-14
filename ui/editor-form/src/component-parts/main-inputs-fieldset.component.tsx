import { CardContainer } from "@ui/card-container";
import { Hr } from "@ui/hr";
import { FileInput } from "@ui/input";
import { TextInput } from "@ui/input";
import { Textarea } from "@ui/input";

import { TITLE_INPUT_PLACEHOLDER } from "../editor-form.constants";
import { DESCRIPTION_TEXTAREA_PLACEHOLDER } from "../editor-form.constants";

// TODO interfaces
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
