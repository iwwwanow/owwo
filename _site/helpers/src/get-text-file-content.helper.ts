export const getTextFileContentHelper = async (
  filepath: string,
): Promise<string> => {
  const textFile = Bun.file(filepath);
  const textMdString = await textFile.text();
  return textMdString;
};
