import { IMAGE_VARIANT_NAME } from "@site/constants";

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
  const { node } = props;
  const { isTitleNeeded = true, isDescriptionNeeded = true } = props;

  const id = node.meta.id;
  const image = node.image;
  const title = node.title;
  const description = node.description;
  const author = node.meta.author;
  const authors = node.meta.authors;
  const parents = node.meta.parents;
  const date = node.date;

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
              variant={IMAGE_VARIANT_NAME.width190px}
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
