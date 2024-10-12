import { getTextFileContentHelper } from "@site/helpers";
import { convertMdHtmlHelper } from "@site/helpers";
import { NodeModel } from "@site/models";
import { MockModel } from "@site/models";
import { ClientModel } from "@site/models";
import { HomePage } from "@site/svelte-templates";
import { AboutPage } from "@site/svelte-templates";
import { LoginPage } from "@site/svelte-templates";
import { SignupPage } from "@site/svelte-templates";
import { NodePage } from "@site/svelte-templates";
import { NodeExtendedPage } from "@site/svelte-templates";
import { ErrorPage } from "@site/svelte-templates";
import { html } from "@stricjs/app/send";
import { Bte } from "bun-template-engine";
import type { CompileResult } from "svelte/compiler";

// TODO to bte docs
const bte = new Bte();
await bte.init();

export class ViewController {
  static async responsePageHtml(svelteComponent: CompileResult, props) {
    console.log(svelteComponent);

    // TODO svetle page type

    const pageHtml = await bte.getPageHtml(svelteComponent, props);
    return html(pageHtml);
  }

  static async renderHomePage() {
    // TODO add conditions to test data render
    const TEST_USERS_QUANTITY = 128;
    // const nodeId = process.env["TEST_NODE_USERNAME"];
    const nodeData = await MockModel.getUserNodeData();
    const users = Array(TEST_USERS_QUANTITY).fill(nodeData);

    const props = { users };

    return ViewController.responsePageHtml(HomePage, props);
  }

  static async renderAboutPage() {
    const client = new ClientModel();

    const ABOUT_FILEPATH = "./README.md";
    const text: { markdown: string; html: string } = {
      markdown: "blank-markdown-about-text",
      html: "blank-html-about-text",
    };

    text.markdown = await getTextFileContentHelper(ABOUT_FILEPATH);
    text.html = await convertMdHtmlHelper(text.markdown);

    const props = { client, text };

    return ViewController.responsePageHtml(AboutPage, props);
  }

  static async renderLoginPage() {
    const client = new ClientModel();
    const props = { client };

    return ViewController.responsePageHtml(LoginPage, props);
  }

  static async renderSignupPage() {
    const client = new ClientModel();
    const props = { client };

    return ViewController.responsePageHtml(SignupPage, props);
  }

  // static async renderNodePage(nodeId: string, options: RenderNodePageOptions) {
  static async renderNodePage(nodeId: string) {
    const client = new ClientModel();
    const node = new NodeModel(nodeId);
    const nodeData = await node.getData();

    // const EDITOR_URL = new URL("", req.url);
    // EDITOR_URL.searchParams.set("editor", true);
    // console.log(`EDITOR URL: ${EDITOR_URL.href}`);
    //
    //
    // const REQUEST_URL = new URL("", req.url);
    // if (REQUEST_URL.searchParams.has("editor", "true")) {
    //   client.isEditor = true;
    //
    //   // client.type = 'creator'
    //   // client.type = 'author'
    //   // client.type = 'pusher'
    //   // client.type = 'viewer'
    // }

    // TODO change node prop name to nodeData prop name
    const props = { client, node: nodeData };

    if (!nodeData?.meta.childs?.length) {
      return ViewController.responsePageHtml(NodeExtendedPage, props);
    }

    return ViewController.responsePageHtml(NodePage, props);
  }

  static async renderErrorPage() {
    const client = new ClientModel();
    const props = { client };
    return ViewController.responsePageHtml(ErrorPage, props);
  }
}
