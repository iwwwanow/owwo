import { CssModule } from "@ui/css-module";

import Style from "./node-link-container.style.css";

const NodeLinkContainer = (props) => {
  const { children } = props;

  return (
    <>
      <div class="node-info__container">{children}</div>
      <CssModule filepath={Style} />
    </>
  );
};

export { NodeLinkContainer };
