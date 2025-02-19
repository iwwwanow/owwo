import { CssModule } from "../../components";
import { Image } from "../../components";
import { NodeTitle } from "../../components";
import { ImageVariantName } from "../../globals";
import { hasTextDataHelper } from "./helpers";
import { hasDataHelper } from "./helpers";
import type { NodeInfoType } from "./node-info.interface";
import Style from "./node-info.module.css";
import { NodeInfoAuthor } from "./node-info__author";
import { NodeInfoAuthors } from "./node-info__authors";
import { NodeInfoDate } from "./node-info__date";
import { NodeInfoDescription } from "./node-info__description";
import { NodeInfoParents } from "./node-info__parents";

export const ResourceInfo: NodeInfoType = (props) => {
  const { nodeData } = props;
  const { isTitleNeeded = true, isDescriptionNeeded = true } = props;

  const id = nodeData.meta.id;
  const image = nodeData.image;
  const title = nodeData.title;
  const description = nodeData.description;
  const author = nodeData.meta.author;
  const authors = nodeData.meta.authors;
  const parents = nodeData.meta.parents;
  const date = nodeData.date;

  const hasTextData = hasTextDataHelper({ title, authors, description, date });
  const hasData = hasDataHelper({ image, hasTextData });

  if (hasData) {
    return (
      <>
        <span class="node-info node-info__data-wrapper">
          {image && (
            <Image
              image={image}
              id={id}
              variant={ImageVariantName.WIDTH_190PX}
            />
          )}
          {hasTextData && (
            <div class="node-info__data-container">
              {isTitleNeeded && <NodeTitle title={title} />}
              {author && <NodeInfoAuthor author={author} />}
              {authors && <NodeInfoAuthors authors={authors} />}
              {parents && <NodeInfoParents parents={parents} />}
              {isDescriptionNeeded && description?.html && (
                <NodeInfoDescription description={description} />
              )}
              {date && <NodeInfoDate date={date} />}
            </div>
          )}
        </span>
        <CssModule filepath={Style} />
      </>
    );
  }

  return null;
};
