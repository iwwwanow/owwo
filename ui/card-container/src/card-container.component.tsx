import { CssModule } from "@ui/css-module";

import type { CardContainerType } from "./card-container.interface";
import Style from "./card-container.module.css";

const CardContainer: CardContainerType = (props) => {
  let { className, children } = props;
  className = `card-container${className ? " " + className : ""}`;

  return (
    <>
      <span class={className}>{children}</span>
      <CssModule filepath={Style} />
    </>
  );
};

export { CardContainer };
