import { CssModule } from "@ui/css-module";

import type { FileInputType } from "./file-input.interface";
import Style from "./file-input.module.css";

const FileInput: FileInputType = (props) => {
  // TODO default params to const
  const {
    id = "file-input-id",
    name = "file-input",
    accept = "image/*",
    required = false,
    imageSrc,
  } = props;

  return (
    <>
      <label for={id} class="border file-input__label">
        <h6 class="file-input__label-text">{name}</h6>
        {imageSrc && (
          <img src={imageSrc} alt="" class="file-input__label-image" />
        )}
      </label>

      <input
        form="form"
        id={id}
        required={required}
        name={name}
        accept={accept}
        type="file"
        class="file-input"
      />

      <CssModule filepath={Style} />
    </>
  );
};

export { FileInput };
