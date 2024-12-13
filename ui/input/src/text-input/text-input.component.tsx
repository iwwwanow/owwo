import { CssModule } from "@ui/css-module";

import type { TextInputType } from "./text-input.interface";
import Style from "./text-input.module.css";

export const TextInput: TextInputType = (props) => {
  const { id, name, type = "text", required = false, placeholder = "" } = props;
  return (
    <>
      <p class="text-input__wrapper">
        <input
          value="test-input-value"
          class="text-input"
          autocomplete="off"
          // @ts-expect-error not assignable
          autocapitalize="off"
          required={required}
          id={id}
          name={name}
          placeholder={placeholder}
          type={type}
        />
      </p>
      <CssModule filepath={Style} />
    </>
  );
};
