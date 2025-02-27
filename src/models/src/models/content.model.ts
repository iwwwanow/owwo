export class ContentModel {
  #path: string;

  markdown: string;
  html: string;
  preview: string;

  constructor(path: string) {
    this.#path = path;
  }

  async init() {
    console.log("TODO init content");
  }
}
