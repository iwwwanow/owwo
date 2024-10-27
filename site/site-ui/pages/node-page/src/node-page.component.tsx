import { BaseLayout } from "@site-ui/base-layout";

import { PlusButton } from "@ui/button";
import { CssModule } from "@ui/css-module";
import { EditorForm } from "@ui/editor-form";
import { Hr } from "@ui/hr";
import { TextInput } from "@ui/input";
import { NodeCard } from "@ui/node-card";
import { NodeInfo } from "@ui/node-info";
import { Text } from "@ui/text";

import { ADD_NODE_INPUT_PLACEHOLDER } from "./node-page.constants";
import type { NodePageType } from "./node-page.interface";
import Style from "./node-page.module.css";

const NodePage: NodePageType = (props) => {
  const { node, client } = props;

  const { meta } = node;
  const childs = meta.childs;

  const { isEditor } = client;

  return (
    <>
      <BaseLayout>
        {isEditor ? <EditorForm client={client} node={node} /> : <></>}

        <div class="grid node-wrapper">
          <NodeInfo node={node} />

          {node.content && (
            <Text text={node.content} className="grid__right-content" />
          )}
        </div>
        <div class="grid todo" style="color: red;">
          <ul>
            <li>pages отображаются только в формате GRID</li>
            <li>
              возможность добавить скрипт из стандартной библиотеки, который
              меняет верстку на LIST
            </li>
            <li>
              возможность добавлять url на файл. чтобы он рендерился на странице
            </li>
          </ul>
        </div>
        <div class="grid user__pages-container">
          <Hr text="node-files"></Hr>
          {childs && childs.map((childNode) => <NodeCard node={childNode} />)}

          <span class="add-node__container">
            <PlusButton />
          </span>
        </div>
        <div class="grid user__pages-container">
          <Hr text="child-nodes"></Hr>
          {childs && childs.map((childNode) => <NodeCard node={childNode} />)}

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
