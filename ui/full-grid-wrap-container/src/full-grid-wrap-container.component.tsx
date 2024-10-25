import { CssModule } from "@ui/css-module";

import type { FullGridWrapContainerType } from "./full-grid-wrap-container.interface";
import Style from "./full-grid-wrap-container.module.css";

const FullGridWrapContainer: FullGridWrapContainerType = (props) => {
  const { limit, children } = props;

  // TODO whats wrong with style?
  let style = "";
  if (limit) {
    style = `max-height: ${limit}px; overflow: hidden`;
  }

  return (
    <>
      <div class="grid full-grid-wrap-container__wrapper" style={style}>
        <span class="full-grid-wrap-container__container">{children}</span>
      </div>
      <CssModule filepath={Style} />
    </>
  );
};

export { FullGridWrapContainer };
