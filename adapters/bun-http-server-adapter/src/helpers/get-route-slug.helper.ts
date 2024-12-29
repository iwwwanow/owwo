export const getRouteSlugsHelper = (route: string): Array<string> | null => {
  const re = /\:\w+/g;
  return route.match(re);
};
