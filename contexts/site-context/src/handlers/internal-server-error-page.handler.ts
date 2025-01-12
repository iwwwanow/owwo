export const internalServerErrorPageHandler = (_req: Request) => {
  return new Response("internal server error");
};
