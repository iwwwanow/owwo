import { CssModule } from "@ui/css-module";

import Style from "./node-link-container.module.css";

const NodeLinkContainer = (props) => {
  const { children } = props;

  return (
    <>
      <div class="node-link__container">{children}</div>
      <CssModule filepath={Style} />
    </>
  );
};

export { NodeLinkContainer };
