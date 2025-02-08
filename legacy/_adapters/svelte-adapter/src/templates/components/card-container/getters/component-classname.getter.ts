export const getComponentClassname = (classname: string): string => {
  const componentClassname = `card-container${classname ? " " + classname : ""}`;
  return componentClassname;
};
