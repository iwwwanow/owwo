import type { NodeExtendedFragmentType } from "./node-extended-fragment.interface";
import { ContentString } from "./node-extended__content-string";

const NodeExtendedFragment: NodeExtendedFragmentType = (props) => {
  const { content } = props;

  const html = content.html;
  const contentType = typeof html;

  return (
    <div class="element__content-wrapper">
      {contentType === "string" && <ContentString html={html} />}
    </div>
  );
};

export { NodeExtendedFragment };
