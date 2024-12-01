import { nodeDateMock } from "@test/mock";
import { describe } from "bun:test";
import { expect } from "bun:test";
import { test } from "bun:test";

import { NodeInfoDate } from "./node-info__date.component";

describe("ui-text-test", () => {
  test("markup-test", async () => {
    const requiredComponentString = `<fieldset class="hr_fieldset" style=""><legend><h6>last-modification/creation date</h6></legend></fieldset><div class="date-container"><h5 class="date_creation">16.08.1998</h5><h6 class="date_last">01.12.2024</h6></div>`;

    const textResult = await NodeInfoDate({
      date: nodeDateMock,
    });

    expect(textResult).toBe(requiredComponentString);
  });
});
