import type { FullGridWrapContainerType } from "./full-grid-wrap-container.interface";
import Style from "./full-grid-wrap-container.style.css";

const FullGridWrapContainer: FullGridWrapContainerType = async (props) => {
  const { limit, children } = props;

  console.log(Style);
  const StyleFile = Bun.file(Style);
  const StyleText = await StyleFile.text();

  let style = "";
  if (limit) {
    style = `max-height: ${limit}px; overflow: hidden`;
  }

  // TODO whats wrong with style?
  return (
    <>
      <div class="grid full-grid-wrap-container__wrapper" style={style}>
        <span class="full-grid-wrap-container__container">{children}</span>
      </div>
      <style>{StyleText}</style>
    </>
  );
};

export { FullGridWrapContainer };
