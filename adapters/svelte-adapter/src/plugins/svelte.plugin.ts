import { plugin } from "bun";

await plugin({
  name: "svelte loader",
  async setup(build) {
    const { compile } = await import("svelte/compiler");
    const { sveltePreprocess } = await import("svelte-preprocess");

    build.onLoad({ filter: /\.svelte$/ }, async ({ path }) => {
      const file = await Bun.file(path).text();

      const preprocessResult = sveltePreprocess({
        typescript: {},
      });

      const preprocessMarup = (
        await preprocessResult.markup({ content: file, filename: path })
      ).code;

      console.log(preprocessMarup);

      const content = compile(preprocessMarup, {
        filename: path,
        generate: "ssr",
      }).js.code;

      // const result = sveltePreprocess({
      //   typescript: {},
      // });
      // const markup = await result.markup({ content: file, filename: path });
      // const script = await result.script({
      //   content: file,
      //   filename: path,
      //   attributes: false,
      //   markup,
      // });
      // console.log(script);
      // const style = await result.style({
      //   content: file,
      //   filename: path,
      //   attributes: false,
      //   markup,
      // });

      // and return the compiled source code as "js"
      return {
        contents: content,
        loader: "ts",
      };
    });
  },
});
