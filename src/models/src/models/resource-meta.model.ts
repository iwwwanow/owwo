import type { ResourceVariantEnum } from "../enums/index.js";
import type { PageVariantEnum } from "../enums/index.js";

export class ResourceMetaModel {
  path: string;
  title: string;
  resourceType: ResourceVariantEnum;
  pageType: PageVariantEnum;
  createdAt: Date;
  updatedAt: Date;

  constructor(path: string) {
    this.path = path;
  }

  async init() {
    console.log("TODO meta");

    this.initMetaTitle();
    this.initMetaResourceType();
    this.initMetaPageType();
    this.initMetaCreatedAt();
    this.initMetaUpdatedAt();
  }

  private initMetaTitle() {
    console.log("TODO meta title");
  }

  private initMetaResourceType() {
    console.log("TODO resource type");
  }

  private initMetaPageType() {
    console.log("TODO page type");
  }

  private initMetaCreatedAt() {
    console.log("TODO created at");
  }

  private initMetaUpdatedAt() {
    console.log("TODO updated at");
  }
}
