import Hr from "@ui/hr";

import { CONTENT_TEXTAREA_PLACEHOLDER } from "../editor-form.constants";
import CardContainer from "./card-container.component.svelte";
import Textarea from "./inputs/textarea.component.svelte";

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
