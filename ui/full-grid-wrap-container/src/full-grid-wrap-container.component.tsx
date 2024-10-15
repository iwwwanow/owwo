import type { FullGridWrapContainerType } from "./full-grid-wrap-container.interface";

const FullGridWrapContainer: FullGridWrapContainerType = (props) => {
  const { limit, children } = props;

  let style = "";
  if (limit) {
    style = `max-height: ${limit}px; overflow: hidden`;
  }

  // TODO whats wrong with style?
  return (
    <div class="grid full-grid-wrap-container__wrapper" style={style}>
      <span class="full-grid-wrap-container__container">{children}</span>
    </div>
  );
};

export { FullGridWrapContainer };
