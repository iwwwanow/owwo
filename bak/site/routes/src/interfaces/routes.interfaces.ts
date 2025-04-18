export type Handler = (req: Request) => Response | Promise<Response>;

type AppMethod = "get" | "post" | "put" | "delete";

export type App = {
  [K in AppMethod]: (path: string, handler: Handler) => any;
};
