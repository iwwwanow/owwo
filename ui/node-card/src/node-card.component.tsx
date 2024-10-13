import Image from "./image.component.svelte";
import { IMAGE_VARIANT } from "./node-card.constants";
// TODO use image variant
import type { NodeCardType } from "./node-card.interface";

const NodeCard: NodeCardType = (props) => {
  const { node } = props;

  const { id } = node.meta;
  const { image } = node;
  const { title } = node;
  let { description } = node;

  if (description?.markdown.length > 80) {
    description.markdown = description.markdown.slice(0, 80) + " ...";
  }

  // <!-- TODO как отображать хавер, чтобы он читался? Не всплывающее окно, а, кажется -->
  // <!-- это называется POP-UP, размером в 2 колонки -->

  return (
    <a class="card__wrapper border_light" href={id}>
      <picture class="card__cover-container">
        <source srcset={image.w190_2x} media="(max-width: 360px)" />
        <source srcset="{image.w190}, {image.w190_2x} 2x" />
        <img src={image.original} class="card__img" alt="page card cover" />
      </picture>
      {(title || description) && (
        <div class="card__text-container">
          {title && <h4 class="card__text-header">{title}</h4>}
          {description?.markdown && <h5>{description.markdown}</h5>}
        </div>
      )}
    </a>
  );
};

export { NodeCard };
