import { nodeDataMock } from "@test/mock";
import { describe } from "bun:test";
import { expect } from "bun:test";
import { test } from "bun:test";

import { NodeInfoParents } from "./node-info__parents.component";

describe("ui-text-test", () => {
  test("markup-test", async () => {
    const requiredComponentString = `<fieldset class="hr_fieldset" style=""><legend><h6>pages</h6></legend></fieldset><div class="node-link__container"><a href="/node-id-mock-string" class="node-info__container"><picture><source srcset="node-image-height-16px-mock-string, node-image-height-16px-2x-mock-string 2x"/><source srcset="node-image-height-16px-2x-mock-string"/><img src="node-image-height-16px-2x-mock-string" alt="node-info__image"/></picture><h5 style="word-break: break-all" class="element-info__title">title-mock-string</h5></a><a href="/node-id-mock-string" class="node-info__container"><picture><source srcset="node-image-height-16px-mock-string, node-image-height-16px-2x-mock-string 2x"/><source srcset="node-image-height-16px-2x-mock-string"/><img src="node-image-height-16px-2x-mock-string" alt="node-info__image"/></picture><h5 style="word-break: break-all" class="element-info__title">title-mock-string</h5></a><a href="/node-id-mock-string" class="node-info__container"><picture><source srcset="node-image-height-16px-mock-string, node-image-height-16px-2x-mock-string 2x"/><source srcset="node-image-height-16px-2x-mock-string"/><img src="node-image-height-16px-2x-mock-string" alt="node-info__image"/></picture><h5 style="word-break: break-all" class="element-info__title">title-mock-string</h5></a></div>`;

    const textResult = await NodeInfoParents({
      parents: [nodeDataMock, nodeDataMock, nodeDataMock],
    });

    expect(textResult).toBe(requiredComponentString);
  });
});
