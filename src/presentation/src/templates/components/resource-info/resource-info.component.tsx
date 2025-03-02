import { ImageVariantName } from "@site/models";

import { CssModule } from "../index.js";
import { Image } from "../index.js";
import { ResourceTitle } from "../index.js";
import { hasTextDataHelper } from "./helpers/index.js";
import { hasDataHelper } from "./helpers/index.js";
import { ResourceInfoAuthorPart } from "./parts/index.js";
import { ResourceInfoAuthorsPart } from "./parts/index.js";
import { ResourceInfoDatePart } from "./parts/index.js";
import { ResourceInfoDescriptionPart } from "./parts/index.js";
import { ResourceInfoParentsPart } from "./parts/index.js";
import type { ResourceInfoProps } from "./resource-info.interface.js";
import Style from "./resource-info.module.css";

export const ResourceInfo: Component<ResourceInfoProps> = (props) => {
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
              {isTitleNeeded && <ResourceTitle title={title} />}
              {author && <ResourceInfoAuthorPart author={author} />}
              {authors && <ResourceInfoAuthorsPart authors={authors} />}
              {parents && <ResourceInfoParentsPart parents={parents} />}
              {isDescriptionNeeded && description?.html && (
                <ResourceInfoDescriptionPart description={description} />
              )}
              {date && <ResourceInfoDatePart date={date} />}
            </div>
          )}
        </span>
        <CssModule filepath={Style} />
      </>
    );
  }

  return null;
};
