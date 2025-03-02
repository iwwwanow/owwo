import { ResourceDto } from "@site/domain";
import { PageVariantEnum } from "@site/domain";

import { PlusButton } from "../../components/index.js";
import { CssModule } from "../../components/index.js";
import { Hr } from "../../components/index.js";
import { TextInput } from "../../components/index.js";
import { ResourceCard } from "../../components/index.js";
import { ResourceInfo } from "../../components/index.js";
import { Text } from "../../components/index.js";
import { BaseLayout } from "../../layouts/index.js";
import type { ResourcePageProps } from "./resource-page.interfaces.js";
import Style from "./resource-page.module.css";

// TODO remove it
const ADD_NODE_INPUT_PLACEHOLDER = "bla";

const checkInfoNeeded = (resourceData: ResourceDto): boolean => {
  return true;
  // TODO for layout refactor only; uncomment
  // if (resourceData.meta.pageType !== PageVariantEnum.Index) return true;
  // return false;
};

export const ResourcePage: Component<ResourcePageProps> = (props) => {
  const { resourceData } = props;
  const { content, children } = resourceData;

  const isInfoNeeded = checkInfoNeeded(resourceData);

  return (
    <>
      <BaseLayout>
        <div class="grid node-wrapper">
          {isInfoNeeded && <ResourceInfo resourceData={resourceData} />}

          {
            // TODO full widt content on index page
            content && <Text text={content} className="grid__right-content" />
          }
        </div>

        <div class="grid user__pages-container">
          <Hr text="resources"></Hr>
          {children &&
            children.map((child) => <ResourceCard resourceData={child} />)}
        </div>
      </BaseLayout>
      <CssModule filepath={Style} />
    </>
  );
};
