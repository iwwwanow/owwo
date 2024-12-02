/// <reference lib="dom" />
import { nodeContentMock } from "@test/mock";
import { test } from "bun:test";
import { expect } from "bun:test";

import { NodeInfoDescription } from "./node-info__description.component";

test("ui_node-info-description_markup-test", async () => {
  const markup = await NodeInfoDescription({
    description: nodeContentMock,
  });

  console.log(markup);

  document.body.innerHTML = markup;

  const body = document.querySelector("body");
  const fieldset = document.querySelector("fieldset");

  console.log(fieldset.className);
});
