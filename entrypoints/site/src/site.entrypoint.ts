// import { BunHttpServerAdapter } from "@adapters/bun-http-server";
// import { KitajsAdapter } from "@adapters/kitajs";
// import { SvelteAdapter } from "@adapters/svelte";
// import { SiteCoreContext } from "@contexts/site-core";
//
// const siteCoreContext = new SiteCoreContext({
//   HttpServerContext: BunHttpServerAdapter,
//   // SiteViewContext: SvelteAdapter,
//   SiteViewContext: KitajsAdapter,
// });
//
// siteCoreContext.init();
import { readdir } from "node:fs/promises";

const uploadsPath = process.env.UPLOADS_PATH;

const dirs = await readdir(uploadsPath);
const files = await readdir(`${uploadsPath}/${dirs[0]}`);
console.log(files);
