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
        childs: [],
      },
      ...(await this.getUserNodeMainData()),
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
