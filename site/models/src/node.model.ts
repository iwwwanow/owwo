import { PAGE_QUANTITY } from "@site/constants";
import { AUTHORS_QUANTITY } from "@site/constants";
import { PARENTS_QUANTITY } from "@site/constants";
import type { NodeDataType } from "@site/interfaces";

import { MockModel } from "./mock.model";

export class NodeModel {
  nodeId: string;

  testNodeIds?: {
    testNodeUsername: string;
    testNodePageId: string;
    testNodeExtendedPageId: string;
  };

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
    const {
      TEST_NODE_USERNAME,
      TEST_NODE_PAGE_ID,
      TEST_NODE_EXTENDED_PAGE_ID,
    } = process.env;

    const testNodeUsername = TEST_NODE_USERNAME as string;
    const testNodePageId = TEST_NODE_PAGE_ID as string;
    const testNodeExtendedPageId = TEST_NODE_EXTENDED_PAGE_ID as string;

    this.testNodeIds = {
      testNodeUsername,
      testNodePageId,
      testNodeExtendedPageId,
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
    if (!this.testNodeIds) throw new Error("testNodeIds is undefined");

    let nodeData: NodeDataType | null = null;

    const nodeUserData = await MockModel.getUserNodeData();
    const nodePageData = await MockModel.getPageNodeData();
    const nodeExtendedPageData = await MockModel.getExtendedPageNodeData();

    if (this.nodeId === this.testNodeIds["testNodeUsername"]) {
      nodeData = nodeUserData;
      nodeData.meta.childs = Array(PAGE_QUANTITY).fill(nodePageData);
    } else if (this.nodeId === this.testNodeIds["testNodePageId"]) {
      nodeData = nodePageData;

      nodeData.meta.authors = Array(AUTHORS_QUANTITY).fill(nodeUserData);

      nodeData.meta.childs = [
        ...Array(PAGE_QUANTITY).fill(nodePageData),
        ...Array(PAGE_QUANTITY).fill(nodeExtendedPageData),
      ];

      // TODO render siblings
      // TODO render extended page
      // TODO meybe объединить authors in single author array?

      nodeData.meta.siblings = Array(PAGE_QUANTITY).fill(nodePageData);
      nodeData.meta.parents = Array(PARENTS_QUANTITY).fill(nodeUserData);
    } else if (this.nodeId === this.testNodeIds["testNodeExtendedPageId"]) {
      nodeData = nodeExtendedPageData;
      nodeData.meta.siblings = Array(PAGE_QUANTITY).fill(nodeExtendedPageData);
      nodeData.meta.parents = Array(PARENTS_QUANTITY).fill(nodePageData);
      nodeData.meta.author = nodeUserData;
    }

    if (!nodeData) {
      throw new Error("nodeData is not defined");
    }

    return nodeData;
  }
}
