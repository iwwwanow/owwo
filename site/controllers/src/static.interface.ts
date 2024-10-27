import type { BunFile } from "bun";

type SendFileProps = {
  param: string;
};

type SendFileReturnType = Promise<BunFile>;

export type { SendFileProps };
export type { SendFileReturnType };
