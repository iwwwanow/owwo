export const getComponentColorStyle = (color?: string): string => {
  const colorStyle = color ? `color: ${color}; border-color: ${color};` : "";
  return colorStyle;
};
