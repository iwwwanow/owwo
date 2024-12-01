import { nodeContentMock } from "@test/mock";
import { classnameMock } from "@test/mock";
import { JsxMarkupTest } from "@test/mock";
import { describe } from "bun:test";
import { test } from "bun:test";

import { Text } from "./text.component";

describe("ui-text-test", () => {
  test("markup-test", async () => {
    const requiredComponentString = `<div class="text ${classnameMock}">${nodeContentMock.html}</div>`;

    const markupTest = new JsxMarkupTest({
      requiredComponentString,
      renderedComponentString: await Text({
        text: nodeContentMock,
        className: classnameMock,
      }),
    });

    markupTest.process();
  });
});
