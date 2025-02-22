import { CssModule } from "../";
import Style from "./node-link.module.css";
import { ResourceLinkImagePart } from "./parts";
import { ResourceLinkSymbolPart } from "./parts";
import { ResourceLinkTitlePart } from "./parts";
import type { ResourceLinkProps } from "./resource-link.interface";

export const ResourceLink: Component<ResourceLinkProps> = (props) => {
  const { node, leftSymbol, rightSymbol } = props;

  const { isTitleNeeded = true } = props;
  const id = props.id || node.meta.id;
  const title = props.title || node.title;
  const image = props.image || node.image;

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
