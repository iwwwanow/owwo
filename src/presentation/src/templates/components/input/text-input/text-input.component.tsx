import { CssModule } from "../../index.js";
import type { TextInputProps } from "./text-input.interface.js";
import Style from "./text-input.module.css";

export const TextInput: Component<TextInputProps> = (props) => {
  const { id, name, type = "text", required = false, placeholder = "" } = props;
  return (
    <>
      <p class="text-input__wrapper">
        <input
          // TODO what? test too
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
