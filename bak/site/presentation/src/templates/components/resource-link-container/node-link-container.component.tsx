import { CssModule } from "../index.js";
import type { ResourceLinkContainerProps } from "./node-link-container.interface.js";
import Style from "./node-link-container.module.css";

export const ResourceLinkContainer: Component<ResourceLinkContainerProps> = (
  props,
) => {
  const { children } = props;

  return (
    <>
      <div class="node-link__container">{children}</div>
      <CssModule filepath={Style} />
    </>
  );
};
