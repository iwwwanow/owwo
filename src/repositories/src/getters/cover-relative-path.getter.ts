export const getCoverRelativePath = ({ coverFullPath, uploadsPath }) => {
  // TODO что это вообще за функция?
  return coverFullPath.replace(new RegExp(uploadsPath), "uploads");
};
