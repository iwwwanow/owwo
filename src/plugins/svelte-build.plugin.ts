import { plugin } from "bun";

export const svelteBuildPlugin = plugin({
  name: "svelteBuildPlugin",
  async setup(build) {
    const { compile } = await import("svelte/compiler");
    build.onLoad({ filter: /\.svelte$/ }, async ({ path }) => {
      console.log("onload");
      const file = await Bun.file(path).text();
      const result = compile(file, {
        filename: path,
        generate: "dom",
      });
      return {
        contents: result.js.code,
        loader: "js",
      };
    });
  },
});
