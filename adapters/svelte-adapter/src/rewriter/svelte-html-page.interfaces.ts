export type SvelteComponentType = {
  render: <P>(props?: P) => RenderReturnType;
};

type RenderReturnType = {
  head: string;
  html: string;
  css: {
    code: string;
  };
};
