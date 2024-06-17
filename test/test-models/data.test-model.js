// import { USER_NODE_TEST_DATA } from "../test-data/user-node.test-data";
// import { PAGE_NODE_TEST_DATA } from "../test-data/page-node.test-data";
// import { ELEMENT_NODE_TEST_DATA } from "../test-data/element-node.test-data";
// import { TEXT_TEST_DATA } from "../test-data/text.test-data";

import { META_TEST_DATA } from "../test-data/meta.test-data";
import { MAIN_TEST_DATA } from "../test-data/main.test-data";
import { CONTENT_TEST_DATA } from "../test-data/content.test-data";
import { DATE_TEST_DATA } from "../test-data/date.test-data";
import {
  IMAGE_TEST_DATA_AVATAR,
  IMAGE_TEST_DATA_COVER,
} from "../test-data/image.test-data";

export class DataTestModel {
  static async getNodeMetaData({ nodeId }) {
    const nodeMetaData = META_TEST_DATA;
    nodeMetaData.id = nodeId;
    return META_TEST_DATA;
  }
  static async getNodeMainData() {
    const nodeMainData = MAIN_TEST_DATA;
    return nodeMainData;
  }
  static async getNodeContentData() {
    return CONTENT_TEST_DATA;
  }
  static async getNodeAvatarData() {
    return IMAGE_TEST_DATA_AVATAR;
  }
  static async getNodeCoverData() {
    return IMAGE_TEST_DATA_COVER;
  }
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
