import { CssModule } from "../index.js";
import { ResourceLink } from "../index.js";
import type { NodeNavigationProps } from "./resource-navigation.interface.js";
import Style from "./resource-navigation.module.css";

export const ResourceNavigation: Component<NodeNavigationProps> = (props) => {
  const { prevNode, nextNode, current, length } = props;

  return (
    <>
      <div class="grid navigation-elements__wrapper">
        <div class="navigation-elements__container">
          <span class="navigation-elements__element">
            <ResourceLink resourceData={prevNode} leftSymbol="◂" />
          </span>
          <span>
            <h5>
              {current}/{length}
            </h5>
          </span>
          <span class="navigation-elements__element">
            <ResourceLink resourceData={nextNode} rightSymbol="▸" />
          </span>
        </div>
      </div>
      <CssModule filepath={Style} />
    </>
  );
};
