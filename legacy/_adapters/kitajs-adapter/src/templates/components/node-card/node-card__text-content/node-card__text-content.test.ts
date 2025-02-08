import { titleMock } from "@test/mock";
import { nodeContentMock } from "@test/mock";
import { expect } from "bun:test";
import { describe } from "bun:test";
import { test } from "bun:test";

import { NodeCardTextContent } from "./node-card__text-content.component";

describe("ui, text", async () => {
  const markup = await NodeCardTextContent({
    title: titleMock,
    description: nodeContentMock,
  });

  document.body.innerHTML = markup;

  test("classname", () => {
    const container = document.querySelectorAll(".card__text-container");
    expect(container.length).toBe(1);
  });

  test("title true", () => {
    const titleConteiner = document.querySelectorAll(".card__text-header");
    expect(titleConteiner.length).toBe(1);
  });

  test("description true", () => {
    const container = document.querySelectorAll(".card__text-container");
    const descriptionContainer = container[0].querySelectorAll("h5");
    expect(descriptionContainer.length).toBe(1);
  });

  test("title false", async () => {
    // @ts-expect-error
    const markup2 = await NodeCardTextContent({});
    document.body.innerHTML = markup2;

    const titleConteiner = document.querySelectorAll(".card__text-header");
    expect(titleConteiner.length).toBe(0);
  });

  test("description false", async () => {
    // @ts-expect-error
    const markup2 = await NodeCardTextContent({});
    document.body.innerHTML = markup2;

    const container = document.querySelectorAll(".card__text-container");
    const descriptionContainer = container[0].querySelectorAll("h5");
    expect(descriptionContainer.length).toBe(0);
  });
});
