import { CssModule } from "@ui/css-module";
import { Hr } from "@ui/hr";

import type { EditorFormType } from "./editor-form.interface";
import Style from "./editor-form.module.css";
import { ContentTextareaFieldset } from "./editor-form__content-textarea-fieldset";
import { FileInputFieldset } from "./editor-form__file-input-fieldset";
import { MainInputsFieldset } from "./editor-form__main-inputs-fieldset";

// TODO
// в самом верху инпут, размером в одну строку, как на нижнем объекте (с
// возможностью просто добавть ссылку(external file)
//
// нужна возможность удалять файлы
//
//     render вложенных файлов в инпуте. получится сделать так, чтобы они
//     обображались прямо под курсором?
//
//     у каждого типа файла будет своя иконка. изображениe, текст, аудио, видео и
//     ссылка (например на другой файл)

const EditorForm: EditorFormType = (props) => {
  const { node, client } = props;
  const imageSrc = node.image?.original;
  const { isEditor } = client;

  return (
    <>
      <div class="grid editor-form">
        <Hr text="editor-form" color="var(--ORANGE)" />
        <MainInputsFieldset imageSrc={imageSrc} />
        <FileInputFieldset />
        <ContentTextareaFieldset />
        <Hr text="***" color="var(--ORANGE)" />
      </div>
      <CssModule filepath={Style} />
    </>
  );
};

export { EditorForm };
