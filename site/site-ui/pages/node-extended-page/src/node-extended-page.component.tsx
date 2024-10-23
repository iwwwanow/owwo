// TODO unused component
import { NodeExtendedLayout } from "@site-ui/extended-layout";
import { HeaderFragment } from "@site-ui/header-fragment";
import { NodeExtendedFragment } from "@site-ui/node-extended-fragment";

import { CssModule } from "@ui/css-module";
import { FullGridWrapContainer } from "@ui/full-grid-wrap-container";
import { Hr } from "@ui/hr";
import { Logo } from "@ui/logo";
import { NodeCard } from "@ui/node-card";
import { NodeInfo } from "@ui/node-info";
import { NodeNavigation } from "@ui/node-navigation";
import { NodeTitle } from "@ui/node-title";
import { Text } from "@ui/text";

import type { NodeExtendedPageType } from "./node-extended-page.interface";
import Style from "./node-extended-page.style.css";

// TODO much comments - for what?
const NodeExtendedPage: NodeExtendedPageType = (props) => {
  const { node } = props;

  const { title } = node;
  const { content } = node;

  const siblingsArray = node.meta.siblings;
  const siblingsLength = siblingsArray.length;
  const currentSiblingId = node.meta.id;
  const currentSiblingIndex = siblingsArray.findIndex((sibling, index) => {
    if (sibling.meta.id === currentSiblingId) return index;
    else return 0;
  });

  // TODO make it optional. only on js, client side
  const prevSibling = siblingsArray[currentSiblingIndex - 1];
  const nextSibling = siblingsArray[currentSiblingIndex + 1];

  // 	    <!-- <FullGridWrapContainer limit={32}> -->
  // <!--   <h2 class="random-elements__title"> -->
  // <!--     {node.meta.author} -->
  // <!--   </h2> -->
  // <!--   {#each node.randomUserElements as randomElement} -->
  // <!--     <NodeInfo node={randomElement} type="cover" /> -->
  // <!--   {/each} -->
  // <!-- </FullGridWrapContainer> -->
  //
  // <!-- <FullGridWrapContainer> -->
  // <!--   <Logo className="random-elements__title random-elements__logo" /> -->
  // <!--   {#each node.randomOwwoElements as randomElement} -->
  // <!--     <NodeInfo node={randomElement} type="cover" /> -->
  // <!--   {/each} -->
  // <!-- </FullGridWrapContainer> -->

  {
    /* <li>elements отображаются оригинальном формате</li> */
  }
  {
    /* <li> */
  }
  {
    /*   возможность добавить скрипт из стандартной библиотеки, который */
  }
  {
    /*   меняет верстку на extended */
  }

  return (
    <>
      <NodeExtendedLayout>
        <NodeExtendedFragment content={content} />

        {(prevSibling || nextSibling) && (
          <NodeNavigation
            current={currentSiblingIndex}
            length={siblingsLength}
            prevNode={prevSibling}
            nextNode={nextSibling}
          />
        )}

        <div class="wrapper node-extended__layout">
          <span class="grid element-info__data-wrapper">
            <NodeInfo node={node} title={false} description={false} />
            <div class="grid__right-content">
              <NodeTitle title={node.title} />
              <Text text={node.description} className="grid__right-content" />
            </div>
          </span>

          <HeaderFragment bottom />
        </div>
      </NodeExtendedLayout>
      <CssModule filepath={Style} />
    </>
  );
};

export { NodeExtendedPage };
