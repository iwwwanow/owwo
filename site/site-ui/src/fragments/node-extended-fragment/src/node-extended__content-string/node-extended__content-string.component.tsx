import type { ContentStringType } from "./node-extended__content-string.interface";

const ContentString: ContentStringType = (props) => {
  const { html } = props;

  // TODO render html string raw (dirty)
  return <div class="element__content-container">{html}</div>;
};

export { ContentString };
