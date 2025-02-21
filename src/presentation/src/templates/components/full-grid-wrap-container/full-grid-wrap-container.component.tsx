import { CssModule } from "../";
import type { FullGridWrapContainerProps } from "./full-grid-wrap-container.interface";
import Style from "./full-grid-wrap-container.module.css";
import { getStyle } from "./getters";

export const FullGridWrapContainer: Component<FullGridWrapContainerProps> = (
  props,
) => {
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
