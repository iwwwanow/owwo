import { CardContainer } from "@ui/card-container";
import { CssModule } from "@ui/css-module";
import { Hr } from "@ui/hr";
import { FileInput } from "@ui/input";
import { Textarea } from "@ui/input";

import { TEXTAREA_ID } from "./file-input-fieldset.constants";
import { TEXTAREA_NAME } from "./file-input-fieldset.constants";
import type { FileInputFieldsetType } from "./file-input-fieldset.interface";
import Style from "./file-input-fieldset.module.css";

const FileInputFieldset: FileInputFieldsetType = (props) => {
  const { text } = props;

  return (
    <>
      <fieldset class="file-input-fieldset">
        <Hr text="file-input" />
        <CardContainer>
          <span class="editor-form__files-textarea-container">
            <Textarea id={TEXTAREA_ID} name={TEXTAREA_NAME} text={text} />
          </span>
          <FileInput
            id="editor-form__file-input"
            name="file-input"
            accept="*"
          />
        </CardContainer>
      </fieldset>
      <CssModule filepath={Style} />
    </>
  );
};

export { FileInputFieldset };
