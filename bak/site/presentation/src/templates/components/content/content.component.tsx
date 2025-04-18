import { CssModule } from "../index.js";
import type { ContentProps } from "./content.interface.js";
import Style from "./content.module.css";

export const Content: Component<ContentProps> = (props) => {
  const { contentData, className = "" } = props;

  return (
    <>
      <div class={`content ${className}`}>{contentData.html}</div>
      <CssModule filepath={Style} />
    </>
  );
};
