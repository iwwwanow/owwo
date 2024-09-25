export const getTextFileContentHelper = async (filepath) => {
  const textFile = Bun.file(filepath);
  const textMdString = await textFile.text();
  return textMdString;
};
