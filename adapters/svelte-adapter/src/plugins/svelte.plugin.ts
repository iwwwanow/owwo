import { plugin } from "bun";

await plugin({
  name: "svelte loader",
  async setup(build) {
    const { compile } = await import("svelte/compiler");
    const { sveltePreprocess } = await import("svelte-preprocess");

    // when a .svelte file is imported...
    build.onLoad({ filter: /\.svelte$/ }, async ({ path }) => {
      // read and compile it with the Svelte compiler

      const file = await Bun.file(path).text();
      const content = compile(file, {
        filename: path,
        generate: "ssr",
      });

      const result = sveltePreprocess({
        typescript: {},
      });
      const markup = await result.markup({ content: file, filename: path });
      const script = await result.script({
        content: file,
        filename: path,
        attributes: false,
        markup,
      });
      // console.log(script);
      // const style = await result.style({
      //   content: file,
      //   filename: path,
      //   attributes: false,
      //   markup,
      // });

      // and return the compiled source code as "js"
      return {
        contents: content.js.code,
        loader: "ts",
      };
    });
  },
});
