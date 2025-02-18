import { CardContainer } from "../../../components";
import { CssModule } from "../../../components";
import { Hr } from "../../../components";
import { FileInput } from "../../../components";
import { TextInput } from "../../../components";
import { Textarea } from "../../../components";
import { TITLE_INPUT_PLACEHOLDER } from "./main-inputs-fieldset.constants";
import { DESCRIPTION_TEXTAREA_PLACEHOLDER } from "./main-inputs-fieldset.constants";
import type { MainInputsFieldsetType } from "./main-inputs-fieldset.interface";
import Style from "./main-inputs-fieldset.module.css";

const MainInputsFieldset: MainInputsFieldsetType = (props) => {
  const { imageSrc } = props;

  return (
    <>
      <fieldset class="main-inputs-fieldset">
        <Hr text="cover-input" />
        <CardContainer>
          <FileInput
            id="editor-form__cover-input"
            accept="image/*"
            name="cover-input"
            imageSrc={imageSrc}
          />
          <TextInput
            id="editor-form__title-input"
            name="title"
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
      <CssModule filepath={Style} />
    </>
  );
};

export { MainInputsFieldset };
