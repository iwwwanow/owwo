import { CssModule } from "../";
import { ResourceLink } from "../";
import Style from "./node-navigation.module.css";
import type { NodeNavigationProps } from "./resource-navigation.interface";

export const ResourceNavigation: Component<NodeNavigationProps> = (props) => {
  const { prevNode, nextNode, current, length } = props;

  return (
    <>
      <div class="grid navigation-elements__wrapper">
        <div class="navigation-elements__container">
          <span class="navigation-elements__element">
            <ResourceLink node={prevNode} leftSymbol="◂" />
          </span>
          <span>
            <h5>
              {current}/{length}
            </h5>
          </span>
          <span class="navigation-elements__element">
            <ResourceLink node={nextNode} rightSymbol="▸" />
          </span>
        </div>
      </div>
      <CssModule filepath={Style} />
    </>
  );
};
