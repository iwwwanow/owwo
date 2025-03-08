export const getUploadsReqPath = ({ fullPath, uploadsPath }): string => {
  return fullPath.replace(new RegExp(uploadsPath), "uploads");
};
