import { CssModule } from "@ui/css-module";

import type { CardContainerType } from "./card-container.interface";
import Style from "./card-container.module.css";
import { getClassName } from "./getters";

export const CardContainer: CardContainerType = (props) => {
  let { className, children } = props;
  className = getClassName(className);

  return (
    <>
      <span class={className}>{children}</span>
      <CssModule filepath={Style} />
    </>
  );
};
