import { PAGE_QUANTITY } from "./mock.constants";
import { AUTHORS_QUANTITY } from "./mock.constants";
import { PARENTS_QUANTITY } from "./mock.constants";
import { MockModel } from "./mock.model";

export class NodeModel {
  nodeId: string;
  testNodeIds?: Record<string, string>;

  constructor(nodeId: string) {
    this.nodeId = nodeId;

    if (process.env.NODE_ENV === "developement") {
      this.initTestData();
    }
  }

  async getData() {
    if (this.isTestData) {
      return await this.getTestData();
    }

    return await this.getDbData();
  }

  private initTestData() {
    // TODO move it to helpers or utils or application constants
    // @globals/constants maybe
    const {
      TEST_NODE_USERNAME: testNodeUsername,
      TEST_NODE_PAGE_ID: testNodePageId,
      TEST_NODE_EXTENDED_PAGE_ID: testNodeElementId,
    } = process.env;

    this.testNodeIds = {
      testNodeUsername,
      testNodePageId,
      testNodeElementId,
    };
  }

  private get isTestData() {
    if (!this.testNodeIds) {
      throw new Error("testNodeIds not provided");
    }

    if (
      process.env.NODE_ENV === "developement" &&
      Object.values(this.testNodeIds).includes(this.nodeId)
    ) {
      return true;
    }
    return false;
  }

  private async getDbData() {
    console.log(`getDbData for ${this.nodeId}`);
  }

  private async getTestData() {
    let nodeData;

    const nodeUserData = await MockModel.getUserNodeData();
    const nodePageData = await MockModel.getPageNodeData();
    const nodeExtendedPageData = await MockModel.getExtendedPageNodeData();

    if (this.nodeId === this.testNodeIds.testNodeUsername) {
      nodeData = nodeUserData;
      nodeData.meta.childs = Array(PAGE_QUANTITY).fill(nodePageData);
    } else if (this.nodeId === this.testNodeIds.testNodePageId) {
      nodeData = nodePageData;
      nodeData.meta.authors = Array(AUTHORS_QUANTITY).fill(nodeUserData);
      nodeData.meta.childs = [
        ...Array(PAGE_QUANTITY).fill(nodePageData),
        ...Array(PAGE_QUANTITY).fill(nodeExtendedPageData),
      ];

      // TODO render siblings
      // TODO render extended page

      nodeData.meta.siblings = Array(PAGE_QUANTITY).fill(nodePageData);
      nodeData.meta.parents = Array(PARENTS_QUANTITY).fill(nodeUserData);
    } else if (this.nodeId === this.testNodeIds.testNodeElementId) {
      nodeData = nodeExtendedPageData;
      nodeData.meta.siblings = Array(PAGE_QUANTITY).fill(nodeExtendedPageData);
      nodeData.meta.parents = Array(PARENTS_QUANTITY).fill(nodePageData);
      nodeData.meta.author = nodeUserData;
    }

    return nodeData;
  }
}
