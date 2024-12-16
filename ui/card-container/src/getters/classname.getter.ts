export const getClassName = (className?: string) => {
  className = `card-container${className ? " " + className : ""}`;
  return className;
};
