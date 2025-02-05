import { CssModule } from "@ui/css-module";

import { TEXTAREA_CLASSNAME } from "./textarea.constants";
import { TEXTAREA_WRAPPER_CLASSNAME } from "./textarea.constants";
import type { TextareaType } from "./textarea.interface";
import Style from "./textarea.module.css";

const Textarea: TextareaType = (props) => {
  const {
    id,
    name,
    // TODO - check
    // rows = 8,
    rows = "auto",
    text = "",
    required = false,
    placeholder = "",
  } = props;

  return (
    <>
      <p class={TEXTAREA_WRAPPER_CLASSNAME}>
        <textarea
          class={TEXTAREA_CLASSNAME}
          id={id}
          spellcheck="false"
          name={name}
          placeholder={placeholder}
          rows={String(rows)}
          required={required}
        >
          {text}
        </textarea>
      </p>
      <CssModule filepath={Style} />
    </>
  );
};

export { Textarea };
