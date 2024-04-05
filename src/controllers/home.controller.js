import { html } from "@stricjs/app/send";
import { SveltePageView } from "../views/svelte-page.view.js";
import Home from "../components/Home.svelte";

export class HomeController {
  static async renderHomePage() {
    const homeView = new SveltePageView(Home);
    const homePageHtml = await homeView.getPageHtml();
    return html(homePageHtml);
  }
}
