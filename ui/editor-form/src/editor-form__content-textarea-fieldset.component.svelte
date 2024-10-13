<script>
  import Hr from "./hr.component.svelte";
  import CardContainer from "./card-container.component.svelte";
  import Textarea from "./inputs/textarea.component.svelte";

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
