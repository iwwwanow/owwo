import { ResourceNavigation } from "../../../components";
import type { NodeExtendedPageNavigationType } from "./node-extended-page__navigation.interface";

const NodeExtendedPageNavigation: NodeExtendedPageNavigationType = (props) => {
  const { siblings, currentSiblingId } = props;

  if (siblings) {
    const siblingsLength = siblings.length;
    const currentSiblingIndex = siblings.findIndex((sibling, index) => {
      if (sibling.meta.id === currentSiblingId) return index;
      else return 0;
    });

    const prevSibling = siblings[currentSiblingIndex - 1];
    const nextSibling = siblings[currentSiblingIndex + 1];

    if (prevSibling || nextSibling) {
      return (
        <ResourceNavigation
          current={currentSiblingIndex}
          length={siblingsLength}
          prevNode={prevSibling}
          nextNode={nextSibling}
        />
      );
    }
  }

  return null;
};

export { NodeExtendedPageNavigation };
