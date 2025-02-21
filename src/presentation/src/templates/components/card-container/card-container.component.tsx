import { CssModule } from "../";
import type { CardContainerProps } from "./card-container.interface";
import Style from "./card-container.module.css";
import { getClassName } from "./getters";

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
