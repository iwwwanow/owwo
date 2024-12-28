export const checkSlugHelper = (route: string): boolean => {
  const re = /\S+\/:\S+/;
  return re.test(route);
};
