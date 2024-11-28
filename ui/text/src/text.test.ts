import { nodeContentMock } from "@test/mock";
import { classnameMock } from "@test/mock";
import { describe } from "bun:test";
import { expect } from "bun:test";
import { test } from "bun:test";

import { Text } from "./text.component";

describe("ui-text-test", () => {
  test("markup-test", async () => {
    const requiredComponentString = `<div class="text ${classnameMock}">${nodeContentMock.html}</div>`;

    const textResult = await Text({
      text: nodeContentMock,
      className: classnameMock,
    });

    expect(textResult).toBe(requiredComponentString);
  });
});
