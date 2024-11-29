import { ImageVariantName } from "@globals/constants";

import { CssModule } from "@ui/css-module";
import { Image } from "@ui/image";
import { NodeTitle } from "@ui/node-title";

import type { NodeInfoType } from "./node-info.interface";
import Style from "./node-info.module.css";
import { NodeInfoAuthor } from "./node-info__author";
import { NodeInfoAuthors } from "./node-info__authors";
import { NodeInfoDate } from "./node-info__date";
import { NodeInfoDescription } from "./node-info__description";
import { NodeInfoParents } from "./node-info__parents";

const NodeInfo: NodeInfoType = (props) => {
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

  const isTextDataExist = !!title || !!authors || !!description || !!date;
  const isDataExist = !!image || isTextDataExist;

  if (isDataExist) {
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
          {isTextDataExist && (
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

export { NodeInfo };
