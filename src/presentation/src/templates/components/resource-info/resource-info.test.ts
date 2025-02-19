import { nodeDataMock } from "@test/mock";
import { classnameMock } from "@test/mock";
import { expect } from "bun:test";
import { describe } from "bun:test";
import { test } from "bun:test";

import { ResourceInfo } from "./node-info.component";

describe("ui, node info", async () => {
  const markup = await ResourceInfo({
    nodeData: nodeDataMock,
  });
  // @ts-expect-error
  document.body.innerHTML = markup;

  test("has data true", async () => {
    expect(typeof markup).toBe("string");
  });

  test("has data false", async () => {
    const markup = await ResourceInfo({
      nodeData: {
        ...nodeDataMock,
        image: undefined,
        // @ts-expect-error
        title: undefined,
        // @ts-expect-error
        description: undefined,
        date: undefined,
      },
    });

    expect(markup).toBe(null);
  });

  test("classname 1", () => {
    const span = document.querySelector("span");
    expect(span?.className).toBe("node-info node-info__data-wrapper");
  });

  test("image exists", () => {
    const pictures = document.querySelectorAll("picture");
    expect(pictures.length).toBe(1);
  });

  test("image exists", async () => {
    const markup = await ResourceInfo({
      nodeData: {
        ...nodeDataMock,
        image: undefined,
      },
    });
    // @ts-expect-error
    document.body.innerHTML = markup;
    const pictures = document.querySelectorAll("picture");
    expect(pictures.length).toBe(0);
  });

  test("classname 2, has text true", async () => {
    const markup = await ResourceInfo({
      nodeData: nodeDataMock,
    });
    // @ts-expect-error
    document.body.innerHTML = markup;

    const nodeInfoDataConteiners = document.querySelectorAll(
      ".node-info__data-container",
    );
    expect(nodeInfoDataConteiners.length).toBe(1);
  });

  test("has text false", async () => {
    const markup = await ResourceInfo({
      nodeData: {
        ...nodeDataMock,
        meta: {
          ...nodeDataMock.meta,
          authors: undefined,
        },
        // @ts-expect-error
        title: undefined,
        // @ts-expect-error
        description: undefined,
        date: undefined,
      },
    });

    // @ts-expect-error
    document.body.innerHTML = markup;
    const nodeInfoDataContainers = document.querySelectorAll(
      ".node-info__data-container",
    );
    expect(nodeInfoDataContainers.length).toBe(0);
  });

  test("is title needed true", async () => {
    const markup = await ResourceInfo({
      nodeData: nodeDataMock,
    });

    // @ts-expect-error
    document.body.innerHTML = markup;
    const nodeTitles = document.querySelectorAll(".node-title");
    expect(nodeTitles.length).toBe(1);
  });

  test("is title needed false", async () => {
    const markup = await ResourceInfo({
      nodeData: nodeDataMock,
      isTitleNeeded: false,
    });

    // @ts-expect-error
    document.body.innerHTML = markup;
    const nodeTitles = document.querySelectorAll(".node-title");
    expect(nodeTitles.length).toBe(0);
  });

  test("autor true", async () => {
    const markup = await ResourceInfo({
      nodeData: {
        ...nodeDataMock,
        meta: {
          ...nodeDataMock.meta,
          author: nodeDataMock,
        },
      },
    });
    // @ts-expect-error
    document.body.innerHTML = markup;

    const hrFieldsets = document.querySelectorAll(".hr_fieldset");
    const hrFieldsetsArray = Array.from(hrFieldsets);
    const findedAuthorHr = hrFieldsetsArray.find((hrFieldset) => {
      const h6 = hrFieldset.querySelector("h6");
      return h6?.innerHTML === "author";
    });

    expect(Boolean(findedAuthorHr)).toBe(true);
  });

  test("autor false", async () => {
    const markup = await ResourceInfo({
      nodeData: {
        ...nodeDataMock,
        meta: {
          ...nodeDataMock.meta,
          author: undefined,
        },
      },
    });

    // @ts-expect-error
    document.body.innerHTML = markup;

    const hrFieldsets = document.querySelectorAll(".hr_fieldset");
    const hrFieldsetsArray = Array.from(hrFieldsets);
    const findedAuthorHr = hrFieldsetsArray.find((hrFieldset) => {
      const h6 = hrFieldset.querySelector("h6");
      return h6?.innerHTML === "author";
    });

    expect(Boolean(findedAuthorHr)).toBe(false);
  });

  test("autor true", async () => {
    const NUMBER_OF_AUTHORS = 3;

    const markup = await ResourceInfo({
      nodeData: {
        ...nodeDataMock,
        meta: {
          ...nodeDataMock.meta,
          authors: Array(NUMBER_OF_AUTHORS).fill(nodeDataMock),
        },
      },
    });
    // @ts-expect-error
    document.body.innerHTML = markup;

    const hrFieldsets = document.querySelectorAll(".hr_fieldset");
    const hrFieldsetsArray = Array.from(hrFieldsets);
    const findedAuthorsHr = hrFieldsetsArray.find((hrFieldset) => {
      const h6 = hrFieldset.querySelector("h6");
      return h6?.innerHTML === "authors";
    });

    expect(Boolean(findedAuthorsHr)).toBe(true);
  });

  test("autor false", async () => {
    const markup = await ResourceInfo({
      nodeData: {
        ...nodeDataMock,
        meta: {
          ...nodeDataMock.meta,
        },
      },
    });
    // @ts-expect-error
    document.body.innerHTML = markup;

    const hrFieldsets = document.querySelectorAll(".hr_fieldset");
    const hrFieldsetsArray = Array.from(hrFieldsets);
    const findedAuthorsHr = hrFieldsetsArray.find((hrFieldset) => {
      const h6 = hrFieldset.querySelector("h6");
      return h6?.innerHTML === "authors:";
    });

    expect(Boolean(findedAuthorsHr)).toBe(false);
  });

  // parents?
  test("parents true", async () => {
    const NUMBER_OF_PARENTS = 3;

    const markup = await ResourceInfo({
      nodeData: {
        ...nodeDataMock,
        meta: {
          ...nodeDataMock.meta,
          parents: Array(NUMBER_OF_PARENTS).fill(nodeDataMock),
        },
      },
    });
    // @ts-expect-error
    document.body.innerHTML = markup;

    const hrFieldsets = document.querySelectorAll(".hr_fieldset");
    const hrFieldsetsArray = Array.from(hrFieldsets);
    const findedAuthorsHr = hrFieldsetsArray.find((hrFieldset) => {
      const h6 = hrFieldset.querySelector("h6");
      return h6?.innerHTML === "pages";
    });

    expect(Boolean(findedAuthorsHr)).toBe(true);
  });

  test("parents false", async () => {
    const markup = await ResourceInfo({
      nodeData: {
        ...nodeDataMock,
        meta: {
          ...nodeDataMock.meta,
        },
      },
    });
    // @ts-expect-error
    document.body.innerHTML = markup;

    const hrFieldsets = document.querySelectorAll(".hr_fieldset");
    const hrFieldsetsArray = Array.from(hrFieldsets);
    const findedAuthorsHr = hrFieldsetsArray.find((hrFieldset) => {
      const h6 = hrFieldset.querySelector("h6");
      return h6?.innerHTML === "pages";
    });

    expect(Boolean(findedAuthorsHr)).toBe(false);
  });

  test("is description needed true", async () => {
    const markup = await ResourceInfo({
      nodeData: nodeDataMock,
      isDescriptionNeeded: true,
    });
    // @ts-expect-error
    document.body.innerHTML = markup;

    const hrFieldsets = document.querySelectorAll(".hr_fieldset");
    const hrFieldsetsArray = Array.from(hrFieldsets);
    const findedAuthorsHr = hrFieldsetsArray.find((hrFieldset) => {
      const h6 = hrFieldset.querySelector("h6");
      return h6?.innerHTML === "description";
    });

    expect(Boolean(findedAuthorsHr)).toBe(true);
  });

  test("is description needed false", async () => {
    const markup = await ResourceInfo({
      nodeData: nodeDataMock,
      isDescriptionNeeded: false,
    });
    // @ts-expect-error
    document.body.innerHTML = markup;

    const hrFieldsets = document.querySelectorAll(".hr_fieldset");
    const hrFieldsetsArray = Array.from(hrFieldsets);
    const findedAuthorsHr = hrFieldsetsArray.find((hrFieldset) => {
      const h6 = hrFieldset.querySelector("h6");
      return h6?.innerHTML === "description";
    });

    expect(Boolean(findedAuthorsHr)).toBe(false);
  });

  test("date true", async () => {
    const markup = await ResourceInfo({
      nodeData: nodeDataMock,
    });
    // @ts-expect-error
    document.body.innerHTML = markup;

    const hrFieldsets = document.querySelectorAll(".hr_fieldset");
    const hrFieldsetsArray = Array.from(hrFieldsets);
    const findedAuthorsHr = hrFieldsetsArray.find((hrFieldset) => {
      const h6 = hrFieldset.querySelector("h6");
      return h6?.innerHTML === "last-modification/creation date";
    });

    expect(Boolean(findedAuthorsHr)).toBe(true);
  });

  test("date false", async () => {
    const markup = await ResourceInfo({
      nodeData: {
        ...nodeDataMock,
        date: undefined,
      },
    });
    // @ts-expect-error
    document.body.innerHTML = markup;

    const hrFieldsets = document.querySelectorAll(".hr_fieldset");
    const hrFieldsetsArray = Array.from(hrFieldsets);
    const findedAuthorsHr = hrFieldsetsArray.find((hrFieldset) => {
      const h6 = hrFieldset.querySelector("h6");
      return h6?.innerHTML === "last-modification/creation date";
    });

    expect(Boolean(findedAuthorsHr)).toBe(false);
  });
});
