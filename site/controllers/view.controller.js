import { html } from "@stricjs/app/send";
// import { SveltePageView } from "../views/svelte-page.view.js";

import { Bte } from "bun-template-engine";

import { NodeModel } from "../models/node.model.js";
import { ClientModel } from "../models/client.model.js";

import HomePage from "../svelte/pages/home.page.svelte";
import AboutPage from "../svelte/pages/about.page.svelte";
import LoginPage from "../svelte/pages/login.page.svelte";
import SignupPage from "../svelte/pages/signup.page.svelte";

import NodePage from "../svelte/pages/node.page.svelte";
import NodeExtendedPage from "../svelte/pages/node-extended.page.svelte";

import { getTextFileContentHelper } from "../helpers/get-text-file-content.helper.js";
import { convertMdHtmlHelper } from "../helpers/convert-md-html.helper.js";

// TODO to bte docs
const bte = new Bte();
await bte.init();

export class ViewController {
  static async responsePageHtml(svelteComponent, props) {
    const pageHtml = await bte.getPageHtml(svelteComponent, props);
    return html(pageHtml);
  }

  static async renderHomePage() {
    const users = await NodeModel.getNodes("user", 32);
    const props = { users };
    return ViewController.responsePageHtml(HomePage, props);
  }

  static async renderAboutPage() {
    const ABOUT_FILEPATH = "./README.md";
    const text = {};
    text.markdown = await getTextFileContentHelper(ABOUT_FILEPATH);
    text.html = await convertMdHtmlHelper(text.markdown);
    const props = { text };
    return ViewController.responsePageHtml(AboutPage, props);
  }

  static async renderLoginPage() {
    return ViewController.responsePageHtml(LoginPage);
  }

  static async renderSignupPage() {
    return ViewController.responsePageHtml(SignupPage);
  }

  static async renderNodePage(c) {
    const { req } = c;

    const EDITOR_URL = new URL("", req.url);
    EDITOR_URL.searchParams.set("editor", true);
    console.log(`EDITOR URL: ${EDITOR_URL.href}`);

    const client = new ClientModel();

    const REQUEST_URL = new URL("", req.url);
    if (REQUEST_URL.searchParams.has("editor", "true")) {
      client.isEditor = true;

      // client.type = 'creator'
      // client.type = 'author'
      // client.type = 'pusher'
      // client.type = 'viewer'
    }

    const { params } = c;
    const { nodeId } = params;

    const nodeData = await NodeModel.get(nodeId);

    const props = { client, node: nodeData };
    if (nodeData.meta.childs?.length) {
      return ViewController.responsePageHtml(NodePage, props);
    } else {
      return ViewController.responsePageHtml(NodeExtendedPage, props);
    }
  }

  static async renderErrorPage() {
    return ViewController.responsePageHtml(Error);
  }
}
