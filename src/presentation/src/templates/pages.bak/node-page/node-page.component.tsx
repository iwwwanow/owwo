import { PlusButton } from "../../components";
import { CssModule } from "../../components";
import { Hr } from "../../components";
import { TextInput } from "../../components";
import { NodeCard } from "../../components";
import { ResourceInfo } from "../../components";
import { Text } from "../../components";
import { EditorForm } from "../../fragments";
import { BaseLayout } from "../../layouts";
import { ADD_NODE_INPUT_PLACEHOLDER } from "./node-page.constants";
import type { NodePageType } from "./node-page.interface";
import Style from "./node-page.module.css";

const NodePage: NodePageType = (props) => {
  const { nodeData, client } = props;

  const { meta } = nodeData;
  const childs = meta.childs;

  const { isEditor } = client;

  return (
    <>
      <BaseLayout>
        {isEditor ? <EditorForm client={client} nodeData={nodeData} /> : <></>}

        <div class="grid node-wrapper">
          <ResourceInfo nodeData={nodeData} />

          {nodeData.content && (
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

export { NodePage };
