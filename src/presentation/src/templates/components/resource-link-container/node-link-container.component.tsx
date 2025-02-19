import { CssModule } from "../";
import type { NodeLinkContainerType } from "./node-link-container.interface";
import Style from "./node-link-container.module.css";

const NodeLinkContainer: NodeLinkContainerType = (props) => {
  const { children } = props;

  return (
    <>
      <div class="node-link__container">{children}</div>
      <CssModule filepath={Style} />
    </>
  );
};

export { NodeLinkContainer };
