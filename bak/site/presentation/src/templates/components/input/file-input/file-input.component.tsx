import { CssModule } from "../../index.js";
import type { FileInputProps } from "./file-input.interface.js";
import Style from "./file-input.module.css";

export const FileInput: Component<FileInputProps> = (props) => {
  const { id, name, accept, required = false, imageSrc } = props;

  return (
    <>
      <label for={String(id)} class="border file-input__label">
        <h6 class="file-input__label-text">{name}</h6>
        {imageSrc && (
          <img src={imageSrc} alt="" class="file-input__label-image" />
        )}
      </label>

      <input
        id={id}
        class="file-input"
        // TODO ?
        form="form"
        required={required}
        name={name}
        accept={accept}
        type="file"
      />

      <CssModule filepath={Style} />
    </>
  );
};
