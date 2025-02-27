import type { ResourceModelOptions } from "../interfaces/index.js";
import { ContentModel } from "./index.js";
import { CoverModel } from "./index.js";
import { ResourceMetaModel } from "./index.js";

export class ResourceModel {
  #path: string;

  #options?: ResourceModelOptions;

  meta: ResourceMetaModel;
  content: ContentModel;
  cover: CoverModel;
  resources?: Array<ResourceModel>;

  constructor(path: string, options: ResourceModelOptions) {
    this.#path = path;
    this.#options = options;

    this.meta.path = path;
  }

  async init() {
    // TODO get uploads path from env

    const meta = new ResourceMetaModel(this.#path);
    const content = new ContentModel(this.#path);
    const cover = new CoverModel(this.#path);

    if (this.#options.recursive) {
      // TODO get all child resource pathes
      // TODO create object for every path with option.recursive = true
      // const results = await Promise.all(components.map(component => component.init()));
    }

    // TODO get child resource pathes and init it; may be do it on repository layer
    await Promise.all([meta.init(), content.init(), cover.init()]);
  }
}
