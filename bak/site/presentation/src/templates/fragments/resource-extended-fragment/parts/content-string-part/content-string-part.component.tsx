import { CssModule } from "../../../../components/index.js";
import type { ContentStringPartProps } from "./content-string-part.interface.js";
import Style from "./content-string-part.module.css";

export const ContentStringPart: Component<ContentStringPartProps> = (props) => {
  const { html } = props;

  return (
    <>
      <div class="element__content-container">{html}</div>
      <CssModule filepath={Style} />
    </>
  );
};
