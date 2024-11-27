import { describe } from "bun:test";
import { expect } from "bun:test";
import { test } from "bun:test";

import { Text } from "./text.component";

describe("ui-text-test", () => {
  test("markup-test", async () => {
    // const textResult = Text({text: 'bla', className: 'test-text-classname'})
    const text = {
      html: "bla",
    };

    const textResult = await Text({ text });
    console.log(textResult);
  });
});
