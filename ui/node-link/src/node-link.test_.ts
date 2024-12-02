import { nodeDataMock } from "@test/mock";
import { symbolMock } from "@test/mock";
import { describe } from "bun:test";
import { expect } from "bun:test";
import { test } from "bun:test";

import { NodeLink } from "./node-link.component";
import { nodeLinkRequiredTestString } from "./node-link.required-test-string";

describe("ui-node-link-test", () => {
  test("markup-test", async () => {
    const textResult = await NodeLink({
      node: nodeDataMock,
      leftSymbol: symbolMock,
      rightSymbol: symbolMock,
    });

    expect(textResult).toBe(nodeLinkRequiredTestString);
  });
});
