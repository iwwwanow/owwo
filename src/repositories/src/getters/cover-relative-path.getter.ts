export const getCoverRelativePath = ({ coverFullPath, uploadsPath }) => {
  // TODO что это вообще за функция?
  // TODO change it to get uploads req path
  return coverFullPath.replace(new RegExp(uploadsPath), "uploads");
};
