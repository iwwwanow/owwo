import { CssModule } from "@ui/css-module";

import type { HrType } from "./hr.interface";
import Style from "./hr.module.css";

const Hr: HrType = (props) => {
  const { text, color } = props;
  const colorStyle = color ? `color: ${color}; border-color: ${color};` : "";

  if (text) {
    return (
      <>
        <fieldset class="hr_fieldset" style={colorStyle}>
          <legend>
            <h6>{text}</h6>
          </legend>
        </fieldset>
        <CssModule filepath={Style} />
      </>
    );
  }

  return <hr style={colorStyle} />;
};

export { Hr };
