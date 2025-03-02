import { CssModule } from "../index.js";
import type { TextProps } from "./text.interface.js";
import Style from "./text.module.css";

export const Text: Component<TextProps> = (props) => {
  const { text, className = "" } = props;

  return (
    <>
      <div class={`text ${className}`}>{text.html}</div>
      <CssModule filepath={Style} />
    </>
  );
};
