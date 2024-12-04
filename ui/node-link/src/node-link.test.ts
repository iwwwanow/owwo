import { nodeDataMock } from "@test/mock";
import { symbolMock } from "@test/mock";
import { describe } from "bun:test";
import { expect } from "bun:test";
import { test } from "bun:test";

import { NodeLink } from "./node-link.component";

describe("ui, node link", async () => {
  const markup = await NodeLink({
    node: nodeDataMock,
    leftSymbol: symbolMock,
    rightSymbol: symbolMock,
  });
  document.body.innerHTML = markup;
  const a = document.querySelector("a");

  test("href", async () => {
    expect(a?.href).toBe(`/${nodeDataMock.meta.id}`);
  });

  test("class", async () => {
    expect(a?.className).toBe("node-info__container");
  });
});
