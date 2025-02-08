<script lang="ts">
  import type { EditorFormFragmentsProps } from "./editor-form-fragment.svelte";

  import { Hr } from "../../components";

  import { EditorFormFileInputFieldset } from "./parts";
  import { EditorFormContentTextareaFieldset } from "./parts";
  import { EditorFormMainInputsFieldset } from "./parts";

  export let props: EditorFormFragmentsProps;

  const { node, client } = props;

  const {
    image: { original: imageSrc },
  } = node;

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
