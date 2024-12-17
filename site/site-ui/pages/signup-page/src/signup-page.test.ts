import { expect } from "bun:test";
import { describe } from "bun:test";
import { test } from "bun:test";

import { SignupPage } from "./signup-page.component";

describe("site, signup page", async () => {
  const markup = await SignupPage({});

  document.body.innerHTML = markup;

  const head = document.querySelector("head");
  if (!head) throw new Error("head not found by tagname");

  const body = document.querySelector("body");
  if (!body) throw new Error("body not found by tagname");

  test("grid", async () => {
    expect(.className).toBe("card__wrapper border_light");
  });

  test("login form", async () => {
    expect(container.className).toBe("card__wrapper border_light");
  });

  describe("username text input", async () => {
    test("id", async () => {
      expect(container.className).toBe("card__wrapper border_light");
    });

    test("name", async () => {
      expect(container.className).toBe("card__wrapper border_light");
    });

    test("required", async () => {
      expect(container.className).toBe("card__wrapper border_light");
    });

    test("placeholder", async () => {
      expect(container.className).toBe("card__wrapper border_light");
    });
  });

  describe("password text input", async () => {
    test("id", async () => {
      expect(container.className).toBe("card__wrapper border_light");
    });

    test("name", async () => {
      expect(container.className).toBe("card__wrapper border_light");
    });

    test("type", async () => {
      expect(container.className).toBe("card__wrapper border_light");
    });

    test("required", async () => {
      expect(container.className).toBe("card__wrapper border_light");
    });

    test("placeholder", async () => {
      expect(container.className).toBe("card__wrapper border_light");
    });
  });

  describe("confirm password text input", async () => {
    test("id", async () => {
      expect(container.className).toBe("card__wrapper border_light");
    });

    test("name", async () => {
      expect(container.className).toBe("card__wrapper border_light");
    });

    test("type", async () => {
      expect(container.className).toBe("card__wrapper border_light");
    });

    test("required", async () => {
      expect(container.className).toBe("card__wrapper border_light");
    });

    test("placeholder", async () => {
      expect(container.className).toBe("card__wrapper border_light");
    });
  });

  test("signup button", async () => {
    expect(container.className).toBe("card__wrapper border_light");
  });
});
