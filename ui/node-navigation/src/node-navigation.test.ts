import { nodeContentMock } from "@test/mock";
import { classnameMock } from "@test/mock";
import { describe } from "bun:test";
import { expect } from "bun:test";
import { test } from "bun:test";

import { NodeNavigation } from "./node-navigation.component";

describe("ui-node-navigation-test", () => {
  test("markup-test", async () => {
    // const requiredComponentString = `<div class="text ${classnameMock}">${nodeContentMock.html}</div>`;

    const textResult = await Text({
      text: nodeContentMock,
      className: classnameMock,
    });

    console.log(textResult);

    // expect(textResult).toBe(requiredComponentString);
  });
});
