<script>
  import Hr from "./hr.component.svelte";
  import TextInput from "./inputs/text.input.svelte";
  import FileInput from "./inputs/file.input.svelte";
  import Textarea from "./inputs/textarea.component.svelte";
  import CardContainer from "./card-container.component.svelte";

  export let node;
  const {
    image: { original: imageSrc },
  } = node;

  export let client;
  const { isEditor } = client;

  const TITLE_INPUT_PLACEHOLDER = "title".toUpperCase();
  const DESCRIPTION_TEXTAREA_PLACEHOLDER = "description".toUpperCase();
  const CONTENT_TEXTAREA_PLACEHOLDER = "content".toUpperCase();
</script>

<div class="grid editor-form">
  <Hr text="editor-form" color="var(--ORANGE)" />

  <fieldset class="main-inputs-fieldset">
    <Hr text="cover-input" />
    <CardContainer>
      <FileInput name="cover-input" {imageSrc} />

      <TextInput
        id="editor-form__title-input"
        name="title"
        rows="auto"
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

  <fieldset class="file-input-fieldset">
    <Hr text="file-input" />
    <CardContainer>
      <FileInput />
    </CardContainer>
  </fieldset>

  <fieldset class="grid__right-content">
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

  <Hr text="***" color="var(--ORANGE)" />
</div>

<div class="grid editor-form">
  <h5>
    в самом верху инпут, размером в одну строку, как на нижнем объекте (с
    возможностью просто добавть ссылку(external file)
  </h5>
  <h5>нужна возможность удалять файлы</h5>
  <h5>
    render вложенных файлов в инпуте. получится сделать так, чтобы они
    обображались прямо под курсором?
  </h5>
  <h5>
    у каждого типа файла будет своя иконка. изображениe, текст, аудио, видео и
    ссылка (например на другой файл)
  </h5>
</div>

<style>
  .file-input-fieldset {
    grid-column: 2/4;
  }

  @media screen and (max-width: 1680px) {
    .file-input-fieldset {
      grid-column: 2/3;
    }
  }

  @media screen and (max-width: 1268px) {
    .file-input-fieldset {
      grid-column: 1/-1;
      grid-row: 2/3;
    }
  }

  @media screen and (max-width: 650px) {
    .main-inputs-fieldset {
      grid-column: 1/2;
    }
    .file-input-fieldset {
      grid-column: 2/-1;
    }
  }

  @media screen and (max-width: 360px) {
    .main-inputs-fieldset {
      grid-column: 1/-1;
    }
    .file-input-fieldset {
      grid-column: 1/-1;
    }
  }
</style>
