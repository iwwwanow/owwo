import { html } from "@stricjs/app/send";
import { SveltePageView } from "../views/svelte-page.view.js";

import { NodeModel } from "../models/node.model.js";

import HomePage from "../svelte/pages/home.page.svelte";
import AboutPage from "../svelte/pages/about.page.svelte";
import LoginPage from "../svelte/pages/login.page.svelte";
import SignupPage from "../svelte/pages/signup.page.svelte";

import NodePage from "../svelte/pages/node.page.svelte";
import NodeExtendedPage from "../svelte/pages/node-extended.page.svelte";

import { getTextFileContentHelper } from "../helpers/get-text-file-content.helper.js";
import { convertMdHtmlHelper } from "../helpers/convert-md-html.helper.js";

export class ViewController {
  static async responsePageHtml(componentName, props) {
    const pageView = new SveltePageView(componentName, props);
    const pageHtml = await pageView.getPageHtml();

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

  static async renderNodePage({ params }) {
    const { nodeId } = params;
    const nodeData = await NodeModel.get(nodeId);
    const props = { node: nodeData };
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
