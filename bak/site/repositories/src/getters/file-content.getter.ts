import { readFile } from "node:fs/promises";

export const getFileContent = async (filePath: string): Promise<string> => {
  const file = await readFile(filePath);
  const text = file.toString("utf8");
  return text;
};
