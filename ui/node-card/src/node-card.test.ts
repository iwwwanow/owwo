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

  test("image true", async () => {
    const nodeCardImages = cardContainer.querySelectorAll(
      ".card__cover-container",
    );
    expect(nodeCardImages.length).toBe(1);
  });

  test("image false", async () => {
    const markup = await NodeCard({
      nodeData: {
        ...nodeDataMock,
        image: undefined,
      },
    });
    document.body.innerHTML = markup;

    const cardContainer = document.querySelector("a");

    // @ts-expect-error possibly null
    const nodeCardImage = cardContainer.querySelectorAll(
      ".card__cover-container",
    );
    expect(nodeCardImage.length).toBe(0);
  });

  test("title & description true", async () => {
    const nodeCardTextContents = cardContainer.querySelectorAll(
      ".card__text-container",
    );
    expect(nodeCardTextContents.length).toBe(1);
  });

  test("title false", async () => {
    const markup = await NodeCard({
      nodeData: {
        ...nodeDataMock,
        // @ts-expect-error possibly null
        title: undefined,
        // @ts-expect-error possibly null
        description: undefined,
      },
    });
    document.body.innerHTML = markup;

    const nodeCardTextContents = document.querySelectorAll(
      ".card__text-container",
    );
    expect(nodeCardTextContents.length).toBe(0);
  });
});
