import { CssModule } from "../index.js";
import type { HrProps } from "./hr.interface.js";
import Style from "./hr.module.css";

export const Hr: Component<HrProps> = (props) => {
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
