import { CardContainer } from "@ui/card-container";
import { CssModule } from "@ui/css-module";
import { Hr } from "@ui/hr";
import { FileInput } from "@ui/input";
import { Textarea } from "@ui/input";

import Style from "./file-input-fieldset.module.css";

const FileInputFieldset = (props) => {
  return (
    <>
      <fieldset class="file-input-fieldset">
        <Hr text="file-input" />
        <CardContainer>
          <span class="editor-form__files-textarea-container">
            <Textarea text="blaaa" />
          </span>
          <FileInput />
        </CardContainer>
      </fieldset>
      <CssModule filepath={Style} />
    </>
  );
};

export { FileInputFieldset };
