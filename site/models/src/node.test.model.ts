import { NODE_INITIAL_DATA } from "./node.test.model.constants";
import type { NodeDataType } from "./node.test.model.interfaces";
import type { NodeTypes } from "./node.test.model.interfaces";

// TODO make parent class for node test model and node model
export class NodeTestModel {
  type: NodeTypes;
  nodeId: string;
  data: NodeDataType = NODE_INITIAL_DATA;

  constructor({ nodeId }: { nodeId: string }) {
    this.nodeId = nodeId;
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

    throw new Error("nodeid does not match to any test route");
  }

  private async initPageNodeData() {}

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
