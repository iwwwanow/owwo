import { nodeDataMock } from "@test/mock";
import { expect } from "bun:test";
import { describe } from "bun:test";
import { test } from "bun:test";

import { NodeCard } from "./node-card.component";

describe("ui, node card", async () => {
  const markup = await NodeCard({
    nodeData: nodeDataMock,
  });

  document.body.innerHTML = markup;

  const cardContainer = document.querySelector("a");
  if (!cardContainer) throw new Error("card component not found by classname");

  test("classname", async () => {
    expect(cardContainer.className).toBe("card__wrapper border_light");
  });

  test("classname", async () => {
    expect(cardContainer.className).toBe("card__wrapper border_light");
  });
});
