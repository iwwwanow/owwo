type SvelteComponentType = {
  render: RenderType;
  $$render: VoidFunction;
};

// TODO props type
// как понять, какие пропсы нужны компоненту?
type RenderType = (props: PropsType) => RenderReturnType;

type RenderReturnType = {
  head: string;
  html: string;
  css: {
    code: string;
  };
};

type PropsType = Record<string, any>;

export type { SvelteComponentType };
export type { PropsType };
