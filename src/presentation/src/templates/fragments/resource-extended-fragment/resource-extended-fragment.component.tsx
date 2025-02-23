import { CssModule } from "../../components";
import { ContentStringPart } from "./parts";
import type { ResourceExtendedFragmentProps } from "./resource-extended-fragment.interface";
import Style from "./resource-extended-fragment.module.css";

export const ResourceExtendedFragment: Component<
  ResourceExtendedFragmentProps
> = (props) => {
  const { content } = props;

  const html = content.html;
  const contentType = typeof html;

  return (
    <>
      <div class="element__content-wrapper">
        {contentType === "string" && <ContentStringPart html={html} />}
      </div>
      <CssModule filepath={Style} />
    </>
  );
};
