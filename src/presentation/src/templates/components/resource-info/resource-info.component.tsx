import { CssModule } from "../../components";
import { Image } from "../../components";
import { ResourceTitle } from "../../components";
import { ImageVariantName } from "../../globals";
import { hasTextDataHelper } from "./helpers";
import { hasDataHelper } from "./helpers";
import Style from "./node-info.module.css";
import { ResourceInfoAuthorPart } from "./parts";
import { ResourceInfoAuthorsPart } from "./parts";
import { ResourceInfoDatePart } from "./parts";
import { ResourceInfoDescriptionPart } from "./parts";
import { ResourceInfoParentsPart } from "./parts";
import type { ResourceInfoProps } from "./resource-info.interface";

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
