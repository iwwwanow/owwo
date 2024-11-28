import { titleMock } from "@test/mock";
import { describe } from "bun:test";
import { expect } from "bun:test";
import { test } from "bun:test";

import { NodeTitle } from "./node-title.component";

describe("ui-node-title-test", () => {
  test("markup-test", async () => {
    const requiredComponentString = `<h2 class="node-title">${titleMock}</h2>`;

    const textResult = await NodeTitle({
      title: titleMock,
    });

    expect(textResult).toBe(requiredComponentString);
  });
});
