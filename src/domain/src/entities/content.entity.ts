import type { ContentDto } from "../interfaces/index.js";

export class ContentEntity {
  public html: string;
  public markdown: string;
  public preview: string;

  constructor(content: ContentDto) {
    this.validate();
    Object.assign(content, this);
  }

  private validate() {
    console.log("TODO validate content entity");
  }
}
