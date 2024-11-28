import type { NodeDataType } from "@site/interfaces";

import { blobMock } from "./blob.mock";
import { nodeContentMock } from "./node-content.mock";
import { nodeMetaMock } from "./node-meta.mock";
import { titleMock } from "./title.mock";

export const nodeDataMock: NodeDataType = {
  title: titleMock,
  description: nodeContentMock,
  blob: blobMock,
  meta: nodeMetaMock,
};
