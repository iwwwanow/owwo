import { nodeDataMock } from "@test/mock";
import { classnameMock } from "@test/mock";
import { expect } from "bun:test";
import { describe } from "bun:test";
import { test } from "bun:test";

import { NodeInfo } from "./node-info.component";

describe("ui, node info", async () => {
  const markup = await NodeInfo({
    nodeData: nodeDataMock,
  });
  // nodeData: NodeDataType;
  //
  // isTitleNeeded?: boolean;
  // isDescriptionNeeded?: boolean;
  //
  // id?: string;
  // title?: string;
  // image?: NodeImageType;
  // author?: NodeDataType;
  // authors?: Array<NodeDataType>;
  // parents?: Array<NodeDataType>;
  // description?: NodeContentType;
  // date?: NodeDateType;
});
