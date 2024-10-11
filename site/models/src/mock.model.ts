import { CONTENT_TEST_DATA } from "@test/mock";
import { IMAGE_TEST_DATA_AVATAR } from "@test/mock";
import { IMAGE_TEST_DATA_COVER } from "@test/mock";
import { MAIN_TEST_DATA } from "@test/mock";
import { DATE_TEST_DATA } from "@test/mock";

class MockModel {
  static async getUserNodeData() {
    return {
      content: await this.getContentData(),
      image: await this.getAvatarData(),
      date: await this.getDateData(),
      // TODO move it to initial data
      meta: {
        id: process.env["TEST_NODE_USERNAME"] as string,
        childs: [],
      },
      ...(await this.getUserNodeMainData()),
      title: "node-username-title",
    };
  }

  static async getPageNodeData() {
    return {
      content: await this.getContentData(),
      image: await this.getCoverData(),
      date: await this.getDateData(),
      meta: {
        id: process.env["TEST_NODE_PAGE_ID"] as string,
        childs: [],
      },
      ...(await this.getUserNodeMainData()),
      title: "node-page-title",
    };
  }

  static async getExtendedPageNodeData() {
    return {
      content: await this.getContentData(),
      image: await this.getCoverData(),
      date: await this.getDateData(),
      meta: {
        id: process.env["TEST_NODE_EXTENDED_PAGE_ID"] as string,
        childs: [],
      },
      ...(await this.getUserNodeMainData()),
      title: "node-extended-page-title",
    };
  }

  private static async getUserNodeMainData() {
    return MAIN_TEST_DATA;
  }

  private static async getDateData() {
    return DATE_TEST_DATA;
  }

  private static async getContentData() {
    return CONTENT_TEST_DATA;
  }

  private static async getAvatarData() {
    return IMAGE_TEST_DATA_AVATAR;
  }

  private static async getCoverData() {
    return IMAGE_TEST_DATA_COVER;
  }
}

export { MockModel };
