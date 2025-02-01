export const getLimitStyle = (limit: number): string => {
  if (limit) {
    const style = `max-height: ${limit}px; overflow: hidden`;
    return style;
  }
};
