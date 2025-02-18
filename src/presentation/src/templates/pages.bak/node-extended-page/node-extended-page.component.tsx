import { CssModule } from "../../components";
import { NodeInfo } from "../../components";
import { NodeTitle } from "../../components";
import { Text } from "../../components";
import { HeaderFragment } from "../../fragments";
import { NodeExtendedFragment } from "../../fragments";
import { NodeExtendedLayout } from "../../layouts";
import type { NodeExtendedPageType } from "./node-extended-page.interface";
import Style from "./node-extended-page.module.css";
import { NodeExtendedPageNavigation } from "./node-extended-page__navigation";

const NodeExtendedPage: NodeExtendedPageType = (props) => {
  const { nodeData } = props;

  const { content } = nodeData;

  const siblings = nodeData.meta.siblings;
  const currentSiblingId = nodeData.meta.id;

  return (
    <>
      <NodeExtendedLayout>
        {content ? <NodeExtendedFragment content={content} /> : <></>}

        <NodeExtendedPageNavigation
          siblings={siblings}
          currentSiblingId={currentSiblingId}
        />

        <div class="wrapper node-extended__layout">
          <span class="grid element-info__data-wrapper">
            <NodeInfo
              nodeData={nodeData}
              isTitleNeeded={false}
              isDescriptionNeeded={false}
            />
            <div class="grid__right-content">
              <NodeTitle title={nodeData.title} />
              <Text
                text={nodeData.description}
                className="grid__right-content"
              />
            </div>
          </span>

          <HeaderFragment position="bottom" />
        </div>
      </NodeExtendedLayout>
      <CssModule filepath={Style} />
    </>
  );
};

export { NodeExtendedPage };
