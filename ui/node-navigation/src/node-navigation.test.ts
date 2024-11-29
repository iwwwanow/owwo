import { nodeDataMock } from "@test/mock";
import { describe } from "bun:test";
import { expect } from "bun:test";
import { test } from "bun:test";

import { NodeNavigation } from "./node-navigation.component";

describe("ui-node-navigation-test", () => {
  test("markup-test", async () => {
    const requiredComponentString = `<div class="grid navigation-elements__wrapper"><div class="navigation-elements__container"><span class="navigation-elements__element"><a href="/node-id-mock-string" class="node-info__container"><h5 class="node-info__symbol">◂</h5><picture><source srcset="node-image-height-16px-mock-string, node-image-height-16px-2x-mock-string 2x"/><source srcset="https://images.placeholders.dev/?width=64&height=64"/><img src="https://images.placeholders.dev/?width=64&height=64" alt="node-info__image"/></picture><h5 style="word-break: break-all" class="element-info__title">title-mock-string</h5></a></span><span><h5>3/7</h5></span><span class="navigation-elements__element"><a href="/node-id-mock-string" class="node-info__container"><picture><source srcset="node-image-height-16px-mock-string, node-image-height-16px-2x-mock-string 2x"/><source srcset="https://images.placeholders.dev/?width=64&height=64"/><img src="https://images.placeholders.dev/?width=64&height=64" alt="node-info__image"/></picture><h5 style="word-break: break-all" class="element-info__title">title-mock-string</h5><h5 class="node-info__symbol">▸</h5></a></span></div></div>`;

    const CURRENT_NODE_INDEX_NUMBER = 3;
    const NAVIGATION_NODES_LENGTH_NUMBER = 7;

    const textResult = await NodeNavigation({
      prevNode: nodeDataMock,
      nextNode: nodeDataMock,
      current: CURRENT_NODE_INDEX_NUMBER,
      length: NAVIGATION_NODES_LENGTH_NUMBER,
    });

    expect(textResult).toBe(requiredComponentString);
  });
});
