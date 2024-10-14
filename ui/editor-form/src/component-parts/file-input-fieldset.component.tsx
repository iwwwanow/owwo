import Hr from "@ui/hr";

import CardContainer from "./card-container.component.svelte";
import FileInput from "./inputs/file.input.svelte";
import Textarea from "./inputs/textarea.component.svelte";

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
