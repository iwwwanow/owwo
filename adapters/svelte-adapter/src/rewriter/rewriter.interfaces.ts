export type SvelteComponentType = {
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

export type PropsType = Record<string, any>;
