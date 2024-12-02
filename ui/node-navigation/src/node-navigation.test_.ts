import { nodeDataMock } from "@test/mock";
import { describe } from "bun:test";
import { expect } from "bun:test";
import { test } from "bun:test";

import { NodeNavigation } from "./node-navigation.component";
import { nodeNavigationRequiredTestString } from "./node-navigation.required-test-string";

describe("ui-node-navigation-test", () => {
  test("markup-test", async () => {
    const CURRENT_NODE_INDEX_NUMBER = 3;
    const NAVIGATION_NODES_LENGTH_NUMBER = 7;

    const textResult = await NodeNavigation({
      prevNode: nodeDataMock,
      nextNode: nodeDataMock,
      current: CURRENT_NODE_INDEX_NUMBER,
      length: NAVIGATION_NODES_LENGTH_NUMBER,
    });

    expect(textResult).toBe(nodeNavigationRequiredTestString);
  });
});
