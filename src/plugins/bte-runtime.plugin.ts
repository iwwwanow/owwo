import { plugin } from "bun";

// const BTE_PATH = "svelte/compiler";
const BTE_PATH = "../../../../.13_bun-template-engine/src/compiler/index.js";

await plugin({
  name: "svelteRuntimePlugin",
  async setup(build) {
    const { compile } = await import(BTE_PATH);

    build.onLoad({ filter: /\.svelte$/ }, async ({ path }) => {
      const file = await Bun.file(path).text();
      const result = compile(file, {
        filename: path,
        generate: "ssr",
      });

      const jsString = result.js.code;

      return {
        contents: jsString,
        loader: "js",
      };
    });
  },
});
