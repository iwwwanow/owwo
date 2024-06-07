// import { USER_NODE_TEST_DATA } from "../test-data/user-node.test-data";
// import { PAGE_NODE_TEST_DATA } from "../test-data/page-node.test-data";
// import { ELEMENT_NODE_TEST_DATA } from "../test-data/element-node.test-data";
// import { TEXT_TEST_DATA } from "../test-data/text.test-data";

import { META_TEST_DATA } from "../test-data/meta.test-data";
import { MAIN_TEST_DATA } from "../test-data/main.test-data";
import { DATE_TEST_DATA } from "../test-data/date.test-data";
import {
  IMAGE_TEST_DATA_AVATAR,
  IMAGE_TEST_DATA_COVER,
} from "../test-data/image.test-data";

export class DataTestModel {
  static async getNodeData() {
    // const nodeData = NODE_TEST_DATA;

    const nodeData = Object.assign(
      META_TEST_DATA,
      MAIN_TEST_DATA,
      { image: IMAGE_TEST_DATA_AVATAR },
      { date: DATE_TEST_DATA }
    );

    // nodeData.date = DATE_TEST_DATA;
    // HTML(ALLOWS JS) OR MARKDOWN ONLY
    // nodeData.content = CONTENT_TEST_DATA;

    return nodeData;
  }

  static async getNodesData(quantity) {
    const nodes = [];
    for (let i = 0; i < quantity; i++) nodes.push(await this.getNodeData());

    return nodes;
  }

  // static async getUserNodeData() {
  //   const userNodeData = NODE_TEST_DATA;
  //   userNodeData.image = IMAGE_TEST_DATA_AVATAR;
  //   // const userNode = USER_NODE_TEST_DATA;
  //   //
  //   // userNode.date = DATE_TEST_DATA;
  //   // userNode.text = TEXT_TEST_DATA;
  //   //
  //   // const userNodePage = await this.getPageNodeData();
  //   // userNode.pages = [userNodePage, userNodePage, userNodePage];
  //
  //   return userNodeData;
  // }

  // static async getUserNodesData(count) {
  //   const userNodes = [];
  //   for (let i = 0; i < count; i++)
  //     userNodes.push(await this.getUserNodeData());
  //
  //   return userNodes;
  // }
  //
  // static async getPageNodeData() {
  //   const pageNode = PAGE_NODE_TEST_DATA;
  //
  //   pageNode.date = DATE_TEST_DATA;
  //   pageNode.text = TEXT_TEST_DATA;
  //
  //   // TODO sort users by type on db query
  //   pageNode.authors = [
  //     {
  //       ...USER_NODE_TEST_DATA,
  //       // username: "EFFECTIVNAYARABOTA1",
  //       username: "ChannelOfTheCultOfTheGoddessOfFlowersgg",
  //       // username: "IIChannelOfTheCultOfTheGoddessOfFlowers",
  //       type: "owner",
  //     },
  //     {
  //       ...USER_NODE_TEST_DATA,
  //       type: "editor",
  //     },
  //     {
  //       ...USER_NODE_TEST_DATA,
  //       type: "pusher",
  //     },
  //     {
  //       ...USER_NODE_TEST_DATA,
  //       // only on closed page
  //       type: "viewer",
  //     },
  //   ];
  //
  //   const pageNodeElement = await this.getElementNodeData();
  //   pageNode.elements = [pageNodeElement, pageNodeElement, pageNodeElement];
  //
  //   return pageNode;
  // }
  //
  // static async getPageNodesData(quantity) {
  //   const pageNodes = [];
  //   for (let i = 0; i < quantity; i++) pageNodes.push(this.getPageNodesData());
  //   return pageNodes;
  // }
  //
  // static async getElementNodeData() {
  //   const elementNode = ELEMENT_NODE_TEST_DATA;
  //
  //   elementNode.user = USER_NODE_TEST_DATA;
  //   elementNode.date = DATE_TEST_DATA;
  //   elementNode.text = TEXT_TEST_DATA;
  //   // TODO если не могу найти следующий элемент, предлагать следующую страницу
  //   // ИЛИ возвращение в профиль
  //   elementNode.navigationElements = {
  //     prevElement: ELEMENT_NODE_TEST_DATA,
  //     nextElement: ELEMENT_NODE_TEST_DATA,
  //   };
  //
  //   elementNode.pages = [
  //     PAGE_NODE_TEST_DATA,
  //     PAGE_NODE_TEST_DATA,
  //     PAGE_NODE_TEST_DATA,
  //   ];
  //
  //   return elementNode;
  // }
  //
  // static async getElementNodesData(quantity) {
  //   const elementNodes = [];
  //   for (let i = 0; i < quantity; i++)
  //     elementNodes.push(this.getElementNodesData());
  //   return elementNodes;
  // }
}
