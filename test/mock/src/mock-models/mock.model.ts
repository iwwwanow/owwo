// import { USER_NODE_TEST_DATA } from "../test-data/user-node.test-data";
// import { PAGE_NODE_TEST_DATA } from "../test-data/page-node.test-data";
// import { ELEMENT_NODE_TEST_DATA } from "../test-data/element-node.test-data";
// import { TEXT_TEST_DATA } from "../test-data/text.test-data";
import { META_TEST_DATA } from "../index.js";
import { MAIN_TEST_DATA } from "../index.js";
import { CONTENT_TEST_DATA } from "../index.js";
import { DATE_TEST_DATA } from "../index.js";
import { IMAGE_TEST_DATA_AVATAR, IMAGE_TEST_DATA_COVER } from "../index.js";

export class DataTestModel {
  static async getNodeDateData() {
    return DATE_TEST_DATA;
  }

  static async getUserNodeData() {
    const userNodeData = await this.getNodeData();
    userNodeData.meta.id = "username";
    userNodeData.title = "test-username";
    return userNodeData;
  }

  static async getPageNodeData() {
    let pageNodeData = await this.getNodeData();
    pageNodeData.meta.id = "page-id";
    pageNodeData.title = "page-title";
    pageNodeData.image = IMAGE_TEST_DATA_COVER;
    return pageNodeData;
  }
}
