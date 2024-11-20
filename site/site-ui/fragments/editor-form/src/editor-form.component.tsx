import { CssModule } from "@ui/css-module";
import { Hr } from "@ui/hr";

import type { EditorFormType } from "./editor-form.interface";
import Style from "./editor-form.module.css";
import { ContentTextareaFieldset } from "./editor-form__content-textarea-fieldset";
import { FileInputFieldset } from "./editor-form__file-input-fieldset";
import { MainInputsFieldset } from "./editor-form__main-inputs-fieldset";

const EditorForm: EditorFormType = (props) => {
  const { node } = props;
  const imageSrc = node.image?.original;

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
