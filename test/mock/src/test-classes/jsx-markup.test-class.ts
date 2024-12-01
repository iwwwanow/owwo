import { expect } from "bun:test";

type JsxMarkupTestConstructorType = {
  requiredComponentString: string;
  renderedComponentString: string;
  debug?: boolean;
};

export class JsxMarkupTest {
  requiredComponentString: string;
  renderedComponentString: string;
  debug?: boolean;

  constructor({
    requiredComponentString,
    renderedComponentString,
    debug: debug = false,
  }: JsxMarkupTestConstructorType) {
    this.requiredComponentString = requiredComponentString;
    this.renderedComponentString = renderedComponentString;
    this.debug = debug;
  }

  process() {
    if (console) {
      console.log(this.renderedComponentString);
    }

    expect(this.renderedComponentString).toBe(this.requiredComponentString);
  }
}
