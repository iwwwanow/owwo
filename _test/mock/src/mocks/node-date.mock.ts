import type { NodeDateType } from "@site/interfaces";

const date_creation = new Date(1998, 7, 16);
const date_now = new Date(Date.now());

export const nodeDateMock: NodeDateType = {
  creation: date_creation,
  last: date_now,
};
