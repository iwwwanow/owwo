import { nodeDateMock } from "@test/mock";
import { describe } from "bun:test";
import { expect } from "bun:test";
import { test } from "bun:test";

import { NodeInfoDate } from "./node-info__date.component";

describe("ui, node info date", async () => {
  const markup = await NodeInfoDate({ date: nodeDateMock });
  document.body.innerHTML = markup;

  test("hr content", () => {
    const hr = document.querySelector(".hr_fieldset");
    const h6 = hr?.querySelector("h6");
    // TODO to const
    expect(h6?.innerHTML).toBe("last-modification/creation date");
  });
});
