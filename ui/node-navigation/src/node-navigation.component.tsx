import NodeLink from "./node-link.component.svelte";
import type { NodeNavigationType } from "./node-navigation.interface";

const NodeNavigation: NodeNavigationType = (props) => {
  const { prevNode, nextNode, current, length } = props;

  return (
    <div class="grid navigation-elements__wrapper">
      <div class="navigation-elements__container">
        <span class="navigation-elements__element">
          <NodeLink node={prevNode} leftSymbol="◂" />
        </span>
        <span>
          <h5>
            {current}/{length}
          </h5>
        </span>
        <span class="navigation-elements__element">
          <NodeLink node={nextNode} rightSymbol="▸" />
        </span>
      </div>
    </div>
  );
};

export { NodeNavigation };
