import { CssModule } from "../";
import type { ResourceLinkContainerProps } from "./node-link-container.interface";
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
