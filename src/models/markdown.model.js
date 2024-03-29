import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

export class MarkdownModel {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async getHtml() {
    const { filePath } = this;
    if (filePath) {
      const file = Bun.file(filePath);
      this.markdownString = await file.text();
      this.htmlString = await marked.parse(this.markdownString);
      return this.htmlString;
    } else throw new Error("need filepath to get html from markdown");
  }
}
