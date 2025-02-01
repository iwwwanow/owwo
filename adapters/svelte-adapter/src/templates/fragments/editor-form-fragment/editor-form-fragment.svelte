<script lang="ts">
  import Hr from "./hr.component.svelte";

  import EditorFormFileInputFieldset from "./editor-form__file-input-fieldset.component.svelte";
  import EditorFormContentTextareaFieldset from "./editor-form__content-textarea-fieldset.component.svelte";
  import EditorFormMainInputsFieldset from "./editor-form__main-inputs-fieldset.component.svelte";

  export let node;
  const {
    image: { original: imageSrc },
  } = node;

  export let client;
  const { isEditor } = client;
</script>

<div class="grid editor-form">
  <Hr text="editor-form" color="var(--ORANGE)" />

  <EditorFormMainInputsFieldset {imageSrc} />
  <EditorFormFileInputFieldset />
  <EditorFormContentTextareaFieldset />

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
