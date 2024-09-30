import { DataTestModel } from "@test/mock";
import { META_TEST_DATA } from "@test/mock";
import { MAIN_TEST_DATA } from "@test/mock";
import { CONTENT_TEST_DATA } from "@test/mock";
import { IMAGE_TEST_DATA_AVATAR } from "@test/mock";
import { IMAGE_TEST_DATA_COVER } from "@test/mock";
import { DATE_TEST_DATA } from "@test/mock";

import { NODE_INITIAL_DATA } from "./node.test.model.constants";
import type { NodeDataType } from "./node.test.model.interfaces";
import type { NodeTypes } from "./node.test.model.interfaces";

// TODO make parent class for node test model and node model
export class NodeTestModel {
  type: NodeTypes;
  data: NodeDataType = NODE_INITIAL_DATA;

  constructor(nodeId: string) {
    this.data.meta.id = nodeId;
    this.type = this.getNodeType(nodeId);
  }

  private getNodeType(nodeId: string) {
    const { TEST_NODE_USERNAME, TEST_NODE_PAGE_ID, TEST_NODE_ELEMENT_ID } =
      process.env;

    // TODO switch case
    if (nodeId === TEST_NODE_USERNAME) return "userNode";
    else if (nodeId === TEST_NODE_PAGE_ID) return "pageNode";
    else if (nodeId === TEST_NODE_ELEMENT_ID) return "elementNode";

    throw new Error("nodeid is not match to any test route");
  }

  private async initUserNodeData() {
    this.data.content = await this.getUserNodeContentData();
    this.data.image = await this.getAvatarData();
    this.data.date = await this.getDateData();
    this.data = { ...this.data, ...(await this.getUserNodeMainData()) };
    return;
  }

  private async initPageNodeData() {
    this.data.content = await this.getUserNodeContentData();
    this.data.image = await this.getCoverData();
    this.data.date = await this.getDateData();
    this.data = { ...this.data, ...(await this.getUserNodeMainData()) };
    return;
  }

  async initData() {
    if (this.type === "userNode") return await this.initUserNodeData();
    else if (this.type === "pageNode") return await this.initPageNodeData();
    else if (this.type === "elementNode") return "elementnodedata";

    throw new Error("node type is not exist on getData function");
  }

  private async getUserNodeMainData() {
    return MAIN_TEST_DATA;
  }

  private async getUserNodeContentData() {
    return CONTENT_TEST_DATA;
  }

  private async getAvatarData() {
    return IMAGE_TEST_DATA_AVATAR;
  }

  private async getCoverData() {
    return IMAGE_TEST_DATA_COVER;
  }

  private async getDateData() {
    return DATE_TEST_DATA;
  }

  private async getPageNodeData() {
    //     const pageNodeData = await this.getPageNodeTestData(nodeId);
    //     const childNodeData =
    //       await this.getChildNodeTestData(TEST_NODE_ELEMENT_ID);
    //     pageNodeData.meta.childs = [childNodeData, childNodeData, childNodeData];
    //
    //     const authorNodeData = await this.getAuthorTestData();
    //     pageNodeData.meta.authors = [
    //       authorNodeData,
    //       authorNodeData,
    //       authorNodeData,
    //     ];
    //
    //     return pageNodeData;
  }

  // static async getPageNodeTestData() {
  //   const nodeId = process.env.TEST_NODE_PAGE_ID;
  //
  //   const pageNodeData = {
  //     meta: await DataTestModel.getNodeMetaData({ nodeId }),
  //     ...(await DataTestModel.getNodeMainData({ title: "page-title" })),
  //     content: await DataTestModel.getNodeContentData(),
  //     image: await DataTestModel.getNodeCoverData(),
  //     date: await DataTestModel.getNodeDateData(),
  //   };
  //
  //   return pageNodeData;
  // }

  private async getElementNodeData() {
    //     const elementNodeData = await this.getElementNodeTestData(nodeId);
    //
    //     const parentNodeData =
    //       await this.getParentNodeTestData(TEST_NODE_PAGE_ID);
    //     elementNodeData.meta.parents = [
    //       parentNodeData,
    //       parentNodeData,
    //       parentNodeData,
    //     ];
    //
    //     const authorNodeData = await this.getAuthorTestData();
    //     elementNodeData.meta.author = authorNodeData;
    //
    //     elementNodeData.title = "element-node-title";
    //
    //     const siblingNodeData =
    //       await this.getSiblingNodeData(TEST_NODE_ELEMENT_ID);
    //     elementNodeData.meta.siblings = [
    //       siblingNodeData,
    //       siblingNodeData,
    //       siblingNodeData,
    //     ];
    //
    //     elementNodeData.meta.id = TEST_NODE_ELEMENT_ID;
    //
    //     return elementNodeData;
  }

  // static async getElementNodeTestData() {
  //   const nodeId = process.env.TEST_NODE_ELEMENT_ID;
  //
  //   const elementNodeData = {
  //     meta: await DataTestModel.getNodeMetaData({ nodeId }),
  //     ...(await DataTestModel.getNodeMainData()),
  //     content: await DataTestModel.getNodeContentData(),
  //     image: await DataTestModel.getNodeCoverData(),
  //     date: await DataTestModel.getNodeDateData(),
  //   };
  //
  //   return elementNodeData;
  // }

  //
  // static async getParentNodeTestData(nodeId) {
  //   const parentNodeData = {
  //     meta: {
  //       id: nodeId,
  //     },
  //     ...(await DataTestModel.getNodeMainData()),
  //     image: await DataTestModel.getNodeCoverData(),
  //   };
  //
  //   return parentNodeData;
  // }
  //
  // static async getChildNodeTestData(nodeId) {
  //   const childNodeData = {
  //     meta: {
  //       id: nodeId,
  //     },
  //     ...(await DataTestModel.getNodeMainData()),
  //     image: await DataTestModel.getNodeCoverData(),
  //   };
  //
  //   return childNodeData;
  // }
  //
  // static async getSiblingNodeData(nodeId) {
  //   const siblingNodeData = {
  //     meta: {
  //       id: nodeId,
  //     },
  //     ...(await DataTestModel.getNodeMainData()),
  //     image: await DataTestModel.getNodeCoverData(),
  //   };
  //
  //   return siblingNodeData;
  // }
  //
  // static async getAuthorTestData() {
  //   const nodeId = process.env.TEST_NODE_USERNAME;
  //
  //   const authorNodeData = {
  //     meta: await DataTestModel.getNodeMetaData({ nodeId }),
  //     title: "username",
  //     image: await DataTestModel.getNodeAvatarData(),
  //   };
  //
  //   return authorNodeData;
  // }
}
