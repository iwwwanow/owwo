import { NodeExtendedLayout } from "@site-ui/extended-layout";
import { HeaderFragment } from "@site-ui/header-fragment";
import { NodeExtendedFragment } from "@site-ui/node-extended-fragment";

import { CssModule } from "@ui/css-module";
import { NodeInfo } from "@ui/node-info";
import { NodeTitle } from "@ui/node-title";
import { Text } from "@ui/text";

import type { NodeExtendedPageType } from "./node-extended-page.interface";
import Style from "./node-extended-page.module.css";
import { NodeExtendedPageNavigation } from "./node-extended-page__navigation";

const NodeExtendedPage: NodeExtendedPageType = (props) => {
  const { node } = props;

  const { content } = node;

  const siblings = node.meta.siblings;
  const currentSiblingId = node.meta.id;

  return (
    <>
      <NodeExtendedLayout>
        <NodeExtendedFragment content={content} />

        <NodeExtendedPageNavigation
          siblings={siblings}
          currentSiblingId={currentSiblingId}
        />

        <div class="wrapper node-extended__layout">
          <span class="grid element-info__data-wrapper">
            <NodeInfo
              node={node}
              isTitleNeeded={false}
              isDescriptionNeeded={false}
            />
            <div class="grid__right-content">
              <NodeTitle title={node.title} />
              <Text text={node.description} className="grid__right-content" />
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
