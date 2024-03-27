import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

export class Markdown {
  constructor({ filePath, markdownString }) {
    this.filePath = filePath;
    this.markdownString = markdownString;
  }

  async getHtml() {
    const { filePath } = this;
    if (filePath) {
      const file = Bun.file(filePath);
      this.markdownString = await file.text();
      this.htmlString = await marked.parse(this.markdownString);
      return this.htmlString;
    }
  }
}
