export const getStyle = (limit?: number) => {
  if (limit) {
    return `max-height: ${limit}px; overflow: hidden;`;
  }
  return "";
};
