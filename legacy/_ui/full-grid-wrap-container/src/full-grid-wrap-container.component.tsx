import { CssModule } from "@ui/css-module";

import type { FullGridWrapContainerType } from "./full-grid-wrap-container.interface";
import Style from "./full-grid-wrap-container.module.css";
import { getStyle } from "./getters";

export const FullGridWrapContainer: FullGridWrapContainerType = (props) => {
  const { limit, children } = props;
  const style = getStyle(limit);

  return (
    <>
      <div class="grid full-grid-wrap-container__wrapper" style={style}>
        <span class="full-grid-wrap-container__container">{children}</span>
      </div>
      <CssModule filepath={Style} />
    </>
  );
};
