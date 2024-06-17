import { DataTestModel } from "../../test/test-models/data.test-model";

export class NodeModel {
  static async get(nodeId) {
    const { TEST_NODE_USERNAME, TEST_NODE_PAGE_ID, TEST_NODE_ELEMENT_ID } =
      process.env;

    if (nodeId === TEST_NODE_USERNAME) {
      const userNodeData = await this.getUserNodeTestData();
      const childNodeData = await this.getChildNodeTestData(TEST_NODE_PAGE_ID);
      userNodeData.meta.childs = [childNodeData, childNodeData, childNodeData];
      return userNodeData;
    } else if (nodeId === TEST_NODE_PAGE_ID) {
      const pageNodeData = await this.getPageNodeTestData(nodeId);
      const childNodeData = await this.getChildNodeTestData(
        TEST_NODE_ELEMENT_ID
      );
      pageNodeData.meta.childs = [childNodeData, childNodeData, childNodeData];

      const authorNodeData = await this.getAuthorTestData();
      pageNodeData.meta.authors = [
        authorNodeData,
        authorNodeData,
        authorNodeData,
      ];

      return pageNodeData;
    } else if (nodeId === TEST_NODE_ELEMENT_ID) {
      const elementNodeData = await this.getElementNodeTestData(nodeId);
      const authorNodeData = await this.getAuthorTestData();

      const parentNodeData = await this.getParentNodeTestData(
        TEST_NODE_PAGE_ID
      );
      elementNodeData.meta.parents = [
        parentNodeData,
        parentNodeData,
        parentNodeData,
      ];

      elementNodeData.meta.author = authorNodeData;
      elementNodeData.title = "element-node-title";

      return elementNodeData;
    }
  }

  static async getNodes(nodeType, quantity) {
    const output = [];
    const nodeData = await this.getUserNodeTestData();
    for (let i = 0; i <= quantity; i++) {
      if (nodeType === "user") output.push(nodeData);
    }
    return output;
  }

  static async getUserNodeTestData() {
    const nodeId = process.env.TEST_NODE_USERNAME;

    const userNodeData = {
      meta: await DataTestModel.getNodeMetaData({ nodeId }),
      ...(await DataTestModel.getNodeMainData({ title: nodeId })),
      content: await DataTestModel.getNodeContentData(),
      image: await DataTestModel.getNodeAvatarData(),
      date: await DataTestModel.getNodeDateData(),
    };

    return userNodeData;
  }

  static async getPageNodeTestData() {
    const nodeId = process.env.TEST_NODE_PAGE_ID;

    const pageNodeData = {
      meta: await DataTestModel.getNodeMetaData({ nodeId }),
      ...(await DataTestModel.getNodeMainData({ title: "page-title" })),
      content: await DataTestModel.getNodeContentData(),
      image: await DataTestModel.getNodeCoverData(),
      date: await DataTestModel.getNodeDateData(),
    };

    return pageNodeData;
  }

  static async getElementNodeTestData() {
    const nodeId = process.env.TEST_NODE_ELEMENT_ID;

    const elementNodeData = {
      meta: await DataTestModel.getNodeMetaData({ nodeId }),
      ...(await DataTestModel.getNodeMainData()),
      content: await DataTestModel.getNodeContentData(),
      image: await DataTestModel.getNodeCoverData(),
      date: await DataTestModel.getNodeDateData(),
    };

    return elementNodeData;
  }

  static async getParentNodeTestData(nodeId) {
    const parentNodeData = {
      meta: {
        id: nodeId,
      },
      ...(await DataTestModel.getNodeMainData()),
      image: await DataTestModel.getNodeCoverData(),
    };

    return parentNodeData;
  }

  static async getChildNodeTestData(nodeId) {
    const childNodeData = {
      meta: {
        id: nodeId,
      },
      ...(await DataTestModel.getNodeMainData()),
      image: await DataTestModel.getNodeCoverData(),
    };

    return childNodeData;
  }

  static async getAuthorTestData() {
    const nodeId = process.env.TEST_NODE_USERNAME;

    const authorNodeData = {
      meta: await DataTestModel.getNodeMetaData({ nodeId }),
      title: "username",
      image: await DataTestModel.getNodeAvatarData(),
    };

    return authorNodeData;
  }
}
