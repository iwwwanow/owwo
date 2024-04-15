import {plugin} from "bun";

await plugin({
	name: "svelteRuntimePlugin",
	async setup(build) {
		const {compile} = await import("svelte/compiler");

		build.onLoad({filter: /\.svelte$/}, async ({path}) => {
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
