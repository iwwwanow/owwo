import type { ContentDto } from "../interfaces/index.js";

export class ContentEntity {
  public html: string;
  public markdown: string;
  public preview: string;

  static PREVIEW_SYMBOLS_LIMIT = 64;

  constructor(content: ContentDto) {
    this.validate();
    Object.assign(this, content);
  }

  private validate() {
    console.log("TODO validate content entity");
  }
}
