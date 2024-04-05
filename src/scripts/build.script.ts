import { svelteBuildPlugin } from "../plugins/svelte-build.plugin";

await Bun.build({
  entrypoints: ["./src/scripts/index.script.tsx"],
  outdir: "./build",
  plugins: [svelteBuildPlugin],
});
