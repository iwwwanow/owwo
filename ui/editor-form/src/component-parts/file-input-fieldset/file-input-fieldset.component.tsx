import { CardContainer } from "@ui/card-container";
import { Hr } from "@ui/hr";
import { FileInput } from "@ui/input";
import { Textarea } from "@ui/input";

const FileInputFieldset = (props) => {
  return (
    <fieldset class="file-input-fieldset">
      <Hr text="file-input" />
      <CardContainer>
        <span class="editor-form__files-textarea-container">
          <Textarea text="blaaa" />
        </span>
        <FileInput />
      </CardContainer>
    </fieldset>
  );
};

export { FileInputFieldset };
