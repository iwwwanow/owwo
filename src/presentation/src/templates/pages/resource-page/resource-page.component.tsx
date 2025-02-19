import { PlusButton } from "../../components";
import { CssModule } from "../../components";
import { Hr } from "../../components";
import { TextInput } from "../../components";
import { NodeCard } from "../../components";
import { ResourceInfo } from "../../components";
import { Text } from "../../components";
import { BaseLayout } from "../../layouts";
import type { ResourcePageProps } from "./resource-page.interfaces";
import Style from "./resource-page.module.css";

// TODO remove it
const ADD_NODE_INPUT_PLACEHOLDER = "bla";

export const ResourcePage: Page<ResourcePageProps> = (props) => {
  const { resourceData } = props;

  const { meta } = nodeData;
  const childs = meta.childs;

  const { isEditor } = client;

  return (
    <>
      <BaseLayout>
        <div class="grid node-wrapper">
          <ResourceInfo nodeData={nodeData} />

          {resourceData.content && (
            <Text text={nodeData.content} className="grid__right-content" />
          )}
        </div>
        <div class="grid user__pages-container">
          <Hr text="node-files"></Hr>
          {childs &&
            childs.map((childNode) => <NodeCard nodeData={childNode} />)}

          <span class="add-node__container">
            <PlusButton />
          </span>
        </div>
        <div class="grid user__pages-container">
          <Hr text="child-nodes"></Hr>
          {childs &&
            childs.map((childNode) => <NodeCard nodeData={childNode} />)}

          <span class="add-node__container">
            <div class="add-node__input-container">
              <TextInput
                id="add-node__input"
                name="node-data"
                required={true}
                placeholder={ADD_NODE_INPUT_PLACEHOLDER}
              />
              <PlusButton variant="small" />
            </div>

            <PlusButton />
          </span>
        </div>
      </BaseLayout>
      <CssModule filepath={Style} />
    </>
  );
};
