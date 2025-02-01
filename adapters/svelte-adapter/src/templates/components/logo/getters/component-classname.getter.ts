export const getComponentClassname = (classname?: string): string => {
  const classes = ["logo__container"];
  if (classname) {
    classes.push(classname);
  }
  return classes.join(" ");
};
