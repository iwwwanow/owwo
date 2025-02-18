import { CssModule } from "../../";
import type { FileInputType } from "./file-input.interface";
import Style from "./file-input.module.css";

export const FileInput: FileInputType = (props) => {
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
