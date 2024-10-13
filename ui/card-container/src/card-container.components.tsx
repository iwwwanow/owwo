import type { CardContainerType } from "./card-container.interface";

const CardContainer: CardContainerType = (props) => {
  let { className, children } = props;
  className = `card-container${className ? " " + className : ""}`;

  return <span class={className}>{children}</span>;
};

export { CardContainer };
