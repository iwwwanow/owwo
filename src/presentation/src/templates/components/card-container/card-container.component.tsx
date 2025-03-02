import { CssModule } from "../index.js";
import type { CardContainerProps } from "./card-container.interface.js";
import Style from "./card-container.module.css";
import { getClassName } from "./getters/index.js";

export const CardContainer: Component<CardContainerProps> = (props) => {
  let { className, children } = props;
  className = getClassName(className);

  return (
    <>
      <span class={className}>{children}</span>
      <CssModule filepath={Style} />
    </>
  );
};
