import { nodeContentMock } from "@test/mock";
import { describe } from "bun:test";
import { expect } from "bun:test";
import { test } from "bun:test";

import { NodeInfoDescription } from "./node-info__description.component";

describe("ui-text-test", () => {
  test("markup-test", async () => {
    const requiredComponentString = `<fieldset class="hr_fieldset" style=""><legend><h6>description</h6></legend></fieldset>mock-html-string`;

    const textResult = await NodeInfoDescription({
      description: nodeContentMock,
    });

    expect(textResult).toBe(requiredComponentString);
  });
});
