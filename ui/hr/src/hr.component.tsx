// TODO можно сделать компонент-обертку. один из пропсов будет - css-file-path
import { CssModule } from "@ui/css-module";

import type { HrType } from "./hr.interface";
import Style from "./hr.style.css";

// TODO add color to default hr component (WO text)
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

  return <hr />;
};

export { Hr };
