import { nodeDataMock } from "@test/mock";
import { describe } from "bun:test";
import { expect } from "bun:test";
import { test } from "bun:test";

import { NodeNavigation } from "./node-navigation.component";

describe("ui, node navigation", async () => {
  const CURRENT_NUMBER = 3;
  const LENGTH_NUMBER = 7;

  const markup = await NodeNavigation({
    prevNode: nodeDataMock,
    nextNode: nodeDataMock,
    current: CURRENT_NUMBER,
    length: LENGTH_NUMBER,
  });
  document.body.innerHTML = markup;

  const div = document.querySelector("div");
  test("classname 1", async () => {
    expect(div?.className).toBe("grid navigation-elements__wrapper");
  });

  const innerDiv = div?.querySelector("div");
  test("classname 2", async () => {
    expect(innerDiv?.className).toBe("navigation-elements__container");
  });

  const spans = div?.querySelectorAll("span");
  if (!spans) throw new Error("not enought spans");
  test("number of childs", async () => {
    expect(spans.length).toBe(3);
  });
  test("classname 2", async () => {
    expect(spans[0].className).toBe("navigation-elements__element");
  });
  test("classname 3", async () => {
    expect(spans[2].className).toBe("navigation-elements__element");
  });
  test("child content 1", async () => {
    const h5 = spans[1].querySelector("h5");
    if (!h5) throw new Error("markup incorrect, h5 needed");
    expect(h5.innerHTML).toBe(`${CURRENT_NUMBER}/${LENGTH_NUMBER}`);
  });
  test("arrow left", async () => {
    const h5 = spans[0].querySelector("h5");
    if (!h5) throw new Error("markup incorrect, h5 needed");
    expect(h5.innerHTML).toBe("◂");
  });
  test("arrow right", async () => {
    const h5 = spans[2].querySelectorAll("h5")[1];
    if (!h5) throw new Error("markup incorrect, h5 needed");
    expect(h5.innerHTML).toBe("▸");
  });
});
