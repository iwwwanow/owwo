import { CssModule } from "@ui/css-module";

import type { ContentStringType } from "./node-extended__content-string.interface";
import Style from "./node-extended__content-string.module.css";

const ContentString: ContentStringType = (props) => {
  const { html } = props;

  // TODO render html string raw (dirty)
  return (
    <>
      <div class="element__content-container">{html}</div>
      <CssModule filepath={Style} />
    </>
  );
};

export { ContentString };
