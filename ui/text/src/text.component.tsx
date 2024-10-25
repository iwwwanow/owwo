import { CssModule } from "@ui/css-module";

import type { TextType } from "./text.interface";
import Style from "./text.module.css";

const Text: TextType = (props) => {
  const { text, className = "" } = props;

  return (
    <>
      <div class={`text ${className}`}>{text.html}</div>;
      <CssModule filepath={Style} />
    </>
  );
};

export { Text };
