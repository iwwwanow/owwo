import { CardContainer } from "@ui/card-container";
import { Hr } from "@ui/hr";
import { Textarea } from "@ui/input";

import { CONTENT_TEXTAREA_PLACEHOLDER } from "./content-textarea-fieldset.constants";

const ContentTextareaFieldset = (props) => {
  return (
    <fieldset class="grid__right-content content-textarea-fieldset">
      <Hr text="content-textarea" />
      <CardContainer>
        <Textarea
          id="editor-form__content-textarea"
          name="content"
          required={false}
          placeholder={CONTENT_TEXTAREA_PLACEHOLDER}
          text="no limit, markdown, width like an text input, position too"
        />
      </CardContainer>
    </fieldset>
  );
};

export { ContentTextareaFieldset };
