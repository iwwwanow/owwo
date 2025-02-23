import { CssModule } from "../../../../components";
import type { ContentStringPartProps } from "./content-string-part.interface";
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
