import { childrenMock } from "@test/mock";
import { describe } from "bun:test";
import { expect } from "bun:test";
import { test } from "bun:test";

import { NodeLinkContainer } from "./node-link-container.component";

describe("ui-text-test", () => {
  test("markup-test", async () => {
    const requiredComponentString = `<div class="node-link__container"><>children-data</></div>`;

    const textResult = await NodeLinkContainer({ children: childrenMock });

    console.log(textResult);

    expect(textResult).toBe(requiredComponentString);
  });
});
