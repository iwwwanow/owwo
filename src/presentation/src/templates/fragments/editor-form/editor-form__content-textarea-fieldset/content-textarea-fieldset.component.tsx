import { CardContainer } from "../../../components";
import { Hr } from "../../../components";
import { Textarea } from "../../../components";
import { CONTENT_TEXTAREA_PLACEHOLDER } from "./content-textarea-fieldset.constants";
import { CONTENT_TEXTAREA_ID } from "./content-textarea-fieldset.constants";
import { CONTENT_TEXTAREA_NAME } from "./content-textarea-fieldset.constants";
import type { ContentTextareaFieldsetType } from "./content-textarea-fieldset.interface";

const ContentTextareaFieldset: ContentTextareaFieldsetType = (props) => {
  const { text } = props;

  return (
    <fieldset class="grid__right-content content-textarea-fieldset">
      <Hr text="content-textarea" />
      <CardContainer>
        <Textarea
          id={CONTENT_TEXTAREA_ID}
          name={CONTENT_TEXTAREA_NAME}
          required={false}
          placeholder={CONTENT_TEXTAREA_PLACEHOLDER}
          text={text}
        />
      </CardContainer>
    </fieldset>
  );
};

export { ContentTextareaFieldset };
