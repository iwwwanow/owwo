import { MockModel } from "./mock.model";

export class NodeModel {
  nodeId: string;
  testNodeIds: Array<string>;
  testNodeUsername: string;
  testNodePageId: string;
  testNodeElementId: string;

  constructor(nodeId: string) {
    this.nodeId = nodeId;

    // TODO move it to helpers or utils or application constants
    // @globals/constants maybe
    const { TEST_NODE_USERNAME, TEST_NODE_PAGE_ID, TEST_NODE_ELEMENT_ID } =
      process.env;

    // TODO check env function on app launch
    // TODO зачем тестовые функции и переменные в конструкторе этого класса?
    // 	нужно их вынести внаружу

    this.testNodeUsername = TEST_NODE_USERNAME as string;
    this.testNodePageId = TEST_NODE_PAGE_ID as string;
    this.testNodeElementId = TEST_NODE_ELEMENT_ID as string;

    this.testNodeIds = [
      this.testNodeUsername,
      this.testNodePageId,
      this.testNodeElementId,
    ];
  }

  async getData() {
    if (this.isTestData) {
      return await this.getTestData();
    }

    return await this.getDbData();
  }

  private get isTestData() {
    if (
      process.env.NODE_ENV === "developement" &&
      this.testNodeIds.includes(this.nodeId)
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

    // TODO to consts
    const PAGE_QUANTITY = 7;
    const AUTHORS_QUANTITY = 3;
    const PARENTS_QUANTITY = 3;

    const nodeUserData = await MockModel.getUserNodeData();
    const nodePageData = await MockModel.getPageNodeData();

    if (this.nodeId === this.testNodeUsername) {
      nodeData = nodeUserData;
      nodeData.meta.childs = Array(PAGE_QUANTITY).fill(nodePageData);
    } else if (this.nodeId === this.testNodePageId) {
      nodeData = nodePageData;
      nodeData.meta.authors = Array(AUTHORS_QUANTITY).fill(nodeUserData);
      nodeData.meta.childs = Array(PAGE_QUANTITY).fill(nodePageData);

      // TODO render siblings
      // TODO render extended page

      nodeData.meta.siblings = Array(PAGE_QUANTITY).fill(nodePageData);
      nodeData.meta.parents = Array(PARENTS_QUANTITY).fill(nodeUserData);
    } else if (this.nodeId === TEST_NODE_ELEMENT_ID) {
      // TODO
    }

    return nodeData;
  }
}
