import { ImageVariantEnum } from "@site/domain";

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
  const { isTitleNeeded = true, isDescriptionNeeded = true } = props;
  const { resourceData } = props;
  const { meta, cover } = resourceData;

  // const id = resourceData.meta.id;
  const id = meta.path;

  // const image = resourceData.image;
  const image = cover;

  // const title = resourceData.title;
  const title = meta.title;

  // const description = resourceData.description;
  // TODO description from meta.json? settings.json?
  const description = "description";

  // TODO add that logic to repository; author as resource
  // const author = resourceData;
  const author = false;

  const hasTextData = hasTextDataHelper({ title, description, meta });
  const hasData = hasDataHelper({ image, hasTextData });

  if (hasData) {
    return (
      <>
        <span class="node-info node-info__data-wrapper">
          {image && (
            <Image
              image={image}
              id={id}
              variant={ImageVariantEnum.WIDTH_190PX}
            />
          )}
          {hasTextData && (
            <div class="node-info__data-container">
              {isTitleNeeded && <ResourceTitle title={title} />}
              {author && <ResourceInfoAuthorPart author={author} />}
              {isDescriptionNeeded && description && (
                <ResourceInfoDescriptionPart description={description} />
              )}
              {meta && <ResourceInfoDatePart meta={meta} />}
            </div>
          )}
        </span>
        <CssModule filepath={Style} />
      </>
    );
  }

  return null;
};
