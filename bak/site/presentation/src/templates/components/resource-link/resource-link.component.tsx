import { CssModule } from "../index.js";
import { ResourceLinkImagePart } from "./parts/index.js";
import { ResourceLinkSymbolPart } from "./parts/index.js";
import { ResourceLinkTitlePart } from "./parts/index.js";
import type { ResourceLinkProps } from "./resource-link.interface.js";
import Style from "./resource-link.module.css";

export const ResourceLink: Component<ResourceLinkProps> = (props) => {
  const { resourceData, leftSymbol, rightSymbol } = props;

  const { isTitleNeeded = true } = props;
  const id = props.id || resourceData.meta.path;
  const title = props.title || resourceData.meta.title;
  const image = props.image || resourceData.cover;

  const imageVariant = isTitleNeeded ? "small" : "big";
  const nodeLinkHref = `/${id}`;

  return (
    <>
      <a href={nodeLinkHref} class="node-info__container">
        {leftSymbol && <ResourceLinkSymbolPart symbol={leftSymbol} />}
        {image && (
          <ResourceLinkImagePart image={image} variant={imageVariant} />
        )}
        {isTitleNeeded && title && <ResourceLinkTitlePart title={title} />}
        {rightSymbol && <ResourceLinkSymbolPart symbol={rightSymbol} />}
      </a>
      <CssModule filepath={Style} />
    </>
  );
};
