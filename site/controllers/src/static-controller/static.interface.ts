import type { BunFile } from "bun";

type SendFileProps = {
  filepath: string;
};

type SendFileReturnType = Promise<BunFile>;

export type { SendFileProps };
export type { SendFileReturnType };
