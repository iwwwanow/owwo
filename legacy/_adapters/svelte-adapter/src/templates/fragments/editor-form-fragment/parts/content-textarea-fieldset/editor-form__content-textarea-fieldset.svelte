<script lang="ts">
  import { Hr } from "../../../../components";
  import { CardContainer } from "../../../../components";
  import { Textarea } from "../../../../components";

  const CONTENT_TEXTAREA_PLACEHOLDER = "content".toUpperCase();
</script>

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
