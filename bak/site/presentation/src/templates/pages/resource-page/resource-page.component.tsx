import { ResourceDto } from "@site/domain";
import { PageVariantEnum } from "@site/domain";
import { ResourceVariantEnum } from "@site/domain";

import { PlusButton } from "../../components/index.js";
import { CssModule } from "../../components/index.js";
import { Hr } from "../../components/index.js";
import { TextInput } from "../../components/index.js";
import { ResourceCard } from "../../components/index.js";
import { ResourceInfo } from "../../components/index.js";
import { Content } from "../../components/index.js";
import { BaseLayout } from "../../layouts/index.js";
import type { ResourcePageProps } from "./resource-page.interfaces.js";
import Style from "./resource-page.module.css";

const checkInfoNeeded = (resourceData: ResourceDto): boolean => {
  // TODO to domain
  if (resourceData.meta.resourceType === ResourceVariantEnum.File) return false;
  if (resourceData.meta.pageType === PageVariantEnum.Index) return false;
  if (resourceData.meta.pageType === PageVariantEnum.About) return false;
  return true;
};

const checkChildrenNeeded = (resourceData: ResourceDto): boolean => {
  if (!resourceData.children?.length) return false;
  return true;
};

export const ResourcePage: Component<ResourcePageProps> = (props) => {
  const { resourceData } = props;
  const { content, children } = resourceData;

  const isInfoNeeded = checkInfoNeeded(resourceData);
  const isChildrenNeeded = checkChildrenNeeded(resourceData);

  return (
    <>
      <BaseLayout resourceData={resourceData}>
        <div class="grid node-wrapper">
          {isInfoNeeded && <ResourceInfo resourceData={resourceData} />}

          {
            // TODO full widt content on index page
            content && (
              <Content contentData={content} className="grid__right-content" />
            )
          }
        </div>

        {isChildrenNeeded && (
          <div class="grid user__pages-container">
            <Hr text="resources"></Hr>
            {children &&
              children.map((child) => <ResourceCard resourceData={child} />)}
          </div>
        )}
      </BaseLayout>
      <CssModule filepath={Style} />
    </>
  );
};
