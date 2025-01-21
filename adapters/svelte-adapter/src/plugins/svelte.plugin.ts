import { plugin } from "bun";

await plugin({
  name: "svelte loader",
  async setup(build) {
    const { compile } = await import("svelte/compiler");
    const { preprocess } = await import("svelte/compiler");
    const { typescript } = await import("@forks/svelte-preprocess/src");

    build.onLoad({ filter: /\.svelte$/ }, async ({ path }) => {
      const file = await Bun.file(path).text();

      const { code } = await preprocess(
        file,
        typescript({
          // transpileOnly: true,
          transpileOnly: false,
          reportDiagnostics: false,
          tsconfigFile: "./tsconfig.svelte.json",
          tsconfigDirectory: "./",
          compilerOptions: {},
        }),
        { filename: "svelte-test-filename" },
      );

      console.log(code);

      // const result = await typescript({ transpileOnly: true }).script({
      //   content: file,
      //   filename: "test-filename",
      //   attributes: false,
      // });
      //
      // console.log(result.code);

      // console.log("COMMON MARKUP:");
      // console.log(file);
      //
      // const content = compile(file, {
      //   filename: path,
      //   generate: "ssr",
      // });

      const content = compile(code, {
        filename: path,
        generate: "ssr",
      });

      return {
        contents: content.js.code,
        loader: "ts",
      };
    });
  },
});
