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

export const ResourcePage: Component<ResourcePageProps> = (props) => {
  console.log(props);

  return <h1>bla</h1>;

  // const { resourceData } = props;
  //
  // const { meta } = nodeData;
  // const childs = meta.childs;
  //
  // const { isEditor } = client;
  //
  // return (
  //   <>
  //     <BaseLayout>
  //       <div class="grid node-wrapper">
  //         <ResourceInfo nodeData={nodeData} />
  //
  //         {resourceData.content && (
  //           <Text text={nodeData.content} className="grid__right-content" />
  //         )}
  //       </div>
  //       <div class="grid user__pages-container">
  //         <Hr text="node-files"></Hr>
  //         {childs &&
  //           childs.map((childNode) => <ResourceCard nodeData={childNode} />)}
  //
  //         <span class="add-node__container">
  //           <PlusButton />
  //         </span>
  //       </div>
  //       <div class="grid user__pages-container">
  //         <Hr text="child-nodes"></Hr>
  //         {childs &&
  //           childs.map((childNode) => <ResourceCard nodeData={childNode} />)}
  //
  //         <span class="add-node__container">
  //           <div class="add-node__input-container">
  //             <TextInput
  //               id="add-node__input"
  //               name="node-data"
  //               required={true}
  //               placeholder={ADD_NODE_INPUT_PLACEHOLDER}
  //             />
  //             <PlusButton variant="small" />
  //           </div>
  //
  //           <PlusButton />
  //         </span>
  //       </div>
  //     </BaseLayout>
  //     <CssModule filepath={Style} />
  //   </>
  // );
};
